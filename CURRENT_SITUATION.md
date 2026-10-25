# Current Website Situation & Architecture Status

**Document Version:** 1.1.0  
**Generated Date:** October 26, 2026  
**Repository:** `career-ops/website`  
**Baseline Compared Against:** `website_backup19oct26` (October 19, 2026 backup)  
**Site Title:** Alifah Mauliddin Nur Ikhsan, S.T. — Portfolio  
**Positioning Statement:** *"Multidisciplinary IT Engineer — Web, EdTech & Campus Operations"*  
**Live Production URL:** `https://mauliv.github.io` (transitioned from `maulidinalif.github.io`)  
**Live Build Status:** ✅ **59 static pages generated** (Exit code `0` in ~2.2s)

---

## 1. Executive Summary

This website is a proof-first, independently verifiable multi-track engineering portfolio for **Alifah Mauliddin Nur Ikhsan, S.T.** It connects three core operational domains:
1. **High-concurrency web systems:** Zero-downtime student election systems (Pemilwa) with pessimistic row-locking and campus CRMs.
2. **Interactive XR & EdTech:** Unity/Vuforia augmented reality learning tools backed by formal intellectual property (HKI) patents and peer-reviewed journal publications.
3. **Higher-education campus operations:** Over five years of rector-decreed operational management covering Indonesian student immigration, international mobility, and virtual learning environment (Moodle VLE) infrastructure at Universitas Negeri Yogyakarta (UNY).

The website enforces an **epistemic evidence rule**: every professional claim is anchored by direct primary proof (PDF dossiers, live production links, journal DOIs, government HKI registries, or national media coverage). Where verification is pending, items are visibly designated as `needs-confirmation` rather than omitted or obscured.

---

## 2. Technical Stack & Evolution from October 19 Backup

A comparison against `website_backup19oct26` reveals a transformative architectural and content evolution:

| Layer | Previous State (`website_backup19oct26`) | Current State (`website`) | Key Improvements / Additions |
| :--- | :--- | :--- | :--- |
| **Domain** | `maulidinalif.github.io` | **`mauliv.github.io`** | Clean, consolidated username deployment; updated in `astro.config.mjs` and `.github/workflows/deploy.yml`. |
| **Framework** | Astro 5.x | **Astro 5.x + Custom Rehype** | Added `rehypeTableWrap` AST plugin to auto-wrap tables into responsive `.table-wrapper` containers. |
| **CSS & Styles** | Tailwind 4 + basic markdown CSS | **Tailwind 4 + Table & Code System** | Added custom scrollbars, zebra striping, dark-mode table borders, and `<pre><code>` excerpt containers. |
| **Components** | 6 basic components | **8 components (+2 new)** | Added `ProjectIcon.astro` (centralized SVG/logo resolver) and `TechStack.astro` (visual technology badges). |
| **Static Pages** | 44 static pages | **59 static pages (+15)** | Expanded to 59 static routes including new event dossiers, `/it`, `/social-media`, and `/work/*` 301 redirects. |
| **Collections** | 5 collections | **6 collections (+ Flagship Events)** | Added Flagship International Events schema union in `operations`; multi-slug relations in `press`. |
| **Primary Proof** | Sparse PDF links | **15+ Primary PDF Dossiers** | Uploaded 6 Rector decrees (2021–2026), student employment regulation, PHP2D grant reports, and SIMOBY manuals. |
| **Media Assets** | Minimal placeholder graphics | **70+ Photos & UI Captures** | Comprehensive visual evidence across `patilo/`, `sakura-science/`, `io-gateway/`, `mtqm/`, and `plant-escape/`. |
| **Brand Logos** | Basic institution logos | **50+ Tech & Brand Badges** | Full suite of technology SVGs (Mikrotik, Unity, GCP, Laravel, etc.) with dark-mode inversion. |
| **Edge Config** | None | **`robots.txt` + `_headers`** | Standardized production crawler indexing and HTTP security/caching headers. |

---

## 3. Information Architecture & Route Topology (59 Pages)

The static bundle compiles into **59 static HTML pages** with clean separation between hub indices, detail narratives, and backward-compatible redirects.

### 3.1 Primary Index Pages & Surfaces (11 Surfaces)

