# React Love Showcase

A responsive personal React/Vite application based on the romantic dashboard concept. The supplied photo is included locally as `public/love-photo.jpg` and used as the full-screen background.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite creates the production files in `dist/`, so it can use the same Jenkins → `npm ci` → `npm run build` → Nginx deployment flow as your previous dashboard.

## Customize

Edit `src/main.jsx` to change love notes, section text, labels, and navigation. Edit `src/styles.css` for colors/layout. Replace `public/love-photo.jpg` to change the background photo.
