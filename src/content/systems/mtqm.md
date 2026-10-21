---
id: "sys-mtqm"
title: "UNY National MTQ Invitational Competition Portal"
slug: "mtqm-competition-portal"
institution_logo: "/logos/uny.svg"
project_logo: "/logos/mtq.png"
summary: "Laravel-based registration and scoring portal supporting 12 competition divisions and nationwide university contingents across three annual cycles."
excerpt: "Built to support UNY's national student competition from 2021 to 2023, the platform handled multi-category registrations, document and video submissions, and jury scoring with automated university-affiliation checks to prevent judging bias."
role: "Lead Systems Architect & Developer"
period:
  start: "2021"
  end: "2023"
tech_stack:
  - "Laravel 9 (PHP 8.1)"
  - "PostgreSQL 15"
  - "Google Drive API"
  - "Server-Side DataTables"
  - "Argon UI / Bootstrap 4"
  - "Select2"
metrics:
  - label: "Competition Divisions"
    value: "12 categories with specific submission formats"
    provenance: "ref-cabang:database/seeders"
  - label: "Jury Allocation"
    value: "Filters out submissions from a judge's home university"
    provenance: "penjurian:PenjurianController.php"
  - label: "Operational Window"
    value: "3 annual competition cycles (2021–2023)"
    provenance: "portal-telemetry:2021-2023"
  - label: "Roster Management"
    value: "Individual registration and bulk Excel/ZIP contingent import"
    provenance: "import-pipeline:ImportTimController.php"
live_url: "https://lomba.uny.ac.id/mtqm"
archive_status: "archived"
architecture_type: "mvc-framework"
database:
  local_development: "PostgreSQL 15 / MySQL 8.0 Parity"
  production_cluster: "PostgreSQL 15+ (UNY Central Infrastructure)"
  concurrency_mechanism: "Database transactions and status locking upon final contingent submission"
security_profile:
  auth_provider: "Role-based access control (Admin, Jury, Contingent Liaison, Participant)"
  network_perimeter: "Campus hosting behind university firewall with schedule-based registration cutoffs"
  audit_logging: "Score audit trail and contingent finalization locks (is_final_team)"
provenance_source: "MTQM portal code repository; uny-press:berita/mtqmn-3-uny-2023; youtube:dAm94_zq6Zo,iCrBvZeVT5I"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Production portal hosted at lomba.uny.ac.id/mtqm and mtqm.uny.ac.id for three annual competitions (2021, 2022, 2023). Archived after 2023 as UNY concluded hosting open national invitationals."
evidence:
  - type: "live"
    label: "Legacy Portal Archive (lomba.uny.ac.id/mtqm)"
    url: "https://lomba.uny.ac.id/mtqm"
    is_internal: false
    status: "available"
  - type: "live"
    label: "Legacy Subdomain (mtqm.uny.ac.id)"
    url: "https://mtqm.uny.ac.id"
    is_internal: false
    status: "available"
  - type: "external-press"
    label: "UNY Official Press: MTQMN-3 UNY 2023 National Competition"
    url: "https://www.uny.ac.id/id/berita/mtqmn-3-uny-2023-membangun-mahasiswa-intelektual-berjiwa-qurani-sebagai-aksi-nyata"
    is_internal: false
    status: "available"
  - type: "video"
    label: "2021 MTQ UNY National Invitational (YouTube)"
    url: "https://www.youtube.com/watch?v=dAm94_zq6Zo"
    is_internal: false
    status: "available"
  - type: "video"
    label: "2022 MTQ UNY National Invitational (YouTube)"
    url: "https://www.youtube.com/watch?v=iCrBvZeVT5I"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "Production System Dossier (PDF)"
    url: "/docs/systems/04-mtqm-laravel-dossier.pdf"
    is_internal: true
    status: "available"
---

## 1. Context & Operational Mandate

The **MTQ UNY Competition Portal** (`lomba.uny.ac.id/mtqm` / `mtqm.uny.ac.id`) was the online registration, submission, and scoring platform for Universitas Negeri Yogyakarta's open national Quranic student competition (*Musabaqah Tilawatil Quran Mahasiswa Nasional*).

From **2021 through 2023**, UNY organized an open national invitational that mirrored the full category structure of the official government MTQMN rounds organized by Belmawa / Puspresnas. The event started with 9 branches in 2021 and grew to 12 distinct categories by 2023, attracting university contingents from across Indonesia. 

The portal served as the central hub where teams registered, uploaded required materials, and where judges evaluated submissions and calculated final standings.

![MTQ UNY Public Portal](/images/mtqm/01_landing_page.png)

---

## 2. Multi-Category Support (12 Divisions)

Because an MTQ competition includes recitation, memorization, calligraphy, academic writing, and computer applications, each category requires different entry requirements and submission formats:

| Code | Category / Division | Format & Submission Type |
| :---: | :--- | :--- |
| **TL** | **Tilawatil Quran** | High-fidelity YouTube recitation video link |
| **TT** | **Tartilil Quran** | YouTube recitation video link |
| **HQ1** | **Hifzhil Quran 10 Juz** | Verification recording link (10 Juz memorization) |
| **HQ2** | **Hifzhil Quran 20 Juz** | Verification recording link (20 Juz memorization) |
| **HQ3** | **Hifzhil Quran 30 Juz** | Verification recording link (Full 30 Juz memorization) |
| **QS** | **Qira'at Sab'ah** | YouTube recitation link with designated Riwayah |
| **KD** | **Khaththil Quran Dekorasi** | High-resolution artwork scan (PDF/JPG) + process timelapses |
| **KK** | **Khaththil Quran Kontemporer** | Contemporary Arabic calligraphy artwork file |
| **FQ** | **Fahmil Quran** | 3-member contingent team roster with student credentials |
| **SQ** | **Syarhil Quran** | 3-member team roster (Reciter, Translator, Orator) + manuscript |
| **KT** | **Karya Tulis Ilmiah Al-Quran** | Academic paper (PDF) + abstract |
| **DA** | **Desain Aplikasi Komputer** | Software demo link, repository, and design proposal PDF |

