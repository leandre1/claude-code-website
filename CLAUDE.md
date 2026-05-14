# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint

# Run all Playwright tests (auto-starts dev server)
npx playwright test

# Run a single test file
npx playwright test tests/landing-page.spec.ts

# Run tests for one viewport project only
npx playwright test --project=Desktop
npx playwright test --project=Tablet
npx playwright test --project=Mobile
```

## Architecture

Single-page marketing site. `app/page.tsx` composes three full-width sections in order:

```
Hero (components/Hero.tsx)         ← back.jpg background, h1, scroll-to-contact CTA
Services (components/Services.tsx) ← 3 static <article> cards + team2.png banner
Contact (components/Contact.tsx)   ← team1.png + mailto:titemanzi1@gmail.com link
```

All images live in `public/` and are rendered via `next/image` with `fill` + responsive `sizes` props. The `@/*` alias maps to the project root, so `@/components/Hero` resolves to `components/Hero.tsx`.

## Tailwind CSS v4

This project uses Tailwind CSS **v4** — there is no `tailwind.config.ts`. Configuration is CSS-first:

- `app/globals.css` imports Tailwind via `@import "tailwindcss"`
- PostCSS uses `@tailwindcss/postcss` (not the legacy `tailwindcss` plugin)
- Custom utilities go in `globals.css` using `@utility` or `@layer`

## Next.js Image Quality

`next.config.ts` declares `images.qualities: [75, 90]`. Any `quality` prop on a `<Image>` must be one of those values or Next.js will emit a runtime warning.

## Playwright

Tests run across three viewport projects — Desktop (1280px), Tablet (768px), Mobile (375px) — defined in `playwright.config.ts`. The `webServer` block auto-starts `npm run dev`, so no manual server startup is needed. When matching service card titles in tests, use `page.getByRole('heading', { name: '...' })` rather than `page.getByText` to avoid partial-text collisions with other page sections.
