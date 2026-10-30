---
id: "sys-io-gateway"
title: "UNY International Office Gateway & Portal"
slug: "io-uny-homepage"
institution_logo: "/logos/uny.svg"
project_logo: "/logos/io-uny.png"
summary: "Drupal 7 public gateway routing four international-audience pathways, 11 global mobility programs, and institutional partnerships for UNY."
excerpt: "Designed and implemented a pathway-first information architecture on Drupal 7 and Nginx, replacing an undifferentiated web presence with four dedicated routing funnels for prospective foreign applicants, current international students, outbound domestic scholars and students, and global university partners."
role: "Web Developer & Information Architect"
period:
  start: "2021"
  end: "present"
tech_stack:
  - "Drupal 7 (Multisite)"
  - "PHP 8.x"
  - "Nginx Reverse Proxy"
  - "Bootstrap UI"
  - "Bootstrap Icons"
  - "jQuery & jQuery UI"
  - "Nivo Slider"
  - "Google Maps API"
metrics:
  - label: "Audience Pathway Architecture"
    value: "4 distinct self-selection routes (Prospective, Enrolled, Outbound, Partners)"
    provenance: "https://io.uny.ac.id/"
  - label: "Academic Programs Featured"
    value: "11 international study, scholar & scholarship programs"
    provenance: "https://io.uny.ac.id/programs"
  - label: "Institutional Audience Growth"
    value: "0 to 8,000+ organic Instagram followers (@io.uny inquiry funnel)"
    provenance: "career-archive.md:107"
  - label: "CMS Architecture"
    value: "Drupal Multisite deployed on university Nginx infrastructure"
    provenance: "wappalyzer_io-uny.ac.id.csv"
  - label: "Production Lifespan"
    value: "Live in continuous production from 2021 to present"
    provenance: "io.uny.ac.id server headers"
live_url: "https://io.uny.ac.id"
archive_status: "live"
architecture_type: "cms"
database:
  local_development: "MySQL"
  production_cluster: "MySQL (UNY Institutional Hosting)"
  concurrency_mechanism: "Nginx reverse proxy with Drupal block and page caching"
security_profile:
  auth_provider: "Drupal role-based editorial accounts (RBAC)"
  network_perimeter: "UNY campus network with SSL/TLS termination"
provenance_source: "career-archive.md:65-67, 210-214; io.uny.ac.id live scrape; output/03_IO_UNY_Homepage_Drupal.html"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Public-facing portal distinct from the internal SIMOBY CRM (Yii). Engineered and maintained under the International Office digital estate."
evidence:
  - type: "live"
    label: "Official Live Portal (io.uny.ac.id)"
    url: "https://io.uny.ac.id"
    is_internal: false
    status: "available"
  - type: "external-press"
    label: "NYP Singapore Delegation Coverage"
    url: "https://io.uny.ac.id/content/nyp-singapore-visits-uny"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "UX Architecture Dossier"
    url: "/docs/systems/03-io-uny-drupal-dossier.pdf"
    is_internal: true
    status: "available"
---

## 1. The Information-Architecture Challenge

As Universitas Negeri Yogyakarta (UNY) expanded its international outreach, its digital front door faced a critical usability bottleneck. Previously, all international initiatives — degree admissions, cultural classes, immigration protocols, outbound student mobility, and bilateral university partnerships — were scattered across generic institutional subpages.

Four fundamentally different audiences landed on the exact same pages with conflicting informational needs:
1. **Prospective International Students:** Needing degree listings, tuition breakdowns in Yogyakarta, Indonesian language immersion (BIPA), and scholarship eligibility criteria.
2. **Current International Students:** Requiring time-sensitive regulatory support — student visas, ITAS/KITAS stay permits, police registration (STM), local domicile certificates (SKTT), and emergency housing.
3. **UNY Civitas Going Abroad:** Seeking outbound exchange programs (IISMA, Erasmus+, short courses), application deadlines, funding rules, and credit transfer agreements.
4. **Foreign University Partners & Scholars:** Looking for institutional MoU/MoA signing procedures, visiting professorships, joint research opportunities, and international accreditations.

Mixing these user journeys produced high bounce rates, confused foreign applicants, and placed an avoidable support burden on administrative staff.

![UNY International Office Digital Gateway](/images/io-gateway/io-hero-banner.png)

---

## 2. The "Pathway-First" UX Architecture

To eliminate navigation confusion, I redesigned the portal around a **pathway-first architecture**. Prominently featured at the top of the homepage, visitors immediately self-select their target pathway:

```
[ io.uny.ac.id Gateway ]
           │
           ├──► [ 1. Study at UNY ]
           │     • Degree Programs (Undergraduate, Master, Doctoral)
           │     • Scholarships (UNY-DISS, KNB Scholarships, Darmasiswa)
           │     • Language (BIPA Indonesian Immersion)
           │
           ├──► [ 2. Current International Students ]
           │     • Immigration Compliance (e-Visa, ITAS/KITAS, SKTT, STM)
           │     • Academic & Accommodation Services
           │     • 24/7 Crisis Hotline & Office Hours Support
           │
           ├──► [ 3. UNY Civitas Going Abroad ]
           │     • IISMA, Erasmus+, and Summer Exchanges
           │     • Pre-departure Briefings & Credit Transfer Frameworks
           │
           └──► [ 4. Global Partners & Visiting Scholars ]
                 • Partnership Protocols (MoU / MoA)
                 • Visiting Professor & Scholar Appointments
                 • Joint Research, Publications & PhD Co-Supervision
```

By providing distinct landing funnels, each stakeholder group reaches their required documentation in one click, drastically reducing support tickets and simplifying international admissions.

