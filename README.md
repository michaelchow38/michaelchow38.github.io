# Michael Chow — Portfolio

Live at **https://michaelchow38.github.io**

All the text on the site (bio, contact info, resume, projects) lives in **`content.js`**. You rarely need to touch any other file.

## How to edit something

1. Open `content.js` in this repository and click the pencil icon (Edit).
2. Change the text between the quotes.
3. Click **Commit changes**. The site updates in about a minute. Press Ctrl+Shift+R (Cmd+Shift+R on Mac) if you still see the old version.

A blank page after an edit usually means a missing comma or quote. Every `{ ... }` block in a list needs a comma after it. You can restore the last working version from the file's History.

## Uploading files

- **Photo:** upload a square image named `avatar.png` into `assets/images`.
- **CV:** upload your PDF named `Michael-Chow-CV.pdf` into `assets`. Uploading a new one with the same name replaces the old one. Update `cvUpdated` in `content.js`.
- **Project images:** upload to `assets/images`, then reference them as `"assets/images/file-name.png"`.

To upload: open the folder in GitHub → **Add file → Upload files** → drag files in → **Commit changes**.

## Adding a project

In `content.js`, find `projects: [` and copy a whole `{ ... },` block. Each project gets its own page at `#project/<id>`.

| Field | What it does |
|---|---|
| `id` | Short name used in the page link, e.g. `"man-city-2020-21"` (optional) |
| `title`, `year`, `summary` | Shown on the card and at the top of the page |
| `status` | `"completed"` or `"in-progress"` |
| `labels` | Tags used by the filter buttons |
| `image` | Cover image |
| `facts` | Short details, e.g. `{ label: "Tools", value: "Python, SQL" }` |
| `sections` | The write-up: `{ heading, text }` and/or `{ heading, points: [ ... ] }` |
| `gallery` | Extra images: `{ src, caption }` |
| `links` | Buttons: `{ label, url }` |

## Resume sections

`experience` is split into groups (for example Research, Esports & Youth Sports). Each group has a `heading`, an `icon`, and a list of `items`. Copy a group to add a new section.

Icons: design, code, mobile, camera, data, research, pen, chart, briefcase, team.
