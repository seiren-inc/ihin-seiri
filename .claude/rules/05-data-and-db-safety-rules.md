# 05 — Data and CMS Safety Rules

> Repo: ihin-seiri | Applies to: Claude Code, Codex, Antigravity
> Content layer: microCMS only. No database.

## microCMS Rules

1. All CMS fetches must happen in Server Components. Never expose API keys to the client.
2. Required env vars: `MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY` — never commit.
3. Use ISR (`export const revalidate = 3600`) on content pages.
4. Wrap CMS fetches in `try/catch` and return safe fallbacks for missing content.

## Environment Variables

All secrets in `.env.local`. Never commit to git.

## Structured Data (SEO)

1. Use JSON-LD only — no Microdata or RDFa.
2. Schema must match displayed content exactly.
3. Required base fields: `@context`, `@type`, `@id`, `url`, `name`, `description`, `inLanguage`.
4. Validate with Rich Results Test before release.

## No Database

Do not add Supabase, Prisma, or any ORM to this repo.
