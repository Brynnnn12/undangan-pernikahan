# AGENTS.md — undangan

## Stack
- React 19, Vite 8, Tailwind CSS v4, AOS (scroll animations), react-icons
- JavaScript (JSX), **no TypeScript**

## Entrypoint
- `src/main.jsx` → `src/App.jsx`

## Commands
```bash
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint (flat config: eslint.config.js)
```
Always run lint after modification: `npm run lint`

## Tailwind v4 specifics
- Configured via CSS (`@import "tailwindcss"` in `src/assets/index.css`), **not** `tailwind.config.js`
- Use CSS-based config (`@theme`, `@layer`, etc.) instead of JS config
- Tailwind v4 Vite plugin is `@tailwindcss/vite` (already set up in `vite.config.js`)

## ESLint
- Flat config (`eslint.config.js`), **not** `.eslintrc`
- Ignores `dist/`
- Covers `**/*.{js,jsx}`

## Dev notes
- Run `npm run build` to verify builds succeed before committing
- Root CSS import is `src/assets/index.css` (imported in `main.jsx`)
- Static assets go in `public/`, referenced as `/filename` in code
