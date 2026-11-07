<<<<<<< HEAD
# Student Portal

A polished Angular standalone application created for the Project Creation, Components, File Structure, and Routing assignment. The interface uses a premium dark visual theme, glass-style surfaces, animated gradients, responsive layouts, and CSS micro-interactions.

## Requirements

- Node.js compatible with Angular CLI 22 (Node.js 22.22.3+ or 24.15.0+)
- npm

## Run the project

Open a terminal in the `StudentPortal` folder and run:

```bash
npm install
npm start
```

Then open `http://localhost:4200/` in your browser.

To create a production build:

```bash
npm run build
```

## Pages and routes

| Page | Route | Component |
|---|---|---|
| Home | `/` | `Home` |
| About | `/about` | `About` |
| Students | `/students` | `Students` |

## Component structure

```text
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   └── footer/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   └── students/
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   ├── app.html
│   └── app.css
├── index.html
├── main.ts
└── styles.css
```

The navbar uses `routerLink` for navigation. The root component uses `router-outlet` to display the selected page. The footer gets the current year from JavaScript so it updates automatically. Each page also includes responsive styling, entrance animations, and interactive hover states. The global stylesheet respects the user’s reduced-motion preference. The font uses a Google Fonts import with system-font fallbacks when offline.

## Assignment screenshots

After the development server is running, open each route and capture one screenshot:

1. Home: `http://localhost:4200/`
2. About: `http://localhost:4200/about`
3. Students: `http://localhost:4200/students`

On Windows, use **Win + Shift + S** to capture each page. Save the images in a folder named `screenshots` before submitting the project.
=======
# Student-portal
>>>>>>> 4b2ec7cdaa68cef94515444cec00f41915cc01c1
