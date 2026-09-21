# Md. Ahsan Habib — Portfolio

Personal portfolio for a full stack developer, built from the PRD in
`docs/ahsan-habib-portfolio-prd.md`. Next.js (App Router) + React 19 +
Tailwind CSS v4, statically prerendered with only three client components
(navigation, theme toggle, scroll reveal) and zero runtime dependencies
beyond `next`/`react`.

## Develop

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build (static)
pnpm lint
```

Set `NEXT_PUBLIC_SITE_URL` at deploy time for canonical/OG URLs (falls back to
`https://ahsanhabib.dev`).

## QA audit

`node scripts/qa-audit.mjs` checks the built HTML in `.next/` against the
PRD's hard requirements (required copy, 44px touch targets, external-link
rel attributes, theme/reduced-motion CSS, and more). Run it after
`pnpm build` — it exits non-zero on any failure.
