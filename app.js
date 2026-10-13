function slugify(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const stories = STORY_GROUPS.flatMap((group) =>
  group.stories.map(([title, body]) => ({
    id: slugify(title),
    category: group.category,
    title,
    body
  }))
);

const intro = document.querySelector(".intro");
const browse = document.querySelector(".browse");
const grid = document.querySelector("#story-grid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const clear = document.querySelector("#clear");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
const storyPage = document.querySelector("#story-page");
let activeCategory = "All stories";

function sentences(text) {
  const matches = text.match(/[^.!?]+[.!?]+/g) || [text];
  return matches.slice(0, 2).join(" ").trim();
}

function storyUrl(story) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("story", story.id);
  return `${url.pathname}${url.search}`;
}

function renderFilters() {
  filters.replaceChildren();
  ["All stories", ...STORY_GROUPS.map((group) => group.category)].forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter";
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderStories();
    });
    filters.append(button);
  });
}

function renderStories() {
  const query = search.value.trim().toLocaleLowerCase();
  const visible = stories.filter((story) => {
    const inCategory = activeCategory === "All stories" || story.category === activeCategory;
    const searchable = `${story.title} ${story.category} ${story.body}`.toLocaleLowerCase();
    return inCategory && searchable.includes(query);
  });

  grid.replaceChildren();
  visible.forEach((story) => {
    const article = document.createElement("article");
    article.className = "story-card";

    const category = document.createElement("p");
    category.className = "eyebrow";
    category.textContent = story.category;
    const title = document.createElement("h2");
    title.textContent = story.title;
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = sentences(story.body);
    const link = document.createElement("a");
    link.className = "read-link";
    link.href = storyUrl(story);
    link.textContent = "Read the full story";
    link.setAttribute("aria-label", `Read ${story.title}`);
    article.append(category, title, summary, link);
    grid.append(article);
  });

  count.textContent = `${visible.length} ${visible.length === 1 ? "story" : "stories"}`;
  empty.hidden = visible.length !== 0;
  clear.hidden = !query && activeCategory === "All stories";
}

function reset() {
  search.value = "";
  activeCategory = "All stories";
  renderFilters();
  renderStories();
  search.focus();
}

function renderStoryPage(story) {
  intro.hidden = true;
  browse.hidden = true;
  storyPage.hidden = false;
  document.querySelector("#story-category").textContent = story.category;
  document.querySelector("#story-title").textContent = story.title;
  document.title = `${story.title} · Golu Stories`;

  const body = document.querySelector("#story-body");
  const paragraph = document.createElement("p");
  paragraph.textContent = story.body;
  body.append(paragraph);

  if (/teaching|symbolic|folk tradition|versions differ|iconography|customs/i.test(story.body)) {
    const note = document.createElement("p");
    note.className = "source-note";
    note.textContent = "This entry includes the source collection’s note about its tradition, symbolism, or teaching-story form.";
    body.append(note);
  }
}

function renderMissingStory() {
  intro.hidden = true;
  browse.hidden = true;
  storyPage.hidden = false;
  document.querySelector("#story-category").textContent = "Story not found";
  document.querySelector("#story-title").textContent = "This story link has wandered away";
  const paragraph = document.createElement("p");
  paragraph.textContent = "Return to the collection to choose another story.";
  document.querySelector("#story-body").append(paragraph);
  document.title = "Story not found · Golu Stories";
}

search.addEventListener("input", renderStories);
clear.addEventListener("click", reset);
empty.querySelector("button").addEventListener("click", reset);

const requestedId = new URLSearchParams(window.location.search).get("story");
if (requestedId) {
  const requestedStory = stories.find((story) => story.id === requestedId);
  requestedStory ? renderStoryPage(requestedStory) : renderMissingStory();
} else {
  renderFilters();
  renderStories();
}
