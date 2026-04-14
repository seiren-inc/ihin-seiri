# 02 — Git Safety Rules

> Repo: ihin-seiri | Applies to: Claude Code, Codex, Antigravity

## Commit Rules

1. Always check current branch: `git branch --show-current`
2. Never commit directly to `main` unless explicitly instructed.
3. Use conventional commit format: `<type>(<scope>): <subject>`
4. Include `Co-Authored-By: Claude <noreply@anthropic.com>` in AI-generated commits.

## Branch Safety

`main` is protected. Never force-push. Never use `--no-verify` without explicit request.

## Verification Before Commit

```bash
npm run lint                            # ESLint
NEXT_TURBOPACK=0 npm run build          # Production build (webpack, not Turbopack)
```

**Important**: `npm run dev` uses Turbopack. Production builds use `NEXT_TURBOPACK=0 next build`.
Do not use `npm run build` alone if the env flag is not set in the script — check `package.json` first.
