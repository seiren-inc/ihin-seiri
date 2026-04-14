# Decision Log — ihin-seiri

## 2026-04-03 — Agent OS Migration: Phase 2 Rollout

**Context**: Standard web batch rollout. ihin-seiri is a CMS-only site with Tailwind v3 and Turbopack dev build.

**Decisions**:

1. **Standard 7-skill shelf** — `schema-markup` as always-on; no DB deviation
2. **rules/03 and rules/04** — Tailwind v3 custom color lock documented explicitly
3. **rules/02 and rules/06** — Turbopack dev vs webpack prod build discrepancy documented
4. **`.agents/skills` corrected** — `../.agent/skills` → `../.claude/skills`
5. **Legacy marker added** to `.agent/skills/`
6. **`docs/ai/` created** with 7 governance documents
