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

The generated browser files are committed to the repository, so GitHub Pages does not need a build step.

## Edit story content

- Edit the Markdown files in `stories/`. Each file contains a short YAML header followed by the full story in ordinary Markdown.
- The two-digit filename prefix controls display order.
- Use blank lines to separate paragraphs and `##` for section headings. Optional source notes live in the YAML header.
- `stories.js` is generated browser data. Do not edit it directly.

After editing a story, regenerate the browser data and run the validation tests:

```sh
npm run build:stories
npm test
```

The tests check ordering, filename and ID consistency, unique and shareable IDs, required card metadata, renderable story sections, and whether `stories.js` exactly matches the Markdown source.

No package installation is required; the generator and tests use only Node.js built-ins.
