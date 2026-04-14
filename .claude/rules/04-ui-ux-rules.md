# 04 — UI/UX Rules

> Repo: ihin-seiri | Applies to: Claude Code, Codex, Antigravity
> UI stack: Tailwind CSS v3 (custom colors locked), GSAP 3, Framer Motion v12, Lenis, Three.js

## Design System

### Custom Colors (Tailwind v3 — LOCKED)
Use only the project-specific tokens. Do NOT use arbitrary color values.
```js
primary: { DEFAULT: "#1e4f66", dark: "#1a252f" }
accent:  { DEFAULT: "#9c5272" }
```

### Typography
- Use `clamp()` for all heading sizes; `max-width` on text containers
- H1 once per page; H1 → H2 → H3 hierarchy strict

### Spacing
- 8px base scale; consistent vertical rhythm; custom spacing values from `tailwind.config.js`

### CTAs
- Minimum height: 48px; action-driven text; 1 primary per section
- CTA in: hero, mid-section, footer

### Mobile First
- 375px baseline; tap targets ≥ 48px; no horizontal overflow

## Animation Rules

- GSAP + Lenis: scroll-linked effects; cleanup in `useEffect`
- Framer Motion: mount/unmount; always `"use client"` + `key` on `AnimatePresence`
- Three.js: `dynamic import + ssr: false + <Suspense>`
- Respect `prefers-reduced-motion`

## Prohibited

- Overriding locked Tailwind color tokens
- Arbitrary color values outside the defined palette
- Multiple conflicting CTAs; animations ignoring `prefers-reduced-motion`
