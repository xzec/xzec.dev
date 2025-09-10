# xzec

A small personal site built with Astro and Tailwind CSS.

This repository contains the source for a simple, fast static site powered by Astro 5 with TypeScript and Tailwind. It appears to serve as a personal/portfolio landing page.

Last updated: 2025-09-10

## Overview

- Framework: Astro 5 (static site)
- Language: TypeScript (ESM)
- Styling: Tailwind CSS (with tailwind-merge and custom theme)
- Formatting: Prettier with prettier-plugin-astro and prettier-plugin-tailwindcss
- Dev server: port 3000 (auto-opens)
- Package manager: pnpm (declared: pnpm@9.1.2)

## Requirements

- Node.js (LTS recommended). TODO: Pin exact Node version/engine in package.json.
- pnpm 9.x (repo declares `pnpm@9.1.2` via `packageManager` field)

Optional (for editors):
- VS Code + Astro & Tailwind IntelliSense extensions, or any editor with Astro and Tailwind support

## Getting Started

Install dependencies:

- pnpm install

Start the dev server:

- pnpm dev

The site will open automatically at http://localhost:3000 (configured in astro.config.mjs). If it does not, open the URL manually.

Build for production:

- pnpm build

Preview the production build locally:

- pnpm preview

Run Astro CLI directly (e.g., `astro add`, `astro check`):

- pnpm astro -- --help

## Scripts

The following scripts are defined in package.json:

- dev: astro dev
- start: astro dev
- build: astro check && astro build
- preview: astro preview
- astro: astro

## Environment Variables

- No environment variables are currently required for local development or build.
- TODO: Document any future env vars here (format, defaults, examples).

## Project Structure

Top-level:

- astro.config.mjs — Astro configuration (Tailwind integration; server open=true; port=3000)
- tailwind.config.mjs — Tailwind configuration (darkMode: 'selector', custom colors/fonts)
- tsconfig.json — Extends astro/tsconfigs/strictest; path alias ~/* → src/*
- prettier.config.mts — Prettier configuration with Astro and Tailwind plugins
- public/ — Static assets served as-is (e.g., favicon, /fonts/*)
- src/ — Application source
  - pages/
    - index.astro — Main page (site entry route)
  - layouts/
    - Layout.astro — Base HTML document wrapper
  - components/
    - Card.astro — Card UI component using Tailwind and a className combiner
  - assets/
    - AustraliaIcon.astro, BigRightArrow.astro — Inline SVG components
  - utils/
    - cn.ts — Tailwind class combiner using clsx + tailwind-merge
  - base.css — Tailwind layers, fonts, and custom utilities

Notes:
- Static files referenced in CSS (e.g., /noise.png, /fonts/JetBrainsMono-*.woff2) should live under public/.

## Entry Points

- Route entry: src/pages/index.astro (Astro exposes files in src/pages as routes)
- HTML layout: src/layouts/Layout.astro

## Tailwind & Styling

- Tailwind is integrated via @astrojs/tailwind with applyBaseStyles: false.
- Custom theme additions: color palette (nightblue, chgreen), JetBrainsMono font family.
- Dark mode is enabled via the `:root` class selector (darkMode: 'selector').
- Utility and component styles are defined in src/base.css and imported from index.astro.

## Formatting

- Prettier is configured (semi: false, singleQuote: true) with Astro and Tailwind plugins.
- Run your editor's format on save, or invoke Prettier manually.

## Tests

- There are currently no tests configured in this repository.
- TODO: Add unit/e2e tests and document how to run them (e.g., Vitest/Playwright) if needed.

## Deployment

The project builds to a static site by default (`dist/`). You can deploy the contents of `dist/` to any static host (e.g., Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3+CloudFront).

- TODO: Add specific deployment instructions/provider configuration if applicable.

## Environment & Ports

- Dev server runs on http://localhost:3000 (see astro.config.mjs). Set `server.port` to change.

## License

This project is currently UNLICENSED (see package.json: "license": "UNLICENSED").

- TODO: Choose and add a LICENSE file if you intend to open-source this project.

## Resources

- Astro docs: https://docs.astro.build
- Tailwind CSS docs: https://tailwindcss.com/docs
- Astro Discord: https://astro.build/chat
