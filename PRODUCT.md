# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

Static site: Astro-generated HTML, no server runtime, hosted on GitHub Pages at the default
`<username>.github.io` domain (custom domains are out of scope while the 100%-free
constraint holds).

## Users

**Primary (#1): technical recruiters.** A recruiter or engineering lead scanning for systems
depth arrives from search, a referral, or a link in an application. Their job is to decide
fast whether the claims survive scrutiny. The site is built for their verification instinct:
proof is one click away, and anything unverified is visibly marked rather than quietly
asserted.

**Secondary: EdTech founders and product managers.** Evaluating whether the candidate can
build and evaluate real learning technology — AR, instructional design, classroom-tested
outcomes.

**Secondary: higher-education administrators and foundation directors.** Verifying formal
institutional standing: degrees, national competency licensing, rector-decree operations,
international affairs and delegation experience.

## Product Purpose

A proof-first, independently verifiable multi-track portfolio. It exists to make one argument
well: that software engineering, hardware and infrastructure, and institutional operations
are one continuous practice, not three disconnected CVs.

Success means a visitor can pick any claim on the site, open its primary evidence, and either
verify it or see plainly that it is still pending — and can then act (email, LinkedIn, GitHub).

## Positioning

The positioning line is fixed: **"Multidisciplinary IT Engineer — Web, EdTech & Campus
Operations."**

The mechanism a neighbouring portfolio could not truthfully copy is the **evidence system**:
every claim ships with an attached proof artifact, and every claim without one is rendered in
an explicit pending state (disabled, dashed, unclickable) rather than dropped or faked. The
underlying story is a hybrid operator profile — production web and XR engineering
(election systems, Unity/Vuforia learning tools), physical networking foundations, and
five-plus years of formal campus operations under university rector decrees, with UNY's
teacher-training heritage as the through-line that makes the pedagogy deliberate rather than
incidental.

## Operating Context

- **Local development:** `npm run dev` serves the site at `http://localhost:4321` with hot
  reload. `npm run build` produces the static bundle; `npm run preview` serves that bundle
  locally exactly as production will.
- **Content workflow:** all content is Markdown with frontmatter in `src/content/`, split
  across eight collections, validated at build time by strict Zod schemas. Editing a Markdown
  file and saving is the entire publish cycle; there is no CMS and no admin UI.
- **Static assets:** `public/docs/` (evidence PDFs), `public/logos/` (institution marks),
  `public/flags/` (country flag SVGs), `public/fonts/` (bundled Noto Sans Javanese subset).
- **Deployment:** GitHub Pages via the checked-in workflow at
  `website/.github/workflows/deploy.yml`, triggered on push to `main`.
- **Cost constraint:** the stack is deliberately 100% free. No paid domain, no paid hosting,
  no paid services. Any future proposal that introduces a cost is a change to this product's
  operating context, not a detail.
- **Version control state:** the `website/` directory is **not yet a git repository** and has
  never been initialised, committed, or pushed. The GitHub Pages URL in the Astro config is a
  target, not a live deployment — the site is not published today.
- **Repository boundary:** `website/` is the portfolio application. The surrounding
  `career-ops/` directory is a separate, multi-agent system repository and is out of scope
  for this product's work.

## Capabilities and Constraints

- **Eight content collections:** `systems`, `edtech-xr`, `operations`, `leadership`,
  `credentials`, `mobility`, `writings`, `testimonials`.
- **Strict schema validation:** every entry is checked at build time; unknown or malformed
  frontmatter fails the build. A page cannot ship with fabricated structure.
- **Evidence status semantics (binding):** each proof link carries
  `available`, `needs-confirmation`, or `restricted`. Entries with unretrieved physical
  documents stay `needs-confirmation` and render disabled **until the user supplies the
  actual file**. Status is never flipped to make the site look more complete.
- **Privacy rules (binding):** no student or third-party PII (no passport numbers, national
  ID numbers, visa records, or contact details of people handled at the International
  Office); no campus network topology, internal hostnames, or credentials; the personal
  phone number stays off the public site. Published PDFs are sanitised excerpts.
- **No fabricated content (binding):** no invented metrics, testimonials, customers, press,
  or credential numbers. Where a figure or document is missing, the site says so.
- **Terminology that must stay accurate:** the PKM-RSH research grant is recorded as *secured
  funding* (~IDR 15,000,000, user-stated 2026-09); the PIMNAS 35 finalist status is a
  separate claim carried from the CV. These must not be merged or conflated.
- **Zero-JS baseline:** the site ships no client-side JavaScript except one pre-paint theme
  script and one small navigation disclosure. Interactive behaviour must be progressive
  enhancement over a fully readable no-JS page.

## Brand Commitments

- **Name and title:** "Alifah Mauliddin Nur Ikhsan, S.T." — the `S.T.` suffix is the legally
  correct credential and is not optional.
- **Proof-first ethos:** transparency is the brand, not a feature. A visible pending state is
  preferred over a quiet gap.
- **Binding visual references (as named by the user):**
  - **palinuro.me** — minimalist systems-engineering restraint; the site should read as a
    technical record, not a marketing page.
  - **teguh.co** — transparent public-impact advocacy; proof of effect and honest status are
  part of the presentation, not footnotes.
- The full visual world (palette, type system, component language) is **not** recorded here —
  it belongs in `DESIGN.md`, which does not yet exist.

## Evidence on Hand

Verified assets currently in the repository:

- **35 content entries** across the eight collections (15 credentials, 5 systems, 5
  leadership, 4 mobility, 2 edtech-xr, 2 testimonials, 1 operations, 1 writings), each with
  provenance back to a source-of-truth document.
- **8 evidence PDFs** staged in `public/docs/` (system dossiers for four production systems,
  two operations folios, one EdTech dossier, one global mobility folio).
- **11 institution logos** and **6 country flag SVGs** in `public/logos/` and `public/flags/`.
- **1 bundled font** (Noto Sans Javanese subset) in `public/fonts/`.
- 44 pages build cleanly from static input.

**Known absences. Future work must never fabricate any of these:**

- No real testimonial exists. The two `testimonials` entries are structurally marked
  `is_placeholder: true` and render a visible PLACEHOLDER badge. They are honest interim
  scaffolding, not endorsements, and must not be presented as real.
- No institution logo exists for: Pukyong National University, Universiti Tun Hussein Onn
  Malaysia, Dicoding, GDSC, SMK Negeri 3 Yogyakarta, or UKM RESTek. Entries for these use the
  layout's fallback chip. (A Malaysian national/KPT arms image was found and deliberately
  rejected as the wrong institution mark.)
