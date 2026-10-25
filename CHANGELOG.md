# Website Implementation Changelog

This changelog tracks frontend development, UI components, Astro configuration,
and GitHub Pages deployment. Career content research is tracked in `research/opencode/CHANGELOG.md`.

## Entries

### 2026-10-26 (Phase 29 — Antislop Audit & Visual Polish Implementation)

- **Antislop F-01 (`TechStack.astro`):** removed `animate-ping` from skill highlight dots; enforced MOTION dial 1 (calm static amber dot).
- **Antislop F-02 (`testimonials.ts` & `TestimonialCard.astro`):** formalized `isPublished` check (`is_placeholder !== true`) with build-time guard in `TestimonialCard.astro`.
- **Visual V-01 (`Layout.astro`):** single-row mobile navigation on <=390px viewports with `hidden md:inline-flex` on text links and accessible Index dropdown.
- **Antislop F-03 (`index.astro`):** explicit `animation: none !important; opacity: 1 !important; transform: scale(1) !important;` on `.pemilwa-dot-1` under `prefers-reduced-motion`.
- **Antislop F-04 (`TechStack.astro`):** added `aria-controls="skills-grid"`, unique tab IDs, and `role="tabpanel"` on skills grid container with dynamic `aria-labelledby` updating on tab change.
- **Antislop F-05 & Visual V-07 (`EvidencePill.astro`):** disabled pills made keyboard-focusable (`tabindex="0"`), added `<span class="sr-only">Pending verification: </span>`, and appended visual `(pending)` badge.
- **Visual V-02 (`it.astro`):** prioritized live Pemilwa e-voting platform first, followed by Simoby CRM, in Web Platforms.
- **Visual V-03 (`ProjectCard.astro`, `index.astro`, `contact.astro`, `social-media.astro`):** elevated dark mode card border contrast (`dark:border-neutral-700`).
- **Visual V-04 (`credentials.astro`):** moved Languages block from subtitle to bottom beneath Certifications with proper section heading.
- **Visual V-05 (`simoby.md`, `ar-kitchen.md`):** embedded workflow flowchart in Simoby and evaluation feedback screen in AR Kitchen.
- **Antislop F-06 (`global.css`):** added `max-width: 65ch` to `.markdown` prose for comfortable reading measure.
- **Antislop F-07 (`TechStack.astro`):** rewritten JSDoc header to lead with architectural purpose instead of template URL.
- **Antislop F-08 (`Layout.astro`):** added `aria-label="Secondary navigation"` to `<details>` dropdown and `Escape` key listener to close menu.
- **Visual V-06 (`testimonials.astro`):** updated empty state text into a warm, open invitation for references.
- **Icon alignment (`it.astro`):** updated IT Support & Networks section icon from `terminal` to `networks` to match the network topology icon on `/networks` and in site navigation.
- **Hygiene H-02 (`src/content/testimonials/.gitkeep`):** added `.gitkeep` preserving empty collection directory per ADR-0001.
- **Verified:** clean `npm run build` exit 0 (59 static pages).

### 2026-10-26 (Phase 28 — SMKN 3 Press Integration & SSHP 2018 Evidence)

- **New press entry (`src/content/press/smkn3-pertukaran-pelajar-jepang-2018.md`):** integrated verified institutional announcement from SMK Negeri 3 Yogyakarta (`@smkn3jogja`) celebrating Alifah's selection for the Sakura Science High School Program in Japan. Bi-directionally linked to `sakura-science-2018` and `smk-negeri-3-yogyakarta-tkj`.
- **Media asset (`public/images/sakura-science/fb-smkn3-announcement.jpg`):** archived official school banner.
- **SSHP Dossier (`src/content/operations/sakura-science-2018.md`):** added external-press pill for the official post + inline `<figure>` image markup.
- **Verified:** `npm run build` exit 0 (59 static pages).

### 2026-10-22 (Phase 27 — PKNU & SSHP dossiers, credentials sanitize, dark mode logos)

- **Commit `aec9b57`:**
  - `pknu-iss-2024.md`: expanded narrative dossier (+242 lines), coursework breakdown, and schedule image asset.
  - `sakura-science-2018.md`: re-encoded PDF evidence, added Shibaura lecture photo with Nobel Laureate Prof. Takaaki Kajita.
  - Added Japanese press coverage: `jst-sshp-2018-closing-ceremony.md` and `jst-sshp-2018-shibaura-kajita-lecture.md`.
  - Dark mode logo inversion: refined `ProjectIcon.astro` and `TechStack.astro` for monochrome brand logos (Mikrotik, Unity, CorelDraw, Infinite, IO).
  - Sanitized credentials layout in `CredentialRow.astro`.
- **Verified:** build exit 0 (59 pages).

### 2026-10-19 to 2026-10-21 (Milestone: Evolution from October 19 Backup — 210 files added)

- **Domain Migration:** updated `astro.config.mjs` and GitHub Actions workflow from `maulidinalif.github.io` to `mauliv.github.io`. Added `public/robots.txt` and `public/_headers`.
- **System Migration:** retired `srgate.md` (unverified Laravel gateway stub); added `patilo-web.md` (`kerupuk-patilo-msme`) documenting the Kemendikbudristek PHP2D national grant platform with 25-page technical R&D report, domain invoices, and UI captures.
- **Flagship International Event Operations:** introduced `Flagship International Events` schema in `config.ts` and authored 5 event dossiers (`gcf-2024.md`, `gloship-2025.md`, `incotepd-2024.md`, `etss-2024.md`, `aasvet-2023.md`).
- **Press Multi-Slug Linking:** updated `press` schema with `related_project_slugs: z.array(z.string())`; expanded from 5 seed articles to 13 verified institutional and national press features.
- **Primary Proof & Media:** uploaded 15+ primary PDFs (6 UNY Rector appointment decrees 2021–2026, student employment regulation decree, PHP2D grant reports, SIMOBY user manuals) and 70+ photographic evidence captures.
- **Component Architecture:** authored `ProjectIcon.astro` (centralized SVG/logo resolver) and `TechStack.astro` (technology badges); enhanced `ProjectCard.astro` with distinct icon badges, bold metric callouts, and clean tech stack pills.
- **Responsive Tables:** implemented `rehypeTableWrap` AST plugin in `astro.config.mjs` and responsive table CSS in `global.css`.
- **Routing:** added `/it` and `/social-media`; added 301 static redirects on `/work` and `/work/[slug]`. Expanded total static pages from 44 to 59.

### 2026-09-27 (Phase 26 — News layout + Credentials grouped cards)

- **ArticleRow.astro:** added optional `logo` prop; restructured layout to publisher logo (or text) → title link → metadata line (`language · date`) → summary → pill/project row. Removed `py-2` wrapper padding; pill margin reduced to `mt-2`.
- **credentials.astro:** Sections A (Education), C (Publications & IP), and D (Certifications) reverted to a single grouped white card with `flex flex-col gap-6` inside — no more per-item cards or border-b separators. Bangkit/BNSP highlight retained as an inner bordered wrapper within the group.
- **CredentialRow.astro:** confirmed as `<div class="flex items-start gap-3">` — spacing handled by parent `gap-6`.
- **Verified:** build exit 0 (44 pages).

### 2026-09-27 (Phase 25 — PaperMod aesthetic across all pages)

- **Layout.astro:** body background now dynamically applies PaperMod's two-surface rule — detail pages (paths with 2+ non-empty segments like `/work/pemilwa-evoting`) get `bg-[#ffffff] dark:bg-[#1d1e20]`; all list/index pages get `bg-[#f5f5f5] dark:bg-[#1d1e20]`. Removed the ad-hoc inner wrapper div from `index.astro`.
- **networks.astro:** all 4 sections wrapped in individual PaperMod post cards (`rounded-lg border border-[#eeeeee] bg-[#ffffff] p-5 dark:border-[#333333] dark:bg-[#2e2e33]`).
- **international.astro:** mobility cards updated to PaperMod style. Visa & Campus Operations block and Delegation Hosting block wrapped in white card boxes.
- **credentials.astro:** Sections A (Education), C (Publications & IP), and D (Certifications) wrapped in PaperMod card boxes. Section B already uses ProjectCard.
- **news.astro / publications.astro:** ArticleRow items wrapped in PaperMod cards (`space-y-4`).
- **certificates.astro:** repository rows wrapped in PaperMod card box; section spacing changed from `mt-8` to `mt-6`.
- **ArticleRow.astro:** removed `border-b` separator (cards now provide the container).
- **[slug].astro (detail pages):** metadata boxes (`<dl>`), excerpts (`<pre>`), and IP/stat boxes updated to PaperMod accent surfaces (`bg-[#f5f5f5] border border-[#eeeeee] dark:bg-[#2e2e33] dark:border-[#333333] rounded-lg`).
- **Preserved:** featured list IA, unified menu, single-column timeline, all copy/schemas/routes, evidence pill colors.
- **Verified:** build exit 0 (43 pages).

### 2026-09-27 (Phase 24 — PaperMod aesthetic replica)

