---
id: "sys-simoby"
title: "SIMOBY International Mobility CRM"
slug: "simoby-crm"
institution_logo: "/logos/uny.svg"
summary: "Enterprise mobility CRM engineered by UNY Central IT (UPT TIK), aligned with the Ministry of State Secretariat's (Kemensetneg) overseas travel clearance system (SIMPEL PDLN) to manage international tracking for university faculty, researchers, and incoming foreign scholars."
excerpt: "Engineered and maintained by UNY Central IT (UPT TIK). SIMOBY acts as the university's institutional control system, intentionally mirroring the Ministry of State Secretariat's national overseas clearance clearinghouse (SIMPEL Kemensetneg). As a Student Employee at the International Office, I served as the primary cross-functional Project Manager, Lead Operational User, and Evaluation Lead: translating complex state clearance protocols into technical requirements, authoring official staff/student manuals, and evaluating the platform empirically for my Bachelor of Engineering thesis (WebQual 4.0 & IPA)."
role: "Project Manager & Lead Operational User (Evaluated for S.T. Thesis)"
period:
  start: "2021"
  end: "present"
tech_stack:
  - "PHP"
  - "Yii Framework"
  - "MySQL"
  - "Nginx"
  - "Bootstrap"
  - "Inspinia Admin UI"
  - "Highcharts"
  - "WebQual 4.0 & IPA"
metrics:
  - label: "Institutional Control Scope"
    value: "Outbound Faculty & Students (PDLN Overseas Clearances) + Inbound International Scholars"
    provenance: "career-archive.md:71"
  - label: "Upstream System Mirrored"
    value: "Ministry of State Secretariat SIMPEL Clearance System (simpel.setneg.go.id)"
    provenance: "user-stated 2026-10; Skripsi Bab I p. 1"
  - label: "Audited Outbound Volume (2022–2026)"
    value: "830 outbound submissions (641 faculty/staff + 189 student) across 456 unique proposers (303 faculty/staff + 153 students)"
    provenance: "S.T. Thesis Bab III p. 26 (SIMOBY Admin Dashboard)"
  - label: "Core Engineering & Development"
    value: "UPT TIK UNY (Central University IT)"
    provenance: "career-archive.md:361"
  - label: "My Leadership Role"
    value: "Project Manager, Lead Operational User & Evaluation Lead"
    provenance: "career-archive.md:361"
  - label: "Academic Evaluation"
    value: "S.T. Thesis: 87 end users + 12 stakeholders, 22 WebQual 4.0 indicators (Perf 3.358 vs Imp 3.595; Alpha 0.964 / 0.948)"
    provenance: "S.T. Thesis Abstrak & Bab IV p. 40–48"
  - label: "Design & Action Plan Output"
    value: "Identified 3 IPA Quadrant I priorities (US2, SI6, SI7) and delivered 5 conceptual UI/UX redesign mockups"
    provenance: "S.T. Thesis Bab IV p. 47–70"
  - label: "Official Documentation Authored"
    value: "Staff Guide (Rev 5, 20p) & Student Guide (14p)"
    provenance: "Official UNY SIMOBY Documentation Repository"
live_url: "https://simoby.uny.ac.id"
archive_status: "live"
architecture_type: "mvc-framework"
database:
  local_development: "MySQL"
  production_cluster: "MySQL (UNY Central Infrastructure)"
  concurrency_mechanism: "Relational integrity constraints across unified records"
security_profile:
  auth_provider: "UNY Single Sign-On (CAS / SSO integration)"
  network_perimeter: "University-managed hosting (Nginx reverse proxy, SSL/TLS)"
provenance_source: "career-archive.md:68-71, 144, 205-209, 358-361; SIMOBY user documentation; user-stated 2026-10"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Engineered and maintained by UPT TIK UNY. My role was Project Manager, Lead Operational User, and Functional Liaison representing the International Office. Evaluated academically for my S.T. engineering thesis."
evidence:
  - type: "live"
    label: "Official Portal (simoby.uny.ac.id)"
    url: "https://simoby.uny.ac.id"
    is_internal: false
    status: "available"
  - type: "live"
    label: "Upstream System: SIMPEL Kemensetneg"
    url: "https://simpel.setneg.go.id"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "Official Staff User Guide (Rev 5)"
    url: "/docs/systems/simoby-staff-guide.pdf"
    is_internal: true
    status: "available"
  - type: "internal-pdf"
    label: "Official Student User Guide"
    url: "/docs/systems/simoby-student-guide.pdf"
    is_internal: true
    status: "available"
  - type: "internal-pdf"
    label: "System Architecture Case Study"
    url: "/docs/systems/02-simoby-integration-dossier.pdf"
    is_internal: true
    status: "available"
  - type: "internal-pdf"
    label: "WebQual 4.0 S.T. Thesis Degree"
    url: "/credentials/bachelor-engineering-st-uny"
    is_internal: true
    status: "available"
