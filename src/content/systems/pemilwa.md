---
id: "sys-pemilwa"
title: "UNY High-Concurrency Student E-Voting Platform"
slug: "pemilwa-evoting"
institution_logo: "/logos/uny.svg"
summary: "Official university-wide student election platform engineered to replace physical paper ballots, processing 39,725 eligible voters with 100% uptime across 5 consecutive annual election cycles."
excerpt: "To eliminate the logistical chaos and dispute risks of physical ballot boxes across 8 faculties, I engineered a high-concurrency digital election platform using lightweight Native PHP and direct PostgreSQL transactions. By unifying five concurrent governance ballots onto an atomic single-page voting booth, the platform guarantees zero partial dropouts and zero downtime during peak election hours."
role: "Lead Systems Architect & Developer"
period:
  start: "2020"
  end: "present"
tech_stack:
  - "PHP (Native)"
  - "PostgreSQL"
  - "CAS SSO"
  - "Nginx"
  - "Bootstrap"
metrics:
  - label: "Service Availability"
    value: "100% (Zero Downtime across 5 election cycles)"
    provenance: "election-telemetry:2020-2025"
  - label: "Electorate Scale (Registered Voters)"
    value: "39,725 registered students across 8 faculties"
    provenance: "election-telemetry:turnout-records"
  - label: "Ballot Architecture"
    value: "5-Tier Unified Single-Page Responsive Ballot"
    provenance: "ballot-architecture:spec"
  - label: "Governance & Integrity"
    value: "Dual-key Election Commission (KPU) & Oversight Board (BAWASLU) unlock module"
    provenance: "tabulation-module:spec"
live_url: "https://pemilwa.uny.ac.id"
archive_status: "live"
architecture_type: "native"
database:
  local_development: "PostgreSQL / MySQL Parity"
  production_cluster: "PostgreSQL 15+ (UNY Central Infrastructure)"
  concurrency_mechanism: "Atomic multi-ballot submission with ACID-compliant row locking"
security_profile:
  auth_provider: "Institutional Central Authentication Service (CAS) Single Sign-On over TLS"
  network_perimeter: "Campus on-premise university data center with automated time-window guards"
  audit_logging: "Cryptographic session audit trail with immutable single-use state transitions"
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

UNY's student elections originally relied on physical ballot boxes across multiple campus locations — creating logistical delays, recount disputes, and zero real-time visibility for 39,725 students across 8 faculties.

As Lead Systems Architect & Developer, I designed and built the **Pemilwa E-Voting Platform** (`pemilwa.uny.ac.id`) from the ground up to replace physical voting with a secure, tamper-evident digital election system.

Student elections carry intense political scrutiny, competing student coalitions, and a strict voting timeframe (opening at 08:00 WIB and closing at 18:00 WIB). Any system outage, vote loss, or database issue can cause immediate public dispute. In this high-stakes environment, **consistent uptime, vote integrity, and system reliability are the top priorities**.

![Landing Page](/images/pemilwa/01_landing_page.png)

---

## 2. Peak Election Traffic

Election day creates sharp, concentrated traffic bursts on campus university infrastructure:
- **39,725 Eligible Student Voters (DPT)** distributed across 8 faculties, vocational campuses, and over a hundred study programs.
- **Traffic Spikes:** Activity peaks heavily in the morning when polls open and during the final hour before the 18:00 WIB deadline.
- **On-Premise Infrastructure:** Hosted on campus servers in the university data center, where keeping server resource usage lightweight and predictable is essential to prevent slowdowns.

To withstand these surges without crashing, I kept the application architecture clean, lightweight, and directly connected to the database to ensure fast response times even when thousands of students access the site simultaneously.

---

## 3. Engineering Strategy: Clean Native PHP

To ensure high availability and responsiveness under heavy load, I built the platform with **clean, lightweight Native PHP**:

1. **Low Memory Footprint:** I wrote direct, procedural PHP without heavy framework abstractions, keeping memory usage per request under 8MB.
2. **OPcache Optimization:** I froze PHP OPcache timestamps on election day, ensuring pre-compiled script bytecode is served directly from RAM without repetitive disk checks.
3. **Persistent Database Connections:** I configured persistent connections to PostgreSQL to eliminate connection handshake overhead during traffic rushes.
4. **Direct Transactional Checks:** I moved core vote validation and status checks directly into the database layer with ACID row locking (`FOR UPDATE`) to ensure every ballot is processed sequentially and securely.

---

## 4. The 5-Tier Ballot Routing Architecture

