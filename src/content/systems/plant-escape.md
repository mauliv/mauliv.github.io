---
id: "xr-plant-escape"
title: "Plant Escape: Mobile AR & Physical Science Card Games"
slug: "plant-escape-ar"
summary: "Unity/Vuforia mobile AR science learning game addressing post-pandemic biology learning loss, field-tested at SMP N 1 Muntilan (Middle School), protected by two national IP copyrights (Directorate General of Intellectual Property) and funded by the Ministry of Education Belmawa (~IDR 6,000,000)."
excerpt: "To combat biology learning loss in secondary schools, I engineered an interactive mobile AR learning game in Unity and Vuforia paired with 58 physical science cards. Achieving a 100% recognition rate from 5 cm to 100 cm on budget Android phones, the system produced statistically significant comprehension gains in classroom trials and earned 2 national IP copyrights."
role: "Lead Unity & AR Developer / Co-Researcher"
period:
  start: "2022-06"
  end: "2022-10"
project_logo: "/images/plant-escape/plant-escape-logo.png"
institution_logo: "/logos/kemdikbud.svg"
tech_stack:
  - "Unity 3D (2021.3.0f1 LTS)"
  - "C# Architecture"
  - "Vuforia Engine"
  - "Android (Mobile AR)"
  - "Blender 3D Modeling"
  - "Physical Card Design (58 Cards)"
metrics:
  - label: "Controlled Trial Sample"
    value: "75 Grade 8 students across 3 experimental and control cohorts"
    provenance: "SMP N 1 Muntilan Field Trial (PKM-RSH 2022)"
  - label: "Knowledge Retention Gain"
    value: "+14.81 mean score gain (vs +3.91 in conventional PPT control)"
    provenance: "Pre/Post-test SPSS Normalized Gain Analysis (JATIKA 2022)"
  - label: "Statistical Significance"
    value: "ANOVA p = 0.005 (statistically significant retention gain, p < 0.05)"
    provenance: "One-Way ANOVA SPSS Test, PKM-RSH Final Report"
  - label: "Comprehension Rate"
    value: "96.30% student comprehension agreement (vs 50.00% control)"
    provenance: "Post-trial evaluation survey"
  - label: "Scan Recognition Distance"
    value: "5 cm – 100 cm verified across 58 card markers"
    provenance: "career-archive.md:77"
  - label: "Physical Marker Deck"
    value: "58 custom Ivory 260gsm playing cards (7.5 x 10 cm)"
    provenance: "PKM-RSH physical card deck specs"
  - label: "IP Protection"
    value: "2 Official HKI Copyrights Granted (Ministry of Law and Human Rights)"
    provenance: "career-archive.md:177-179"
  - label: "Secured Research Grant"
    value: "National Student Research Grant (PKM-RSH) funding ~IDR 6,000,000 (Ministry of Education Belmawa)"
    provenance: "Belmawa Ministry of Education PKM-RSH Grant"
live_url: null
archive_status: "demo-only"
engine: "Unity 3D (v2021.3.0f1 LTS)"
xr_sdk: "Vuforia Engine"
target_platform: "Android"
physical_artifacts:
  - "58 Physical Ivory biology playing cards (7.5 x 10 cm)"
pedagogical_framework: "Multimedia Development Life Cycle (MDLC)"
empirical_evaluation:
  method: "Normalized Gain (N-Gain) Pre-test/Post-test"
  trial_site: "SMP Negeri 1 Muntilan"
  statistical_outcome: "Statistically significant improvement in plant anatomy retention"
intellectual_property:
  - title: "Plant Escape: Science Card Application"
    type: "National Copyright (HKI) · Computer Software"
    number: "000377191"
    issuing_body: "Directorate General of Intellectual Property (DJKI Kemenkumham RI)"
    url: "https://pdki-indonesia.dgip.go.id/"
  - title: "Plant Escape: Science Card Games"
    type: "National Copyright (HKI) · Educational Visual Aid"
    number: "000377182"
    issuing_body: "Directorate General of Intellectual Property (DJKI Kemenkumham RI)"
    url: "https://pdki-indonesia.dgip.go.id/"
publications:
  - journal: "Jurnal Informatika dan Rekayasa Perangkat Lunak (JATIKA)"
    volume: "Vol. 3 No. 4"
    date: "2022-12"
    focus: "Science Card Games Berbasis Augmented Reality sebagai Solusi Mengatasi Learning Loss Pasca Pandemi COVID-19"
grants_and_honors:
  - "Secured National Student Research Grant (PKM-RSH) funding (~IDR 6,000,000)"
  - "PIMNAS 35 National Finalist (Premier National Student Science & Innovation Competition, 2022)"
