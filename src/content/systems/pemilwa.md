---
id: "sys-pemilwa"
title: "UNY High-Concurrency Student E-Voting Platform"
slug: "pemilwa-evoting"
institution_logo: "/logos/uny.svg"
summary: "Official university-wide student election platform built in Native PHP, handling 39,725 eligible voters with 100% uptime across 5 consecutive election cycles."
excerpt: "By utilizing lightweight Native PHP and direct PostgreSQL transactions, the platform avoids unnecessary software overhead to remain fast and stable during peak election hours. A unified single-page ballot presents all five governance races together, ensuring an atomic submission with zero partial dropouts."
role: "Lead Systems Architect & Developer"
period:
  start: "2020"
  end: "present"
tech_stack:
  - "PHP (Native 8.2)"
  - "PostgreSQL 15"
  - "CAS SSO"
  - "Nginx"
  - "Bootstrap 4"
metrics:
  - label: "Service Availability"
    value: "100% (Zero Downtime across 5 election cycles)"
    provenance: "election-telemetry:2020-2025"
  - label: "Electorate Scale (DPT)"
    value: "39,725 registered students across 8 faculties"
    provenance: "election-telemetry:turnout-records"
  - label: "Ballot Architecture"
    value: "5-Tier Unified Single-Page Responsive Ballot"
    provenance: "ballot-architecture:spec"
  - label: "Governance & Integrity"
    value: "Dual-key KPU & BAWASLU ballot box unlock module"
    provenance: "tabulation-module:spec"
live_url: "https://pemilwa.uny.ac.id"
archive_status: "live"
architecture_type: "native"
database:
  local_development: "PostgreSQL 15 / MySQL 8.0 Parity"
  production_cluster: "PostgreSQL 15+ (UNY Central Infrastructure)"
  concurrency_mechanism: "Atomic multi-ballot submission with ACID-compliant row locking"
security_profile:
  auth_provider: "UNY Central Authentication Service (CAS 1.3.3) Single Sign-On"
  network_perimeter: "Campus on-premise university data center with automated time-window guards"
  audit_logging: "Tamper-evident hashed session audit trail (t_log) with single-use status transition"
provenance_source: "career-archive.md:52-56; pemilwa-architecture-spec"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Production PostgreSQL cluster at UNY central data center. Modernized from legacy voting scripts into a unified single-page voting booth architecture."
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
  - type: "repository"
    label: "Sanitized Architecture Spec"
    url: "https://github.com/mauliv/pemilwa-architecture"
    is_internal: false
    status: "needs-confirmation"
---

## 1. Context & Operational Mandate

The **Pemilwa E-Voting Platform** (`pemilwa.uny.ac.id`) is the official digital election system of Universitas Negeri Yogyakarta (UNY). It replaced physical ballot boxes across multiple campus locations, digitizing annual democratic elections for student executive and legislative leadership.

Student elections carry intense political scrutiny, competitive student coalitions, and a strict voting timeframe (opening at 08:00 WIB and closing at 18:00 WIB). Any system outage, vote loss, or database issue can cause public dispute and disruption. In this environment, **consistent uptime, vote integrity, and system reliability are the top priorities**.

![Landing Page](/images/pemilwa/01_landing_page.png)

---

## 2. Peak Election Traffic

Election day creates sharp, concentrated traffic bursts on campus university infrastructure:
- **39,725 Eligible Student Voters (DPT)** distributed across 8 faculties, vocational campuses, and over a hundred study programs.
- **Traffic Spikes:** Activity peaks heavily in the morning when polls open and during the final hour before the 18:00 WIB deadline.
- **On-Premise Infrastructure:** Hosted on campus servers in the university data center, where keeping server resource usage lightweight and predictable is essential to prevent slowdowns.

Keeping the application architecture clean, lightweight, and directly connected to the database ensures the system remains responsive even when thousands of students access the site simultaneously.

---

## 3. Engineering Strategy: Clean Native PHP

To ensure high availability and responsiveness under heavy load, the platform was built with **clean, lightweight Native PHP**:

1. **Low Memory Footprint:** Writing direct PHP code without heavy framework layers keeps memory usage per request low and processing fast.
2. **OPcache Optimization:** Freezing PHP OPcache timestamps on election day ensures pre-compiled script bytecode is served directly from memory without repetitive disk checks.
3. **Persistent Database Connections:** Reusing persistent connections to PostgreSQL eliminates connection handshake overhead during traffic rushes.
4. **Direct Transactional Checks:** Core vote validation and status checks run directly at the database layer to ensure every ballot is processed sequentially and securely.

---

## 4. The 5-Tier Ballot Routing Architecture

