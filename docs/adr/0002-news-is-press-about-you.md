# ADR-0002: News is press about the candidate, not evidence pills

Date: 2026-09-26 · Status: Accepted

## Context

The News page originally derived from `gatherEvidence()` filtering `external-press` pills
inside content entries. That blurred two different things:

- **Press coverage** — independent articles about the candidate and the work (UNY News,
  Kompas, FEB UNY, SDGs UNY). The article *headline* is the content, per the owner's
  reference style (teguh.co: headline first, publisher/date as metadata).
- **The candidate's own live surfaces** — the GDSC community page and the `@io.uny`
  Instagram channel. These are his work, not coverage of him, and they already live as
  evidence pills on their own entries (`gdsc-uny`, `international-office`).

One News list sourced from evidence pills implied "these sites featured me", which is true
for Kompas and false for his own Instagram channel.

## Decision

1. **News reads a dedicated `press` collection** (lean schema: title, publisher, date,
   language, url, summary, optional `related_project_slug`, `pending`). No detail route;
   page count unchanged.
2. **Own live surfaces stay as evidence pills on their entries** and leave the News list
   automatically — no data was deleted.
3. **Publications remains a separate page** sourced from `journal` evidence (academic
   output), never merged with press.
4. **Article headline leads the row**; publisher and date are metadata; each row links to
   the project it features (same `related_project_slug` relation as ADR-0001, validated by
   the shared `assertRelationsResolve` in `src/lib/relations.ts`).
5. **Unverifiable links render pending** (`pending: true`), never as live links: the two
   UNY News rows are pending because uny.ac.id was under maintenance on 2026-09-26.

## Consequences

- Future reviews must not re-merge press into evidence pills or drive News from
  `gatherEvidence()`.
- Adding press coverage = one Markdown file in `src/content/press/`; no code change.
- A future refactor that adds detail routes for press must update this ADR.
