---
name: ui-qa-check
description: Use for any UI change. Validates against design system including Tailwind v3 custom color compliance, typography, spacing, CTAs, mobile-first, and animation rules.
---

# UI QA Check

## Checklist

### Custom Colors (Tailwind v3)
- [ ] Only project-specific tokens used (`primary`, `accent` from tailwind.config.js)
- [ ] `tailwind.config.js` custom values unchanged

### Typography
- [ ] All headings use `clamp()`; `max-width` on text containers
- [ ] H1 once per page; H1 → H2 → H3 hierarchy

### Spacing
- [ ] Values from Tailwind config scale; no arbitrary px without justification

### CTAs
- [ ] All buttons ≥ 48px; max 1 primary per section; CTA in hero/mid/footer

### Mobile (375px)
- [ ] No horizontal overflow; tap targets ≥ 48px

### Animation
- [ ] `"use client"` on Framer Motion; `key` on AnimatePresence
- [ ] GSAP cleaned up in `useEffect`; Three.js: `dynamic + ssr: false`
- [ ] `prefers-reduced-motion` respected

Output: PASS / FAIL per section.
