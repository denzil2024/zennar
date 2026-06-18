# Zennar

A modern client website built with **Vite + React + TypeScript**.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build      # output goes to dist/
npm run preview    # serve the production build locally
```

## Deployment

This repo deploys on **Railway** via Nixpacks:

1. `npm install` — install dependencies
2. `npm run build` — produce the static site in `dist/`
3. `npm run preview` — serve `dist/` on the `PORT` Railway provides

Railway is connected to this GitHub repo, so every push to the default branch
triggers a new build and deploy. **Cloudflare** sits in front for DNS, caching,
and TLS.
