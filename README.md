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

| Script              | Description                                   |
| ------------------- | --------------------------------------------- |
| `yarn dev`          | Start the Vite dev server                     |
| `yarn build`        | Type-check and build for production           |
| `yarn preview`      | Serve the production build locally            |
| `yarn check`        | Type-check, lint, and format-check (no build) |
| `yarn ci`           | Full gate — `check` plus a production build   |
| `yarn lint`         | Run ESLint                                    |
| `yarn lint:fix`     | Auto-fix ESLint issues                        |
| `yarn format`       | Auto-format with Prettier                     |
| `yarn format:check` | Check formatting with Prettier                |

ESLint and Prettier run separately. Use `yarn format` for formatting fixes;
`yarn check` runs both checks. ESLint uses type-aware rules for TypeScript
files in `src`.

## Features

- SEO optimised — canonical URL, Open Graph, Twitter Card meta tags
- Sitemap and `robots.txt` for search engine indexing
- PWA-ready — web app manifest and full favicon set
- Downloadable CV (`/pdf/CV_IvanGonzalezAcuna.pdf`)
- Responsive layout with smooth scroll navigation
- The header and footer logos return to the top without adding a fragment.
  Browser history returns to the top for fragment-free URLs and keeps normal
  navigation for section links.