- **Data fix (index.astro):** `counts` object was missing `/networks` and `/testimonials` entries — the homepage Index list showed 0 for both. Added `/networks: 4` (static sections) and `/testimonials: (await publishedTestimonials()).length` (computed from the testimonials library).
- **PaperMod visual redesign:** replaced the Phase 23 colored accent system (cyan/emerald track colors) with an exact PaperMod replica:
  - **Body backgrounds:** homepage wrapper `bg-[#f5f5f5] dark:bg-[#1d1e20]` (PaperMod list-page background); inner pages `bg-[#ffffff] dark:bg-[#1d1e20]` (PaperMod `--theme`).
  - **Card surfaces:** all main sections (featured artifact, 3 competency sections, impact grid) wrapped in PaperMod post-entry cards — `bg-[#ffffff] dark:bg-[#2e2e33]` with `border-[#eeeeee] dark:border-[#333333]` and `rounded-lg` (8px radius).
  - **ProjectCard:** removed track-specific accent colors; card now uses PaperMod neutral surface. Badge reverted to neutral gray.
  - **Typography:** body text `text-[#1e1e1e] dark:text-[#dadadb]` (PaperMod `--primary`); nav links `text-neutral-700 dark:text-neutral-200`; borders throughout updated to `border-[#eeeeee] dark:border-[#333333]`.
  - **Section headers:** removed cyan/emerald colored text; reverted to neutral `text-neutral-900 dark:text-neutral-100`.
- **Preserved:** featured list IA, unified menu, single-column timeline, all copy/schemas/routes, evidence pill colors.
- **Verified:** build exit 0 (43 pages).

### 2026-09-27 (Phase 23 — Colorize + typeset pass)

- **Track accent system (`ProjectCard.astro`):** new `trackStyles` lookup keyed by `track` prop — `leadership` → emerald (`#059669`), `web-systems` → cyan (`#0891b2`), `edtech-xr` → indigo (`#6366f1`), `default` → neutral. Card border, badge background, and hover border all derive from the track. Card surface gains depth: `bg-neutral-50/50 dark:bg-neutral-900/40` + `hover:-translate-y-0.5 transition-all duration-200`.
- **Section accents (`index.astro`):** competency section headers now carry track accent — IT section `border-t-cyan-300 dark:border-t-cyan-800` + `text-cyan-700 dark:text-cyan-400`; Mobility + IO sections `border-t-emerald-300 dark:border-t-emerald-800` + `text-emerald-700 dark:text-emerald-400`. Featured artifact card border → cyan accent.
- **Section accents (`credentials.astro`):** Leadership section header → emerald accent (`border-t-emerald-300 dark:border-t-emerald-800` + `text-emerald-700 dark:text-emerald-400`).
- **Typeset hierarchy (`index.astro`):** competency row titles bumped from `text-sm font-medium` → `text-base font-semibold` so they no longer blend with `text-sm` summaries. Impact grid values bumped from `text-xl font-semibold` → `text-2xl font-bold tracking-tight`; grid items now card-treated (`rounded-md border bg-neutral-50/50 dark:bg-neutral-900/40 p-4`) so the 5 metrics read as primary visual proof.
- **Typeset hierarchy (`ProjectCard.astro`):** title `font-medium` → `font-semibold`; role line gains `tracking-wide` for label feel.
- **Preserved:** all copy, schemas, routes, featured list, information architecture, unified menu, evidence pill colors.
- **Verified:** build exit 0 (43 pages).

### 2026-09-26 (Phase 22 — Index counts computed, not guessed)

- **Bug (owner-reported):** the homepage Index list showed no count for `News` or `Certificates` — `counts` in `index.astro` never covered them, and `Publications` was **hardcoded** `1` (would lie silently when a second journal entry lands). Same defect family: hand-maintained facts re-stating what the content already knows.
- **Fix:** new `certificatesRows()` in `lib/evidence-index.ts` — the `/certificates` row predicate extracted to one place; `certificates.astro` now consumes it (page and count share one definition, drift impossible). `index.astro` counts: `/news` = `press.length`, `/certificates` = `certificatesRows().length`, `/publications` = journal-pill count (computed).
- **Verified:** build exit 0 (43 pages); rendered Index = `Work 7 · International 5 · Credentials 20 · IT Support & Networks · Certificates 42 · News 5 · Publications 1 · Field notes 1 · Testimonials`.
- **Note:** this fix is Candidate 1 (registry) territory in miniature — counts derived from one source instead of a hand-list. Next: `grilling` on Candidate 1.


### 2026-09-26 (Phase 21 — News & Publications rebuilt around real press articles)