- No certificate scans exist for any credential, licence, or IP registration. Nearly all
  credential proof links are `needs-confirmation`.
- The sequential SK Rektor decree numbers for 2021–2026 are unretrieved.
- No live press URL exists for the KMHE 2022 coverage; the candidate URL 404s and its pill is
  disabled.
- No profile photograph; the masthead shows a placeholder avatar.
- The site is not deployed and has no public URL.

## Product Principles

1. **Verifiable or hidden.** Every claim carries a proof link or an explicit pending state.
   There is no third option.
2. **Honesty over polish.** A labelled placeholder, a disabled pill, or a stated absence is
   the correct output when evidence is missing. Never simulate completeness.
3. **Multi-track without flattening.** Web, XR, infrastructure, operations, and leadership are
   shown as one career, without erasing any track or diluting the rest.
4. **Free by default, on purpose.** The product stays on 100%-free infrastructure; cost is a
   product decision, not an implementation detail.
5. **No PII, ever.** Privacy constraints are absolute, not aspirational, and extend to every
   future addition.

## Accessibility & Inclusion

WCAG-aligned is a **working standard for this product, not a conformance or certification
claim** — this site does not claim WCAG conformance at any level, and future work must not
add such a claim without a real audit behind it.

Committed and currently implemented:

- Keyboard paths exist on every interactive element, with visible focus rings.
- Interactive targets: primary navigation, footer links, breadcrumbs, and the theme
  toggle meet 44px in their smallest dimension; inline evidence chips meet the
  WCAG 2.5.8 minimum of 24px. (Earlier drafts overstated this — measured and corrected
  2026-09-24.)
- Semantic landmarks and names: labelled navs, `aria-current="page"` on breadcrumbs, labelled
  icon-only controls, `aria-label` on the breadcrumb trail.
- Country flags are **SVGs, never emoji** — emoji flags render as ambiguous letter codes on
  Windows, which is a majority recruiter platform.
- The Javanese script (`\uA997\uA9AE`) renders on every device via a bundled font subset; it
  must never depend on a locally installed script font.
- Full dark mode with a persisted, pre-paint-resolved theme (no flash of wrong theme).
- Language and text contrast chosen to stay legible in both themes.

Open items — recorded as undecided, not as requirements:

- No formal accessibility audit has been performed, and no target conformance level has been
  agreed.