An institutional university election comprises multiple concurrent elections across different levels of student governance. When an eligible student enters the voting booth, they receive up to **5 separate ballot papers** corresponding to their faculty and department:

| Bilik | Scope | Level | Description |
| :---: | :--- | :--- | :--- |
| **1** | **University Student Senate (DPM UNY)** | University Legislative | **Faculty Constituency:** Students elect legislative representatives for their respective faculty. |
| **2** | **Student Government Executive (BEM UNY)** | University Executive | **Campus-Wide Presidential Ticket:** Universal presidential & vice-presidential candidates for all 39,725 students. |
| **3** | **Faculty Student Council (DPM Fakultas)** | Faculty Legislative | Faculty-level student legislative council. |
| **4** | **Faculty Student Board (BEM Fakultas)** | Faculty Executive | Faculty-level student executive leadership. |
| **5** | **Department Student Association (HIMA)** | Department Association | Academic study program student association (*Himpunan Mahasiswa*). |

### Authoritative Relational Mapping
To ensure every student receives the exact ballots they are eligible for:
- I designed the ballot routing to query against verified university registrar enrollment records rather than relying on client-side state or static text matching.
- This relational mapping seamlessly handles newer faculties (such as the Faculty of Medicine) and multi-campus regional programs (such as PGSD Wates vs Kampus Pusat) without manual configuration.
- The voter's verified academic program maps deterministically to corresponding ballot races in PostgreSQL, ensuring 100% accurate ballot delivery.

---

## 5. Unified Single-Page Ballot Experience

I designed the digital voting booth as a responsive single-page ballot layout where all 5 elections are presented together on one screen:

1. **Atomic Vote Submission:** I built an atomic submission pipeline where voters cast their choices across all active ballots in a single confirmation. A database transaction records the votes, marks the student as having voted, and locks their session permanently — eliminating partial or incomplete submissions.
2. **Parity with Physical Polling:** If a student closes their browser before submitting, their status remains unvoted, allowing them to re-authenticate via CAS SSO and complete their vote. Once submitted, their account is permanently locked.
3. **Accidental Exit Prevention:** I added browser event listeners that prompt a confirmation dialog if a voter attempts to refresh or close the tab before submitting their choices.
4. **Clear Handling of Uncontested Races:** Study programs with uncontested elections (*aklamasi*) or no registered candidates display informative notices rather than error alerts, allowing students to proceed smoothly.

---

## 6. Perimeter Security & Automated Cutoff

- **Centralized Authentication (CAS SSO):** I integrated UNY's central CAS Single Sign-On server over TLS so institutional user credentials never touch the local application environment.
- **Automated Cutoff Window:** I implemented server-side time guards that automatically close voting at the designated 18:00 WIB deadline, safely allowing in-flight submissions to finish while rejecting new ballots.
- **Audit Logging:** I generated a tamper-evident hashed session audit trail with timestamps and station telemetry for post-election verification.

---

## 7. Dual-Key Governance & Real-Time Telemetry

To ensure transparency and public trust while safeguarding official results until scheduled tallying, I engineered specialized telemetry and governance modules:

### Dual-Key "Digital Ballot Box Unlocking" Module
To replicate the physical election procedure where ballot boxes remain locked until the official vote-counting plenary:
- Candidate vote counts remain encrypted and sealed after polls close.
- The **Election Commission (KPU)** and the **Election Oversight Board (BAWASLU)** each hold separate, independent authorization passwords.
- I engineered the tabulation dashboard to require both independent keys simultaneously before revealing candidate tallies during the official plenary session.

### Faculty Turnout Telemetry
Visualizes live voter turnout percentages across all faculties, updating election commissioners and observers in real time without disclosing candidate vote tallies:

![Real-time Faculty Turnout](/images/pemilwa/02_live_count_fakultas.png)

### Candidate Results Dashboard
Once unlocked by the Election Commission and Oversight Board, the dashboard tabulates official votes, displaying candidate photos, running mate details, vote tallies, and comparative bar charts in a clean responsive interface:

![Election Results Dashboard](/images/pemilwa/03_rekap_split_columns.png)

---

## 8. Empirical Outcomes

- **100% Service Availability:** Zero downtime and zero lost votes across 5 consecutive annual election cycles (2020–present).
- **39,725 Eligible Voters Processed:** Maintained fast page response and seamless throughput during morning and afternoon peak surges.
- **Zero Inconsistent Ballots:** The unified single-page submission completely eliminated partial-selection dropouts and duplicate vote attempts.
- **Institutional Trust:** Recognized by university leadership, faculty deans, and student election commissions as the permanent, authoritative voting system for Universitas Negeri Yogyakarta.
