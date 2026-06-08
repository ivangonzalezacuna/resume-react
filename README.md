![GitHub package.json version](https://img.shields.io/github/package-json/v/ivangonzalezacuna/resume-react)
![GitHub](https://img.shields.io/github/license/ivangonzalezacuna/resume-react)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f90f7c25-0283-4c9c-96b5-9aa8bb5014db/deploy-status)](https://app.netlify.com/sites/ivan-gonzalez/deploys)

# Iván González Acuña — Personal Portfolio

Personal portfolio and resume site built with React 19 and TypeScript, hosted on Netlify.

**Live site:** [ivangonzalezacuna.com](https://ivangonzalezacuna.com)

## Tech stack

- **React 19** + **TypeScript** — component framework
- **Vite** — build tooling and dev server
- **styled-components** — CSS-in-JS styling
- **framer-motion** — animations and transitions
- **Netlify** — hosting and continuous deployment

## Run locally

Clone the repo, install dependencies, then start the dev server:

```bash
yarn install
yarn start
```

To preview a production build locally:

```bash
yarn build
yarn preview
```

## Scripts

| Script | Description |
|---|---|
| `yarn start` | Start the Vite dev server |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Serve the production build locally |
| `yarn dev` | Run via Netlify CLI (respects `_redirects` and Netlify config) |
| `yarn lint:fix` | Fix ESLint errors automatically |
| `yarn prettier:fix` | Fix Prettier formatting issues |
| `yarn check:full` | Full CI check — type-check, lint, and format |

## Features

- SEO optimised — canonical URL, Open Graph, Twitter Card meta tags
- Sitemap and `robots.txt` for search engine indexing
- PWA-ready — web app manifest and full favicon set
- Downloadable CV (`/pdf/CV_IvanGonzalezAcuna.pdf`)
- Responsive layout with smooth scroll navigation
