# Domain Glossary — Portfolio Website

The vocabulary of this site's content model. Use these names for seams and modules;
architecture vocabulary comes from `codebase-design` (module, interface, depth, seam,
adapter, leverage, locality).

| Term | Meaning |
| :--- | :--- |
| **Entry** | One unit of career content: a Markdown file with validated frontmatter in `src/content/<collection>/`. Referenced by its `slug` (globally unique: 33/33). |
| **Collection** | A group of entries sharing one schema: `systems`, `operations`, `credentials`, `writings`, `testimonials`. Content families *within* a collection are distinguished by shape (facet), not by folder. |
| **Facet** | Which shape an entry is (web platform, AR build, exchange program, dossier, credential, leadership, endorsement) and therefore which detail blocks render for it. Defined once, beside the schemas. |
| **Evidence pill** | A single proof attached to an entry (`type`, `label`, `url`, `status`). Types: internal-pdf, journal, hki, external-press, video, live, repository. |
| **Status** | An evidence pill's truth state: `available` (clickable), `needs-confirmation` (rendered disabled — the claim may be real, the scan is missing), `restricted` (deliberately withheld). |
| **Epistemic status** | An *entry's* truth tier: `verified-fact`, `interpretation`, `needs-confirmation`. Content-only today; surfacing it is Candidate 6. |
| **Provenance** | Where a claim comes from (`provenance_source`, `metrics[].provenance` — typically `career-archive.md:<line>` or `user-stated <date>`). |
| **Work page** | `/systems` (URL segment `work`) — the index of built things: Web platforms + EdTech & XR. |
| **Competency section** | One of the homepage's three argument blocks: IT, Global Mobility & Delegations, International Office. |
| **The slot** | `/testimonials` as a permanent placeholder surface (ADR-0001): the page exists and shows an open, honest empty state until a real quote arrives; never fake social proof, never removed. |
| **Endorsement (per-project)** | A testimonial that additionally carries `related_project_slug` and renders both on its project page and in the Testimonials list with a "For:" link (ADR-0001). |
| **Published (testimonial)** | `is_placeholder !== true`. One rule, one place; placeholders never render anywhere. |
| **Parent page** | The index page a detail URL's first segment points at (`routes.ts` `parentLabels`): segment = page title = breadcrumb label. |
| **Press article** | An article *about* the candidate (`src/content/press/`): headline, publisher, date, URL, optional `related_project_slug`. Rendersonly on `/news` (no detail route, not in `detailCollections`). Decision ADR-0002: News = press coverage of the work; the candidate's own live surfaces (GDSC page, @io.uny) remain evidence pills on their own entries instead. |
