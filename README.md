# משחקונים — Mini Games for Kids

Hebrew-language mini-games for children ages 3-5, built as a mobile-friendly web app.

## Games

### ביעור חמץ (Chametz Burning)
A Passover food sorting game. Kids see food items one at a time and swipe right to keep kosher-for-Passover foods (into a basket) or swipe left to burn chametz (into a bonfire). Features 18 hand-drawn SVG food illustrations, animated feedback, and a celebration screen on completion.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Use your browser's mobile device emulation for the best experience.

## Production Build

```bash
npm run build
npm run preview  # preview locally
```

## Deployment

The app deploys automatically to GitHub Pages on push to `main` via GitHub Actions. The live site is served at `https://<org>.github.io/minigames/`.

## Tech Stack

- **Vite** + vanilla JS (no framework)
- All graphics are **inline SVGs** — no external image assets
- **Pointer Events** for touch/mouse swipe gestures
- RTL Hebrew layout, mobile-first design
