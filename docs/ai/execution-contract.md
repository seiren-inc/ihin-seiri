# Execution Contract

> Local pointer. Full contract: `/Users/takumashinnyo/workspace/projects/docs/ai/execution-contract.md`

## Repo-Specific Additions

### CMS Safety Gate
Never expose `MICROCMS_API_KEY` to the client. All fetches in Server Components.

### Build Gate
`npm run lint && npm run build` must pass. Production build is the source of truth, not Turbopack dev.

### Color Gate
`tailwind.config.js` custom color values are locked. Do not modify.
