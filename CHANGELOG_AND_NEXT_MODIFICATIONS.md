# Website Changelog & Next Modifications Roadmap

**Document Reference:** `CHANGELOG_AND_NEXT_MODIFICATIONS.md`  
**Generated Date:** October 26, 2026  
**Repository:** `career-ops/website`  
**Baseline Compared:** `website_backup19oct26` (October 19, 2026) vs. `website` (Current)  
**Site:** Alifah Mauliddin Nur Ikhsan, S.T. — Portfolio (`https://mauliv.github.io`)  

---

# Executive Summary of Evolution (Backup vs. Current)

A deep differential analysis between `website_backup19oct26` (October 19, 2026) and the current workspace reveals **210 files added**, **1 file retired**, and **52 files substantially modified**:

```
Evolution Summary (Oct 19, 2026 ➔ Oct 26, 2026):
┌─────────────────────────┐         ┌─────────────────────────┐
│ website_backup19oct26   │         │ current website         │
│ • 44 static pages       │         │ • 59 static pages       │
│ • maulidinalif domain   │ ──────► │ • mauliv.github.io      │
│ • 5 press articles      │         │ • 13 press articles     │
│ • 0 event dossiers      │         │ • 5 event dossiers      │
│ • srgate stub           │         │ • patilo-web (PHP2D)    │
│ • 6 UI components       │         │ • 8 UI components       │
│ • minimal PDF proof     │         │ • 15+ primary PDFs      │
└─────────────────────────┘         └─────────────────────────┘
```

---

# Part I: Consolidated Chronological Changelog

### Phase 29 — Antislop Audit & Visual Polish Implementation (October 26, 2026)
* **Antislop F-01 (`TechStack.astro`):** Removed `animate-ping` from skill highlight dots; enforced MOTION dial 1 (static amber dot).
* **Antislop F-02 (`testimonials.ts` & `TestimonialCard.astro`):** Formalized `isPublished` check (`is_placeholder !== true`) with build-time defense in `TestimonialCard.astro`.
* **Visual V-01 (`Layout.astro`):** Implemented single-row mobile navigation on <=390px viewports with `hidden md:inline-flex` on text links and accessible Index dropdown.
* **Antislop F-03 (`index.astro`):** Added explicit `animation: none !important; opacity: 1 !important; transform: scale(1) !important;` on `.pemilwa-dot-1` under `prefers-reduced-motion`.
* **Antislop F-04 (`TechStack.astro`):** Added `aria-controls="skills-grid"`, unique tab IDs, and `role="tabpanel"` on skills grid container with dynamic `aria-labelledby` updating on tab change.
* **Antislop F-05 & Visual V-07 (`EvidencePill.astro`):** Disabled pills made keyboard-focusable (`tabindex="0"`), added `<span class="sr-only">Pending verification: </span>`, and appended visual `(pending)` badge.
* **Visual V-02 (`it.astro`):** Prioritized live Pemilwa e-voting platform first, followed by Simoby CRM, in Web Platforms.
* **Visual V-03 (`ProjectCard.astro`, `index.astro`, `contact.astro`, `social-media.astro`):** Elevated dark mode card border contrast (`dark:border-neutral-700`).
* **Visual V-04 (`credentials.astro`):** Moved Languages block from subtitle to bottom beneath Certifications with proper section heading.
* **Visual V-05 (`simoby.md`, `ar-kitchen.md`):** Embedded workflow flowchart in Simoby and evaluation feedback screen in AR Kitchen.
* **Antislop F-06 (`global.css`):** Added `max-width: 65ch` to `.markdown` prose for comfortable reading measure.
* **Antislop F-07 (`TechStack.astro`):** Rewritten JSDoc header to lead with architectural purpose instead of template URL.
* **Antislop F-08 (`Layout.astro`):** Added `aria-label="Secondary navigation"` to `<details>` dropdown and `Escape` key listener to close menu.
* **Visual V-06 (`testimonials.astro`):** Updated empty state text into a warm, open invitation for references.
* **Hygiene H-02 (`src/content/testimonials/.gitkeep`):** Added `.gitkeep` preserving empty collection directory per ADR-0001.
* **Verified:** Clean `npm run build` exit 0 (59 static pages).

---

### Phase 28 — SMKN 3 Press Integration & SSHP 2018 Evidence (October 26, 2026)
* **New Press Entry (`src/content/press/smkn3-pertukaran-pelajar-jepang-2018.md`):** Integrated verified institutional announcement from SMK Negeri 3 Yogyakarta (`@smkn3jogja`) celebrating Alifah's national selection for the Sakura Science High School Program in Japan. Bi-directionally linked to `sakura-science-2018` and `smk-negeri-3-yogyakarta-tkj`.
* **Media Asset (`public/images/sakura-science/fb-smkn3-announcement.jpg`):** Archived high-resolution official school banner.
* **SSHP Dossier (`src/content/operations/sakura-science-2018.md`):** Added external-press pill for the official post + inline `<figure>` image markup.

---

### Phase 27 — PKNU & SSHP Dossiers, Sanitized Credentials, Dark Mode Logos (October 22, 2026)
* **Git Commit `aec9b57`:**
  - `pknu-iss-2024.md`: Substantially expanded narrative dossier (+242 lines), detailing Pukyong National University academic coursework, cultural immersion, and schedule artifact.
  - `sakura-science-2018.md`: Re-encoded PDF evidence, retired redundant draft text, added lecture photo with Nobel Laureate Prof. Takaaki Kajita at Shibaura Institute of Technology.
  - Added Japanese press coverage: `jst-sshp-2018-closing-ceremony.md` and `jst-sshp-2018-shibaura-kajita-lecture.md`.
  - Dark mode logo inversion: Refined `ProjectIcon.astro` and `TechStack.astro` for monochrome brand logos.
  - Sanitized credentials layout in `CredentialRow.astro`.

---

### Phase 26 down through Phase 1 (September 23–27, 2026)
* Complete foundation, component library, PaperMod styling, collections schema, evidence indices, and URL normalization (documented in `CHANGELOG.md`).

---

# Part II: Next Modifications Roadmap

| Action Item | Target | Status |
| :--- | :--- | :---: |
| **All Tier 1–3 Antislop & Visual Fixes (F-01 to F-08, V-01 to V-08)** | Full Website UI | ✅ **Applied & Built** |
| **Stage & Commit Phase 28/29 Changes** | Git | 🟡 **Ready for commit** |
| **Visual Epistemic Status Badges (Candidate 6)** | Detail Pages | 🔵 **Future Feature** |
