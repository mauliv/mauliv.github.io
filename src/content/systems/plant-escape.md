---
id: "xr-plant-escape"
title: "Plant Escape: Mobile AR & Physical Science Card Games"
slug: "plant-escape-ar"
summary: "Unity/Vuforia AR science-card game combatting biology learning loss, field-tested at SMP N 1 Muntilan, with two HKI copyrights and secured PKM-RSH research grant funding (~IDR 6,000,000)."
excerpt: "Vuforia image targets were calibrated across 58 physical biology cards, achieving a 100% successful render rate in blackbox trials across scan distances from 5 cm to 100 cm — running smoothly on lower-end Android devices in public middle schools."
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
  - label: "Scan Recognition Distance"
    value: "5 cm – 100 cm verified across 58 card markers"
    provenance: "career-archive.md:77"
  - label: "Physical Marker Deck"
    value: "58 custom Ivory 260gsm playing cards (7.5 x 10 cm)"
    provenance: "PKM-RSH physical card deck specs"
  - label: "Target Learners"
    value: "Grade 8 Middle School Biology (SMP Negeri 1 Muntilan)"
    provenance: "Field trial documentation (SMP N 1 Muntilan)"
  - label: "IP Protection"
    value: "2 Official HKI Copyrights Granted (Kemenkumham RI)"
    provenance: "career-archive.md:177-179"
  - label: "Secured Research Grant"
    value: "PKM-RSH funding ~IDR 6,000,000 (Belmawa Kemendikbudristek)"
    provenance: "Belmawa Kemendikbudristek PKM-RSH Grant"
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
  - type: "Hak Cipta (HKI) - Program Komputer"
    number: "000377191"
    issuing_body: "Kemenkumham RI"
  - type: "Hak Cipta (HKI) - Alat Peraga"
    number: "000377182"
    issuing_body: "Kemenkumham RI"
publications:
  - journal: "Jurnal Informatika dan Rekayasa Perangkat Lunak (JATIKA)"
    volume: "Vol. 3 No. 4"
    date: "2022-12"
    focus: "Science Card Games Berbasis Augmented Reality sebagai Solusi Mengatasi Learning Loss Pasca Pandemi COVID-19"
grants_and_honors:
  - "Secured PKM-RSH Research Grant funding (~IDR 6,000,000)"
  - "PIMNAS 35 National Finalist (2022)"
provenance_source: "Plant Escape Unity project; career-archive.md:33, 74-78, 220-224"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Engineered and compiled with Unity 2021.3.0f1 LTS and Vuforia Engine. Evaluated in on-site school trials at SMP N 1 Muntilan."
evidence:
  - type: "hki"
    label: "HKI Copyright (App — No. 000377191)"
    url: "/docs/edtech/hki-000377191-plant-escape-app.pdf"
    is_internal: true
    status: "needs-confirmation"
  - type: "hki"
    label: "HKI Copyright (Science Cards — No. 000377182)"
    url: "/docs/edtech/hki-000377182-plant-escape-cards.pdf"
    is_internal: true
    status: "needs-confirmation"
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

Middle school students often struggle with abstract plant biology concepts. Internal botanical anatomy — such as the differences between monocot and dicot stems, or how xylem and phloem transport water and nutrients — is difficult to grasp from flat diagrams in a paper textbook.

**Plant Escape** was created as an interactive educational game. By pairing physical collectible cards with mobile Augmented Reality (AR), students hold a card in their hand, point their smartphone camera at it, and immediately see an interactive 3D cross-section of the plant appear directly on their desk.

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

The app was developed in **Unity 2021.3 (LTS)** using the **Vuforia Engine** SDK for image tracking, optimized to run smoothly on budget Android smartphones:

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

### Key Engineering Modules:
* **Interactive 3D Biological Models:** Low-polygon 3D models created in Blender with baked normal maps for optimal rendering speed:
  * `batang-dikotil` (Dicotyledonous stem anatomy with circular vascular arrangement)
  * `batang-monokotil` (Monocotyledonous stem anatomy with scattered vascular bundles)
  * `xylem-floem-di-batang8` (Detailed vascular transport layers)
* **Formative Quiz Engine (`QuizManager.cs`):** Dynamic question randomization and scoring across 10 evaluation scenes (`Evaluasi1` through `Evaluasi10`).
* **Drag-and-Drop Matching (`DragDropManager.cs`):** Gamified mini-games where students drag plant parts into the correct biological category.
* **Touch-Enabled Inspection:** Smooth gestures allowing students to rotate models in 360 degrees and pinch-to-zoom into internal tissue layers.

---

## 4. Classroom Trials & Educational Impact

To measure real pedagogical effectiveness, Plant Escape was field-tested in an experimental pre-test/post-test trial with Grade 8 students at **SMP Negeri 1 Muntilan**:

![Classroom Field Trial at SMP Negeri 1 Muntilan](/images/plant-escape/plant-escape-classroom-trial.jpg)

* **Collaborative Learning:** Students worked in small groups, scanning cards together and discussing anatomical differences as 3D projections appeared on their tables.
* **Measurable Learning Gains:** Normalized Gain (N-Gain) statistical analysis showed a significant improvement in student comprehension and recall compared to traditional textbook study.
* **Broad Device Compatibility:** Blackbox testing confirmed reliable tracking across budget Android devices, ensuring schools don't need expensive flagship phones for students to participate.

---

## 5. Intellectual Property & Academic Recognition

1. **Official Intellectual Property (HKI Copyrights):**
   * *Computer Software:* Hak Cipta No. **000377191** (*Aplikasi Plant Escape Berbasis Augmented Reality*) granted by Kemenkumham RI.
   * *Physical Teaching Device:* Hak Cipta No. **000377182** (*Kartu Pembelajaran Plant Escape*) granted by Kemenkumham RI.
2. **Peer-Reviewed Journal Publication:** Published in *[Jurnal Informatika dan Rekayasa Perangkat Lunak (JATIKA)](https://www.researchgate.net/publication/375803418_Science_Card_Games_Berbasis_Augmented_Reality_sebagai_Solusi_Mengatasi_Learning_Loss_Pasca_Pandemi_COVID-19)*, Vol. 3 No. 4 (December 2022): *"Science Card Games Berbasis Augmented Reality sebagai Solusi Mengatasi Learning Loss Pasca Pandemi COVID-19"* ([View Paper on ResearchGate](https://www.researchgate.net/publication/375803418_Science_Card_Games_Berbasis_Augmented_Reality_sebagai_Solusi_Mengatasi_Learning_Loss_Pasca_Pandemi_COVID-19)).
3. **National Research Grant & Finalist:** Awarded competitive **PKM-RSH research funding (~IDR 6,000,000)** by Belmawa Kemendikbudristek and selected as a **PIMNAS 35 National Finalist (2022)**.
