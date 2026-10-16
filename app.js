const stories = STORIES;

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

function storyUrl(story) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("story", story.id);
  return `${url.pathname}${url.search}`;
}

function renderFilters() {
  filters.replaceChildren();
  ["All stories", ...new Set(stories.map((story) => story.category))].forEach((category) => {
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
    const fullText = typeof story.full === "string"
      ? story.full
      : story.full.sections.flatMap((section) => section.paragraphs).join(" ");
    const searchable = `${story.title} ${story.category} ${story.summary} ${fullText}`.toLocaleLowerCase();
    return inCategory && searchable.includes(query);
  });

  grid.replaceChildren();
  visible.forEach((story) => {
    const article = document.createElement("article");
    article.className = "story-card";

    const auditIndex = document.createElement("p");
    auditIndex.className = "audit-index";
    auditIndex.textContent = `Index ${stories.indexOf(story)}`;
    const category = document.createElement("p");
    category.className = "eyebrow";
    category.textContent = story.category;
    const title = document.createElement("h2");
    title.textContent = story.title;
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = story.summary;
    const link = document.createElement("a");
    link.className = "read-link";
    link.href = storyUrl(story);
    link.textContent = "Read the full story";
    link.setAttribute("aria-label", `Read ${story.title}`);
    article.append(auditIndex, category, title, summary, link);
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
  document.querySelector("#story-index").textContent = `Index ${stories.indexOf(story)}`;
  document.querySelector("#story-category").textContent = story.category;
  document.querySelector("#story-title").textContent = story.title;
  document.title = `${story.title} · Golu Stories`;

  const body = document.querySelector("#story-body");
  if (typeof story.full === "string") {
    const paragraph = document.createElement("p");
    paragraph.textContent = story.full;
    body.append(paragraph);
  } else {
    story.full.sections.forEach((section) => {
      if (section.heading) {
        const heading = document.createElement("h2");
        heading.textContent = section.heading;
        body.append(heading);
      }
      section.paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        body.append(paragraph);
      });
    });
    if (story.full.lesson) {
      const lesson = document.createElement("p");
      lesson.className = "lesson";
      lesson.innerHTML = `<strong>${story.full.lesson.label}</strong> ${story.full.lesson.text}`;
      body.append(lesson);
    }
    if (story.full.source) {
      const source = document.createElement("p");
      source.className = "source-note";
      source.textContent = story.full.source;
      body.append(source);
    }
  }

  const fullText = typeof story.full === "string" ? story.full : "";
  if (fullText && /teaching|symbolic|folk tradition|versions differ|iconography|customs/i.test(fullText)) {
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
  document.querySelector("#story-index").textContent = "";
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
  const requestedStory = stories.find((story) =>
    story.id === requestedId || story.legacyIds?.includes(requestedId)
  );
  if (requestedStory) {
    if (requestedStory.id !== requestedId) {
      history.replaceState(null, "", storyUrl(requestedStory));
    }
    renderStoryPage(requestedStory);
  } else {
    renderMissingStory();
  }
} else {
  renderFilters();
  renderStories();
}
