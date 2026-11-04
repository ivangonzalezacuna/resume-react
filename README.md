![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f90f7c25-0283-4c9c-96b5-9aa8bb5014db/deploy-status)](https://app.netlify.com/sites/ivan-gonzalez/deploys)

# Iván González Acuña — Personal Portfolio

Personal portfolio and resume site built with React 19 and TypeScript, hosted on Netlify.

**Live site:** [ivangonzalezacuna.com](https://ivangonzalezacuna.com)

## Tech stack

- **React 19** + **TypeScript** — component framework
- **Vite** — build tooling and dev server
- **Vanilla Extract** — CSS-in-JS styling (zero-runtime, type-safe)
- **framer-motion** — animations and transitions
- **Netlify** — hosting and continuous deployment

## Run locally

Clone the repo, install dependencies, then start the dev server:

```bash
yarn install
yarn dev
```

To preview a production build locally:

```bash
yarn build
yarn preview
```

## Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `yarn dev`      | Start the Vite dev server                     |
| `yarn build`    | Type-check and build for production           |
| `yarn preview`  | Serve the production build locally            |
| `yarn check`    | Type-check, lint, and format-check (no build) |
| `yarn ci`       | Full gate — `check` plus a production build   |
| `yarn lint:fix` | Auto-fix ESLint issues                        |
| `yarn format`   | Auto-format with Prettier                     |

## Features

- SEO optimised — canonical URL, Open Graph, Twitter Card meta tags
- Sitemap and `robots.txt` for search engine indexing
- PWA-ready — web app manifest and full favicon set
- Downloadable CV (`/pdf/CV_IvanGonzalezAcuna.pdf`)
- Responsive layout with smooth scroll navigation

## Performance

- Each typeface uses one self-hosted variable WOFF2 file rather than separate
  downloads for each weight. Only Latin subsets are emitted; these include the
  accented characters used by the current content. Add appropriate subsets when
  introducing content in other scripts.
- Critical fonts are preloaded in `index.html`. Keep these URLs aligned with the
  font faces in `src/styles/fonts.css`; Vite hashes and deduplicates the assets.
- The profile photo uses responsive WebP images, with JPEG fallbacks. Keep its
  preload and the `<picture>` sources aligned to avoid duplicate downloads.
- Framer Motion's animations, timings and reduced-motion behavior are retained.

Run `yarn ci`, serve the production build with `yarn preview`, then measure with
Lighthouse's default mobile settings. Aim for 95+ performance across repeated
cold-load runs, not just one run. Local results vary with CPU load; verify the
deployed site too.
