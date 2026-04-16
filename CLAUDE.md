# ihin-seiri Project Guide

## Overview
Next.js 15 (App Router) application using npm, React 19, Tailwind CSS v3, and microCMS.
Animation: GSAP 3 + Lenis + Framer Motion. 3D: Three.js / R3F / Drei.

## Non-Negotiables
- Production build must use NEXT_TURBOPACK=0.
- Existing brand colors must not be changed unless explicitly requested.
  - primary: #1e4f66 / primary-dark: #1a252f / accent: #9c5272
- PPR is enabled and must not be disabled.
- Three.js components must never run on SSR.

## Project-Specific Implementation Rules
- Use npm for all commands. pnpm and yarn are forbidden.
- Tailwind CSS v3 uses tailwind.config.js. Custom spacing, borderRadius, and maxWidth defined there must not be removed without explicit approval.
- microCMS integration requires MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY in .env.local.
- Three.js components must use dynamic import with ssr: false and Suspense.

## Stop Conditions
- If requirements are unclear, you must stop and ask for clarification.
- If a change may alter brand colors or Tailwind config, you must stop.
- If a change may affect microCMS integration or production build behavior, you must stop.
- If database schema impact is uncertain, you must stop.
- If you cannot verify the change, you must stop.

## Local Commands
- npm run dev
- npm run build
- npm run start
- npm run lint

## Troubleshooting
- Turbopack build issues: ensure production build uses NEXT_TURBOPACK=0.
- Three.js SSR errors: verify dynamic import with ssr: false.
- microCMS API errors: verify MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY.