---

## 1. Institutional Context & System Ownership

**SIMOBY** (*Sistem Informasi Mobilitas Internasional*, hosted at [simoby.uny.ac.id](https://simoby.uny.ac.id)) is the enterprise web application facilitating all international mobility operations at Universitas Negeri Yogyakarta (UNY).

* **Engineering & Development:** Built, deployed, and maintained by **UPT TIK UNY** (Pusat Teknologi Informasi dan Komunikasi / Central IT Center).
* **My Role:** Project Manager, Lead Operational User, and Functional Liaison representing the **UNY International Office** (Kantor Urusan Internasional).
* **Academic Nexus:** Evaluated in my undergraduate engineering thesis for the **Bachelor of Engineering (S.T.)** degree in Information Technology (graduated with a 3.77 GPA).

I did not write the backend code from scratch as a sole developer: the core programming was executed by central university IT (UPT TIK). Instead, I served as the institutional bridge, translating complex ministerial foreign travel mandates (*Kemensetneg RI* and *Kemdiktisaintek RI*) and university immigration procedures into functional technical specifications for developers, authoring official user manuals, driving campus-wide adoption, and conducting empirical research on its service quality.

---

## 2. Institutional Mission: Mirroring SIMPEL Kemensetneg as a University Control System

In Indonesian state administration, every civil servant (PNS/ASN), lecturer, and state university academic traveling abroad on official duty (*Perjalanan Dinas Luar Negeri* / PDLN) must secure formal exit clearance from the state. This is governed nationally by the **Ministry of State Secretariat (*Kementerian Sekretariat Negara RI*)** through their central platform: **SIMPEL** (*Sistem Informasi Kerja Sama Teknik Luar Negeri / Sistem Informasi Perjalanan Dinas Luar Negeri*, [simpel.setneg.go.id](https://simpel.setneg.go.id)).

**SIMOBY was intentionally engineered to mirror the state-level SIMPEL Kemensetneg architecture at the university tier**, acting as UNY's central pre-flight gatekeeper and compliance control system:

```
[UNY Civitas Academica] ➔ [SIMOBY UNY (Internal Gatekeeper)] ➔ [Verification & Approval] ➔ [SIMPEL Kemensetneg RI (State Clearance)]
```

### Dual Institutional Control Dimensions:

1. **Outbound Control (UNY Civitas Academica Traveling Abroad):**
   * Acts as an internal filter and validation engine *before* dossiers are submitted upstream to Kemensetneg's national SIMPEL portal.
   * Enforces strict compliance with state regulations: mandatory 2-month advance submission windows, budget legitimacy checks (DIPA/BOPTN, government sponsors like LPDP, or verified external grants), and completeness of required attachments (KAK, Urgensi, LoA).
   * Prevents embarrassing ministerial rejection cycles, administrative sanctions, and unapproved overseas travel.

2. **Inbound Control (Foreign Nationals Arriving at UNY):**
   * Operates as the university's compliance radar for all incoming international guests: visiting professors, international degree candidates, Darmasiswa and KNB Scholarships recipients, and exchange scholars.
   * Tracks Indonesian legal immigration standing: E-Visa sponsorship letters, Stay Permits (ITAS/KITAS), Temporary Domicile Certificates (SKTT / Dukcapil), and Police Clarification Reports (STM / Kepolisian), ensuring foreign delegates maintain lawful status on campus.

<div class="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div class="flex flex-col justify-center rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-[#222226]">
    <h4 class="font-mono text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Dual Inbound &amp; Outbound Control Hub</h4>
    <p class="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
      SIMOBY provides unified border and compliance oversight: monitoring incoming international scholars and pre-clearing outgoing university delegates before upstream submission to Kemensetneg.
    </p>
  </div>
  <div class="flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-[#222226]">
    <img
      src="/images/simoby/simoby-globe.png"
      alt="SIMOBY Global Mobility Distribution"
      class="max-h-48 w-auto object-contain"
      loading="lazy"
    />
  </div>
</div>

---

## 3. The Data-Silo Problem & Administrative Bottleneck

Prior to SIMOBY, university international mobility data was scattered across disparate systems:

1. **Staff Identity Silos:** Academic and administrative staff profiles were isolated in established internal university HR databases.
2. **Student Academic Silos:** Course credits, enrollments, and student identities resided inside established internal student registration and academic databases.
3. **Immigration & Regulatory Silos:** Inbound foreign student records, stay permits (ITAS/KITAS), temporary domicile certificates (SKTT), and police reports (STM) were tracked across manual physical binders and spreadsheets.
4. **Setneg Paperwork Friction:** Outbound PDLN applications required circulating physical paper folders across faculty deans, vice-rectors, and university legal bureaus. Missing documents frequently led to missed flight dates and cancelled international delegations.

Reconciling identities manually resulted in data duplication, delayed approvals, compliance risks, and difficulty aggregating statistics for university internationalization rankings.

---

## 4. Technology Stack & Enterprise Architecture

SIMOBY was engineered by UPT TIK UNY utilizing a modern, relational web framework tailored for institutional scale:

* **Backend Framework:** **PHP Yii Framework** (selected for its Model-View-Controller architecture, ActiveRecord relational mapping, and schema-first database handling).
* **Database:** **MySQL (UNY Central Infrastructure)** (centralized relational database integrated with established internal student and HR databases, with recommended expansion across internal campus administrative systems).
* **Web Server & Perimeter:** **Nginx** reverse proxying, SSL/TLS certificate termination, and campus perimeter routing.
* **User Interface:** **Bootstrap** framework combined with the **Inspinia Admin** template, jQuery 3.1.1, MetisMenu, Popper.js, and Pace.js progress tracking.
* **Visual Analytics:** **Highcharts** integration providing real-time interactive charts of inbound/outbound mobility volumes filterable by academic year (2024, 2025, 2026).
* **Identity Management:** Single Sign-On (**SSO / CAS**) integration with university central authentication (UNY ID).

---

## 5. Core Modules & End-to-End Workflows

SIMOBY manages two primary mobility streams through structured state-machine pipelines:

### A. Outbound Mobility Track (PDLN Approval Pipeline)

Facilitates official overseas duty travel for university lecturers, researchers, and students across **11 distinct activity categories**:

1. **PDLN Sidang / Meeting / Diskusi** (Diplomatic & institutional meetings)
2. **PDLN Short Visit** (Short academic visits & guest lectures)
3. **PDLN Training / Pelatihan** (Technical and pedagogical skills training)
4. **PDLN Doktoral** (Doctoral study assignments)
5. **PDLN Perpanjangan** (Extensions for ongoing Setneg-approved programs)
6. **PDLN Penelitian** (Collaborative scientific research)
7. **PDLN Postdoctoral** (Postdoctoral fellowships)
8. **PDLN Seminar / Symposium / Workshop** (Academic conference presentations)
9. **PDLN Studi Banding / Inisiasi Kerja Sama** (Benchmarking & MoU development)
10. **PDLN Menguji** (External thesis/dissertation examination)
11. **PDLN Visiting Professor** (Visiting academic appointments)

### B. Multi-Stage Clearance Pipeline

```
[Pengajuan Baru] ➔ [Pilih Kegiatan] ➔ [Form Profil (SSO)] ➔ [Form Pembiayaan] ➔ [Form Dokumen] ➔ [Finalisasi & Review] ➔ [Upstream SIMPEL Setneg Clearance] ➔ [Laporan Pasca-Kegiatan]
```

![SIMOBY End-to-End Mobility Verification & Approval Workflow](/images/simoby/simoby-flowchart.png)

* **Multi-Source Budgeting:** Handles heterogeneous funding allocations: internal university funds (DIPA/BOPTN), external government scholarships (LPDP), foreign sponsor grants, or self-funded balances.
* **Standardized Bureaucratic Documents:** Automated collection and verification of state-required attachments:
  * *Surat Permohonan Perjalanan Dinas Luar Negeri (PDLN)*
  * *Kerangka Acuan Kerja (KAK / Terms of Reference)*
  * *Surat Urgensi dan Relevansi Kegiatan*
  * *Surat Keterangan Pembiayaan*
  * *Agenda Kegiatan & Letter of Acceptance (LoA)*
  * *Format Laporan PDLN (Mandatory post-trip accountability report)*

<div class="my-6 overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-[#222226]">
  <img
    src="/images/simoby/simoby-flowchart.png"
    alt="Official SIMOBY Multi-Stage Workflow & Approval Flowchart"
    class="mx-auto max-h-[580px] w-auto rounded object-contain"
    loading="lazy"
  />
  <p class="mt-3 text-center font-mono text-xs text-neutral-500 dark:text-neutral-400">
    Official SIMOBY Multi-Stage Workflow &amp; Approval Flowchart (Source: SIMOBY Portal)
  </p>
</div>

---

## 6. My Key Contributions

Serving as a Student Employee within the International Office, I led three core operational streams:

### 1. Functional Specification & Requirement Engineering
I acted as the business-domain liaison to UPT TIK UNY programmers, mapping civil-service overseas duty regulations (`SE Mensesneg RI No. B-32/M/S/LN.00/12/2024` and `SE Kemdiktisaintek No. 1065/A.A1/AK.01.07/2025`, mirroring *SIMPEL Setneg*) into functional workflows, mandatory verification fields, and regulatory document checklists.

### 2. Authoring Official University User Manuals
To bridge the user adoption gap across academic faculties, I authored the official university user guides:
* **Panduan SIMOBY untuk Staff Akademik** (Rev 5, 20 pages): Step-by-step handbook covering SSO login, 11 PDLN activity types, multi-source financial tracking, and clearance submission.
* **Panduan SIMOBY untuk Mahasiswa** (14 pages): Practical handbook guiding undergraduate and graduate students through exchange applications and credit-transfer submissions.

Both official handbooks are published directly on the portal's download repository and are available as verified PDF evidence below.

### 3. User Acceptance Testing (UAT) & Focus Group Diagnostics
Through structured UAT and internal Focus Group Discussions (FGD) with International Office staff, faculty UUIK coordinators, and Pusat TIK UNY, I documented operational bottlenecks affecting staff and student submissions: duplicated manual form entries lacking auto-fill from established internal databases, document upload and record management edge cases, hidden status transitions on funding requests, and the absence of flexible spreadsheet exports or in-app helpdesk ticketing.

---

## 7. Empirical Research: Undergraduate S.T. Thesis

Beyond operational stewardship, I selected SIMOBY as the empirical research subject for my **Bachelor of Engineering (*Sarjana Teknik*) thesis**:

* **Thesis Title:** *Penerapan Metode WebQual 4.0 dan Importance-Performance Analysis untuk Mengukur Kualitas Sistem Informasi Mobilitas Internasional Universitas Negeri Yogyakarta (SIMOBY UNY)*
* **Examination & Graduation:** Examined and signed July 15–16, 2026; graduated (*Yudisium*) July 31, 2026 with a **3.77 / 4.00 GPA**.
* **Population & Sample Scale (2022–2026 Dataset):** Audited **830 outbound PDLN submissions** (**641** from **303** faculty and administrative staff + **189** from **153** students) representing **456 unique proposers**. Surveyed **87 end users** (perceptions of *Performance*) and **12 internal stakeholders** (priority expectations of *Importance* via total sampling), repositioning classical Gap Analysis as a Stakeholder Alignment Analysis across **22 WebQual 4.0 indicators** (4-point Likert scale; Cronbach's Alpha **0.964** for Performance and **0.948** for Importance).
* **Quantitative Findings (Performance vs. Importance):** Overall Mean Performance scored **3.358 / 4.00** against Mean Stakeholder Importance **3.595 / 4.00**:
  * *Usability Quality (8 indicators):* Mean `3.364` vs. `3.615` (`Gap -0.251`, `93.054%` conformity, largest gap).
  * *Service Interaction Quality (7 indicators):* Mean `3.376` vs. `3.619` (`Gap -0.243`, `93.285%` conformity).
  * *Information Quality (7 indicators):* Mean `3.335` vs. `3.548` (`Gap -0.213`, `94.006%` conformity).
* **Importance-Performance Analysis (IPA) & Action Plan:** Identified **3 Quadrant I top improvement priorities** (**US2** clarity of menus and features, **SI6** ease of communication with International Office, **SI7** service consistency as promised) alongside **7 Quadrant II strengths** (**US1, US4, US8, IQ1, IQ2, SI2, SI3**) and produced **5 conceptual UI/UX redesign mockups** (role-split Homepage with UNY SSO and Global Scholar Access, Faculty/UUIK Dashboard, Personal Tracking Dashboard with support ticketing, Inbound Scholar Portal, and Admin Dashboard with grant/queue monitoring and broader synchronization across established internal databases).
