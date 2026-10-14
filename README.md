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

- `stories.js` contains the single `STORIES` collection. Every record keeps its ID, category, title, summary, and full version together.
- A full version may be a simple string or a structured object with titled sections, a lesson, and a source note.
- Records are arranged in their display order, following a suggested Tamil Navaratri progression from Durga to Lakshmi to Saraswati.
- The visible audit index is zero-based and derived from each record's current position in `STORIES`; it is not stored separately.
