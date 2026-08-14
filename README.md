# Portfolio

An editorial-style portfolio built with React, Vite, and React Router.

## Design

- **Sidebar layout** — persistent left column with your name, role, status,
  and navigation; content scrolls independently on the right (collapses to a
  top bar on mobile).
- **Type pairing** — Fraunces (serif display) for headlines, Inter for body
  text, JetBrains Mono for labels and the "stack readout" on the home page.
- **Palette** — warm porcelain background, ink charcoal text, muted brass
  accent. Defined as CSS variables at the top of `src/index.css`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL. For a production build:

```bash
npm run build
npm run preview
```

## Customize

Almost everything you'll want to change lives in **one file**:
`src/siteData.js` — your name, role, email, social links, stack, projects,
work timeline, and skills list. Edit that file and every page updates.

Beyond that:

- `src/pages/` — one file per route (`Home.jsx`, `Projects.jsx`,
  `About.jsx`, `Contact.jsx`). Copy is written directly in these files —
  edit the headline and paragraph text to match your voice.
- `src/components/Sidebar.jsx` — nav links and the sidebar/mobile-bar markup.
- `src/index.css` — colors, type, spacing. Colors and fonts are set as CSS
  variables in `:root` at the top of the file, so swapping the palette is a
  matter of changing a handful of hex values there.
- `index.html` — page title, meta description, and the Google Fonts link
  (swap in different fonts here and in the `--font-*` variables in
  `index.css`).

## Deploy

This is a static site after `npm run build` (output goes to `dist/`). It
deploys as-is to Vercel, Netlify, GitHub Pages, or any static host.