provenance_source: "Plant Escape Unity project; career-archive.md:33, 74-78, 220-224"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Engineered and compiled with Unity 2021.3.0f1 LTS and Vuforia Engine. Evaluated in on-site school trials at SMP N 1 Muntilan. HKI registrations publicly searchable on PDKI DGIP portal."
evidence:
  - type: "hki"
    label: "PDKI DJKI (App — Reg. 000377191)"
    url: "https://pdki-indonesia.dgip.go.id/"
    is_internal: false
    status: "available"
  - type: "hki"
    label: "PDKI DJKI (Games — Reg. 000377182)"
    url: "https://pdki-indonesia.dgip.go.id/"
    is_internal: false
    status: "available"
  - type: "journal"
    label: "JATIKA Paper (ResearchGate)"
    url: "https://www.researchgate.net/publication/375803418_Science_Card_Games_Berbasis_Augmented_Reality_sebagai_Solusi_Mengatasi_Learning_Loss_Pasca_Pandemi_COVID-19"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "PIMNAS 35 Finalist Letter & Grant Decree"
    url: "/docs/edtech/pimnas-35-belmawa-grant-decree.pdf"
    is_internal: true
    status: "needs-confirmation"
  - type: "internal-pdf"
    label: "Project Dossier (PDF)"
    url: "/docs/edtech/05-plant-escape-dossier.pdf"
    is_internal: true
    status: "available"
---

## 1. The Challenge: Bringing Flat Biology Diagrams to Life

Middle school students at SMP Negeri 1 Muntilan frequently struggled with abstract plant biology concepts. Internal botanical anatomy — such as the differences between monocot and dicot stems, or how xylem and phloem transport nutrients — was difficult to grasp from static 2D textbook drawings.

To solve this learning bottleneck, I co-designed and engineered **Plant Escape** as an interactive educational game. By pairing physical collectible cards with mobile Augmented Reality (AR), students hold a card in their hand, point their smartphone camera at it, and immediately inspect interactive 3D cross-sections of botanical structures rendered directly on their desks.

![Plant Escape Physical Science Cards Sample](/images/plant-escape/plant-escape-cards-sample.png)

---

## 2. How It Works: 58 Physical Science Cards + Mobile AR

The experience is centered around a custom **58-card physical card deck** printed on durable Ivory 260gsm cardstock (7.5 × 10 cm):

* **Cards 1–30 (Plant Organs & Adaptations):** Vibrant illustrations of leaves, roots, stems, flowers, and specialized plant structures (such as cactus water storage and plant bulbs).
* **Cards 31–58 (Microscopic Cross-Sections):** Detailed microscopic views of monocot and dicot vascular bundles, roots, and stem layers.
* **Instant AR Recognition:** Each card serves as a calibrated visual marker. When scanned with the mobile app, the corresponding 3D model projects instantly on top of the card.
* **Wide Scanning Range:** Calibrated using Vuforia image databases (`ScienceDBlocal`), allowing students to scan cards reliably from **5 cm up to 100 cm** away under typical classroom lighting.

---

## 3. Technical Architecture & System Flow

I developed the application in **Unity 2021.3 (LTS)** with C# using the **Vuforia Engine** SDK for image tracking, specifically optimizing assets to run smoothly on lower-tier Android smartphones common in Indonesian public schools:

```
[ Main Menu ] ──► [ Learning Objectives ] ──► [ Theory Material (Swipe) ]
                                                        │
          ┌─────────────────────────────────────────────┴──────────────────────┐
          ▼                                                                    ▼
[ AR Camera Viewport ]                                                [ Formative Quizzes ]
• Vuforia Image Target Tracking                                       • 10 Interactive quiz scenes
• Interactive 3D Stem Cross-Sections                                  • Drag-and-drop organ matching
• Touch controls: 360° rotate & pinch zoom                            • Instant scoring & feedback
```

### Key Engineering Modules I Built:
* **Interactive 3D Biological Models:** Low-polygon 3D models modeled in Blender with baked normal maps for high rendering efficiency:
  * `batang-dikotil` (Dicotyledonous stem anatomy with circular vascular arrangement)
  * `batang-monokotil` (Monocotyledonous stem anatomy with scattered vascular bundles)
  * `xylem-floem-di-batang8` (Detailed vascular transport layers)
* **Formative Quiz Engine (`QuizManager.cs`):** Dynamic question randomization and scoring across 10 evaluation scenes (`Evaluasi1` through `Evaluasi10`).
* **Drag-and-Drop Matching (`DragDropManager.cs`):** Gamified mini-games where students drag plant parts into the correct biological category.
* **Touch-Enabled Inspection:** Smooth gesture controllers allowing students to rotate models in 360 degrees and pinch-to-zoom into internal tissue layers.