### Adaptive Submission Forms
Instead of forcing a single rigid form across all disciplines, the portal dynamically adapted the submission fields based on the selected division:
- **Solo Recitation (e.g., Tilawah, Tartil):** Validated single-student entries and external streaming video links.
- **Team Divisions (e.g., Fahmil, Syarhil):** Handled 3-person team rosters, collecting student ID cards (*KTM*) and registration numbers for all members.
- **Academic & Software Divisions (KTIQ, DAKQ):** Handled PDF document uploads, file size limits, and external demo links.

![Division Rules & Specifications](/images/mtqm/02_kategori_divisi.png)

---

## 3. Contingent Registration (Individual & Bulk)

Participating universities registered participants in two primary ways:

| Registration Method | Target User | How It Worked |
| :--- | :--- | :--- |
| **Individual Registration** | Autonomous Student Teams | Students created an account, chose their division, filled in their details, and submitted their entry directly via web forms. |
| **Bulk Contingent Import** | University Delegation Admins (*Pendamping*) | Contingent managers downloaded an Excel template, filled out all division entries, and uploaded it alongside a `.zip` archive containing student ID cards and photos. |

### Roster Verification & Submission Locking
1. **Roster Review:** Contingent managers could view and manage all student entries registered under their university.
2. **Final Submission Lock (`is_final_team`):** Once registration was complete, the contingent manager locked the submission. This prevented edits after the registration deadline and moved the verified participants into the scoring queue.

---

## 4. Preventing Judging Bias: University Filtering

In inter-university competitions, maintaining impartiality is critical. If a judge scores participants from their own university, it creates an immediate conflict of interest.

The portal handled this directly in the assignment query (`PenjurianController.php`), ensuring judges could only see and grade submissions from institutions other than their own:

```php
// Exclude teams from the judge's own university
public function getAssignableTeamsForJury($juriId, $cabangId)
{
    $juri = User::findOrFail($juriId);

    return Team::where('id_cabang', $cabangId)
        ->where('is_final_team', 1)
        // Hard constraint: exclude submissions from the judge's university
        ->where('id_perguruantinggi', '!=', $juri->id_perguruantinggi)
        // Ensure the judge has not already scored this team
        ->whereDoesntHave('penjurian', function ($query) use ($juriId) {
            $query->where('id_juri', $juriId);
        })
        ->get();
}
```

### Key Rules:
- **Automatic Institution Filtering:** Submissions from the judge's home institution are automatically excluded from their evaluation queue (`team.id_perguruantinggi != juri.id_perguruantinggi`).
- **Anonymized Participant Codes:** The evaluation screen displays designated participant codes alongside performance links or documents to keep judging focused on the submission.
- **Single Evaluation Check:** Once a score is saved, the team is removed from the active queue to prevent duplicate grading.

---

## 5. Scoring Rubrics & Result Tabulation

Judges used a structured scoring interface tailored to each category's standard criteria:
- **Recitation Categories (Tilawah, Tartil):** Scored across Tajweed, Fashahah, and Vocal Rhythm / Lagu.
- **Scientific & Software Categories (KTIQ, DAKQ):** Scored on originality, methodology/system design, and presentation defense.

![National Winners Tabulation](/images/mtqm/03_rekap_pemenang.png)

### Score Calculation
1. **Criteria Aggregation:** Sub-scores were calculated based on the category's rubric rules (`ref_penilaian`).
2. **Automated Standings:** The system calculated average totals across evaluating judges to generate ranked standings (*Juara 1, 2, 3, dan Harapan*) for official event recaps.

---

## 6. Storage & User Roles

![Authentication & Delegation Security](/images/mtqm/04_login_portal.png)

- **Document Storage via Google Drive API:** Because student ID cards, artwork files, and paper proposals required significant disk space, uploaded documents were streamed directly to Google Drive storage via service accounts, keeping server disk usage lightweight.
- **User Roles:**
  - **Superadmin:** Managed competition categories, system settings, user accounts, and final score approval.
  - **Jury:** Evaluated assigned submissions filtered to exclude their home institution.
  - **Contingent Liaison (*Pendamping*):** Managed institutional team rosters and tracked submission status.
  - **Participant (*Peserta*):** Submitted entry details and accessed competition announcements.

---

## 7. Operational Period (2021–2023) & Transition

The portal was actively deployed across three annual competition editions: **MTQMN UNY 2021**, **2022**, and **2023**.

Starting in **2024**, Universitas Negeri Yogyakarta decided not to hold its open national invitational anymore. Instead, the university shifted its focus to preparing and sending student contingents directly to the official government competitions (**Puspresnas / Belmawa MTQMN**). 

Because UNY no longer hosts the invitational event, the competition portal concluded its active lifecycle after the 2023 edition and is maintained as an archive.

---

## 8. Summary

- **Delivered 3 Successful Competition Cycles:** Handled online registration, submissions, and scoring for MTQ UNY across 2021, 2022, and 2023 without data loss.
- **Handled 12 Distinct Disciplines:** Supported both solo video-based recitation branches and collaborative document/software competitions in a single platform.
- **Fair Adjudication:** Enforced automated institutional filtering so judges could not evaluate participants from their home university.
- **Lifecycle Complete:** Safely retired and archived following UNY's strategic transition in 2024 to focus on competing in the official Belmawa/Puspresnas national rounds.
