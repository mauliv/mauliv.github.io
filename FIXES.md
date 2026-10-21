# Portfolio Website — Fix & Polish Checklist

> Generated Oct 4, 2026 from visual audit. Work through these in order; each section is independent unless noted.
> Run `npm run build` after each section to confirm nothing broke.

---

## 🔴 ISSUE 1 — Mobile nav breaks into two rows

**What's wrong:** On 390px (phone), the nav wraps into two lines — `Home / Work / International / Credentials` on row 1, then `Contact / Index ▾` on row 2, with the theme toggle orphaned below. A recruiter's first impression on their phone is a broken header.

**Root cause:** All nav items are `flex-wrap` with no mobile hiding strategy.

**File to edit:** `src/layouts/Layout.astro`

**Fix — show only Home + Index dropdown on small screens, full nav on md+:**

Find the `<nav>` opening tag (around line 50):
```html
<nav class="flex min-w-0 flex-wrap items-center gap-y-0.5 font-mono text-xs" aria-label="Primary">
```

Replace it with:
```html
<nav class="flex min-w-0 items-center gap-y-0.5 font-mono text-xs" aria-label="Primary">
```

Then for each of the three primary nav `<a>` links (Work, International, Credentials), add `hidden md:inline-flex` to their class. Find each one — they look like:
```html
<a href={item.href} class={linkClass}>
```

Since they're rendered via `primaryItems.map(...)`, change the class on each mapped item:
```astro
primaryItems.map((item) => (
  <a href={item.href} class={`${linkClass} hidden md:inline-flex`}>
    ...
  </a>
))
```

Also hide the standalone Contact link on mobile:
```astro
<a href="/contact" class={`${linkClass} hidden md:inline-flex`}>
```

This keeps `Home` and `Index ▾` (which contains all sub-pages) visible at all sizes. The theme toggle stays right-aligned.

**Verify:** Resize browser to 390px — only `Home` and `Index ▾` should appear on one row with the theme toggle inline.

---

## 🟠 ISSUE 2 — Homepage intro paragraph is too long above the fold

**What's wrong:** The 4-line bio paragraph pushes the featured Pemilwa case study below the fold on desktop. Visitors may not scroll.

**File to edit:** `src/pages/index.astro`

**Find the bio paragraph** (it starts with "I work across three layers at once:"):
```html
<p ...>I work across three layers at once: web and XR software (Native PHP election systems, Unity AR learning tools), hardware and infrastructure (campus networks, VLE servers), and the institutional operations that depend on both — visas, elections, and teaching. UNY's teacher-training heritage means the engineering always serves a pedagogical purpose.</p>
```

**Replace with:**
```html
<p ...>Production web platforms, AR learning tools, and five years of campus operations — built, deployed, and documented. Engineering that always serves a pedagogical purpose.</p>
```

You can keep the full text in the page somewhere (e.g., in the IT competency section blurb, or as a detail page body), but the masthead should be punchy.

**Verify:** On desktop 1440px, the featured Pemilwa card should be visible without scrolling.

---

## 🟠 ISSUE 3 — Work page card order: most impressive project isn't first

**What's wrong:** The Work page leads with `MTQ UNY` (a 2021 competition portal). The most battle-tested and currently live system is Pemilwa (2020–present). First impressions matter.

**File to edit:** `src/pages/work.astro`

Find where the `systems` collection is queried and rendered. The current order is alphabetical by slug (`ar-kitchen`, `io-gateway`, `mtqm`, `pemilwa`, `plant-escape`, `simoby`, `srgate`).

Find the section that renders the `systems` collection entries and sort by `archive_status` then by custom priority. The simplest fix is to explicitly pin Pemilwa first:

```astro
// Sort: live systems first, then by slug
const sortedSystems = systems.sort((a, b) => {
  const liveA = a.data.archive_status === 'live' ? 0 : 1;
  const liveB = b.data.archive_status === 'live' ? 0 : 1;
  return liveA - liveB;
});
```

Then render `sortedSystems` instead of `systems` in the template.

