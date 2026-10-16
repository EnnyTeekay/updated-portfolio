# Eniola Ajayi-Bembe — Complete Static Portfolio

This package is a **complete plain HTML/CSS/JavaScript website**. It does not require React, Lovable, Node.js, npm, Bun, a build process, or a database. Every page contains its full visible text in the HTML source. All portfolio images are local files.

## Package contents

- **15 complete HTML pages**
- **styles.css** — all shared desktop and mobile styling
- **script.js** — fade-in interaction only; the site content still works without JavaScript
- **assets/images/** — 31 local image files
- **favicon.svg** — browser icon
- **vercel.json** and **.nojekyll** — static hosting compatibility

## Edit in Visual Studio Code

1. Unzip this package.
2. In VS Code choose **File → Open Folder** and select `eniola-portfolio-static-v2`.
3. Open any `.html` file to edit that page's text, links, headings, and image references.
4. Open `styles.css` to edit colors, type, spacing, grids, navigation, and responsive rules.
5. Replace an image in `assets/images/` with your own file and update its `src` in the relevant HTML page.
6. Preview with the VS Code **Live Server** extension by right-clicking `index.html` and choosing **Open with Live Server**.

The HTML is expanded and indented rather than compressed onto one line, so every section can be edited directly. CSS classes such as `.s14` match the `class="s14"` attributes in the HTML.

## Pages

- `about.html`
- `contact.html`
- `index.html`
- `work-edtech-outcomes.html`
- `work-fiberone.html`
- `work-fintech-analysis.html`
- `work-fitness-consistency.html`
- `work-hospitality-instay.html`
- `work-hrmp.html`
- `work-jumia.html`
- `work-pethmo.html`
- `work-pocketapp.html`
- `work-proptech-trust.html`
- `work-smart-games.html`
- `work.html`

## Deploy with GitHub Pages

1. Create a GitHub repository and upload **the contents of this folder** to its root.
2. Commit and push the files.
3. Open **Settings → Pages** in GitHub.
4. Select **Deploy from a branch**, then choose `main` and `/ (root)`.
5. Save.

## Deploy with Vercel

1. Upload this folder to a GitHub repository.
2. Import that repository into Vercel.
3. Choose **Other** as the framework preset.
4. Leave the Build Command empty.
5. Set the Output Directory to `.` if prompted, then deploy.

## Important

Keep the relative folder structure unchanged. For example, `index.html` expects `styles.css`, `script.js`, and `assets/images/` to remain at their current relative paths.
