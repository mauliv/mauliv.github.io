---
id: "sys-simoby"
title: "SIMOBY International Mobility CRM"
slug: "simoby-crm"
institution_logo: "/logos/uny.svg"
summary: "Enterprise mobility CRM engineered by UPT TIK UNY, mirroring the state-level Kemensetneg SIMPEL PDLN system as an institutional control engine for outbound UNY civitas and inbound international delegates."
excerpt: "Engineered and maintained by UPT TIK UNY (Central University IT). SIMOBY acts as the university's institutional control system, intentionally mirroring the Ministry of State Secretariat's national PDLN clearinghouse (SIMPEL Kemensetneg). As a Student Employee at the International Office, I served as the primary cross-functional Project Manager, Lead Operational User, and Evaluation Lead — translating complex state clearance protocols into technical requirements, authoring official staff/student manuals, and evaluating the platform empirically for my Bachelor of Engineering thesis (WebQual 4.0 & IPA)."
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
    value: "Outbound Civitas (PDLN) + Inbound Foreign Nationals"
    provenance: "career-archive.md:71"
  - label: "Upstream System Mirrored"
    value: "Kemensetneg RI SIMPEL (simpel.setneg.go.id)"
    provenance: "user-stated 2026-10"
  - label: "Core Engineering & Development"
    value: "UPT TIK UNY (Central University IT)"
    provenance: "career-archive.md:361"
  - label: "Candidate Leadership Role"
    value: "Project Manager, Lead User & Evaluation Lead"
    provenance: "career-archive.md:361"
  - label: "Academic Evaluation"
    value: "Undergraduate S.T. Thesis (WebQual 4.0 & IPA, 3.77 GPA)"
    provenance: "career-archive.md:144"
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
verification_notes: "Engineered and maintained by UPT TIK UNY. The candidate's role was Project Manager, Lead Operational User, and Functional Liaison from the International Office, not sole backend author. Evaluated academically in the candidate's S.T. thesis."
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
* **Candidate's Role:** Project Manager, Lead Operational User, and Functional Liaison representing the **UNY International Office** (Kantor Urusan Internasional).
* **Academic Nexus:** Evaluated in the candidate's undergraduate engineering thesis for the **Bachelor of Engineering (S.T.)** degree in Information Technology (graduated with a 3.77 GPA).

The candidate did not write the backend from scratch as a sole developer. Rather, the candidate served as the vital institutional bridge: translating ministerial foreign travel mandates (*Kemensetneg RI*) and university immigration procedures into functional specifications for UPT TIK programmers, driving campus-wide adoption, and conducting empirical research on its service quality.

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
   * Operates as the university's compliance radar for all incoming international guests: visiting professors, international degree candidates, Darmasiswa and KNB scholarship recipients, and exchange scholars.
   * Tracks Indonesian legal immigration standing: E-Visa sponsorship letters, Stay Permits (ITAS/KITAS), Temporary Domicile Certificates (SKTT / Dukcapil), and Police Clarification Reports (STM / Kepolisian), ensuring foreign delegates maintain lawful status on campus.

<div class="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div class="flex flex-col justify-center rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-[#222226]">
    <h4 class="font-mono text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Dual Inbound &amp; Outbound Control Hub</h4>
    <p class="mt-2 font-serif text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
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

1. **Staff Identity Silos:** Academic and administrative staff profiles were isolated in the university HR system (**SIAP**).
2. **Student Academic Silos:** Course credits, enrollments, and student identities were locked inside the Academic Information System (**SIAKAD**).
3. **Immigration & Regulatory Silos:** Inbound foreign student records, stay permits (ITAS/KITAS), temporary domicile certificates (SKTT), and police reports (STM) were tracked across manual physical binders and spreadsheets.
4. **Setneg Paperwork Friction:** Outbound PDLN applications required circulating physical paper folders across faculty deans, vice-rectors, and university legal bureaus. Missing documents frequently led to missed flight dates and cancelled international delegations.

Reconciling identities manually resulted in data duplication, delayed approvals, compliance risks, and difficulty aggregating statistics for university internationalization rankings.

---

## 4. Technology Stack & Enterprise Architecture

SIMOBY was engineered by UPT TIK UNY utilizing a modern, relational web framework tailored for institutional scale:

* **Backend Framework:** **PHP Yii Framework** — Chosen for its mature Model-View-Controller (MVC) architecture, robust ActiveRecord relational mapping, and schema-first database handling.
* **Database:** **MySQL (UNY Central Infrastructure)** — Centralized relational database linking student identities, staff profiles, and overseas travel dossiers with relational integrity constraints.
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

* **Multi-Source Budgeting:** Handles heterogeneous funding allocations — internal university funds (DIPA/BOPTN), external government scholarships (LPDP), foreign sponsor grants, or self-funded balances.
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

## 6. Candidate's Key Contributions

Serving as a Student Employee within the International Office, the candidate led three pivotal project operational streams:

### 1. Functional Specification & Requirement Engineering
Acted as the business-domain liaison to UPT TIK UNY programmers. Mapped complex civil-service travel regulations from the Ministry of State Secretariat (*Kemensetneg RI / SIMPEL*) and Ministry of Education (*Kemendikbudristek*) into logical database constraints, validation checks (such as mandatory 2-month prior application cutoffs), and document upload requirements.

### 2. Authoring Official University User Manuals
To bridge the user adoption gap across academic faculties, authored the official university user guides:
* **Panduan SIMOBY untuk Staff Akademik** (Rev 5, 20 pages) — Step-by-step handbook covering SSO login, 11 PDLN activity types, multi-source financial tracking, and clearance submission.
* **Panduan SIMOBY untuk Mahasiswa** (14 pages) — Practical handbook guiding undergraduate and graduate students through exchange applications and credit-transfer submissions.

Both official handbooks are published directly on the portal's download repository and are available as verified PDF evidence below.

### 3. User Acceptance Testing (UAT) & Release Management
Conducted systematic black-box testing and regression validation on new module deployments, identifying edge-case bugs in funding calculators, document upload validations, and status-change notifications.

---

## 7. Empirical Research: Undergraduate S.T. Thesis

Beyond operational stewardship, the candidate selected SIMOBY as the core empirical research subject for their **Bachelor of Engineering (*Sarjana Teknik*) thesis**:

* **Thesis Title:** *Penerapan Metode WebQual 4.0 dan Importance-Performance Analysis untuk Mengukur Kualitas Sistem Informasi Mobilitas Internasional Universitas Negeri Yogyakarta (SIMOBY UNY)*
* **Graduation & Defense:** Defended on July 31, 2026; conferred with a **3.77 GPA**.
* **Methodological Framework:**
  * **WebQual 4.0 Assessment:** Measured user experience across three foundational dimensions:
    1. *Usability Quality* (Interface simplicity, ease of navigation, clarity of instructions).
    2. *Information Quality* (Accuracy of mobility guidelines, document template relevancy, completeness of status feedback).
    3. *Service Interaction Quality* (Data security, trustworthiness, administrative responsiveness).
  * **Importance-Performance Analysis (IPA):** Calculated Gap Scores between user expectations and system execution, mapping attributes into a four-quadrant Cartesian diagram (Quadrant I: *Concentrate Here*, Quadrant II: *Keep Up the Good Work*, Quadrant III: *Low Priority*, Quadrant IV: *Possible Overkill*).
* **Impact:** Provided UPT TIK UNY and the International Office leadership with actionable, data-backed technical recommendations for future platform revisions and workflow enhancements.