![Unity 3D Development Environment & Asset Calibration](/images/plant-escape/plant-escape-unity-development.jpg)

---

## 4. Controlled Classroom Trials & Statistical Proof

To measure whether physical-digital AR games genuinely remediate post-pandemic learning loss, Plant Escape was evaluated through a rigorous **3-arm experimental pre-test/post-test trial** conducted at **SMP Negeri 1 Muntilan** (Magelang, Central Java) across **75 Grade 8 students**:

![Classroom Field Trial at SMP Negeri 1 Muntilan](/images/plant-escape/plant-escape-classroom-trial.jpg)

### A. The 3-Arm Comparative Study

| Cohort | Intervention Method | Sample Size | Pre-to-Post Gain | Comprehension Agreement |
| :--- | :--- | :---: | :---: | :---: |
| **Experimental Cohort 1** | **Plant Escape (58 Physical Cards + Mobile AR App)** | **27 Students** | **+14.81 points** | **96.30%** |
| **Experimental Cohort 2** | Science Card Games only (Physical cards, no AR) | 26 Students | +9.73 points | 90.77% |
| **Control Group** | Conventional Lecture (Static PowerPoint slides) | 22 Students | +3.91 points | 50.00% |

![Students Scanning Plant Escape Cards with Mobile AR in Classroom Trial](/images/plant-escape/plant-escape-ar-classroom-trial.jpg)

![Collaborative Card Game Learning Cohort at SMP N 1 Muntilan](/images/plant-escape/plant-escape-card-classroom-trial.jpg)

### B. Key Statistical & Pedagogical Findings
* **Statistically Significant Superiority (ANOVA $p = 0.005$):** Inferential analysis using One-Way ANOVA in SPSS yielded a significance value of **$p = 0.005$** ($p < 0.05$). This confirmed that the knowledge retention gain in the Plant Escape AR cohort was statistically significant and not an artifact of random variation.
* **Remediating Post-Pandemic Learning Loss:** While traditional lecture methods produced only modest knowledge retention (+3.91 points), combining hands-on physical tactile cards with real-time 3D AR inspection produced an almost **4× knowledge gain (+14.81 points)**.
* **Collaborative Tabletop Dynamics:** Students worked in small clusters of 4–5, passing physical cards around desks and scanning them collectively. The instant 3D projection of vascular cross-sections prompted spontaneous peer-to-peer discussions rather than passive screen consumption.
* **Low-End Hardware Stability:** Blackbox stress testing confirmed rock-solid marker tracking between **5 cm and 100 cm** across entry-level Android smartphones with 2GB–3GB RAM under standard fluorescent school lighting.

---

## 5. Intellectual Property & Academic Recognition

1. **Official Intellectual Property (HKI Copyrights):**
   * *Computer Software:* Hak Cipta No. **000377191** (*Plant Escape: Science Card Application*) granted by DJKI Kemenkumham RI. Searchable on the official [PDKI Indonesia Registry](https://pdki-indonesia.dgip.go.id/) using registration number `000377191`.
   * *Physical Teaching Device:* Hak Cipta No. **000377182** (*Plant Escape: Science Card Games*) granted by DJKI Kemenkumham RI. Searchable on the official [PDKI Indonesia Registry](https://pdki-indonesia.dgip.go.id/) using registration number `000377182`.
2. **Peer-Reviewed Journal Publication:** Published in *[Jurnal Informatika dan Rekayasa Perangkat Lunak (JATIKA)](https://www.researchgate.net/publication/375803418_Science_Card_Games_Berbasis_Augmented_Reality_sebagai_Solusi_Mengatasi_Learning_Loss_Pasca_Pandemi_COVID-19)*, Vol. 3 No. 4 (December 2022): *"Science Card Games Berbasis Augmented Reality sebagai Solusi Mengatasi Learning Loss Pasca Pandemi COVID-19"* ([View Paper on ResearchGate](https://www.researchgate.net/publication/375803418_Science_Card_Games_Berbasis_Augmented_Reality_sebagai_Solusi_Mengatasi_Learning_Loss_Pasca_Pandemi_COVID-19)).
3. **National Research Grant & Finalist:** Awarded competitive **national student research funding (PKM-RSH, ~IDR 6,000,000)** by the Ministry of Education (Belmawa Kemendikbudristek) and selected as a **PIMNAS 35 National Finalist (2022)** — Indonesia's premier national collegiate innovation finals.
