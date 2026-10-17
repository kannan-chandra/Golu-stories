import fs from "node:fs/promises";
import path from "node:path";

const FRONT_MATTER_BOUNDARY = "---";

function parseScalar(value, filePath, key) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch (error) {
      throw new Error(`${filePath}: invalid quoted value for ${key}: ${error.message}`);
    }
  }
  return trimmed;
}

function parseFrontMatter(source, filePath) {
  const lines = source.replaceAll("\r\n", "\n").split("\n");
  if (lines[0] !== FRONT_MATTER_BOUNDARY) {
    throw new Error(`${filePath}: story must begin with YAML front matter`);
  }

  const end = lines.indexOf(FRONT_MATTER_BOUNDARY, 1);
  if (end === -1) throw new Error(`${filePath}: YAML front matter is not closed`);

  const metadata = {};
  for (const line of lines.slice(1, end)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) throw new Error(`${filePath}: invalid front matter line: ${line}`);
    const key = line.slice(0, separator).trim();
    if (!key) throw new Error(`${filePath}: front matter key cannot be empty`);
    if (Object.hasOwn(metadata, key)) throw new Error(`${filePath}: duplicate front matter key: ${key}`);
    metadata[key] = parseScalar(line.slice(separator + 1), filePath, key);
  }

  return { metadata, body: lines.slice(end + 1).join("\n").trim() };
}

function parseSections(body, filePath) {
  if (!body) throw new Error(`${filePath}: story body cannot be empty`);

  const sections = [];
  let heading = null;
  let paragraphLines = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const text = paragraphLines.join(" ").trim();
    if (!sections.length || sections.at(-1).heading !== heading) {
      sections.push({ heading, paragraphs: [] });
    }
    sections.at(-1).paragraphs.push(text);
    paragraphLines = [];
  };

  for (const line of `${body}\n`.split("\n")) {
    if (line.startsWith("## ")) {
      flushParagraph();
      heading = line.slice(3).trim();
      if (!heading) throw new Error(`${filePath}: section heading cannot be empty`);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      continue;
    }
    if (line.startsWith("#")) {
      throw new Error(`${filePath}: use only level-two headings (##) inside a story`);
    }
    paragraphLines.push(line.trim());
  }

  if (!sections.length) throw new Error(`${filePath}: story must contain at least one paragraph`);
  return sections;
}

export function parseStoryMarkdown(source, filePath = "story.md") {
  const { metadata, body } = parseFrontMatter(source, filePath);
  const allowedKeys = new Set(["id", "category", "title", "summary", "format", "source"]);
  for (const key of Object.keys(metadata)) {
    if (!allowedKeys.has(key)) throw new Error(`${filePath}: unknown front matter key: ${key}`);
  }
  for (const key of ["id", "category", "title", "summary", "format"]) {
    if (!metadata[key]) throw new Error(`${filePath}: missing required front matter key: ${key}`);
  }
  if (!new Set(["simple", "structured"]).has(metadata.format)) {
    throw new Error(`${filePath}: format must be simple or structured`);
  }

  const sections = parseSections(body, filePath);
  let full;
  if (metadata.format === "simple") {
    if (sections.length !== 1 || sections[0].heading !== null || sections[0].paragraphs.length !== 1) {
      throw new Error(`${filePath}: a simple story must be exactly one paragraph with no heading`);
    }
    if (metadata.source) {
      throw new Error(`${filePath}: use structured format for source notes`);
    }
    full = sections[0].paragraphs[0];
  } else {
    full = { sections };
    if (metadata.source) full.source = metadata.source;
  }

  return {
    id: metadata.id,
    category: metadata.category,
    title: metadata.title,
    summary: metadata.summary,
    full
  };
}

function yamlValue(value) {
  return JSON.stringify(value);
}

export function serializeStoryMarkdown(story) {
  const structured = typeof story.full !== "string";
  const lines = [
    FRONT_MATTER_BOUNDARY,
    `id: ${yamlValue(story.id)}`,
    `category: ${yamlValue(story.category)}`,
    `title: ${yamlValue(story.title)}`,
    `summary: ${yamlValue(story.summary)}`,
    `format: ${structured ? "structured" : "simple"}`
  ];

  if (structured && story.full.source) lines.push(`source: ${yamlValue(story.full.source)}`);
  lines.push(FRONT_MATTER_BOUNDARY, "");

  const sections = structured
    ? story.full.sections
    : [{ heading: null, paragraphs: [story.full] }];
  sections.forEach((section, sectionIndex) => {
    if (section.heading) lines.push(`## ${section.heading}`, "");
    section.paragraphs.forEach((paragraph, paragraphIndex) => {
      lines.push(paragraph);
      const isLast = sectionIndex === sections.length - 1 && paragraphIndex === section.paragraphs.length - 1;
      if (!isLast) lines.push("");
    });
  });

  return `${lines.join("\n")}\n`;
}

export async function loadStories(storiesDirectory) {
  const entries = (await fs.readdir(storiesDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  return Promise.all(entries.map(async (entry) => {
    const filePath = path.join(storiesDirectory, entry.name);
    const source = await fs.readFile(filePath, "utf8");
    return { fileName: entry.name, story: parseStoryMarkdown(source, filePath) };
  }));
}

export function renderStoriesJavaScript(stories) {
  return `// Generated from stories/*.md by npm run build:stories.\n// Edit the Markdown files, not this file.\nconst STORIES = ${JSON.stringify(stories, null, 2)};\n`;
}
