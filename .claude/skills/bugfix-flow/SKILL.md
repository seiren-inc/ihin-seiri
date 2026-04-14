---
name: bugfix-flow
description: Use for any bug investigation or build failure. Covers Next.js, microCMS, Turbopack/webpack discrepancy, GSAP, Framer Motion, and Three.js patterns.
---

# Bugfix Flow

**Iron Law: no fix without root cause.**

## Workflow

1. Reproduce: exact error, confirmation steps
2. Investigate: read affected file; run `npm run lint && npm run build`
3. Hypothesis: "error occurs because X causes Y"
4. Fix: smallest change
5. Verify: `npm run lint && npm run build`

## Common Patterns

- **Turbopack/webpack**: dev succeeds, prod fails → always verify with production build (`NEXT_TURBOPACK=0`)
- **microCMS fetch error** → check `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` env vars
- **Three.js hydration** → `dynamic import + ssr: false + <Suspense>`
- **Framer Motion hydration** → add `"use client"`; AnimatePresence → add `key`
- **GSAP SSR** → register ScrollTrigger inside `useEffect`
- **Tailwind v3 purge** → check content paths in `tailwind.config.js`
