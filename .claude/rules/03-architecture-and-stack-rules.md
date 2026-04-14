# 03 — Architecture and Stack Rules

> Repo: ihin-seiri | Applies to: Claude Code, Codex, Antigravity
> Stack: Next.js 15 / React 19 / TypeScript / Tailwind CSS v3 / npm / microCMS

## Directory Conventions

```
src/
  app/           ← Pages and layouts only
  components/
    ui/           ← Generic UI components
    common/       ← Shared components
    sections/     ← Page section components
  lib/            ← Utilities, microCMS client
  types/          ← Type definitions
```

## Component Rules

- Server Component is the default. Use `"use client"` for animation or browser APIs only.
- Framer Motion: always `"use client"` + `key` on `AnimatePresence`.
- Three.js: always `dynamic import + ssr: false + <Suspense>`.

## TypeScript Rules

- `any` is forbidden. Explicit return types required.
- Path alias: `@/*` → `./src/*`

## Tailwind CSS v3 — Critical Rules

This repo uses **Tailwind CSS v3** with custom project settings locked in `tailwind.config.js`.
Do NOT upgrade to v4 without a design review. Do NOT override locked values:
```js
primary: { DEFAULT: "#1e4f66", dark: "#1a252f" }
accent:  { DEFAULT: "#9c5272" }
// spacing, borderRadius, maxWidth also defined — preserve them
```

## CMS Layer (microCMS)

- All content fetches in Server Components only.
- Use ISR: `export const revalidate = 3600`
- Required env vars: `MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY`
- Never expose API key to the client.

## Build Notes

- **Development**: `npm run dev` uses Turbopack (`next dev --turbopack`)
- **Production build**: `npm run build` uses `NEXT_TURBOPACK=0 next build` (webpack)
- If Turbopack causes issues during dev, the production build is the source of truth.

## No Database

This repo has no database. Do not add Supabase, Prisma, or any ORM.

## Package Manager

npm. Do not use pnpm or yarn.
