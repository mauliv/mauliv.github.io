# Adding a testimonial

Drop a new `.md` file in `src/content/testimonials/` (any filename; the slug is the
file name). This folder is **inside** a directory that is read by the site build — the
template lives here, outside it, so the template never becomes an entry.

## Page-only testimonial (appears on `/testimonials` only)

```markdown
---
name: "Dr. Jane Doe"
initials: "JD"
role: "Supervisor"
company: "Universitas Negeri Yogyakarta"
quote: "Their exact words, verbatim."
date: "2026-09"
is_placeholder: false
---
```

## Project endorsement (appears on `/testimonials` AND on that project's page)

```markdown
---
name: "Dr. Jane Doe"
initials: "JD"
role: "Supervisor"
company: "Universitas Negeri Yogyakarta"
quote: "Their exact words, verbatim about the project."
related_project_slug: "pemilwa-evoting"
date: "2026-09"
is_placeholder: false
---
```

Rules (ADR-0001):

- `related_project_slug` must match an entry's `slug` exactly. A wrong slug **fails the
  build** — that is the check working, not a bug. Find slugs in `src/content/*/*.md`.
- `is_placeholder: false` is required for publication. Omitted/false-safe defaults hide
  the entry: `is_placeholder` defaults to `true`, and placeholders render nowhere.
- The `/testimonials` empty state disappears as soon as the first real quote lands
  (owner decision, 2026-09): quotes replace it, they do not stack beside it.
- No fabricated quotes, ever. Verbatim or not at all.
