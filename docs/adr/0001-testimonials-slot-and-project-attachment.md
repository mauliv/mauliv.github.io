# ADR-0001: Testimonials slot and project attachment

Date: 2026-09-26 · Status: Accepted

## Context

The portfolio's proof surface needs endorsements, but quotes arrive from real colleagues
at unpredictable times. The site must therefore ship *before* any testimonial exists
without faking social proof (PRODUCT.md: "No fabricated content, ever"), and the
architecture review must not keep proposing to delete the machinery. A prior review did
exactly that: it classified the testimonials schema, page, and join as "fully-built shell
around an empty collection → DELETE", and the owner reversed it — they intend per-project
endorsements too (a referee's words about a specific system, on that system's page).

Two display surfaces exist and were drifting: `/testimonials` filtered with its own rule
(`!is_placeholder`) and its own card markup (`h-10` monogram, date shown); every one of
the 33 detail pages had a second join and a second card (`h-7` monogram, no date,
placeholder badge reachable). The attachment key is a hand-typed slug with no validation,
so a typo or rename would drop an endorsement silently.

## Decision

1. **The slot is permanent.** `/testimonials` exists as a permanent surface with an
   honest empty state until a real quote arrives. It is never removed and never filled
   with placeholders.
2. **Two surfaces, one rule.** A published testimonial renders on `/testimonials` *and*,
   when it carries `related_project_slug`, on that project's detail page. `is_placeholder
   !== true` is the single definition of "published" (module `src/lib/testimonials.ts`);
   placeholders render nowhere.
3. **The list links to the work.** On `/testimonials`, a project-attached endorsement
   shows a "For: <project title>" link to the project's page. The project's own page shows
   the endorsement without a self-link.
4. **Relations are guarded.** `related_project_slug` must resolve to an existing entry
   slug (slugs are globally unique: 33/33 verified). A bad reference fails `astro build`
   rather than vanishing at render time.
5. **Empty state is replaced, not stacked.** When the first real quote lands it replaces
   the empty state (owner decision, 2026-09).

## Consequences

- The per-project join is a **live feature, not dead scaffolding**. Future architecture
  reviews must not propose deleting `[slug]`-side testimonial rendering, the schema, or
  the empty state without re-opening this ADR.
- New content arrives via `website/TESTIMONIALS.md` (template outside the content folder,
  so it never becomes an entry).
- Adding a testimonial never requires code changes: one Markdown file with a valid slug.
- The slug-uniqueness assumption in (4) is load-bearing; if a future refactor introduces
  cross-collection slug collisions, this ADR's reference key must become `collection +
  slug`.
