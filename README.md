# Lakshmi Priya A — Portfolio Website

A single-page, responsive developer portfolio with light/dark theme support.
Built with plain HTML, CSS, and vanilla JavaScript — no framework, no build step.

**Live site:** https://lakshmipriyaanbu.github.io/LP-Portfolio-website/
**Repository:** https://github.com/LakshmiPriyaAnbu/LP-Portfolio-website

---

## Project structure

| Path | Description |
|---|---|
| `index.html` | Page markup and page-specific styles |
| `portfolio/pro.css` | Design system — color tokens, light/dark themes, shared components |
| `portfolio/theme.js` | Light/dark theme toggle (persisted via `localStorage`) |
| `photo.jpg` | Hero portrait |
| `uploads/` | Résumé PDF and project screenshots referenced from `index.html` |

Fonts (Open Sans and JetBrains Mono) load from Google Fonts and fall back to system fonts when offline.

---

## Local development

1. Clone the repository and open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **Open with Live Server**.

Alternatively, open `index.html` directly in a browser — auto-reload on save will not be available.

---

## Editing

**Content** — Edit the markup directly in `index.html`. Sections are identified by id: `#about`, `#work`, `#builds`, `#experience`, `#stack`, `#versatility`, `#contact`.

**Links** — Update in `index.html`:
- Contact email: `lakshmipriya.anbu07@gmail.com`
- GitHub and LinkedIn URLs
- Résumé: `uploads/CopyofLakshmi_PriyaA_Resume.pdf`

**Photo** — Replace `photo.jpg` with a new image of the same name (portrait, ~4:5 ratio recommended).

**Theme** — Color tokens are defined at the top of `portfolio/pro.css`:
- `:root { … }` — light theme
- `[data-theme="dark"] { … }` — dark theme

Update `--accent`, `--bg`, `--text`, `--text-2`, `--border`, and `--panel` to adjust the palette.

**Navigation** — Nav links use `href="#section-id"` for smooth-scroll. To route "Let's talk" to email instead, change its `href` to `mailto:lakshmipriya.anbu07@gmail.com`.

---

## Deployment

Hosted via GitHub Pages, configured to deploy from `main` / `/ (root)`. To publish changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The site is available at:
**https://lakshmipriyaanbu.github.io/LP-Portfolio-website/**

Alternative hosts (e.g. Netlify, Vercel) can be used if a custom domain is needed.
