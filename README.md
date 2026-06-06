# Lakshmi Priya A — Portfolio Website

A single-page, responsive developer portfolio with light/dark themes.
Built with plain **HTML + CSS + a little vanilla JavaScript** — no framework, no build step.

---

## 1. What's in this folder

```
index.html        →  the whole page (markup + page-specific CSS in <style>)
styles.css        →  design system: color tokens, light/dark themes, shared components
theme.js          →  light/dark toggle (saves your choice in localStorage)
image-slot.js     →  the drag-and-drop photo placeholder in the hero
resume.pdf        →  the file the "Résumé" buttons open
README.md         →  this guide
```

Fonts (Open Sans + JetBrains Mono) load from Google Fonts, so keep an internet
connection the first time you open it; it falls back to system fonts offline.

---

## 2. Open & run it in VS Code

1. Download and **unzip** this folder.
2. Open **VS Code** → `File ▸ Open Folder…` → choose this folder.
3. Install the **“Live Server”** extension (Extensions panel → search “Live Server” → Install).
4. Right-click `index.html` → **“Open with Live Server.”**
   It opens in your browser and auto-reloads every time you save.

(No Live Server? You can also just double-click `index.html` to open it in a browser —
you only lose the auto-reload.)

---

## 3. How to edit it

**Text & content** — open `index.html`. Each part of the page is a `<section>` with a
clear `id`: `#about`, `#work`, `#experience`, `#stack`, `#versatility`,
`#education`, `#contact`. Change the words right in the HTML.

**Links** — search `index.html` for:
- `lakshmipriya.anbu07@gmail.com` (email)
- `github.com/LakshmiPriyaAnbu` and the LinkedIn URL
- `resume.pdf` (replace this file with a newer résumé, keep the name)

**Your photo** — in the hero there's `<image-slot id="hero-portrait">`. To hard-code a
photo instead of the drag-drop slot, replace that tag with:
`<img src="photo.jpg" alt="Lakshmi Priya A" style="width:100%;border-radius:20px">`
and drop a `photo.jpg` into the folder.

**Colors / theme** — open `styles.css`, top of the file:
- `:root { … }` = light theme tokens
- `[data-theme="dark"] { … }` = dark theme tokens
Change `--accent` to recolor the whole site. Other tokens: `--bg`, `--text`,
`--text-2`, `--border`, `--panel`.

**Navigation** — the top bar links use `href="#section-id"` and smooth-scroll to that
section. “Let’s talk” points to `#contact`. To make it open email instead, change its
`href` to `mailto:lakshmipriya.anbu07@gmail.com`.

---

## 4. Put it online (free)

- **GitHub Pages:** create a repo, upload these files, Settings ▸ Pages ▸ deploy from `main`.
- **Netlify / Vercel:** drag the folder onto their dashboard, or connect the GitHub repo.

Your site will be live at a public URL in a minute or two.

---

## 5. How it was built (the plan, from scratch)

If you ever want to rebuild it yourself, this is the recipe that was followed:

1. **Pick a system first, not pages.** Choose two fonts (a clean sans + a monospace for
   labels) and a small color palette. Define them ONCE as CSS variables in `styles.css`
   (`:root` for light, `[data-theme="dark"]` for dark). Everything else references the
   variables — that's what makes the theme toggle a one-line change.
2. **Build reusable components, then use them.** `styles.css` defines small pieces —
   `.badge`, `.btn`, `.metric`, `.card`, `.theme-toggle`. The page is assembled out of
   these, so it stays consistent.
3. **Lay out the page as labelled sections** in this order: Hero → About (bento grid) →
   Work → Experience → Stack → Versatility → Education → Contact. Each is a `<section id>`.
4. **Make it responsive** with CSS grid + `clamp()` for type, plus one mobile breakpoint
   (`@media (max-width: 900px)`) that collapses multi-column grids to one column.
5. **Add light touches of motion** — hover lifts on cards, a skills marquee, a gradient
   glow and grain texture — without overdoing it.
6. **Wire the small JS last:** the theme toggle (`theme.js`), the scroll-spy that
   highlights the active nav link, and the photo slot (`image-slot.js`).
7. **Fill with real content** from the résumé/LinkedIn, keeping claims honest.

That's it — a fast, framework-free site you fully own.


🔗 Live site: https://lakshmipriyaanbu.github.io/LP-Portfolio-websitse/
📂 Repo: https://github.com/LakshmiPriyaAnbu/LP-Portfolio-websitse
