# Emiant Innovations — React + Vite Frontend

## Stack
- **React 18** — UI framework
- **Vite 5** — dev server & build tool
- **GSAP 3** — hero entrance animation
- **CSS Modules** — scoped styles per component
- **IntersectionObserver** — scroll animations (no library, zero overhead)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css       ← sticky nav, mobile hamburger
│   ├── Hero.jsx / .module.css         ← GSAP stagger entrance + parallax BG
│   ├── StatsStrip.jsx / .module.css   ← 4 key metrics
│   ├── Industries.jsx / .module.css   ← 4-column application cards
│   ├── Team.jsx / .module.css         ← 6-up leadership grid
│   ├── Insights.jsx / .module.css     ← 3-column blog/article cards
│   ├── CareersBanner.jsx / .module.css← full-width CTA strip
│   ├── Contact.jsx / .module.css      ← form + map + controlled React state
│   └── Footer.jsx / .module.css       ← links + copyright
├── hooks/
│   └── useScrollAnimation.js          ← useScrollAnimation, useStaggerAnimation, useParallax
├── App.jsx                            ← root, assembles all sections
├── main.jsx                           ← ReactDOM entry
└── index.css                          ← CSS vars, global base, .reveal classes
```

## Scroll Animation System

### CSS classes (index.css)
- `.reveal` — fade up on enter
- `.reveal-left` / `.reveal-right` — slide from sides
- `.reveal-scale` — scale up on enter
- `.stagger > *:nth-child(n)` — auto delay for grid children

### React hooks (hooks/useScrollAnimation.js)
```js
// Attach to any element ref
const ref = useScrollAnimation({ threshold: 0.15 })
// <div className="reveal" ref={ref}>...</div>

// Stagger children automatically
const gridRef = useStaggerAnimation(80) // 80ms between each child
// <div ref={gridRef}> <Card /> <Card /> </div>

// Parallax background
const bgRef = useParallax(0.3)
// <div ref={bgRef} style={{ position: 'absolute', inset: 0 }} />
```

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Customisation Tips
- **Colors** — edit CSS vars in `src/index.css` `:root`
- **Content** — arrays in each component (MEMBERS, ARTICLES, CARDS, STATS)
- **Images** — replace Unsplash URLs with your own assets
- **Contact form** — wire `handleSubmit` in Contact.jsx to Formspree / EmailJS / your API
- **Map** — swap the Google Maps embed URL in Contact.jsx
