# CampusClub — Student Portal

A responsive Angular student portal assignment with Home, About, and Students pages.

## Features

- Responsive navigation with an accessible mobile menu.
- Three routed pages using Angular Router, `routerLink`, and `router-outlet`.
- Student directory with live search, category filters, alphabetical sorting, and empty-state feedback.
- Editorial visual identity with a warm paper palette, plum, coral, and lime accents.
- CSS animation system with reduced-motion support and responsive layouts.
- Mobile-first layout refinements for Home, About, Students, Navbar, and Footer.
- Fluid typography, wrapping headings, stacked mobile cards, and a collapsible navigation menu.
- Dynamic footer author name and current year.

## Requirements

- Node.js 22.22.3+ or 24.15.0+ (recommended: current Node.js LTS)
- npm

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Routes

- `/` — Home
- `/about` — About the institute
- `/students` — Student directory

## Responsive checks

The page layouts and navigation were checked in Chromium at viewport widths of 1440, 1024, 900, 768, 700, 600, 520, 430, 390, 375, 360, and 320 pixels. The routes were checked for horizontal page overflow and clipped content.

## Production build

```bash
npm run build
```

Build output is generated in `dist/`.

## Notes

The project intentionally does not include `node_modules`; run `npm install` on the target computer. Replace the sample student names and interests with approved class data before public use, if required.
