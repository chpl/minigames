# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — Start Vite dev server (hot reload)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally

No test framework or linter is configured yet.

## Architecture

Hebrew-language mini-games SPA for children ages 3-5. Vite + vanilla JS (no framework). Mobile-first, RTL layout. Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

### Routing & Lazy Loading

Hash-based router (`src/router.js`) maps `#/` to home and `#/chametz` to the game. Games are lazy-loaded via dynamic `import()` in `src/main.js` — Vite automatically code-splits each game into its own chunk.

### Adding a New Game

1. Create `src/games/<id>/index.js` exporting a `mount(container)` function that returns a cleanup function
2. Add metadata to `src/games/registry.js` (title, subtitle, icon SVG, route)
3. Register a lazy route in `src/main.js`: `registerRoute('/<id>', () => import('./games/<id>/index.js'))`

The home page (`src/pages/home.js`) auto-renders all games from the registry.

### Game Structure (chametz example)

Each game is self-contained in `src/games/<name>/`:
- `index.js` — State machine (title → playing → complete), renders screens, handles lifecycle
- `foods.js` — Data array with item metadata, references SVG render functions
- `swipe.js` — Pointer Events-based swipe gesture handler (touch + mouse)
- `svg/` — Inline SVG illustrations as JS functions returning markup strings
- `style.css` — Game-scoped styles

### Shared Utilities

- `src/shared/confetti.js` — CSS-animated confetti and star-burst effects

### SVG Conventions

All food/game illustrations are inline SVGs (JS functions returning SVG strings). Convention: `viewBox="0 0 100 100"`, bold outlines (stroke-width 3), flat bright colors, cartoon style. No external image assets.

### GitHub Pages

`vite.config.js` sets `base: '/minigames/'` to match the repo name in the GitHub Pages URL. The deploy workflow builds and publishes `dist/` on push to `main`.
