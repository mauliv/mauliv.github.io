# Next Modifications & Implementation Status

**Document:** `NEXT_MODIFICATIONS.md`  
**Generated Date:** October 26, 2026  
**Status:** ✅ **Phase 29 Implemented & Verified** (59 static pages compiled exit 0)  
**Input Audits Consolidating Into This Plan:**
1. **Antislop Audit-001** (`antislop-audit-001-2026-10-23.md` — Rules R-01 to R-38 & C-1 to C-5)
2. **Visual & Layout Audit** (`FIXES.md` — October 4, 2026)
3. **Repository Differential Audit** (`website_backup19oct26` comparison)

---

## Master Implementation Summary

| ID | Origin | Target Component / File | Priority / Gate | Implementation Status |
| :---: | :---: | :--- | :---: | :---: |
| **F-01** | Antislop | [`TechStack.astro`](file:///c:/Users/alifa/career-ops/website/src/components/TechStack.astro#L474) | **HIGH (Hard Gate)** | ✅ **COMPLETED:** Removed `animate-ping` pulsing dots on featured skills; enforced MOTION dial 1 (static amber dot). |
| **F-02** | Antislop | [`testimonials.ts`](file:///c:/Users/alifa/career-ops/website/src/lib/testimonials.ts#L8) / [`TestimonialCard.astro`](file:///c:/Users/alifa/career-ops/website/src/components/TestimonialCard.astro) | **HIGH (Hard Gate)** | ✅ **COMPLETED:** Added defensive guard throwing if placeholder quote is ever passed; strictly enforce `is_placeholder !== true`. |
| **V-01** | Visual | [`Layout.astro`](file:///c:/Users/alifa/career-ops/website/src/layouts/Layout.astro#L64) | **HIGH** | ✅ **COMPLETED:** Fixed mobile navbar wrapping on 390px viewports (single row with Home, Index ▾, theme toggle; `hidden md:inline-flex` on text links). |
| **F-03** | Antislop | [`index.astro`](file:///c:/Users/alifa/career-ops/website/src/pages/index.astro#L575) | **MEDIUM (Purpose Gate)** | ✅ **COMPLETED:** Explicit static reset (`animation: none !important; opacity: 1 !important; transform: scale(1) !important;`) on `.pemilwa-dot-1` under `prefers-reduced-motion`. |
| **F-04** | Antislop | [`TechStack.astro`](file:///c:/Users/alifa/career-ops/website/src/components/TechStack.astro#L428) | **MEDIUM (A11y Gate)** | ✅ **COMPLETED:** Added `aria-controls="skills-grid"`, unique IDs on tab buttons, `role="tabpanel"`, and dynamic `aria-labelledby` updating on tab change. |
| **F-05** | Antislop | [`EvidencePill.astro`](file:///c:/Users/alifa/career-ops/website/src/components/EvidencePill.astro#L52) | **MEDIUM (A11y Gate)** | ✅ **COMPLETED:** Disabled pills are keyboard-focusable (`tabindex="0"`), focus-ring styled, announce `<span class="sr-only">Pending verification: </span>`, and display a visual `(pending)` badge. |
| **V-02** | Visual | [`it.astro`](file:///c:/Users/alifa/career-ops/website/src/pages/it.astro#L20) | **MEDIUM** | ✅ **COMPLETED:** Prioritized live Pemilwa e-voting platform first, followed by Simoby CRM, ahead of pure chronological sorting in Web Platforms. |
| **V-03** | Visual | [`ProjectCard.astro`](file:///c:/Users/alifa/career-ops/website/src/components/ProjectCard.astro) & [`index.astro`](file:///c:/Users/alifa/career-ops/website/src/pages/index.astro) | **MEDIUM** | ✅ **COMPLETED:** Elevated dark mode card border contrast (`dark:border-neutral-700`) across project cards, featured cards, contact, and social-media cards. |
| **V-04** | Visual | [`credentials.astro`](file:///c:/Users/alifa/career-ops/website/src/pages/credentials.astro#L58) | **MEDIUM** | ✅ **COMPLETED:** Relocated Languages block from subtitle to bottom beneath Certifications with proper section heading. |
| **V-09** | Visual | [`it.astro`](file:///c:/Users/alifa/career-ops/website/src/pages/it.astro#L92) | **LOW** | ✅ **COMPLETED:** Changed section icon from `terminal` to `networks` to match network topology icon on `/networks`. |
| **V-05** | Visual | `src/content/systems/*.md` | **MEDIUM** | ✅ **COMPLETED:** Embedded workflow flowchart in `simoby.md` and evaluation feedback screen in `ar-kitchen.md`. |
| **F-06** | Antislop | [`global.css`](file:///c:/Users/alifa/career-ops/website/src/styles/global.css#L60) | **LOW (Quality Lock)** | ✅ **COMPLETED:** Added `max-width: 65ch` to `.markdown` prose for comfortable reading line length. |
| **F-07** | Antislop | [`TechStack.astro`](file:///c:/Users/alifa/career-ops/website/src/components/TechStack.astro#L4) | **LOW (Quality Lock)** | ✅ **COMPLETED:** Rewritten JSDoc header to lead with architectural intent and skill matrix categorization rather than external template link. |
| **F-08** | Antislop | [`Layout.astro`](file:///c:/Users/alifa/career-ops/website/src/layouts/Layout.astro#L86) | **LOW (Quality Lock)** | ✅ **COMPLETED:** Added `aria-label="Secondary navigation"` to `<details>` dropdown and `Escape` key listener to close menu. |
| **V-06** | Visual | [`testimonials.astro`](file:///c:/Users/alifa/career-ops/website/src/pages/testimonials.astro#L51) | **LOW** | ✅ **COMPLETED:** Updated empty state text into a warm, open invitation for collaborators to provide verified quotes. |
| **V-07** | Visual | [`EvidencePill.astro`](file:///c:/Users/alifa/career-ops/website/src/components/EvidencePill.astro#L59) | **LOW** | ✅ **COMPLETED:** Added visible `(pending)` badge to disabled pills for instant visual scanning without hovering. |
| **V-08** | Visual | `src/pages/*.astro` | **LOW** | ✅ **COMPLETED:** Verified unique per-page meta descriptions across all index pages for social sharing. |
| **H-02** | Hygiene | `src/content/testimonials/` | **HYGIENE** | ✅ **COMPLETED:** Added `.gitkeep` to preserve empty collection directory per ADR-0001. |

---

## Remaining Action Items (Pending User Direction)

### 1. Git Staging & Phase 28/29 Commit (Hygiene)
* **Status:** Ready to commit
* **Command:**
  ```bash
  git add .
  git commit -m "feat: implement antislop audit findings and visual polish pass"
  ```

### 2. Long-Term Architectural Enhancements (Candidate 6)
* **Status:** Future roadmap
* **Action:** Visually render epistemic status badges (`verified-fact`, `interpretation`, `needs-confirmation`) in detail page headers.