| URL Route | Page Source | Purpose & Displayed Content | Page Count |
| :--- | :--- | :--- | :---: |
| `/` | `src/pages/index.astro` | Masthead, bio, three core competency argument blocks (IT, International Mobility, Credentials), impact grid (5 primary metrics), and site index navigation. | 1 |
| `/it` | `src/pages/it.astro` | Flagship IT systems grouped into Web Platforms and EdTech & XR (replaces `/work`). | 1 |
| `/international` | `src/pages/international.astro` | Academic exchange programs (Japan, S. Korea, Vietnam, Malaysia), diplomatic delegation hosting, and international office operations. | 1 |
| `/credentials` | `src/pages/credentials.astro` | Academic heritage (S.T., SMK), leadership records, intellectual property, and industry certifications (BNSP, Bangkit GCP, EF SET C2, TOEIC 925). | 1 |
| `/networks` | `src/pages/networks.astro` | Network engineering, Mikrotik infrastructure, Wi-Fi coverage, and campus VLE server support. | 1 |
| `/certificates` | `src/pages/certificates.astro` | Tabular ledger of 42+ verified certifications, credentials, and achievement licenses. | 1 |
| `/news` | `src/pages/news.astro` | Press coverage and external news articles reporting on candidate achievements (13 articles). | 1 |
| `/publications` | `src/pages/publications.astro` | Peer-reviewed academic publications and registered intellectual property rights. | 1 |
| `/writing` | `src/pages/writing.astro` | Field notes, system post-mortems, and architectural reflections. | 1 |
| `/testimonials` | `src/pages/testimonials.astro` | Honest placeholder slot for third-party endorsements (ADR-0001). | 1 |
| `/contact` | `src/pages/contact.astro` | Direct contact channels, PGP/email, and verified profiles. | 1 |
| `/social-media` | `src/pages/social-media.astro` | Directory of verified external profiles (GitHub, LinkedIn, Instagram, etc.). | 1 |

### 3.2 Legacy Redirection & Dynamic Routes

- **`/work` & `/work/[slug]` (8 redirects):** 301 static redirects permanently forwarding legacy `/work` traffic to `/it` and `/it/[slug]`.
- **`/[collection]/[slug]` (39 detail routes):** Narrative case studies with technical architecture, evidence pills, and metric callouts:
  - `/it/[slug]` (7 projects: `pemilwa-evoting`, `simoby-crm`, `mtqm-competition-portal`, `io-uny-homepage`, `kerupuk-patilo-msme`, `plant-escape-ar`, `ar-kitchen`)
  - `/international/[slug]` (10 operations dossiers)
  - `/credentials/[slug]` (21 credential & leadership profiles)
  - `/writing/[slug]` (1 architectural post-mortem)

---

## 4. Content Collections Inventory & Delta Analysis

```
src/content/
├── credentials/   (21 entries) -> Education, licenses, leadership, certifications
├── operations/    (10 entries) -> International office dossiers, delegations, exchange programs
├── press/         (13 entries) -> Verified external press and institutional news
├── systems/       (7 entries)  -> Web platforms and EdTech AR software
├── testimonials/  (0 entries)  -> Active endorsement slot (managed via lib/testimonials.ts)
└── writings/      (1 entry)    -> Architectural essays and post-mortems
```

### Detailed Content Changes (Current vs. October 19 Backup):

1. **`systems` (7 entries):**
   - 🔴 **Retired:** `srgate.md` (Student Affairs gateway stub — removed due to uncertain contribution attribution).
   - 🟢 **Added:** `patilo-web.md` (`kerupuk-patilo-msme`) — Lead Systems Architect & Web Developer for the Kemendikbudristek PHP2D national grant. Backed by 25-page R&D report (`laporan-ppm-php2d-alif-patilo.pdf`), domain invoices, and UI captures.
   - 🔵 **Enhanced:** `pemilwa.md`, `simoby.md`, `mtqm.md`, `io-gateway.md`, `plant-escape.md`, `ar-kitchen.md` enriched with project logos, tech badges, and PDF user manuals.

2. **`operations` (10 entries):**
   - 🟢 **Added (5 Flagship Event Dossiers):**
     - `gcf-2024.md` — 11th Global Culture Festival (Coordination of 100+ international delegates).
     - `gloship-2025.md` — Global Partnership Forum 2025.
     - `incotepd-2024.md` — InCoTEPD 2024 with SEAMEO QITEP.
     - `etss-2024.md` — EcoEduTech Doctoral Summer School.
     - `aasvet-2023.md` — 19th AASVET International Conference.
   - 🔵 **Enhanced:**
     - `international-office.md` — Attached 6 official Rector Decrees (`sk-appointment-2021.pdf` to `2026.pdf`) and student employment regulation (`sk-mahasiswa-kerja-regulation-2023.pdf`).
     - `pknu-iss-2024.md` — Expanded narrative (+242 lines), coursework syllabus, and schedule image asset.
     - `sakura-science-2018.md` — Upgraded with Nobel Laureate Prof. Takaaki Kajita lecture photo and institutional Facebook announcement.

