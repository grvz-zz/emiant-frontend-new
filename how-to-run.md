# How to Run

Emiant Innovations frontend — React 18 + Vite.

## Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (comes with Node.js)

Check versions:

```bash
node --version
npm --version
```

## Install dependencies

From the project root:

```bash
npm install
```

## Development server

Start the Vite dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Vite prints the exact local URL in the terminal if the port differs.

## Production build

Build optimized static assets to `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Open the URL shown in the terminal (default [http://localhost:4173](http://localhost:4173)).

## Available scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start development server             |
| `npm run build`   | Build for production                 |
| `npm run preview` | Serve the production build locally   |

## Troubleshooting

**`node` or `npm` not found** — Install Node.js from [nodejs.org](https://nodejs.org/) or your system package manager.

**Port already in use** — Stop the other process on that port, or run Vite on another port:

```bash
npm run dev -- --port 3000
```

**Stale install or odd errors after dependency changes** — Reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```
