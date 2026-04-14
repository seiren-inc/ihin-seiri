# AGENTS.md — ihin-seiri

> Applies to: Claude Code, Codex, Antigravity
> Compact pointer contract. Full policy lives in `.claude/rules/` and `docs/ai/`.

---

## Read Order

1. `CLAUDE.md` — commands, npm, Tailwind v3 colors, Turbopack dev, microCMS
2. `docs/ai/` — workspace overview, architecture summary, execution contract
3. `.claude/rules/` — load rules relevant to the current task
4. `.claude/skills/` — load skills relevant to the current task

---

## Skill Layers

| Layer | Path | Role |
|-------|------|------|
| Always-on core shelf | `.claude/skills/` | 7 core skills — canonical |
| Compatibility bridge | `.agents/skills` → `.claude/skills` | for tools resolving `.agents/` |
| Runtime shelf | `.claude/skills-runtime/` | task-scoped, load on demand |
| Legacy migration source | `.agent/` | NOT active — reference only |

---

## Core Shelf (7 skills)

| Skill | Trigger |
|-------|---------|
| `commit-writer` | Any commit |
| `bugfix-flow` | Any bug investigation |
| `implementation-flow` | Any feature implementation |
| `ui-qa-check` | Any UI change (Tailwind v3 color compliance) |
| `docs-writer` | Any documentation task |
| `handoff-flow` | Session end or agent switch |
| `schema-markup` | Any JSON-LD / structured data task |

---

## Key Operating Rules

**Implementation flow**: Analysis → Plan → Approval → Execution → Verification.
**Completion**: File paths, diff, verification output, and skill usage report required.
**Commits**: `npm run lint && npm run build` before committing.
**Critical**: `tailwind.config.js` custom color values are locked — do not modify.
**Build**: dev uses Turbopack; production build uses `NEXT_TURBOPACK=0`.

---

## Stack Highlights (from CLAUDE.md)

- Next.js 15 / React 19 / TypeScript / Tailwind CSS v3 (custom colors locked) / npm
- `npm run dev` = Turbopack; `npm run build` = `NEXT_TURBOPACK=0 next build`
- microCMS — all fetches in Server Components; ISR `revalidate = 3600`
- Three.js: `dynamic import + ssr: false + <Suspense>`
- No database, no auth layer