3. **`press` (13 entries):**
   - Expanded from 5 seed articles to 13 verified institutional and national press features:
     - National Press: Kompas (KMHE 2022).
     - Japanese Official Reports: JST Headquarters Closing Ceremony Report, Shibaura Institute of Technology Nobel Lecture Report.
     - Secondary School Press: SMK Negeri 3 Yogyakarta Official Post (Sakura Science Selection), SMKN 3 OSIS Inauguration.
     - UNY Official Coverage: UNY News (KMHE, GCF, GLOSHIP, MTQM, Patilo PHP2D), SDGs UNY, FEB UNY, UNY IO.

4. **`credentials` (21 entries):**
   - Added `'internship'` to schema for `privyid-intern.md`.
   - Sanitized layout and standardized badge alignments in `CredentialRow.astro`.

---

## 5. Architectural Integrity & Build Guards

1. **`assertRelationsResolve()` (`src/lib/relations.ts`):**
   - Validates all `related_project_slug` and `related_project_slugs` across `press` and `testimonials` at build time. Throws a hard error during `astro build` if any referenced project slug does not resolve.
2. **`certificatesRows()` (`src/lib/evidence-index.ts`):**
   - Single predicate deriving certificate counts across `/` and `/certificates`, eliminating count drift.
3. **`rehypeTableWrap` (`astro.config.mjs`):**
   - Wraps all markdown tables into scrollable `.table-wrapper` containers, preventing horizontal layout breakage on mobile.

---

## 6. Current Git Working Tree & Uncommitted State

- **Branch:** `main`
- **Latest Commit:** `aec9b57` (*"feat: update PKNU & SSHP dossiers, sanitize credentials, and refine dark mode logo styling"*)
- **Pending Changes (Phase 28):**
  - `src/content/operations/sakura-science-2018.md` (modified: added FB announcement link and `<figure>` markup)
  - `public/images/sakura-science/fb-smkn3-announcement.jpg` (untracked: official school banner archive)
  - `src/content/press/smkn3-pertukaran-pelajar-jepang-2018.md` (untracked: new press article)

---

## 7. Audit Implementation Status (Phase 29 Complete)

All findings from **Antislop Audit-001** (`antislop-audit-001-2026-10-23.md`), **Visual Audit** (`FIXES.md`), and **Differential Review** have been implemented and verified in the static build:

| Audit ID | Category | Issue Description | Target File | Status |
| :---: | :---: | :--- | :--- | :---: |
| **F-01** | Antislop | **Remove `animate-ping` on skill highlight dots** (enforce MOTION dial 1) | `TechStack.astro` | ✅ Fixed |
| **F-02** | Antislop | **Enforce `is_placeholder !== true` guard** (guarantee 0 fake quotes) | `testimonials.ts` / Card | ✅ Fixed |
| **V-01** | Visual | **Mobile nav wraps into 2 rows on 390px** (single-row refactor) | `Layout.astro` | ✅ Fixed |
| **F-03** | Antislop | **Hero slideshow reduced-motion explicit static reset** | `index.astro` | ✅ Fixed |
| **F-04** | Antislop | **TechStack tab buttons lack `aria-controls` & `role="tabpanel"`** | `TechStack.astro` | ✅ Fixed |
| **F-05** | Antislop | **Disabled pills not keyboard-focusable or screen-reader announced** | `EvidencePill.astro` | ✅ Fixed |
| **V-02** | Visual | **Work/IT order: prioritize live Pemilwa first** | `it.astro` | ✅ Fixed |
| **V-03** | Visual | **Dark card border contrast (`dark:border-neutral-700`)** | `ProjectCard.astro` | ✅ Fixed |
| **V-04** | Visual | **Languages section placement on `/credentials`** (move to bottom) | `credentials.astro` | ✅ Fixed |
| **V-05** | Visual | **Screenshots in markdown bodies** (Simoby flowchart, AR Kitchen eval) | Content `.md` | ✅ Fixed |
| **F-06** | Antislop | **`.markdown` prose line length exceeds 80ch** (constrain to 65ch) | `global.css` | ✅ Fixed |
| **F-07** | Antislop | **TechStack JSDoc leads with template URL instead of intent** | `TechStack.astro` | ✅ Fixed |
| **F-08** | Antislop | **`<details>` nav lacks Escape listener and secondary label** | `Layout.astro` | ✅ Fixed |
| **V-06** | Visual | **Testimonials warm invitation copy** | `testimonials.astro` | ✅ Fixed |
| **V-07** | Visual | **`(pending)` badge on `needs-confirmation` pills** | `EvidencePill.astro` | ✅ Fixed |
| **V-08** | Visual | **Per-page meta descriptions for social sharing** | Index pages | ✅ Verified |
| **H-02** | Hygiene | **Preserve empty collection directory with `.gitkeep`** | `testimonials/` | ✅ Fixed |
