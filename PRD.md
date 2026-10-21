# Product Requirements Document (PRD): Multi-Track Portfolio Website

**Subject:** Alifah Mauliddin Nur Ikhsan, S.T.  
**Document Status:** Approved — Guides "Plan" and "Build" Phases  
**Companion Documents:** `research/opencode/content-model.md`, `research/opencode/proposed-site-structure.md`, `research/opencode/evidence-inventory.md`  
**Date:** September 2026  

---

## 1. Product Overview & Goals

### 1.1 Problem Statement

Alifah's career spans five interlocking tracks that most portfolios flatten into one generic identity: production high-concurrency web systems, pedagogy-grounded EdTech/XR engineering, 5+ years of institutional operations under official Rector decrees, physical-layer networking roots, and multidisciplinary leadership. The portfolio must capture all of it without collapsing into an "everything bucket" or artificially truncating the institutional track to look like a conventional developer resume.

### 1.2 Product Goal

Build a **Multi-Track Systems Portfolio** (Architecture Option 2, approved) that presents three equal-weight career tracks with a proof-first verification system:

- **Track 1 — Production Web Systems:** Pemilwa E-Voting (Native PHP, CAS SSO, zero downtime), SIMOBY CRM (PHP Yii), MTQM Competition Portal (Laravel 7), IO UNY Gateway (Drupal 7).
- **Track 2 — EdTech/XR Engineering:** Plant Escape AR (Unity C#, Vuforia, 2 HKI copyrights, JATIKA paper), AR Kitchen (vocational culinary 3D module).
- **Track 3 — Institutional Operations:** 5+ years under *SK Rektor* appointments, immigration compliance (E-Visa/ITAS/SKTT), VIP delegation logistics, `@io.uny` digital growth.

Every claim on the site is directly verifiable through embedded evidence artifacts.

### 1.3 Target Audiences

| Audience | Primary Need | Landing Expectation |
| :--- | :--- | :--- |
| **Technical recruiters & backend leads** | Verify systems engineering claims fast | Track 1 dossiers + live system links + `/credentials` |
| **EdTech founders & product managers** | Pedagogical depth + mobile/AR execution proof | Track 2 case studies + HKI/JATIKA evidence pills |
| **Higher-Ed administrators & foundation directors** | Institutional trust, operational reliability | Track 3 dossiers + education/leadership verification hub |

### 1.4 Success Criteria

- All three tracks discoverable from the homepage within one interaction (track switcher).
- Every project, credential, and leadership entry carries at least one clickable Proof Pill.
- Zero client-side JavaScript except the track-filter island.
- Lighthouse Performance ≥ 95 on a fresh GitHub Pages deployment (Phase 5).
- Local `npm run dev` loop works before any remote hosting is configured (Phase 1).

---

## 2. Architecture & Hosting Strategy

| Layer | Decision | Rationale |
| :--- | :--- | :--- |
| **Framework** | Astro (Static Site Generation) | Maximum speed, zero JS by default, first-class Content Collections with Zod validation. |
| **Styling** | Tailwind CSS (typography-first config) | Clean "Palinuro" aesthetic: monospace headers, restrained palette, systems-log hierarchy. |
| **Hosting** | GitHub Pages at default `<username>.github.io` domain | 100% free, no custom domain renewal (`.id` domain is being retired). **Zero-cost constraint is a hard requirement.** |
| **CI/CD** | GitHub Actions (deploy on push to `main`) | Automated static build; configured **only in Phase 5** — local development and testing come first. |
| **Content** | Astro Content Collections + Markdown/MDX | Single source of truth mirrors `content-model.md` schemas; build-time validation catches schema drift. |

### 2.1 Development Sequencing Principle

**Local-first.** Phases 1–4 run entirely on the local machine (`npm run dev`, local builds, local previews). GitHub repository configuration, Actions workflow, and first remote deployment are deferred to Phase 5.

---

## 3. Core Features & UX

### 3.1 Proof/Evidence Pills (Teguh.co Style)

Every card, dossier, and credential row renders clickable inline "Proof Pill" buttons:

| Type | Target | Visual Cue |
| :--- | :--- | :--- |
| `internal-pdf` | Sanitized PDF in `/public/docs/` | Gray border + `[PDF]` prefix |
| `journal` | Peer-reviewed DOI (JATIKA) | Emerald border + `[DOI]` |
| `hki` | Kemenkumham copyright certificates | Amber border + `[HKI]` |
| `external-press` | Verified news/press (UNY news, etc.) | Blue border + `[PRESS]` |
| `video` | Demo walkthroughs (YouTube) | Purple border + `[DEMO]` |
| `live` | Production systems (`pemilwa.uny.ac.id`, …) | Teal border + pulsing dot |
| `repository` | Public sanitized GitHub source | Zinc border + `[CODE]` |

Behavior: external links open in a new tab with `rel="noopener noreferrer"`; pills with `status: needs-confirmation` render visually disabled and non-clickable until evidence lands.

### 3.2 Multi-Track Homepage Switcher

- Filters: `[All Dossiers] [Track 1: Web & Systems] [Track 2: Immersive EdTech / XR] [Track 3: Institutional Operations]`.
- **Implementation: tiny progressive-enhancement JS island** — all cards render in the static HTML (fully readable with JS disabled); the island only adds instant client-side filtering for a slicker UX. Sits on the Astro zero-JS baseline as an explicit, scoped exception.
- Page also includes: masthead bio, "Impact by the Numbers" proof block, and a Field Notes teaser section.

### 3.3 Dedicated `/credentials` Verification Hub

Four fixed sections per `proposed-site-structure.md` §3:

- **A. Education & Academic Heritage** — S.T. UNY (GPA 3.77, Yudisium July 31, 2026, IKIP pedagogical context), SMK Negeri 3 Yogyakarta TKJ (85.3, XigmaNAS capstone).
- **B. Leadership & Impact** — GDSC Chapter Lead, UKM RESTek Chairman (KMHE 2022 1st Place National), PHP2D grant (>IDR 30M).
- **C. Publications & IP** — JATIKA paper (DOI), 2 HKI copyrights (`000377191`, `000377182`), WebQual 4.0 thesis.
- **D. Industry Certifications & Tests** — BNSP Network Administrator Muda, Bangkit GCP 2023, EF SET C2 (71/100), TOEIC 925, KMMI Scrum.

Every row carries Proof Pills; items marked `[NEEDS CONFIRMATION]` render with a visible pending badge instead of a claim.

### 3.4 Content Management

- Astro Content Collections under `src/content/` with `src/content/config.ts` defining **six collections** mirroring `content-model.md`: `systems`, `edtech-xr`, `operations`, `leadership`, `credentials`, `writings`.
- **Strict Zod validation** for every global frontmatter field: `id`, `title`, `slug`, `role`, `period`, `tech_stack`, `metrics`, `live_url`, `archive_status`, `provenance_source`, `privacy_level`, `epistemic_status`, and the `evidence` array (type enum, label, url, `is_internal`, status enum).
- Build fails on schema violations — fabricated or malformed frontmatter never ships.
- Seed content derives only from `cv.md`, `research/opencode/content-model.md`, and verified entries in `content/career-archive.md`.

### 3.5 Route Map

```
/                           # Homepage: masthead, track switcher island, dossier grid, impact block
├── /systems/:slug          # Production Web Systems case studies
├── /edtech/:slug           # EdTech / XR case studies
├── /ops/:slug              # Institutional Operations dossiers
├── /credentials            # Verification hub (sections A–D)
├── /writing/:slug          # Field notes / post-mortems (Phase 4 optional, seeded Phase 2)
└── /timeline               # Master career ledger (Phase 5 polish)
```

### 3.6 Privacy & Content Guardrails (binding on all phases)

- No student PII, no campus IPs/credentials, no personal phone number (`085713499514`).
- All PDFs in `/public/docs/` must be sanitized excerpts per `research/opencode/evidence-inventory.md`.
- Unverified items stay tagged `[NEEDS CONFIRMATION]` — never presented as confirmed.
- No new factual claims beyond `cv.md` / `content-model.md` / `career-archive.md`.

---

## 4. Implementation Roadmap (Phases for OpenCode)

Each phase runs through explicit **Plan** (design review, no code) and **Build** (code + local verification) steps. A phase is complete only when its exit criteria pass locally.

### Phase 1: Local Project Scaffolding (Plan → Build)

*Focus: purely local development setup. No GitHub configuration of any kind.*

- **Plan:** Decide directory layout (`website/` as standalone package or workspace), Astro starter choice, Tailwind integration method, folder structure for Content Collections and `/public/docs/`.
- **Build:** `npm create astro` scaffold in `website/`; add Tailwind with typography-focused config (Palinuro palette: monospace headers, restrained neutrals); confirm `npm run dev` serves a default page and `npm run build` + `npm run preview` succeed locally.
- **Exit criteria:** Local dev server runs; build + preview pass; **zero CI/CD, repo, or remote-hosting files exist yet.**

### Phase 2: Data Layer & Content Seeding (Plan → Build)

- **Plan:** Translate `content-model.md` schemas into collection config design; list initial seed entries per collection from `cv.md`.
- **Build:** Create `src/content/config.ts` with strict Zod schemas for all six collections (including the `evidence` array); draft core Markdown entries — Track 1 (Pemilwa, SIMOBY, MTQM, IO Gateway), Track 2 (Plant Escape, AR Kitchen), Track 3 (International Office Operations), plus credentials rows (degree, BNSP, EF SET, TOEIC, Bangkit); place placeholder paths for `/public/docs/`.
- **Exit criteria:** `npm run build` validates all seed entries against schemas; intentional schema violation fails the build (validation test).

### Phase 3: Core UI Components (Plan → Build)

- **Plan:** Component inventory + visual specs (pill variants by evidence type, card anatomy, layout shell).
- **Build:** `EvidencePill` component (7 type variants, internal vs. external link handling, `needs-confirmation` disabled state); `ProjectCard` (title, track tag, metrics, evidence pills row); base `Layout` shell (masthead, nav, footer, typography system).
- **Exit criteria:** Components render on a local test page with real seed data; pills deep-link correctly to `/docs/...` and external URLs.

### Phase 4: Page Assembly (Plan → Build)

- **Plan:** Page wireframes for homepage, dynamic dossier routes, `/credentials`.
- **Build:** Homepage assembly with the **track-switcher progressive-enhancement island** (static fallback: all cards visible without JS); dynamic `/systems/[slug]`, `/edtech/[slug]`, `/ops/[slug]` routes from Content Collections; `/credentials` page with sections A–D; basic `/writing/[slug]` and `/timeline` shells.
- **Exit criteria:** Full local walkthrough — every seeded entry reachable; track filter works with JS, page remains complete without JS.

### Phase 5: Polish, CI/CD & Deployment (Plan → Build)

- **Plan:** Design polish checklist (spacing, accessibility, dark palette, responsive checks) and deployment configuration.
- **Build:** Visual/accessibility pass (keyboard nav, contrast, mobile breakpoints); local Lighthouse audit; sanitize and copy evidence PDFs into `website/public/docs/` per `evidence-inventory.md`; configure `base` for `<username>.github.io`; **create GitHub Actions workflow, push repo, execute first deployment.**
- **Exit criteria:** Site live at `https://<username>.github.io/...`; Lighthouse Performance ≥ 95; all internal proof pills resolve over HTTPS.

---

## 5. Out of Scope

- Any backend, database, or server runtime.
- Custom domain or paid services (100% free stack is mandatory).
- Production analytics (optional lightweight, privacy-respecting analytics only if requested later).
- CMS or admin UI — content ships via Markdown commits.
- Career-ops application-pipeline integration (separate track, not this product).
- Content beyond seeded phase scope until Phase 2+ reviews pass.
