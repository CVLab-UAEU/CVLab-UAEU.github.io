# CVLab @ UAEU — Lab Website

**🌐 Visit the lab website: [cvlab-uaeu.github.io](https://cvlab-uaeu.github.io/)**

Website for the **Computer Vision Lab (CVLab)**, United Arab Emirates University, directed by Dr. Shengcai Liao: one home page with tabs, plus a page for each news article.

Plain HTML / CSS / JS. No build step, no dependencies, ready for GitHub Pages.

```
.
├── index.html          # Home: Overview · Research · People · News · Featured Papers and Projects · Contact
├── news.html           # Each news article (news.html?id=…)
├── assets/
│   ├── css/style.css
│   ├── js/data.js      # ★ People, News and Publications live here
│   ├── js/main.js      # Renders the lists from data.js
│   └── img/            # people/, news/, papers/ (main figures)
├── .nojekyll
└── .gitignore          # keeps local-only files (.claude/, .DS_Store) out of GitHub
```

## How the home page works

The top bar works as tabs: each link shows only its own section (Overview, Research, People, News, Papers & Projects, Contact), and the address keeps the tab, e.g. `index.html#people`, so links, reloads and the Back button work. Next to the Overview, the 3 newest news items (the first 3 in `news`) are shown one at a time, changing every 5 seconds; nothing needs to be edited for this. To add a section, give it `class="section"` and an `id` in `index.html`, and add a top-bar link `<a href="#that-id">` in the same order.

## Updating content

| What | Where |
| --- | --- |
| Overview, Contact, Research interests / objectives | `index.html` |
| Add or edit a member | `people` in `assets/js/data.js` (`group` decides the section: faculty, postdoc, staff, phd, visiting, master, alumni) |
| Add a news item | `news` in `assets/js/data.js` (newest first; see below) |
| Add a paper | `publications` in `assets/js/data.js` (see below) |
| Show a paper as a card under Featured Papers and Projects | add `featured: true`, `thumb` and `summary` to that paper in `publications` (cards follow the order in the file, 10 per page) |
| Card only, not in the All Publications list (e.g. before 2025) | also add `listed: false` |
| Names shown in bold in papers | `labAuthors` in `assets/js/data.js` |

**Papers:** All Publications is grouped by year (newest year first) and numbered automatically; within a year, papers appear in the order they are written in the file, so move an entry up or down to reorder. Each paper has `year`, `authors` (add `*` after the corresponding author), `title`, then either `venue` + `short` (e.g. `"IEEE Transactions on Multimedia"`, `"TMM"`) or, for a preprint, only `short: "arXiv Preprint"`. Optional: `extra` (e.g. `"Early Access"` or `"Vol. 48, No. 5, pp. 5639–5654"`) and `links: { paper, arxiv, code, project }`; each link given becomes a button. Add `code` only once the repository actually contains the code.

**Member photos:** put a square photo (at least 300px) in `assets/img/people/` (e.g. `kun-li.webp`) and add `photo: "assets/img/people/kun-li.webp"` to that person. Without a photo, initials are shown. To make a member's name clickable, add `scholar: "https://scholar.google.com/citations?user=…"` (or `link:` for a homepage when there is no Scholar profile).

**Featured paper thumbnails:** use the paper's main (framework) figure. Save it in `assets/img/papers/` with the file name given in that paper's `thumb` (e.g. `consistentid.webp`; .jpg/.png also work), about 1600px wide. The whole figure is shown, and clicking it opens it full size. Without a figure, a tile with the venue and year is shown. To make a WebP: `cwebp -q 88 -resize 1600 0 figure.png -o assets/img/papers/name.webp`.

**News with pictures and its own page:** put the images in `assets/img/news/`, then add an entry at the top of `news`. The article is written in order, text and pictures mixed:

```js
{ id: "2026-03-workshop",                 // unique; becomes news.html?id=2026-03-workshop
  date: "2026.03", tag: "Event",
  title: "CVLab hosts a workshop on …",
  summary: "One or two sentences for the news card.",
  thumb: "assets/img/news/2026-03-workshop-thumb.jpg",      // picture on the news card
  body: [
    "First paragraph…",
    { img: "assets/img/news/2026-03-workshop-1.jpg", width: 1280 },              // one picture
    "Second paragraph…",
    { row: [ { img: "assets/img/news/2026-03-workshop-2.jpg", width: 411 },      // two side by side
             { img: "assets/img/news/2026-03-workshop-3.jpg", width: 411 } ] },
    { img: "assets/img/news/2026-03-chart.png", width: 760, caption: "Figure 1 …" }
  ] },
```

`width` is the picture's shown width in pixels (it never gets wider than the text column). A `body` item can also be a `<table>…</table>` (see the CSRankings news). Pictures whose file is not in `assets/img/news/` yet are simply left out, so you can add them later. Entries without `id`/`body` are shown as a card that is not clickable. Entries without `thumb` get a default tile with the `badge` (or `tag`) text. The News tab shows 10 items per page; page buttons (← Prev 1 2 Next →) appear when there are more, and the page is kept in the address (e.g. `index.html#news/2`). Featured Papers and Projects work the same way.

**Banner color:** the top banner (and news cards without a picture) use one solid color, `--banner` at the top of `style.css`. Change that value to change the color.

## Preview locally

Double-click `index.html` to open it in a browser. Or run a small local server in this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

If an edit doesn't show up, the browser is using a cached copy: hard-refresh with **Cmd+Shift+R** (Windows: Ctrl+Shift+R). After changing `style.css`, `data.js` or `main.js`, also bump the `?v=` number on those links at the top and bottom of `index.html` and `news.html`, so visitors of the live site get the new version.

## Publishing

This repository is published with GitHub Pages at **https://cvlab-uaeu.github.io/**, from the `main` branch (root folder). Every push to `main` updates the live site within a minute or two:

```bash
git add -A && git commit -m "Update site" && git push
```

The site and this repository are public: anyone can open the site, search engines index it, and every file here, including its full history, can be read by anyone. Only push content that is cleared for public release. `.gitignore` already leaves out local-only files (`.claude/`, `.DS_Store`).
