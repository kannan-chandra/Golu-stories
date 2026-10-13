const stories = STORY_GROUPS.flatMap((group) =>
  group.stories.map(([title, body], index) => ({
    id: `${group.category.split(" · ")[0].toLowerCase().replace(/[^a-z]+/g, "-")}-${index + 1}`,
    category: group.category,
    title,
    body
  }))
);

const grid = document.querySelector("#story-grid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const clear = document.querySelector("#clear");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
const dialog = document.querySelector("#story-dialog");
let activeCategory = "All stories";
let lastTrigger = null;

function sentences(text) {
  const matches = text.match(/[^.!?]+[.!?]+/g) || [text];
  return matches.slice(0, 2).join(" ").trim();
}

function renderFilters() {
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

function openStory(story, trigger) {
  lastTrigger = trigger;
  document.querySelector("#dialog-category").textContent = story.category;
  document.querySelector("#dialog-title").textContent = story.title;
  const body = document.querySelector("#dialog-body");
  body.replaceChildren();
  const paragraph = document.createElement("p");
  paragraph.textContent = story.body;
  body.append(paragraph);
  if (/teaching|symbolic|folk tradition|versions differ|iconography|customs/i.test(story.body)) {
    const note = document.createElement("p");
    note.className = "source-note";
    note.textContent = "This entry includes the source collection’s note about its tradition, symbolism, or teaching-story form.";
    body.append(note);
  }
  history.replaceState(null, "", `#${story.id}`);
  dialog.showModal();
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
    article.id = story.id;

    const category = document.createElement("p");
    category.className = "eyebrow";
    category.textContent = story.category;
    const title = document.createElement("h2");
    title.textContent = story.title;
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = sentences(story.body);
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Read the full story";
    button.setAttribute("aria-label", `Read ${story.title}`);
    button.addEventListener("click", () => openStory(story, button));
    article.addEventListener("click", (event) => {
      if (event.target !== button) openStory(story, button);
    });
    article.append(category, title, summary, button);
    grid.append(article);
  });

  count.textContent = `${visible.length} ${visible.length === 1 ? "story" : "stories"}`;
  empty.hidden = visible.length !== 0;
  clear.hidden = !query && activeCategory === "All stories";
}

function reset() {
  search.value = "";
  activeCategory = "All stories";
  filters.replaceChildren();
  renderFilters();
  renderStories();
  search.focus();
}

search.addEventListener("input", renderStories);
clear.addEventListener("click", reset);
empty.querySelector("button").addEventListener("click", reset);
dialog.querySelector(".close-button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  history.replaceState(null, "", `${location.pathname}${location.search}`);
  lastTrigger?.focus();
});

renderFilters();
renderStories();

const linkedStory = stories.find((story) => `#${story.id}` === location.hash);
if (linkedStory) openStory(linkedStory, document.querySelector(`#${linkedStory.id} button`));
