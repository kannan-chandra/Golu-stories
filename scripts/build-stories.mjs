import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadStories, renderStoriesJavaScript } from "./story-format.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entries = await loadStories(path.join(root, "stories"));
const output = renderStoriesJavaScript(entries.map(({ story }) => story));
await fs.writeFile(path.join(root, "stories.js"), output);
console.log(`Generated stories.js from ${entries.length} Markdown stories.`);