- **Correction accepted from owner:** news (press coverage *about* the candidate) and publications (academic output) are different paths — shared *code* only, never shared pages or meaning. Candidate 2's deliverable became one row module, not a page merge.
- **New `press` collection** (`config.ts`, lean schema: title/publisher/language/date/url/related_project_slug/summary/pending; **not** in `detailCollections` → no detail routes, page count stays **43**). **5 seed articles**, all headline-led:
  - `kompas-kmhe-2022.md` — live, URL date-verified (2022-11-06)
  - `uny-news-kmhe-2022.md` — **pending** (owner's URL; headline from slug; site under maintenance)
  - `uny-news-patilo-php2d.md` — **pending** (site under maintenance; date approximated to program year, noted in-file)
  - `feb-uny-patilo-2021.md` (2021-11-11) + `sdgs-uny-patilo-2021.md` (2021-12-24) — both live/verified
- **New `src/lib/relations.ts`:** shared `resolveProject` + **one `assertRelationsResolve` covering press AND testimonials** (replaces the testimonials-local guard; `[slug].astro` + `testimonials.ts` rewired).
- **New `src/components/ArticleRow.astro`:** headline-first row (Teguh register) with `publisher · date · language` metadata, optional summary, `[Read the article]` / `Coverage (pending)` pill, and ADR-0001 `For:` link. Used by both index pages.
- **`news.astro` rewritten:** reads `press` (date-desc). GDSC community page + `@io.uny` Instagram left the News list *automatically* (their pills untouched on their own entries) per decision (a).
- **`publications.astro` rewritten:** same row module, still sourced from `journal` evidence; JATIKA title/venue/date now read from the entry's `publications` field.
- **Data fix (`credentials/restek-chairman.md`):** dead 404 pill repointed to owner's real URL + real headline (stays pending while uny.ac.id is down) + **approved new pill: Kompas national press (available, verified live)**.
- **Docs:** `CONTEXT.md` + `Press article` term; **ADR-0002** (News = press about the candidate; own live surfaces stay as evidence on their entries; publications stays separate; unverifiable links render pending).
- **Verification:** baseline build 43 pages exit 0; **guard test: press entry with typo slug → build fails** with `Press article "Guard Probe" has related_project_slug "php2d-msme-TYPO"...` → probe removed, caches purged (`.astro` + `node_modules/.astro`), clean build 43 exit 0; preview: news = **5 rows date-desc** (Kompas, UNY-KMHE, SDGs, FEB, UNY-Patilo), 2 pending badges, 3 live read-links, 5 For-links, **zero GDSC/Instagram leak**; publications headline = JATIKA focus with pending DOI badge + For-link `/work/plant-escape-ar`; chairman page = Kompas available + UNY disabled (disabled pills intentionally emit no URL); `/certificates` 200 unchanged. Benign: empty-`testimonials` glob message persists.


### 2026-09-26 (Architecture review + Testimonials relations module)

- **HTML architecture report:** `C:\Users\alifa\AppData\Local\Temp\architecture-review-20260926-153405.html` (30KB, Tailwind + Mermaid CDN, opened via `start`) — 6 candidates with files/problem/solution/benefits/before-after/badges + Top Recommendation (testimonials → registry → evidence index). Not in the repo by design. Repo untouched by the review (verified: no new files outside `website/`).
- **`CONTEXT.md` created** (domain glossary: Entry, Collection, Facet, Evidence pill, Status, Epistemic status, Provenance, Work page, Competency section, The slot, Endorsement, Published, Parent page) — per codebase-design's lazy-CREATE rule; `docs/adr/` had no conflicts to re-litigate.
- **`docs/adr/0001-testimonials-slot-and-project-attachment.md`:** permanent slot on `/testimonials`; two surfaces, one published rule; list links to the project; relations guarded by build; empty state replaced (not stacked); slug-uniqueness (33/33) recorded as the load-bearing assumption. Future reviews must not re-propose deleting the per-project path.
- **New `src/lib/testimonials.ts`:** `isPublished` (single rule, `is_placeholder !== true`), `publishedTestimonials` (date-desc), `testimonialsFor(slug)` (the join), `resolveProject(slug)` (title+href for the For: link), `assertRelationsResolve()` (throws inside `astro build` on a bad `related_project_slug`).
- **New `src/components/TestimonialCard.astro`:** one card for both surfaces; `project` prop only on the list (no self-link on the project page); placeholder badge branch removed (placeholders never render). Callers rewired: `testimonials.astro` (list + For-link), `[slug].astro` (join replaced the inline fetch + inline renderer).
- **`TESTIMONIALS.md`** (outside the content folder): copy-paste templates for page-only and project-attached quotes + the rules.
- **Verification — 4-case scratch sequence, all pass:**
  1. published+attached → quote on `/testimonials` **with** For-link to `/work/pemilwa-evoting` **and** on the project page **without** self-link ✓
  2. `is_placeholder: true` → hidden on both, empty state returns ✓
  3. typo'd slug → **build fails** with `Testimonial by "Scratch Verifier" has related_project_slug "pemilwa-evoting-TYPO", but no entry with that slug exists. Fix the slug in src/content/testimonials/.` ✓
  4. cleanup → clean build, empty state restored, no residue ✓
- **Two traps documented:** (a) `Set-Content -Encoding utf8` in PS5.1 writes a **BOM** that breaks frontmatter — use `[IO.File]::WriteAllText(…, UTF8Encoding(false))`; (b) `node_modules/.astro` is a **second content cache** that retains deleted entries — after removing a content file, purge `.astro/` *and* `node_modules/.astro/` or the build fails on a ghost entry. Also: my probe page wrote `probe-out.txt` to `dist/` (`import.meta.url` resolves to build output).
- **Page count confirmed 43** (10 index + 33 detail) — my earlier "44" was stale (`/probe` at one point + a `/systems`-vs-`/work` filter mistake in the count script); the Phase 17 audit's 43 is correct.
- **Smoke:** 7/7 routes 200, preview stopped, no git (`website/.git` absent).


### 2026-09-26 (Phase 19 — Home link in navbar)

- **`Layout.astro`:** `Home` link restored as the first nav item (user request) with the house icon + `aria-current="page"` when at `/`. Deliberately defined as a nav-only `homeItem`, **not** added to `siteIndex` — so the homepage's own Index list stays clean (no self-referential "Home" row).
- **Verified (fresh dist, DOM):** nav = `Home / Work / International / Credentials / … (10 links, all 44px)`, no horizontal overflow at 390px, home absent from the Index list. Build exit 0 (one transient Windows `dist`-lock flake during the run — the documented kill-preview-then-build sequence resolved it).


### 2026-09-26 (Phase 18 — $impeccable polish pass)

- **Prior critique snapshot:** `critique-storage latest` returned empty (the Phase critique was run in plan mode and never persisted) → independent pass; **no snapshot read, so none closed** (per polish rules).
- **Evidence round (one batch, desktop 1280 + mobile 390 + dark):** found 3 real defects +1 needing confirmation:
  1. **Broken anchor** — homepage linked `/work#edtech-xr` but the section id is `sec-edtech-xr` → jump did nothing. Fixed (`#sec-edtech-xr`), verified `scrollY: 1862` after nav.
  2. **Horizontal overflow at 390px** (scrollWidth 412 > 390) — the nav row couldn't wrap. Fixed: nav `min-w-0 flex-wrap gap-y-0.5` → wraps to 2 rows (navH 90); re-measured **scrollWidth 390 = viewport, overflow gone**.
  3. **Theme toggle only 36×36px** (PRODUCT.md claims 44px) — added `min-h-11 min-w-11` → 44×44; all header controls now ≥44 (`touchAll44: true`).
  4. Six focus flags on disclosure links were **false positives** — closed `<details>` children can't receive programmatic focus; re-tested with disclosure open → `bad: []` (33/33 focusable, all ringed).
- **Confirmation round (single):** overflow 390=390, nav 2-row wrap, toggle 44×44, anchor href + scroll verified, all images loaded, 0 console errors. Screenshots `z4-home-390/1280`, `z4-work-1280` (image readback pipeline still returning stale media this session — disclosed, DOM probes are the conclusive record).
- **Detector (manual scan per context directive):** `detect --json src` → **`[]`, exit 0.**
- **Source-diff cleanup:** website root clean (no stray logs/temp files); no orphaned code from the pass; build note — Windows `dist` lock from a live preview intermittently kills `npm run build` (exit 1 with no error); remedy = stop preview listeners before building (now standard procedure).
- **State:** build exit 0, fixes verified in fresh dist, no unresolved Priority Issues → pass clears.


### 2026-09-26 (Phase 17 — Structure Cleanup: one namespace = one parent)

- **Invariant enforced:** a URL's first segment, its parent index page, and its breadcrumb label are the same name. Driven by a single source: `routes.ts` now exports `collectionSegments` (systems→`work`, operations→`international`, credentials→`credentials`, writings→`writing`), `parentLabels` (the exact h1 of each index), and `siteIndex` (shared by header Index disclosure + homepage Index list — labels aligned: `News`, `Certificates`).
- **Moves (files, not just links):** `edtech-xr/*` → `systems/` (2: Plant Escape + AR Menu, per user), `mobility/*` → `operations/` (4), `leadership/*` → `credentials/` (5); IO dossier slug `international-office-operations` → **`io-operations`** (URLs `/international/io-operations`).
- **Schema consequence caught before build:** moved files would have failed strict validation → `systems`, `operations`, `credentials` are now **Zod unions** of their two content shapes (web|AR, IO-dossier|exchange, credential|leadership), each member `.strict()`.
- **Deleted:** `/edtech` + `/leadership` index pages and the 3 collection definitions (kills the 2-item page, the `/leadership`↔credentials §B duplication, and the 5 orphan `/mobility` URLs). **Created:** `/writing` index (the field note was an orphan — no index, not in any nav), shared `Breadcrumb.astro` (used by all 10 index pages + 33 detail pages; detail crumbs `clampCurrent` for long titles).
- **Mid-audit catch:** `systems.astro` served `/systems` while details resolved `/work/*` — the file was renamed `work.astro` (filename IS the index route; the old name would have violated the very invariant this phase creates).
- **Refactors:** `[slug].astro` now selects blocks by **field presence** (`'database' in d`, `'host_institution' in d`, `'intellectual_property' in d`, `'delegations_hosted' in d`, `'credential_type' in d`) — collection-agnostic forever; `ProjectCard.track` widened to `string`; `work` page = two sections (Web platforms ×5, EdTech & XR ×2) + `[IT Support & Networks]` button; homepage IT section `more` links retargeted (`[View all 7 projects] → /work`, `EdTech & XR section → /work#edtech-xr`); all 5 impact stats, IO rows, and Section B cards retargeted via `entryHref`/`/international/io-operations`; `certificates` groupOrder reduced to live collections; nav unified at all widths (3 primary + zero-JS `Index` disclosure of 6).
- **Verification (full-link crawl, not sampled):** build exit 0 · **43 pages** (10 index + 33 detail) matching plan exactly · **53 internal links → 0 broken** · 0 console errors · 0 horizontal overflow on all 10 index pages · breadcrumbs verified textually (`Home / Work / …`, `Home / International / …`, `Home / Credentials / …`, `Home / Field notes / …`) · no detail listed on a sibling index (sampled: restek-chairman only on `/`+`/credentials`, plant-escape only `/`+`/work`, pknu only `/international`) · legacy-segment grep across `src` clean (the one stale `/leadership/${slug}` in credentials §B was found by the crawl and fixed). Screenshots: `Temp/opencode/shots/p18-work.png` (full) + `p18-international.png`.
- **Known benign:** empty `testimonials/` dir still logs a glob-loader warning each build.
- **Next:** `$impeccable polish`.


### 2026-09-26 (Phase 16 — Competency Regroup, Visa Visibility & Dossier Excerpts)

- **User decisions:** (1) regroup homepage only — files stay in their collections; (2) immigration gets both a homepage row and a deep block on `/international`; (3) agent extracts dossier snippets first, user reviews later.
- **IA fix (the "sloppy" root cause):** `io-gateway` + `simoby` no longer split across sections — IO section now owns **one combined row** "IO UNY gateway & SIMOBY mobility CRM" (pills merged from both entries, href → gateway detail). IT section re-rolls to **Pemilwa · Plant Escape · MTQM** (SIMOBY removed; was double-classified as IT while its story is IO).
- **Sections now:** `IT — Web Systems, AR & Infrastructure` (3 rows) · `Global Mobility & Delegations` (2 rows — dropped the languages row, it duplicates the masthead) · `International Office — Visa, Immigration & Campus Operations` (**3 rows**: mandates dossier / **new visa row** — E-Visa·ITAS/KITAS·SKTT·STM·2021–present → ops dossier / IO systems).
- **New `/international` deep block:** "Visa, Immigration & Daily Operations" inserted between Global Mobility and Delegation Hosting — functional-domains + regulatory-frameworks mono lists from the operations entry, blurb, `[Open the operations dossier]` primary button. Addresses "not capturing visa/immigration/daily ops enough."
- **Dossier excerpts (new content field):** `excerpt: z.string().optional()` added to the base schema; near-verbatim extracts pulled from your own dossier HTML in `output/` (agent-extracted, pending your review): **Pemilwa** (Native PHP + ACID locking + Nginx), **SIMOBY** (data-silo problem, integration layer, *and the honest senior-IT-led-Yii line*), **Plant Escape** (Vuforia/Blackbox 5–100cm, low-end Android), **IO mandates** (rector-decree cover text). Rendered as mono `border-l` pull-quotes under homepage rows **and** on their detail pages (`'excerpt' in d && ...`).
- **Bug caught:** new `/international` block referenced `opsData` without defining it → build fail; fixed (`const opsData = ops?.data`). The repeated "testimonials collection empty" messages are non-fatal warnings (routes completed).
- **Verification (1 bounded round):** build exit 0 (44 pages); DOM probe — homepage sections `3/2/3` rows with `2/0/2` excerpts, SIMOBY absent from IT, visa row present, languages row removed, `H1+5×H2` no skips, 0 console errors, no overflow; `/international` headings in order Global Mobility → Visa & Daily Operations → Delegation Hosting with dossier button, 0 errors; pemilwa detail shows the excerpt. Screenshots: `Temp/opencode/shots/p17-home.png`, `p17-international.png` (view manually — image readback still defective).
- **Housekeeping:** killed the zombie `astro dev` (pid 14780) that was squatting port 4321.
- **Pending:** user reviews the 4 excerpts; then `$impeccable polish` as the final pass.


### 2026-09-24 (Phase 15 — Footer Cleanup)

- **Footer (`Layout.astro`):** copyright shortened to `© 2026` (full name removed — user request); structure reflowed to `prompt / [© 2026 … links]` with `justify-between`, so the three contact links sit on **one row** at every tested width (1440/1024/768/390 — verified rendered `linkRows: 1`); below `md` the labels shorten to `email · github · linkedin` (hrefs keep full destinations) to guarantee the single line on phones; `min-h-11` touch targets retained; no overflow in either theme. Build exit 0. Note: the screenshot attached with the request was the Pahamify cover letter (attachment-pipeline mismatch), so the fix was driven by the text description and verified by DOM measurement.


### 2026-09-24 (Phase 14 — Section Structure & Affordance / layout pass)

- **User-reported:** section boundaries unclear, first section under hero not clearly labelled, the three per-section "more" links didn't read as buttons. Chose `b` (one primary link per section, others demoted to text) from the offered scope options.
- **Command choice:** `$impeccable layout` (grouping/rhythm/affordance) recommended over `bolder` (needs a single flat section, not a systemic fix — none remains named) and `colorize` (needs a named brand-hue role; the world stays neutral after structure is solved). `bolder`/`colorize` explicitly deferred, not rejected.
- **Applied (spatial thesis):** chapters now separate at **64px** intervals (hero block stays 40px), section rule = **neutral-300 / dark neutral-700** vs row rule neutral-100 / dark neutral-800 (two measured boundary steps), competency h2 up to **20px** (utility headings stay 14px → three-tier hierarchy H1 48 / chapter 20 / utility 14).
- **Affordance:** each competency ends in one bordered mono primary control — `[View all 5 systems]`, `[View all mobility & delegations]`, `[Open the operations dossier]` — matching the established `[Request a reference]` vocabulary; remaining targets demoted to underlined `min-h-11` text links (`2 AR & EdTech projects`, `Networks & IT support`, `Credentials & documents`). Decorative trailing `→` removed (craft-floor default).
- **Verification (rendered evidence):** build exit 0; DOM probe @1280: section margins `40/64×5`, borders `oklch(0.87)` sections vs `oklch(0.97)` rows, type tiers `48/20/20/20/14/14`, 3 primary buttons @44px, 4 secondary links @44px; @390: no horizontal overflow, buttons 175–266px wide × 44px, rhythm intact; `impeccable detect --json --scope layout` → **`[]` exit 0** (first attempt used a relative path the wrapper couldn't resolve — invalidated and re-run with absolute path). Screenshot: `Temp/opencode/shots/p15-home-desktop.png` (image readback still defective, view manually).


### 2026-09-24 (Phase 13 — Critique Fixes & Homepage Rebuild)

- **Homepage rebuilt (critique-driven):** deleted the 8-tile gradient grid, avatar placeholder, and bracketed CTA. New structure: masthead (real photo `alif-photo.jpg` → `public/photo.jpg` + display name) → featured **artifact hero** (Pemilwa dossier cover + claim + live/dossier pills) → **three competency sections** per user's framing (IT · Internationalization · Immigration & International Office, rows pulling live evidence pills from real entries at build time) → **impact stats as linked evidence** (5 numbers → entry links + pills) → **Index list** replacing the tiles (one taxonomy, counts, 11 destinations).
- **Typography:** self-hosted **IBM Plex Sans** variable latin subset (`public/fonts/plex-sans-var.woff2`, `@font-face` weight 400–600) → `--font-sans`; h1 now `clamp(1.75rem…3rem)` = 48px at desktop (was 24px system sans — the "generic display voice" finding).
- **Terminal prompt demoted** to a small footer signature (user: keep as IT-ish touch); removed from header.
- **Header nav 7 → 5** (`home · international · credentials · testimonials · publications`); desktop+mobile targets now **44px** (`min-h-11`); footer links 44px; WCAG 2.5.8 satisfied (measured navH=44, disabled pills 27px).
- **Testimonials reworked (Q3=B):** both `is_placeholder` seed files deleted; page renders an authored **empty-state** ("open slot... references on request") with a `[Request a reference]` mailto CTA; real entries auto-render when dropped in. Nav kept.
- **EvidencePill a11y:** disabled label `neutral-400/600` → **7.48:1 light / ~7.6:1 dark** (was 2.58:1 — site's most-repeated contrast failure, 152 instances); `py-0.5 → py-1` (27px ≥ 24px).
- **Heading skips fixed** (5 list pages h1→h3): `ProjectCard` gains `headingLevel` prop (`h2` on systems/edtech/leadership lists); news/publications row headings h3→h2. Audit: **0 skips across 13 routes**.
- **Card arrow `→` link removed** (7×16px target + craft-floor decoration); title link remains.
- **Browser surfaces themed:** `color-scheme: light/dark` (scrollbar/caret/controls) + `::selection`; **`prefers-reduced-motion` guard added** (was PRODUCT.md open item — removed from Open list).
- **Truthfulness fixes:** `mtqm` live pill + `plantescape` site pill → `needs-confirmation` (both domains NXDOMAIN on 2026-09-24 integrity check); Plant Escape gains shipped **Project Dossier PDF** (`output/05_...html` compiled → `public/docs/edtech/05-plant-escape-dossier.pdf`); **SK Rektor mandates shipped** — 23-page official decree scan (`Bukti_Riwayat_Pekerjaan_2.pdf` → `public/docs/operations/sk-rektor-appointment-excerpt.pdf`) and its pill flipped **needs-confirmation → available**.
- **Evidence not located:** PKM-RSH funding certificate is not in the workspace → pill stays pending, `verification_notes` updated (drop scan at `public/docs/edtech/pkm-rsh-certificate.pdf` to enable). Amount remains user-stated 2026-09.
- **PRODUCT.md corrected:** false "targets meet comfortable touch size" claim replaced with measured statement (44px primary / 24px chips, measured 2026-09-24); `prefers-reduced-motion` removed from Open items.
- **Verification:** build exit 0; 13-route DOM audit — **0 heading skips, 0 console errors, 0 broken images (14/14 after lazy scroll), 0 horizontal overflow, all routes 200** (single 404 was a test URL using `/writings` instead of `/writing`); dark-mode computed contrast: body ~16:1, disabled pill ~7.6:1; h1 = IBM Plex Sans 48px; grid tiles = 0; prompt footer-only. **Screenshot visual round blocked:** the harness read tool replayed stale images 6× (documented) — shots saved at `Temp/opencode/shots/p14-*.png` for manual review; verification completed via Playwright DOM/computed-style audit instead.
- **Open (user-supplied):** PKM certificate scan; Pemilwa live screenshot not shipped (PII vet impossible while image readback is broken — dossier cover used instead); dead domains mtqm.uny.ac.id / plantescape.id; empty `testimonials/` collection emits a benign glob-loader warning.


### 2026-09-24 (Phase 12 — Breadcrumbs & Mobility Timeline)

- **`international.astro` Global Mobility:**
  - Sorted **chronologically latest-first** (`period.start` desc): PKNU 2024 → FPT 2020-07 → UTHM 2020 → Sakura 2018 (disk-verified index order).
  - Grid switched to **`grid-cols-1`** — reads as a timeline.
  - Card layout upgraded: **left 40×40 institution-logo chip** (CredentialRow-style) beside content (`h-10 w-10 … object-contain`), corner SVG flag retained top-right (`pr-12` clearance intact); gracefully full-width when no logo (PKNU/UTHM).
- **Mobility logos — premise correction:** Phase 10 fetched **JST ✅ + FPT ✅ only** (both already wired in Phase 10); **PKNU + UTHM were on Phase 10's ❌ manual-fix list, never fetched** (this session's retries: Wikimedia full 429-block, PKNU site is JS-only, UTHM site only exposed the **Malaysian national/KPT arms** — wrong institution mark, rejected visually rather than ship a false logo). So sakura/jst + fpt/fpt confirmed rendering; pknu/uthm correctly use layout fallback.
- **Breadcrumb navigation (`[collection]/[slug].astro`):**
  - Deleted hardcoded `← home` link.
  - New `<nav aria-label="Breadcrumb">` → `Home / Parent Category / Current Page Title`.
  - Dynamic parent map: systems→**Web Systems** (`/systems`), edtech-xr→**EdTech & XR** (`/edtech`), leadership→**Leadership** (`/leadership`), credentials→**Credentials** (`/credentials`), mobility→**International** (`/international`), operations→**International** (`/international`).
  - Links: `text-neutral-600` + hover/focus states; separators `/` (`aria-hidden`); current page plain `text-neutral-500 dark:text-neutral-400` + **`aria-current="page"`**, wraps via `flex-wrap break-words`.
  - **`writings` has no index page → parent segment omitted** (`Home / Title`, 1 separator) — no dead links (R-24), noted as deliberate deviation from the fixed 3-level spec.
- **Verification:** build exit 0 (44 pages); breadcrumb nav extracted from dist across all 6 parent collections: `home ✓ current ✓ links=2 separators=2` each; writings: `links=1 separators=1` ✓; old `← home` absent everywhere ✓; intl sort/grid/left-logo/corner-flag flags all present on disk; 8/8 route smoke 200. Screenshots `p12-intl.png`, `p12-detail.png`, `p12-writing.png` captured (01:21) — note: image-attachment pipeline returned mismatched media this session, so final visual sign-off relied on programmatic extraction; files available for manual open.


### 2026-09-24 (Phase 11 — Cross-Platform Flags)

- **Why:** HR recruiters are predominantly on Windows, where Unicode flag emoji render as two-letter country codes (`ID`, `KR`) — looks like a bug. Replaced all text flags with real SVGs that render identically everywhere.
- **Flags fetched → `public/flags/` (6/6):** `id.svg, gb.svg, my.svg, jp.svg, kr.svg, vn.svg`. Wikimedia `Special:FilePath` attempts hit 429 throttling + size-validation ambiguity → switched to **FlagCDN** (`flagcdn.com/<iso>.svg`, documented flag CDN) — all valid SVGs (viewBox + paths verified; KR taegeuk/trigram paths confirmed).
- **Languages line (Q2 layout):** both `index.astro` + `credentials.astro` rewritten — `languages` string replaced by structured array; renders inline `<img src="/flags/*.svg" class="inline-block h-3 w-4 rounded-[2px] object-cover shadow-sm ring-1 …">` chips (16×12, decorative `alt=""`, `width/height` attrs prevent CLS) beside each language; **Javanese kept as text** via bundled font; wraps cleanly on mobile.
- **Javanese glyph corruption bug (caught + fixed):** retyping `(startTime` in the new object literal corrupted to CJK `粳awa` (U+7CB3 + "awa") — codepoint audit found zero Javanese chars in source. Looked up authoritative codepoints via Compart Unicode search: **JA = U+A997, Wa = U+A9AE**; rewrote both files with ASCII-safe escapes `String` literal `'\uA997\uA9AE'` (regex byte-replace, no glyph typing). Dist verified: `A997 ✓ A9AE ✓ CJK-corrupt ✗` on home + credentials. Screenshot confirms correct Javanese script rendering.
- **Mobility cards:** 4 seeds now store file paths (`/flags/jp.svg`, `kr`, `vn`, `my`); `international.astro` corner flag switched from text glyph to `<img class="absolute right-3 top-3 h-5 w-7 rounded-[2px] object-cover shadow-sm ring-1 …">` (28×20, `pr-12` header clearance preserved, lazy-loaded).
- **Verification:** build exit 0, 44 pages, 6 flags copied to `dist/flags/`; all 6 flag URLs → 200; dist audits: flag paths present on home/credentials/international, astral emoji gone from all three, Javanese codepoints present; fresh screenshots: real SVG flags + Javanese script render correctly, no letter-codes anywhere.


### 2026-09-24 (Phase 10 — Polish & Logo Automation)

- **PKM-RSH grant (Q1):** `plant-escape.md` reframed per user — `grants_and_honors` + new metric "Secured Research Grant: PKM-RSH funding ~IDR 15,000,000" (provenance `user-stated 2026-09`), summary + body §5 reworded to **"Secured PKM-RSH Research Grant funding"** (funding only, decoupled from PIMNAS wording). PIMNAS 35 Finalist kept as separate cv.md-backed claim — flagged to user; `verification_notes` records the distinction.
- **Languages string (both `index.astro` + `credentials.astro`):** exact emoji/Javanese string `Languages: 🇮🇩 Indonesian (Native), ꦗꦮ Javanese (Native), 🇲🇾 Malay (Working Familiarity), 🇬🇧 English (Professional)`.
- **Hybrid font strategy (Q3):**
  - Flags: ship as-is (Windows Chrome letter-codes `ID`/`KR` confirmed in screenshots; macOS/mobile show real flags).
  - Javanese: **bundled locally** `public/fonts/NotoSansJavanese-subset.woff2` (34.7KB, Google Fonts javanese-unicode-range subset, `wOF2` magic verified) + `@font-face` in `global.css` + family appended to all three `@theme` font stacks (per-glyph fallback → Latin unchanged). Screenshot confirms **actual Javanese script glyphs render** (no tofu).
- **Mobility flags:** `flag: z.string().optional()` added to mobility schema; seeds 🇯🇵 sakura / 🇰🇷 pknu / 🇻🇳 fpt / 🇲🇾 uthm; `/international` cards get large `text-3xl` corner flag (`relative` card + `pr-12` header clearance, `aria-hidden`, location stays textual for a11y).
- **Logo automation (12 fetched, validated, wired):**
  - Sources: Wikipedia/Commons `pageimages` + `Special:FilePath` + logo-titled Commons file search; brand-colored glyphs via `cdn.simpleicons.org/<slug>/<hex>`.
  - **Fetched ✅** (all magic-byte/visual-verified): `uny.svg` (Commons seal), `ets.svg`, `ef.svg`, `kemdikbud.svg` (Tut Wuri), `bnsp.png`, `nyp.png`, `wsu.png`, `fpt.jpg`, `jst.svg` (Commons) + `coursera.svg` (#0056D2), `googlecloud.svg` (#4285F4) (Simple Icons, natural brand colors Q4).
  - **Wired ✅ `institution_logo` in 21 spots:** UNY → st-degree, pemilwa, mtqm, srgate, io-gateway, simoby, international-office; coursera → bits-bytes, system-admin; googlecloud → bigquery, bangkit, qwiklabs ×2 (Qwiklabs→Google Cloud mark, disclosed); ets → toeic; ef → ef-set; kemdikbud → kmmi, php2d; bnsp → bnsp-network-admin; jst → sakura; fpt → fpt; **NYP/WSU → `/international` Core Recurring blocks (Q2a)** with schema field `institution_logo` on `core_recurring` + img render (h-8 natural colors).
  - **Manual-fix ❌ (no public logo found → fallback UI):** Dicoding (3 entries — not on Commons/Simple Icons; site is JS-rendered), GDSC, PKNU, UTHM, SMK Negeri 3 Yogyakarta, RESTek ×3, Plant Escape, AR Kitchen.
  - Discarded false positives: UTHM entrance photo, FPT/JST building photos (pageimages lead-photo trap).
- **Verification:** build exit 0, **44 pages**; fresh-server ASCII assertions: grant amount/framing/metric ✓, corner flag class ✓, nyp/wsu/ets/uny/googlecloud paths ✓, font-face + woff2 URL in compiled CSS ✓, font + 12 logos copied to `dist/` ✓; 4 fresh screenshots reviewed — home (flags letter-coded + Javanese glyphs ✓), credentials cert rows (natural-color logos + Dicoding fallback chips ✓), international (corner flags + NYP/WSU block logos ✓). PS5.1 Unicode/surrogate test artifacts and a zombie-preview stale read identified and eliminated (port cleared, ASCII re-verified over fresh server).
- **Next:** user-supplied assets (photo, Dicoding/GDSC/PKNU/UTHM logos, cert scans, real testimonials), ETS-style pending pills when URLs arrive, then Git init/push (`maulidinalif.github.io`).


### 2026-09-24 (Phase 9 — Art Direction & Antislop Refactor)

- **Skills loaded:** `antislop-ui`, `antislop-layoutmobile`, `frontend-design`; three explicit conflict resolutions applied (per skill rule "the brief's own words always win"):
  1. **Gradients** (antislop default-tell vs explicit brief): allowed ONLY on the 8 homepage blocks as category identity — dark base → hue lift per track, no glow/orbs elsewhere. Rest of site stays stark black/white/neutral ("spend boldness in one place").
  2. **Lucide icons** (single-library tell vs explicit brief): stroke 2, structural glyph scale, reuse of EvidencePill icon vocabulary (zero new dependency).
  3. **Tracked all-caps eyebrows** (both skills flag): swept site-wide — section headings now plain `text-sm font-semibold` (credentials A–D, international, certificates groups, detail dl-block titles, impact); mono uppercase kept ONLY on structural labels (collection tags, credential_type meta) at reduced `tracking-wide`. **`tracking-widest`: 0 occurrences in src + dist.**
- **Homepage redesign (`index.astro`):** removed JS track-switcher + 8 individual cards + scoped button CSS (zero JS remaining on home); added **8-block CSS grid** (`grid-cols-2 md:grid-cols-3 xl:grid-cols-4` — 3 content-driven states), each an `<a>` with always-dark gradient (slate→cyan Systems, indigo→fuchsia EdTech, green→teal Ops, bronze→copper Networks, navy→azure Mobility, stone Credentials, crimson→Leadership, ink→parchment Press), large centered SVG, stark white type, hover brightness only, inset focus ring. Masthead (avatar, CTA, bio, languages) + Impact block kept.
- **Header (`Layout.astro`):** padding `pt-12 md:pt-20`; desktop nav = 7 icon+label links; **mobile = primary links (home, credentials) + labeled zero-JS `<details>` "Index" disclosure** holding the 5 secondary links (keyboard-native, tap ≥44px, chevron rotates via `group-open`); theme toggle retained.
- **`credentials.astro` layout fix:** rows rebuilt as `flex-col sm:flex-row` (title line, meta line, summary, pill row — EF SET/TOEIC squish gone, verified at 375px `stacked: true`); new shared `CredentialRow.astro` component with 10×10 icon chip (graduation-cap/award fallback, `institution_logo` when present) in Sections A (2 rows) + D (13 rows).
- **`international.astro`:** bilateral partners (UiTM, UMPSA, PKNU, PNU) now render standard EvidencePills under names — all seeded `needs-confirmation` "Visit coverage (pending)" (disabled until URLs supplied); schema: shared `evidenceItem` extracted in `config.ts`, `delegation_partnerships.bilateral[].evidence` added; tier labels de-capsed.
- **Testimonials:** `initials` field added to schema (1–3 chars, required); both placeholders get `PN`; sleek monogram circles (40px page, 28px detail-page figcaption).
- **4 new destination pages:** `/systems`, `/edtech`, `/leadership` (sorted card indexes) + `/networks` (curated static: TKJ foundation → UPN internship → BNSP → infrastructure ops, archive-sourced, links to credential/system details). All 8 homepage blocks now have honest dedicated destinations — **build: 44 pages**.
- **Frontend-design QA loop executed:** Playwright shots desktop 1280 + mobile 375 of home (light/dark), credentials (viewport + full), international, mobile-nav-open, detail page; self-critique applied: avatar `items-start mt-1` (2-line title alignment), tracked-caps sweep, verified stacked rows, contrast (white/70 on gradients, neutral-500 AA), 3 grid states, no horizontal overflow, all nav destinations live. Dark floating bar seen in captures confirmed **not in DOM** (headless capture artifact).
- **Verification:** build exit 0 (44 pages = 40 + 4 new); 13/13 routes 200 fresh-server pass; dist disk audit: 8 gradient class-attrs exactly, 0 `tracking-widest`, `.tracking-widest` utility not even emitted; index assertions (8 blocks, no `data-track` remnants); mobile disclosure opens with 5 links; bilateral pending pills ×4; monograms render.
- **Note:** two earlier assertion runs hit stale/zombie preview responses — final numbers above are from disk audit + fresh port-cleared server.
- **Next:** real photo/logos/cert scans, real testimonial quotes (flip `is_placeholder`), user-supplied bilateral press URLs, then Git init/push deploy.


### 2026-09-23 (Phase 8 -- Platform Expansion & Theming)

- **Dark Mode (Teguh style, Tailwind v4):**
  - `global.css`: `@custom-variant dark (&:where(.dark, .dark *))` (v4 replacement for `darkMode: 'class'`) + plain-CSS `.markdown` dark overrides via `:where(.dark, .dark *)`.
  - `Layout.astro`: pre-paint inline script reads `localStorage('theme')` (fallback `prefers-color-scheme`) before first render (no flash); Sun/Moon inline-SVG toggle button persists preference; full `dark:` sweep (body `neutral-950`, footer/header borders, nav links).
  - `EvidencePill`: all 7 type variants get `dark:` border/text/tint sets + dashed disabled dark state; `ProjectCard`, index/credentials/news/publications/certificates rows, detail `dl` blocks, impact grid, track buttons (`:global(.dark)` for Astro scoped styles) all themed.
  - Built CSS verified: 152 `.dark` selector occurrences, dark pill variants, dark body bg present.
- **Homepage masthead:** 32x24 circular photo skeleton placeholder (person SVG; real photo later = drop `public/photo.jpg`), `[View Credentials]` primary CTA -> `/credentials`, languages line `Languages: Indonesian (Native), Javanese (Native), Malay (Working Familiarity), English (Professional)` (Q4 exact string).
- **Logo fallback:** `ProjectCard` renders subtle 24x24 gray briefcase SVG chip when `institution_logo` absent (layout consistency, honest no-image state).
- **8 new credential seeds** (Q2): `dicoding-javascript` (2023-06, archive), `coursera-system-admin` (2023-06, archive), `coursera-bits-bytes` (2023-04, user-stated), `dicoding-logic-101` (2023-02, user-stated), `dicoding-software-dev` (2023-02, user-stated), `coursera-bigquery` (2022-07, archive), `qwiklabs-data-eng` (2020-04, user-stated), `qwiklabs-cloud-essentials` (2020-03, user-stated). All `internal-pdf` pills `needs-confirmation`. **TOEIC updated in-place (Q1):** cert no. `0011053579` added to summary + verification_notes -- no duplicate file.
- **`/credentials` sorting:** Sections A/B/D now sorted `period.start` DESC (latest first); Section C stays curated. Languages line added at top.
- **New `testimonials` collection:** lean schema (`name`, `role`, `company`, `quote`, `related_project_slug?`, `is_placeholder` default true, `date?`); 2 seeds both `is_placeholder: true` with visibly dashed **PLACEHOLDER** badges (Q3 anti-fabrication). Rendered on `/testimonials` and at bottom of matching detail pages (`related_project_slug` match -- verified on `/systems/pemilwa-evoting`).
- **New pages:** `/international` (Section 1 Global Mobility cards -> `/mobility/*`; Section 2 Delegation Hosting two tiers per Q5 -- **Core Recurring**: Nanyang Polytechnic 7 batches, Western Sydney University 3 batches; **Bilateral & Custom Visits**: UiTM, UMPSA [user-stated 2026-09], PKNU, PNU chips) backed by new `delegation_partnerships` optional schema on `operations`; `/testimonials` index. Nav = 7 links (home, credentials, international, testimonials, news, publications, certificates), wraps on mobile.
- **Verification:** build exit 0, **40 pages** (was 30; +8 cred detail +2 pages); preview: masthead/CTA/languages/theme-init+toggle+SVGs/nav 7/7, international 7+3 batches+UiTM+UMPSA, testimonials badges present, CERT-D 13 rows in correct desc order, certificates index shows Dicoding/Qwiklabs/Bits, pemilwa testimonial block + badge, all new routes 200. Note: preview-mode `data-astro-source-*` attributes and PS quoting caused initial test false-negatives; final assertions all green.
- **Next (user-supplied):** photo at `public/photo.jpg`, logos in `public/logos/`, certificate scans into `public/docs/credentials/`, real testimonials (flip `is_placeholder: false`), Google Cloud Skills Boost + LKTI entries, then Git init/push.


### 2026-09-23 (Phase 7 -- Content Expansion & Relational Indices)

- **RESTek split (3 files replace 1):**
  - Deleted `leadership/restek-kmhe.md`; created `restek-network-engineer.md` (Network Security Engineer, 2019-11 to 2020-12), `restek-it-lead.md` (Division Lead, INFINITE UNY IT Research Division, 2020-12 to 2022-01), `restek-chairman.md` (Chairman, 2022-01 to 2023-01, KMHE 2022 champion block + cert pill). Organization = "UKM Rekayasa Teknologi UNY" (Q1); roles/dates user-stated 2026-09 (LinkedIn). PHP2D pills/grants NOT duplicated -- owned by `php2d-msme.md`.
  - KMHE UNY press URL `uny.ac.id/id/berita/prestasi-kmhe-2022` (and `www.` variant) **returned 404** in liveness check -> pill seeded `needs-confirmation` (disabled) with note; no URL invented.
- **New `mobility` collection:**
  - `config.ts`: `program_type` (in-person|virtual), `host_institution`, `location`, `selection_context?` on shared base; exported in `collections`.
  - 4 seeds: `sakura-science-2018.md` (JST Tokyo, cv.md Honors), `pknu-iss-2024.md` (Busan, cv.md Honors), `fpt-mobile-programming-2020.md` (virtual, career-archive:20), `uthm-entrepreneurship-2020.md` (virtual, career-archive:21). Cert pills `needs-confirmation` + one `available` `global-mobility-folio.pdf` (copied `output/Divider_5_GlobalAcademicMobility.pdf`).
  - `routes.ts`: `mobility: 'mobility'` segment.
- **Full detail routes (Q2):** `detailCollections` now covers ALL 7 collections (`+ leadership`, `+ credentials`, `+ mobility`) -> `/leadership/[slug]`, `/credentials/[slug]`, `/mobility/[slug]` work with the existing `[collection]/[slug].astro`; added rendering blocks: leadership `organization` line, credentials `credential_type/issuer` meta line, mobility `host/location/program type/selection` dl.
- **Relational index pages (new):**
  - `src/lib/evidence-index.ts`: shared `gatherEvidence()` + `relatedHref()` helper over all detail-routed collections.
  - `src/pages/news.astro`: all `external-press` pills (6 rows) each with "Related to: [title]" link.
  - `src/pages/publications.astro`: all `journal` pills (1 row -- JATIKA) with summary + related link.
  - `src/pages/certificates.astro`: master repository -- `internal-pdf` OR `hki` pills PLUS any pill on entries with `credential_type` in {license, certification, **test**, **degree**} (Q3), grouped by collection with related links.
- **Nav:** header now home / credentials / news / publications / certificates; header+nav get `flex-wrap` for mobile (5 links).
- **Deferred (Q4):** Google Cloud Skills Boost credential + LKTI 1st/3rd Place awards -- user will add manually later (LKTI will need `award` added to `credential_type` enum when that day comes).
- **Verification:** `npm run build` exit 0, **30 pages** (was 11; +16 detail +3 index). Preview: `/news` 6 rows, `/publications` JATIKA, `/certificates` groups+disabled pills, mobility dl+folio PDF 200, all 9 seeded detail routes 200 (slugs, not filenames), old `/leadership/restek-kmhe-championship` correctly 404, all news "Related to" links resolve 200, hub shows all 3 RESTek roles, nav 5 links + wrap. **ASCII scan: all 12 new/modified files pure ASCII.**
- **Note for content QA:** two 404s during testing were my test URLs using filenames instead of `slug` fields (routes are correct); entry routes always follow the `slug` frontmatter field.
- **Next:** user-supplied assets/scans (logos, certificates, live KMHE press URL), Google Cloud + LKTI entries, then Git init/push for deploy.


### 2026-09-23 (Phase 6 — Polish & Data Refinement)

- **Identity Reframing (`index.astro` + `Layout.astro`):**
  - Subtitle → **"Multidisciplinary IT Engineer — Web, EdTech & Campus Operations"** (em dash, user-approved).
  - New approved 2-sentence generalist bio (web/XR software · hardware/infrastructure · institutional operations; UNY pedagogical heritage) rendered under the masthead.
  - `Layout.astro` default meta `description` updated to match.
- **EvidencePill UI upgrade:**
  - Text prefixes (`[PDF]`, `[DOI]`…) replaced with **inline Lucide SVG icons** (file-text, book-open, shield, newspaper, play-circle, globe, git-branch) — zero new dependencies, `aria-hidden`, `stroke-width` 1.75.
  - Compactness: `px-1.5`, `text-[11px]`, `gap-1`; live pill keeps teal pulse dot. Disabled-state logic unchanged.
- **Institution logos (approach A):**
  - `config.ts` base: `institution_logo: z.string().optional()` (inherited by all 6 collections).
  - `ProjectCard.astro`: optional 24×24 (`h-6 w-6 rounded object-contain`) logo rendered before track tag when prop present. Logo values seeded **zero** — user supplies files in `public/logos/` later (dir + `.gitkeep` created); code path untested visually until first asset lands.
- **Data correction — RESTek timeline (`leadership/restek-kmhe.md`, approach A):**
  - `role: "Network Security Engineer → Division Lead → Chairman"` · `period: 2019-11 → 2023-01` · summary rewritten as three-stage internal promotion narrative (Nov 2019 → Dec 2020 → Jan 2022, KMHE close).
  - `provenance_source` + `verification_notes` record this as user-stated 2026-09 refining `career-archive.md:24`. Body §1–§2 updated for consistency.
  - Bug fixed during build: duplicate `summary` YAML key (Phase 3 backfill vs new summary) → build failed `storeMappingPair`; old key removed, build green.
- **Data addition — PHP2D press (`leadership/php2d-msme.md`):** 3 `external-press` pills added, **all 3 URLs liveness-verified live** before seeding (`available`): UNY News (ID), FEB UNY (ID), SDGs UNY (EN).
- **Verification:** build exit 0, 11 pages; preview regression: new subtitle/bio/meta ✓, zero `[PDF]`-style bracket prefixes ✓, 23 SVG icons on home, 3 on detail ✓, compact `text-[11px]` ✓, RESTek arc + `2019-11` period render on credentials ✓, PHP2D 3 press links active ✓; UTF-8 direct-file checks confirm em dash (U+2014) and arrows (U+2192) intact (PS 5.1 console mojibake was a test artifact).
- **Next:** user drops logo assets into `public/logos/` + adds `institution_logo` frontmatter lines; then eventual Git init/push for live deploy.


### 2026-09-23 (Phase 5 — Polish & Deployment Preparation)

- **Files Created:**
  - `website/.github/workflows/deploy.yml`: Official GitHub Pages pipeline (checkout → Node 20 + npm cache → `npm ci` → `npm run build` → `configure-pages` → `upload-pages-artifact` → `deploy-pages`), with permissions `contents: read`, `pages: write`, `id-token: write` and `concurrency: pages`. Strategy A — designed for `website/` becoming the standalone repo root (`maulidinalif.github.io`); **no git init, no push executed** (user deferred Git setup).
- **Config:**
  - `astro.config.mjs`: added `site: 'https://maulidinalif.github.io'` — **no `base`** (User Site strategy approved).
  - `npx astro telemetry disable` run locally (no code change).
- **Evidence PDFs → `public/docs/` (Q2 decision executed):**
  - Copied 3 ready PDFs: `04_Laravel_Student_Portals_MTQM.pdf` → `systems/04-mtqm-laravel-dossier.pdf`; `Divider_4_VIPLogisticsFieldOperations.pdf` → `operations/vip-delegations-dossier.pdf`; `Evidence_Data_Architecture.pdf` → `operations/`.
  - Compiled 4 HTML dossiers to PDF via Playwright (temp script outside repo): `01-pemilwa-concurrency-dossier.pdf`, `02-simoby-integration-dossier.pdf`, `03-io-uny-drupal-dossier.pdf`, `06-ar-kitchen-vocational-dossier.pdf`. Total: **7 evidence PDFs staged**.
  - Flipped all unbacked `internal-pdf` pills to `needs-confirmation` (render disabled): simoby thesis minutes, plant-escape HKI ×2 + PIMNAS, restek KMHE cert + PHP2D contract, php2d contract, st-degree ×3, smk-tkj, bnsp, ef-set, toeic, bangkit, kmmi. Ready to re-flip `available` when user drops PDFs into `public/docs/`.
- **Responsive / A11y Polish:**
  - Contrast: `neutral-400` back-link, card arrows, metric `▸`, systems `dt` labels → `neutral-500` (AA).
  - Focus: `focus-visible` rings added to evidence pills, card links, back-link, nav links, track buttons (`:focus-visible` outline in scoped CSS).
  - Overflow: `break-words` on card/detail titles, role·timeline lines, systems `dd` values.
- **Verification (PRD Phase 5 local exit):**
  - `npm run build`: exit 0, **11 pages**, telemetry disabled.
  - Preview regression: home 4 buttons/8 cards/impact/focus ✓ · pemilwa detail md/db/break ✓ · `/docs/...` PDFs 200 (01 = 1.27MB compiled, 06, vip-delegations) ✓ · credentials 4 sections + 21 disabled pills (zero unbacked proof clickable) + press link still active ✓ · ops PDF 200 ✓ · mtqm active links = live+pdf+2 footer ✓.
- **Deferred (by design):** Git init/push, GitHub repo creation, live deploy, Lighthouse ≥95 verification on live URL (post-deploy), credential/HKI/certificate scans when user supplies them, `/timeline` + `/writing` index routes.


### 2026-09-23 (Phase 4 — Page Assembly)

- **Files Created:**
  - `website/src/lib/routes.ts`: Shared segment map honoring approved spec (`edtech-xr → /edtech`, `operations → /ops`, `writings → /writing`) + `entryHref()` helper — consumed by homepage, detail routes, and credentials links (single source, no drift).
  - `website/src/pages/index.astro` (rewritten): Masthead (name + serif "Systems Builder & Institutional Operator"); **track-switcher island** — plain `<script>` toggling `aria-pressed` buttons and native `hidden` on 8 `[data-track]` wrapper divs (cards fully visible without JS); **Impact by the Numbers** block — 5 hard metrics (100% uptime, 2 HKI, 8,000+ followers, >IDR 30M, 1st Place KMHE 2022); cards linked to detail routes.
  - `website/src/pages/[collection]/[slug].astro`: `getStaticPaths` over 4 collections; detail template = back-link, track tag, title, mono role·period, serif summary, metrics, evidence pills, full markdown `<Content />` in hand-rolled `.markdown` styles, plus per-collection frontmatter blocks (systems: architecture/db/security key-value; edtech-xr: HKI numbers, publications, grants; operations: functional domains + delegations grids).
  - `website/src/pages/credentials.astro`: Verification hub with 4 grouped sections — A Education & Heritage (`credentials` where `credential_type: degree`), B Leadership & Impact (`leadership` via ProjectCards), C Publications & IP (Plant Escape HKI rows + JATIKA + thesis row), D Certifications, Licenses & Tests (`license|certification|test`) — compact rows with per-row pills; groups computed at build time, no hand lists.
- **Edits:**
  - `website/src/layouts/Layout.astro`: header nav now live — `home` · `credentials` (only existing routes; no dead links).
  - `website/src/styles/global.css`: hand-rolled `.markdown` prose (~30 lines: h2/h3, lists, code, blockquote, rules) — no typography plugin (ultra-minimal decision).
- **Deferred (approved):** `/timeline` and `/writing` index routes.
- **Verification:**
  - `npm run build`: exit 0, **exactly 11 pages** (1 home + 1 credentials + 9 detail: 5 systems + 2 edtech + 1 ops + 1 writing).
  - Preview assertions: 4 track buttons ✓, 8 `[data-track]` cards ✓, 5 impact stats all present ✓ (100%, 1st, KMHE 2022, IDR 30M, 8,000+), `/edtech/plant-escape-ar` 200 w/ HKI block + markdown + 2 pending pills ✓, `/ops/...` 200 w/ delegations ✓, `/writing/...` 200 w/ prose ✓, `/systems/pemilwa-evoting` 200 w/ db block ✓, `/credentials` 200 w/ sections A–D + HKI number + thesis ✓, nav links resolve ✓.
- **Next:** Phase 5 (Polish, CI/CD & Deployment) — accessibility/responsive pass, evidence PDFs into `public/docs/`, `base` config, GitHub Actions, first GitHub Pages deploy.


### 2026-09-23 (Phase 3 — Core UI Components)

- **Files Created:**
  - `website/src/layouts/Layout.astro`: Master HTML shell — `font-sans` UI / `font-serif` reading / `font-mono` technical typography system, `max-w-3xl` container, mono-prompt header (`alifah@portfolio:~$`), minimal footer (email/GitHub/LinkedIn from `cv.md`). Header nav deferred to Phase 4 (approved).
  - `website/src/components/EvidencePill.astro`: Teguh-style proof buttons for all 7 evidence types with distinct border/hover palettes (PDF neutral, DOI emerald, HKI amber, PRESS blue, DEMO purple, LIVE teal pulsing dot, CODE zinc). **Crucial logic:** `status !== 'available'` (i.e. `needs-confirmation` / `restricted`) renders a muted dashed `<span>` with `aria-disabled="true"`, `cursor-not-allowed`, tooltip "Pending verification" — no `href`.
  - `website/src/components/ProjectCard.astro`: Reusable collection card — track tag, title (optional `href` for Phase 4), mono role · timeline, serif `summary`, mono metrics bullets (▸ label: value), evidence pill row (divider omitted when empty).
- **Schema & Content Updates (Option B):**
  - `src/content/config.ts`: added `summary: z.string().optional()` to shared base.
  - Backfilled one-sentence `summary` frontmatter into **18 seed files** (all except `writings/native-php-concurrency.md`, which already required one) — all sentences grounded in `cv.md` / `career-archive.md`.
  - `src/styles/global.css`: added `--font-serif` token to `@theme`.
- **Page Wiring:**
  - `src/pages/index.astro` rewritten to use `Layout` + demo `ProjectCard` from the live `edtech-xr/plant-escape` seed entry (all 7 pill types incl. 2 pending-verification disabled states).
- **Bug found & fixed:** Astro glob-loader entry IDs resolve to frontmatter `slug` (not filename, not `id`) — `getEntry('edtech-xr', 'plant-escape')` failed with `Entry not found`; probed real IDs via temp page, corrected lookup to `'plant-escape-ar'`, removed probe.
- **Verification:**
  - `npm run build`: exit 0, 1 page built.
  - `npm run preview`: page 200; summary ✓, metrics ✓, 3 available pill `<a>` links ✓, 2 `aria-disabled` pills ✓, `[HKI]`/`[DOI]` prefixes ✓, `font-serif` summary ✓, footer contact links ✓.
- **Next:** Phase 4 (Page Assembly) — homepage track-switcher island, dynamic `/systems|edtech|ops/[slug]` routes, `/credentials` hub.


### 2026-09-23 (Phase 2 — Data Layer & Content Seeding)

- **Files Created:**
  - `website/src/content/config.ts`: Six Zod-validated collections (`systems`, `edtech-xr`, `operations`, `leadership`, `credentials`, `writings`) via Astro 5 Content Layer (`glob()` loaders). Shared `base` object mirrors `content-model.md` §1 global fields (id, title, slug, role, period, tech_stack, metrics, live_url, archive_status, provenance_source, privacy_level, epistemic_status, verification_notes) plus the strict `evidence` array (7-type enum, `is_internal`, 3-status enum). Domain-specific fields per Schema A–F; all `.strict()` (unknown keys rejected).
  - 19 seed Markdown entries across 6 collections:
    - `systems/` (5): `pemilwa.md`, `simoby.md`, `mtqm.md`, `io-gateway.md`, `srgate.md`
    - `edtech-xr/` (2): `plant-escape.md`, `ar-kitchen.md`
    - `operations/` (1): `international-office.md`
    - `leadership/` (3): `restek-kmhe.md`, `gdsc-uny.md`, `php2d-msme.md`
    - `credentials/` (7): `st-degree.md`, `smk-tkj.md`, `bnsp-network-admin.md`, `ef-set-c2.md`, `toeic-925.md`, `bangkit-2023.md`, `kmmi-scrum.md`
    - `writings/` (1): `native-php-concurrency.md` (draft)
  - Removed `src/content/.gitkeep` (directory now populated).
- **Decisions:**
  - `collection` frontmatter key omitted — Astro exposes `entry.collection` automatically.
  - Config path `src/content/config.ts` (user/PRD-specified location, works on Astro 5.18).
  - Unconfirmed proof links (JATIKA DOI, EF SET URL, demo video, uncreated repos, SK Rektor excerpt, GDSC cert) seeded with `status: "needs-confirmation"` — no `XXXXX` placeholder URLs shipped. User will supply real proof/links later.
- **Verification (PRD Phase 2 exit criteria):**
  - Positive: `npm run build` passes; all **19/19 entries** validated — `{"systems":5,"edtech-xr":2,"operations":1,"leadership":3,"credentials":7,"writings":1}`.
  - Negative: injected entry with invalid `epistemic_status` → build **fails** with `InvalidContentEntryDataError` naming the exact enum violation; probe removed, final build passes (exit 0).
  - Temp check page/content-counts file cleaned up; no CI/CD or hosting files added.
- **Next:** Phase 3 (Core UI Components) — `EvidencePill`, `ProjectCard`, `Layout` shell.


### 2026-09-23 (Phase 1 — Local Project Scaffolding)

- **Files Created:**
  - `website/package.json`: Minimal package manifest (astro ^5, tailwindcss ^4, @tailwindcss/vite ^4; scripts: dev/build/preview/astro).
  - `website/astro.config.mjs`: Astro config with Tailwind v4 via `@tailwindcss/vite` plugin — no `site`/`base`/CI configuration (deferred to Phase 5).
  - `website/tsconfig.json`: Extends `astro/tsconfigs/strict`.
  - `website/.gitignore`: Ignores `node_modules/`, `dist/`, `.astro/`, `.env`.
  - `website/src/styles/global.css`: Tailwind v4 CSS-first config (`@import "tailwindcss"` + `@theme` tokens for fonts/Palinuro palette).
  - `website/src/pages/index.astro`: Minimal self-contained Palinuro-style placeholder page.
  - `website/public/docs/.gitkeep`: Reserved directory for Phase 2+ evidence PDFs.
  - `website/src/content/.gitkeep`: Reserved Content Collections directory (populated in Phase 2).
- **Decision applied:** Tailwind **Option A (v4)** — theme tokens live in `global.css` `@theme` block; no `tailwind.config.*` file exists.
- **Verification (local only):**
  - `npm install`: 299 packages added (esbuild/sharp install-script warnings — harmless, binaries resolved via optional deps).
  - `npm run dev`: serves page at `http://localhost:4321/` — 200, masthead found.
  - `npm run build`: passes; emits `dist/_astro/index.*.css`.
  - `npm run preview`: serves built output — page 200, linked CSS 200 (7417 bytes), `.font-mono` Tailwind utility present.
  - Bug found and fixed during verification: `<link href="/src/styles/global.css">` was not processed by Vite (404) — replaced with frontmatter `import '../styles/global.css'`.
- **PRD Phase 1 exit criteria:** all met — local dev/build/preview loop works, Tailwind typography baseline present, `src/content/` and `public/docs/` reserved, zero CI/CD or remote-hosting files.
- **Next:** Phase 2 (Data Layer & Content Seeding) — `src/content/config.ts` with strict Zod schemas + seed Markdown entries from `cv.md`.


### 2026-09-23

- **Files Created:**
  - `website/PRD.md`: Master Product Requirements Document guiding the Plan and Build phases for the multi-track portfolio website.
- **Key decisions recorded in PRD:**
  - Architecture: Multi-Track Systems Portfolio (Option 2); three equal-weight tracks (Production Web Systems, EdTech/XR, Institutional Operations) plus a dedicated `/credentials` verification hub.
  - Stack: Astro SSG + Tailwind CSS (typography-first "Palinuro" aesthetic); zero JS by default with one scoped exception — a tiny progressive-enhancement JS island for the homepage track switcher (static HTML remains fully readable without JS).
  - Hosting: 100% free GitHub Pages on the default `<username>.github.io` domain (custom `.id` domain not renewed — zero-cost constraint is mandatory).
  - Roadmap resequenced for local-first development: Phase 1 is purely local Astro + Tailwind scaffolding; GitHub Actions CI/CD moved entirely to Phase 5 along with first remote deployment.
  - Content layer: Astro Content Collections with strict Zod validation mirroring `research/opencode/content-model.md`, including the `evidence` proof-pill array and `[NEEDS CONFIRMATION]` handling.
- **Status:** PRD approved. Phase 1 (local scaffolding) ready to begin. No Astro code, components, or configurations written yet.
