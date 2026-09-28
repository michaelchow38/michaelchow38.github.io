# My portfolio

A simple portfolio site hosted free on GitHub Pages. All the content — bio, CV, and projects — lives in **`content.js`**, so you rarely need to touch any other file.

## One-time setup (about 10 minutes)

1. Sign in at github.com (or create an account). Note your username.
2. Click **+** (top right) → **New repository**.
3. Name it exactly **`your-username.github.io`** (with your real username). Set it to **Public**, then click **Create repository**.
4. On the new repo page, click **uploading an existing file**. Drag in everything from this folder — `index.html`, `styles.css`, `app.js`, `content.js`, `README.md`, and the `assets` folder. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
6. Wait a minute or two. Your site is live at **https://your-username.github.io**.

## Updating your CV

1. Export your CV as a PDF named **`Michael-Chow-CV.pdf`**.
2. In your repo, open the `assets` folder → **Add file → Upload files** → drop in the PDF → **Commit changes**. Same name = old one gets replaced.
3. Optional: edit `cvUpdated` and the experience/education lists in `content.js` so the on-page summary matches.

## Adding or updating a project

1. In your repo, click `content.js` → the pencil icon (Edit).
2. Find `projects: [` and copy one whole `{ ... },` block. Paste it at the top of the list and change the text.
   - `status`: `"completed"` or `"in-progress"`
   - `labels`: any tags, e.g. `["Design", "Research"]` — filter buttons appear automatically
   - `image`: upload a picture to `assets/images`, then write `"assets/images/filename.jpg"` (or leave `""`)
3. Click **Commit changes**. The site updates in about a minute.

To mark a project finished, just change its `status` from `"in-progress"` to `"completed"`.

## If something breaks

A blank page after an edit usually means a missing comma or quote in `content.js`. Every `{ ... }` block in a list needs a comma after it, and all text needs matching `"quotes"`. You can view the file's history in GitHub and restore the last working version.

## Optional: use your own domain

Settings → Pages → Custom domain. Your domain registrar's help pages will show the DNS records to add.