An institutional university election comprises multiple concurrent elections across different levels of student governance. When an eligible student enters the voting booth, they receive up to **5 separate ballot papers** corresponding to their faculty and department:

| Bilik | Scope | Level | Description |
| :---: | :--- | :--- | :--- |
| **1** | **DPM Universitas** | Legislative (Univ) | **Faculty Constituency:** Students elect legislative representatives for their respective faculty. |
| **2** | **BEM Universitas** | Executive (Univ) | **Campus-Wide Presidential Ticket:** Universal presidential & vice-presidential candidates for all 39,725 students. |
| **3** | **DPM Fakultas** | Legislative (Fakultas) | Faculty-level student legislative council. |
| **4** | **BEM Fakultas** | Executive (Fakultas) | Faculty-level student executive leadership. |
| **5** | **HIMA** | Association (Prodi) | Study program student association (*Himpunan Mahasiswa*). |

### Authoritative Relational Mapping
To ensure every student receives the exact ballots they are eligible for:
- Routing is driven directly by authoritative institutional records (`id_jurusan`) rather than static text parsing.
- This clean database mapping seamlessly handles newer faculties (such as the Faculty of Medicine) and multi-campus regional study programs (such as PGSD Wates vs Kampus Pusat) without any configuration conflicts or edge-case routing issues.
- The voter's verified department ID maps directly to corresponding ballot questions in the database, ensuring 100% deterministic ballot delivery.

---

## 5. Unified Single-Page Ballot Experience

The voting booth features a responsive single-page ballot layout where all 5 elections are presented together on one clear screen:

1. **Atomic Vote Submission:** Voters review candidate cards across all active ballots and cast their choices in a single confirmation. A single transactional operation records the votes, marks the student as having voted, and locks their session permanently, preventing partial or incomplete submissions.
2. **Parity with Physical Polling:** If a student closes their browser before submitting, their status remains unvoted, allowing them to re-authenticate via CAS SSO and complete their vote. Once submitted, their account is locked from further entry.
3. **Accidental Exit Prevention:** Browser event listeners prompt a confirmation dialog if a voter attempts to refresh or close the tab before submitting their choices.
4. **Clear Handling of Uncontested Races:** Study programs with uncontested elections (*aklamasi*) or no registered candidates display clear, informative notices rather than error alerts, allowing students to proceed smoothly.

---

## 6. Perimeter Security & Automated Cutoff

- **Centralized Authentication (CAS SSO):** Authentication is handled through UNY's central CAS Single Sign-On server over TLS. Institutional user credentials remain safely on central university authentication servers.
- **Automated Cutoff Window:** Voting automatically closes at the designated 18:00 WIB deadline via automated server-side time guards, safely allowing active in-flight submissions to finish while preventing any new ballots from being accepted.
- **Audit Logging:** Every session generates a hashed session audit trail with timestamp and station telemetry for post-election verification.

---

## 7. Dual-Key Governance & Real-Time Telemetry

To ensure transparency and public trust while safeguarding official results until scheduled tallying, the platform provides specialized telemetry and governance modules:

### Dual-Key "Digital Ballot Box Unlocking" Module
To replicate the physical election procedure where ballot boxes remain locked until the official vote-counting ceremony:
- Candidate vote counts remain securely sealed after polls close.
- The **Election Commission (KPU)** and the **Election Supervisory Board (BAWASLU)** each receive separate, independent authorization passwords.
- Both independent keys must be entered simultaneously into the tabulation dashboard to unlock and reveal the candidate results during the official plenary session.

### Faculty Turnout Telemetry
Visualizes live voter turnout percentages across all faculties, updating election commissioners and observers in real time without disclosing candidate vote tallies:

![Real-time Faculty Turnout](/images/pemilwa/02_live_count_fakultas.png)

### Candidate Results Dashboard
Once unlocked by KPU and BAWASLU, the dashboard tabulates official votes, displaying candidate photos, running mate details, vote tallies, and comparative bar charts in a clean responsive interface:

![Election Results Dashboard](/images/pemilwa/03_rekap_split_columns.png)

---

## 8. Empirical Outcomes

- **100% Service Availability:** Zero downtime and zero lost votes across 5 consecutive annual election cycles (2020–present).
- **39,725 Eligible Voters Processed:** Maintained fast page response and seamless throughput during morning and afternoon peak surges.
- **Zero Inconsistent Ballots:** The unified single-page submission completely eliminated partial-selection dropouts and duplicate vote attempts.
- **Institutional Trust:** Recognized by university leadership, faculty deans, and student election commissions as the permanent, authoritative voting system for Universitas Negeri Yogyakarta.
