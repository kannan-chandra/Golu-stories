# Golu Stories

A small, dependency-free story browser built from the supplied *Stories from Hindu Tradition* document.

## Preview locally

Open `index.html` in a browser, or run a simple web server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

1. Push this folder to a GitHub repository (or make it the contents of a repository).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing these files and the `/ (root)` folder, then save.

No build step is required.

## Edit story content

- `stories.js` contains the original story titles, categories, and baseline full text.
- `story-content.js` contains one purpose-written card summary for every story.
- Longer retellings live in `EXPANDED_STORIES` inside `story-content.js`. Each can contain titled sections, a lesson, and a source note. If a story has no expanded entry, its baseline full text is shown instead.