**Alternatively** (simpler): hardcode the desired order by slug at the top of the page:
```astro
const priorityOrder = ['pemilwa-evoting', 'simoby-crm', 'mtqm-competition-portal', 'io-uny-homepage', 'srgate-backend', 'plant-escape-ar', 'ar-kitchen'];
const sortedSystems = priorityOrder
  .map(slug => systems.find(e => e.data.slug === slug))
  .filter(Boolean);
```

**Verify:** `/work` page — Pemilwa card appears first under "Web platforms".

---

## 🟠 ISSUE 4 — Dark card border nearly invisible on dark background

**What's wrong:** The project cards (`bg-neutral-900/40 border-neutral-800`) on `#1d1e20` body are very low contrast. Card edges are nearly invisible, especially on the featured Pemilwa card.

**Files to edit:** `src/pages/index.astro` and `src/components/ProjectCard.astro`

**In `ProjectCard.astro`**, find the outer card `div` with something like:
```html
class="... bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 ..."
```

Change `dark:border-neutral-800` → `dark:border-neutral-700`.

**In `index.astro`**, find the featured artifact card div (the one wrapping Pemilwa's case study in the header area) and apply the same fix.

**Verify:** In dark mode, card outlines are clearly visible against the page background.

---

## 🟠 ISSUE 5 — Languages block misplaced on Credentials page

**What's wrong:** On `/credentials`, the languages row (`Indonesian (Native) · Javanese (Native) · Malay...`) appears directly under the page subtitle before any credentials, looking like an orphan.

**File to edit:** `src/pages/credentials.astro`

Find the languages block (it renders flag + language pairs). Move it to **after the last credentials section** (below "Industry Certifications") rather than below the subtitle. Or add a small label:

```astro
<section aria-label="Languages" class="mt-6 mb-8">
  <h2 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Languages</h2>
  <!-- existing flags/languages block -->
</section>
```

Then move this `<section>` to the bottom of the page content, just before the closing `</main>` equivalent, so it reads as part of the overall credentials picture rather than a preamble.

**Verify:** `/credentials` — page opens directly with "Education & Academic Heritage", languages appear at the bottom.

---

## 🟡 ISSUE 6 — Testimonials page: empty state reads as a dead end

**What's wrong:** The page exists but landing on it feels like an error page. The design intention is an honest placeholder, not a blank wall.

**File to edit:** `src/pages/testimonials.astro`

Find the empty state block (it likely says "No testimonials yet." or similar). Replace with:

```astro
<p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
  No testimonials yet — this page exists as a standing, honest placeholder.
  If you've worked with me on any of the <a href="/work" class="underline underline-offset-4">systems listed here</a>
  and would like to leave a note, reach me at
  <a href="/contact" class="underline underline-offset-4">alif.maulidin@gmail.com</a>.
</p>
```

**Verify:** `/testimonials` — page has readable text, two links, no blank wall feeling.

---

## 🔵 ISSUE 7 — Adding screenshots to project detail pages

**How it works:** The detail pages render a `<Content />` slot from each `.md` file. This is the Markdown body *below* the frontmatter `---`. You can add images directly in markdown body using standard `![]()` syntax. Astro will copy images placed in `public/` and serve them at the same path.

### Step-by-step for each project:

**1. Take or find your screenshot**
- Screenshot the live site, or export from your YouTube video (use VLC → Scene → extract frame), or export from any existing documentation.
- Resize to reasonable dimensions: max 1200px wide, saved as `.webp` (or `.jpg` if easier). WebP is ~30% smaller.

**2. Place it in the right folder**
```
website/public/images/<project-slug>/screenshot.webp
```
For example:
```
public/images/pemilwa/dashboard.webp
public/images/simoby/crm-overview.webp
public/images/plant-escape/demo-card-scan.webp
```

**3. Add it to the markdown body of the content file**

Open `src/content/systems/pemilwa.md` (or whichever project). After the closing `---` frontmatter, add markdown body:

```markdown
---
# ... all frontmatter above ...
---

## How it works

![Pemilwa election dashboard — live election view with real-time vote counts](/images/pemilwa/dashboard.webp)

The election system runs on Native PHP with pessimistic row-locking...
```

The `<Content />` slot in `[slug].astro` already renders this body. It appears **below** the evidence pills section.

**4. For a YouTube demo video, add a `video` evidence pill instead (or in addition)**

The `video` type is already fully supported with purple styling. In the frontmatter `evidence` array, add:

```yaml
evidence:
  - type: "live"
    label: "Live System"
    url: "https://pemilwa.uny.ac.id"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "Architectural Dossier (PDF)"
    url: "/docs/systems/01-pemilwa-concurrency-dossier.pdf"
    is_internal: true
    status: "available"
  - type: "video"
    label: "Demo Walkthrough"
    url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
    is_internal: false
    status: "available"
```

This renders as a purple `▶ Demo Walkthrough` pill that opens the YouTube link in a new tab.

### Per-project status (fill in your YouTube URLs):

| Project | Screenshot needed | YouTube video | Notes |
|---------|-------------------|---------------|-------|
| `pemilwa.md` | Yes — live site screenshot | Add if you have a tutorial video | Live URL already works |
| `simoby.md` | Yes | Add if available | Has PDF dossier |
| `mtqm.md` | Optional — has archive link | — | Archive link may be dead |
| `plant-escape.md` | Yes — AR demo screenshot or frame | Add tutorial video URL | Most visual project — screenshot matters most here |
| `ar-kitchen.md` | Yes | Add tutorial video URL | Same as Plant Escape |
| `io-gateway.md` | Optional | — | Portal archive |
| `srgate.md` | Optional | — | May 404 |

---

## 🔵 ISSUE 8 — `needs-confirmation` pills are hard to distinguish from available ones at small sizes

**What's wrong:** The hollow circle `○` prefix on disabled pills is very small. At a glance it looks similar to the icon itself.

**File to edit:** `src/components/EvidencePill.astro`

Find the disabled/`needs-confirmation` span:
```html
<span class={`${base} border-dashed border-neutral-500 text-neutral-600 cursor-not-allowed dark:border-neutral-600 dark:text-neutral-400`} ...>
```

Add a visible `[?]` text prefix to the label to make it scannable:
```astro
<span ...>
  <svg ... />
  <span>[?] {label}</span>
</span>
```

Or alternatively, add a small badge:
```astro
<span class="ml-0.5 text-[9px] uppercase tracking-wide text-neutral-400">(pending)</span>
```

**Verify:** Pills with `status: "needs-confirmation"` read as clearly different from `available` pills without needing to hover.

---

## 🔵 ISSUE 9 — Add per-page meta descriptions for sharing

**What's wrong:** Currently all pages share the same default description from `Layout.astro`. When shared on LinkedIn or WhatsApp, every page shows "Multidisciplinary IT Engineer — Web, EdTech & Campus Operations" regardless of which page it is.

**Already working:** The `Layout` component accepts a `description` prop and the `[slug].astro` detail page already passes `description={d.summary}`. So detail pages are fine.

**Fix for index pages** — edit each page file and pass a `description` prop to `<Layout>`:

`src/pages/work.astro`:
```astro
<Layout title="Work" description="Production web systems, AR learning tools, and institutional platforms — seven projects across three tracks.">
```

`src/pages/credentials.astro`:
```astro
<Layout title="Credentials" description="Verified credentials: S.T. degree (GPA 3.77), BNSP Network Administrator, Bangkit GCP, EF SET C2 (71/100), TOEIC 925, and leadership at national scale.">
```

`src/pages/international.astro`:
```astro
<Layout title="International" description="Academic exchange programs across Japan, South Korea, Vietnam, and Malaysia — from JST Sakura Science to PKNU International Summer School.">
```

Repeat for `contact.astro`, `news.astro`, `publications.astro`, `writing.astro`, `testimonials.astro`.

---

## Build check after all fixes

```bash
cd website
npm run build
```

Expected: `44 pages built` (or more if you added content), exit 0, no type errors.

Then preview locally before deploying:
```bash
npm run preview
```

Check at both `http://localhost:4321` (desktop) and using browser DevTools mobile emulation at 390px.
