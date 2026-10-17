import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadStories, renderStoriesJavaScript } from "../scripts/story-format.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entries = await loadStories(path.join(root, "stories"));
const stories = entries.map(({ story }) => story);
const expectedStoryIds = [
  "durga-and-mahishasura",
  "durga-and-chamunda",
  "the-elephant-headed-boy",
  "the-wisdom-fruit",
  "ganesha-and-the-moon",
  "the-churning-of-the-ocean-of-milk",
  "garuda-and-the-nectar-of-immortality",
  "kumbhakarnas-mixed-up-wish",
  "hanuman-in-ravanas-court",
  "the-butter-thief",
  "krishna-and-kalinga",
  "the-hill-that-became-an-umbrella",
  "the-baby-beneath-the-tulasi"
];

test("the current story order and shareable IDs stay stable", () => {
  assert.deepEqual(stories.map(({ id }) => id), expectedStoryIds);
});

test("story files have contiguous zero-based order prefixes", () => {
  entries.forEach(({ fileName, story }, index) => {
    const expectedPrefix = String(index).padStart(2, "0");
    assert.match(fileName, new RegExp(`^${expectedPrefix}-[a-z0-9]+(?:-[a-z0-9]+)*\\.md$`));
    assert.equal(fileName, `${expectedPrefix}-${story.id}.md`);
  });
});

test("story IDs are unique, URL-safe, and survive query-string lookup", () => {
  const ids = stories.map(({ id }) => id);
  assert.equal(new Set(ids).size, ids.length);
  for (const story of stories) {
    assert.match(story.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    const query = new URLSearchParams({ story: story.id }).toString();
    const requestedId = new URLSearchParams(query).get("story");
    assert.equal(stories.find(({ id }) => id === requestedId), story);
  }
});

test("every story has complete card metadata", () => {
  assert.ok(stories.length > 0);
  for (const story of stories) {
    assert.ok(story.title.trim().length > 0, `${story.id} has no title`);
    assert.ok(story.category.trim().length > 0, `${story.id} has no category`);
    assert.ok(story.summary.trim().length >= 40, `${story.id} has an unusually short summary`);
  }
});

test("every full story has renderable paragraphs", () => {
  for (const story of stories) {
    if (typeof story.full === "string") {
      assert.ok(story.full.trim().length > 0, `${story.id} has an empty story`);
      continue;
    }
    assert.ok(story.full.sections.length > 0, `${story.id} has no sections`);
    for (const section of story.full.sections) {
      assert.ok(section.heading === null || section.heading.trim().length > 0);
      assert.ok(section.paragraphs.length > 0, `${story.id} has an empty section`);
      section.paragraphs.forEach((paragraph) => assert.ok(paragraph.trim().length > 0));
    }
    if (story.full.source) assert.ok(story.full.source.trim());
  }
});

test("generated browser data is current and preserves Markdown order", async () => {
  const generatedPath = path.join(root, "stories.js");
  const actual = await fs.readFile(generatedPath, "utf8");
  assert.equal(actual, renderStoriesJavaScript(stories), "run npm run build:stories");

  const context = {};
  vm.createContext(context);
  vm.runInContext(`${actual}\n;globalThis.__stories = STORIES;`, context);
  assert.deepEqual(JSON.parse(JSON.stringify(context.__stories)), stories);
});

test("the browser still loads generated data before the application", async () => {
  const html = await fs.readFile(path.join(root, "index.html"), "utf8");
  assert.ok(html.indexOf('src="stories.js"') < html.indexOf('src="app.js"'));
});