---

## 3. Comprehensive International Programs Catalog

The portal organizes UNY's complete international offerings into 11 distinct, search-indexed programs categorized for students and scholars:

| Category | Program | Focus & Academic Offering |
| :--- | :--- | :--- |
| **Degree** | **Study Degree at UNY** | Full-time Bachelor's, Master's, and Doctoral programs across 8 faculties with affordable tuition and Yogyakarta living cost advantages. |
| **Short Program** | **Tailor-Made Short Programs** | Customized academic and cultural modules designed for foreign university delegations. |
| **Language** | **BIPA (*Bahasa Indonesia*)** | Structured Indonesian language immersion coupled with traditional cultural excursions. |
| **Short Course** | **Cultural Immersion Classes** | Ready-made summer courses covering Javanese arts, batik crafting, and gamelan music. |
| **Scholarship** | **UNY-DISS Scholarship** | Merit-based university awards providing tuition and living stipends for outstanding international applicants. |
| **Scholarship** | **KNB Scholarships** | Indonesian Government award (*Kemitraan Negara Berkembang*) for students from developing nations. |
| **Culture** | **Darmasiswa RI Program** | Ministry-funded non-degree cultural scholarship for foreign language learners. |
| **Scholar** | **Visiting Professor** | Semester or multi-year academic appointments listed in the official faculty directory. |
| **Scholar** | **Guest Lecture / Visiting Scholar** | Topic-specific guest residencies, research seminars, and lab workshops. |
| **Research** | **Joint Research & Publications** | Bilateral research projects targeting Scopus-indexed journals and international conferences. |
| **Supervision** | **Joint Thesis Supervision** | International co-supervision for Master's and Doctoral thesis defenses. |

---

## 4. Technical Architecture & CMS Engineering

I engineered and maintain the gateway on **Drupal 7**, configured to operate reliably within UNY's central server infrastructure:

```
[ Client Browser ]
        │ HTTPS (Port 443)
        ▼
[ Campus Network Perimeter ]
        │
        ▼
[ Nginx Reverse Proxy / Web Server ]
  • SSL/TLS termination & HTTP/2
  • Static asset caching (images, CSS, JS)
  • Gzip compression via jsDelivr CDN
        │
        ▼
[ PHP 8.x Runtime (Drupal Multisite) ]
  • Module: Nivo Slider (jquery.nivo.slider.pack.js)
  • Module: Custom Responsive Theme (Bootstrap UI + Bootstrap Icons)
  • Role-Based Access Control (RBAC for office editors)
        │
        ▼
[ MySQL Database Cluster ]
```

### Key Engineering Implementation:
* **Drupal Multisite Architecture:** Built within UNY's multi-domain Drupal environment (`devpro.uny.ac.id` / `io.uny.ac.id`), allowing centralized security patching and core updates while maintaining an isolated site database.
* **Nginx Reverse Proxy:** Fronted by Nginx to accelerate content delivery, cache static assets, and ensure responsive page rendering worldwide.
* **Bootstrap Responsive Theme:** Custom responsive theme utilizing Bootstrap grid layouts, Bootstrap Icons (`bootstrap-icons.min.css`), and jQuery UI to ensure seamless viewing on smartphones, tablets, and desktop workstations.
* **Dynamic Announcement Engine:** Integrated Nivo Slider (`jquery.nivo.slider.pack.js`) for high-visibility visual banners announcing new scholarship deadlines and orientation events.
* **Editorial Role-Based Access (RBAC):** Configured specialized content types (`Program`, `News`, `Announcement`, `Pathway`) with strict editorial permissions, enabling non-technical International Office staff to publish bulletins without touching codebase files.
* **Service Integrations:** Embedded Google Maps API for interactive visitor navigation and YouTube embeds for virtual campus tours.

---

## 5. Global Standing, Delegations & Strategic Alliances

The portal acts as the official public window for UNY's international accreditation credentials and global diplomatic engagements:

* **International Alliances:** Highlights UNY's active participation in global academic networks, including **APAIE** (*Asia-Pacific Association for International Education*), **AUN** (*ASEAN University Network*), **UMAP** (*University Mobility in Asia and the Pacific*), and **AASVET** (*Asian Academic Society for Vocational Education and Training*).
* **International Program Accreditations:** Surfaces internationally accredited degree programs (evaluated under German **ASIIN** and **FIBAA** standards) to give foreign applicants confidence in degree portability.
* **Delegation Hosting & Bilateral Partnerships:** Features live coverage of international delegations, including:
  * Seven recurring short-course batches hosted with **Nanyang Polytechnic (Singapore)**.
  * Three academic cohorts hosted with **Western Sydney University (Australia)**.
  * High-level bilateral MoU signings, such as the strategic academic partnership with **Pukyong National University (PKNU)** and **Tongmyong University (South Korea)**.

---

## 6. Synergies with SIMOBY & Social Media PR

The public gateway forms the outer layer of a two-tier digital ecosystem:

1. **Inbound Digital Funnel:** The public website attracts prospective international students, hosts verified application requirements, and directs inquiries to the admissions portal (`pmb.uny.ac.id`) and official International Office communication channels.
2. **Internal CRM Hand-Off (SIMOBY):** Once international students arrive, their ongoing dossiers, study permits, stay renewals (ITAS/KITAS), and institutional records are tracked securely within the internal **SIMOBY CRM** platform.
3. **Social Media Amplification:** The web portal is synchronized with the `@io.uny` Instagram account, which was grown organically from zero to **8,000+ followers**, establishing a vibrant, highly engaged community for international students in Yogyakarta.
