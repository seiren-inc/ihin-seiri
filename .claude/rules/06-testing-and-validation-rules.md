# 06 — Testing and Validation Rules

> Repo: ihin-seiri | Applies to: Claude Code, Codex, Antigravity

## Validation Before Any Commit

```bash
npm run lint                   # ESLint
npm run build                  # Production build (NEXT_TURBOPACK=0 — check package.json)
```

**Note**: If `npm run build` uses Turbopack and fails, use `NEXT_TURBOPACK=0 npx next build` directly.

## Build Watch Points

- **Turbopack vs webpack difference**: dev (Turbopack) may succeed where prod (webpack) fails — always verify with production build
- Three.js hydration → `dynamic import + ssr: false + <Suspense>`
- microCMS API error → check `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` env vars

## Schema Validation

After any JSON-LD change: Rich Results Test. Confirm H1 / title / schema alignment.

## What "Verified" Means

1. `npm run lint` passes
2. Production build (`npm run build` or `NEXT_TURBOPACK=0 next build`) passes
3. No visual regressions
4. For schema changes: Rich Results Test passes
