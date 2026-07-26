
# AJ.DEV — Homepage Build Plan

Ship a polished, single-page portfolio at `/` with all PRD-defined homepage sections, the obsidian/lime design system, and GSAP + Framer Motion animations. Fully static, no backend. Additional pages (project details, blog, dedicated About) can follow in later turns.

## Design system (PRD Vol. 2)

- Background `#050505`, Surface `#0C0C0C`, Elevated `#131313`, Border `rgba(255,255,255,.08)`
- Accent `#CBFF01` (used sparingly for emphasis + focus rings)
- Typography: **Space Grotesk** (display/UI) + **JetBrains Mono** (code/metrics), loaded via `<link>` in `__root.tsx`
- Fluid type scale, 8pt spacing rhythm, radius tokens (12/20/28), soft shadows, glass surfaces (`backdrop-blur` + 0.72 opacity), lime glow used sparingly
- Tokens defined in `src/styles.css` under `@theme` (dark-only theme; drop the shipped light `:root` variables)

## Homepage sections (in order, per PRD)

1. **Loader** — first-visit brand mark reveal (single 1.2s intro, then persists via sessionStorage)
2. **Nav** — sticky top bar, blur, links to in-page anchors, "Hire Me" CTA, "Resume" secondary; mobile hamburger → fullscreen overlay
3. **Hero** — pinned 100vh: name, headline "I build scalable software that performs.", role sub, dual CTAs, status pill ("Available for opportunities")
4. **Metrics strip** — animated counters (projects, LeetCode 180+, perf gains 40%, years)
5. **About** — split layout: portrait placeholder + narrative
6. **Experience / Timeline** — horizontal scroll on desktop, stacked on mobile (internship + roles)
7. **Projects showcase** — pinned scroll: 3–4 cards (multi-role e-commerce, perf project, etc.) with laptop mockup frame
8. **Architecture explorer** — split diagram + details panel (SVG system diagram, tabbed layers)
9. **Skills** — grouped grid (Frontend / Backend / DevOps / Tools) with mono chips
10. **Philosophy** — large-type quote block
11. **Achievements** — badge grid
12. **Services** — 3-column offering cards (freelance angle)
13. **Blogs** — 3 preview cards linking externally
14. **Contact** — headline, `mailto:` CTA, social links (GitHub, LinkedIn, LeetCode, X)
15. **Footer** — sitemap, socials, © AJ.DEV

## Motion system (GSAP + Framer)

Reusable utilities in `src/lib/motion/`:
- `useReveal` (fade+translate on scroll)
- `useCounter` (metrics)
- `useHorizontalScroll` (experience/projects pinning)
- `useMagnetic` (buttons)
- `useTextReveal` (word-by-word using manual splitting — no paid SplitText)
- `useParallax`
- Respect `prefers-reduced-motion` in every hook

Framer Motion for hover micro-interactions and page-level presence.

## Reusable components (`src/components/`)

`ui/` primitives: Button (primary/ghost/lime), Badge, Chip, Card (glass), SectionHeader, Metric, Container, Divider, StatusPill, IconLink, MagneticButton, GradientText, GlowRing.

`layout/`: Nav, MobileNav, Footer, Loader, Section, ScrollCue.

`sections/`: one file per homepage section listed above, composed into `src/routes/index.tsx`.

## Content

Placeholders drawn from PRD hints: React/TS/Next dev, backend exposure, real internship, 180+ LeetCode, e-commerce multi-role platform, 40% DB latency reduction. Editable in `src/content/portfolio.ts` (typed).

## SEO / head

`src/routes/index.tsx` gets a real `head()`: title "AJ.DEV — Software Engineer Portfolio", meta description, og/twitter tags, JSON-LD Person schema. `__root.tsx` cleared of "Lovable App" defaults.

## A11y & performance

- Semantic landmarks (`<header> <main> <section aria-labelledby> <footer>`), one `<h1>` (hero)
- Focus rings in lime, skip-to-content link, keyboard-nav for mobile menu, `aria-label` on icon buttons
- Lazy-mount heavy sections below the fold, `content-visibility: auto` on long sections
- Fluid images with explicit width/height to avoid CLS
- Only sitewide fonts preloaded

## Technical details

- Tailwind v4 tokens in `@theme` (colors, fonts, radii, shadows)
- GSAP: `gsap`, `@gsap/react` (useGSAP), ScrollTrigger — all free
- Framer Motion for micro-interactions
- New deps: `gsap`, `@gsap/react`, `framer-motion`, `lucide-react` (already likely present)
- No routing changes: replace `src/routes/index.tsx` placeholder; anchors handle in-page nav
- Update `src/routes/__root.tsx`: add `<link>` for Google Fonts (Space Grotesk + JetBrains Mono), fix meta defaults, add `lang="en"` (already there), add dark class on `<html>`
- `src/styles.css`: keep `@import "tailwindcss"`, replace theme colors to obsidian palette, add `--font-display`, `--font-mono` tokens, keep shadcn token bridge

## Out of scope for this pass (deferred to next turns)

- `/projects`, `/projects/$slug` deep case-study pages
- `/blog` route
- Testing suite (Vitest/Playwright)
- Extra docs (Architecture.md, guides) — will produce a strong README only
- Vercel-specific configs (Lovable hosting handles deploy)

## Files touched / created (approx)

- Edit: `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/styles.css`, `README.md`
- New: `src/content/portfolio.ts`, `src/lib/motion/*.ts` (7 hooks), `src/components/ui/*` (~10), `src/components/layout/*` (5), `src/components/sections/*` (~14), `src/hooks/useReducedMotion.ts`
