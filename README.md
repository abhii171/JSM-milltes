# JSM Ragi & Millet Tiffins

A responsive restaurant landing page for JSM Tiffins, built with Next.js, React, and TypeScript. It includes the menu, brand story, highlights, outlet information, and map directions.

## Requirements

- Node.js `22.18.0` (pinned in `.node-version`)
- npm

## Run locally

Install dependencies from the lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

Create an optimized production build and run it locally:

```bash
npm run build
npm run start
```

## Deploy to Render

The repository includes a Render Blueprint at [`render.yaml`](./render.yaml). Connect the repository to Render and create a new Blueprint deployment. The configuration installs dependencies with `npm ci`, builds with `npm run build`, and starts the web service with `npm run start`.

## Project structure

- `app/page.tsx` — landing page content and interactive navigation
- `app/globals.css` — responsive styles, visual design, and motion
- `app/layout.tsx` — root layout and page metadata
- `public/images/menu/` — menu photography served from `/images/menu/`
- `index.html` — standalone HTML design/export
- `render.yaml` — Render web service configuration
- `.node-version` — pinned Node.js version
