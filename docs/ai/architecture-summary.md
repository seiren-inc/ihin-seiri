# Architecture Summary — ihin-seiri

## Application Type

Estate clearance / memorial service information and content site. Content managed via microCMS. No database or auth layer. Rich animation (GSAP, Framer Motion, Three.js).

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, PPR enabled) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS **v3** (custom colors locked in tailwind.config.js) |
| Animation | GSAP 3, Lenis, Framer Motion v12 |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| CMS | microCMS (`microcms-js-sdk`) |
| Icons | Lucide React |
| Package Manager | npm |
| Node | ≥18.0.0 |

## Key Architectural Decisions

- **Tailwind v3** — custom colors/spacing locked; do not upgrade to v4 without design review
- **Turbopack dev, webpack prod** — `npm run dev` uses Turbopack; production uses `NEXT_TURBOPACK=0`
- **No database** — microCMS is the only content source
- **Server Components by default** — `"use client"` for animation/interaction only
- **ISR** — `export const revalidate = 3600` on content pages
