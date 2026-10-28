---
id: "post-ar-field-testing"
title: "What I Learned Field-Testing Mobile AR in Real Classrooms: Hardware Limits, Lighting, and Statistical Impact"
slug: "field-testing-ar-classrooms"
role: "Lead Unity & AR Developer / Co-Researcher"
period:
  start: "2022-06"
  end: "2023-06"
tech_stack:
  - "Unity 3D"
  - "Vuforia Engine"
  - "C#"
  - "Blender"
  - "Android"
  - "SPSS / Statistics"
metrics:
  - label: "Classroom Trial Sample"
    value: "110 students across 2 partner schools (SMP N 1 Muntilan & SMK N 3 Klaten)"
    provenance: "PKM-RSH 2022 & FT UNY Skripsi 2023 Field Trials"
  - label: "Knowledge Retention Gain"
    value: "+14.81 mean score gain (vs +3.91 conventional lecture control)"
    provenance: "SPSS Normalized Gain Analysis, JATIKA (2022)"
  - label: "Statistical Significance"
    value: "ANOVA p = 0.005 (statistically significant retention gain, p < 0.05)"
    provenance: "SPSS One-Way ANOVA, SMP N 1 Muntilan Trial"
  - label: "Expert Feasibility Rating"
    value: "97.00% Media Expert · 96.00% Subject Matter Expert"
    provenance: "FT UNY Undergraduate Thesis Evaluation (2023)"
live_url: null
archive_status: "live"
category: "edtech-didactics"
date: "2026-10"
reading_time_minutes: 8
summary: "An engineering post-mortem on deploying mobile Augmented Reality across 110 public school students in Central Java — covering 2GB RAM device optimization, marker physics under fluorescent lights, and empirical proof that physical cards + AR produce a 4× knowledge gain over traditional slides."
related_systems:
  - "xr-plant-escape"
  - "xr-ar-kitchen"
tags:
  - "Augmented Reality"
  - "Unity 3D"
  - "EdTech"
  - "Vuforia"
  - "Android"
  - "Pedagogy"
provenance_source: "Sagita Lintang Cahyani_UNY_PKM-RSH.docx; 04. SKRIPSI.pdf; JATIKA Vol. 3 No. 4 (2022)"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Synthesizes empirical trial data from SMP N 1 Muntilan (PKM-RSH 2022) and SMK N 3 Klaten (FT UNY Skripsi 2023)."
evidence:
  - type: "journal"
    label: "JATIKA Peer-Reviewed Paper"
    url: "https://www.researchgate.net/publication/375803418_Science_Card_Games_Berbasis_Augmented_Reality_sebagai_Solusi_Mengatasi_Learning_Loss_Pasca_Pandemi_COVID-19"
    is_internal: false
    status: "available"
  - type: "hki"
    label: "Plant Escape HKI Copyright (000377191)"
    url: "https://pdki-indonesia.dgip.go.id/"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "Plant Escape Project Dossier"
    url: "/docs/edtech/05-plant-escape-dossier.pdf"
    is_internal: true
    status: "available"
  - type: "internal-pdf"
    label: "AR Kitchen Case Study Dossier"
    url: "/docs/edtech/06-ar-kitchen-vocational-dossier.pdf"
    is_internal: true
    status: "available"
---

Most Augmented Reality tutorials operate in an artificial vacuum: high-end iPhones, spacious desks, fiber-optic Wi-Fi, and perfectly diffused studio lighting.

Between 2022 and 2023, I engineered and field-tested two separate educational AR applications — **Plant Escape** (a gamified biology platform) and **AR MENU** (a vocational culinary training simulator) — in actual public school classrooms across Central Java. We tested with over **110 real students** at **SMP Negeri 1 Muntilan** and **SMK Negeri 3 Klaten**.

Classrooms are hostile operating environments for mobile software. If an educational app crashes on a budget phone, causes thermal throttling after ten minutes, or loses target tracking under flickering fluorescent tubes, the lesson falls apart. 

Here is what I learned about bridging the gap between Unity shaders and classroom reality — and why empirical pedagogical data matters as much as frame rates.

---

## 1. The Hardware Reality: Targeting the Floor, Not the Ceiling

In Indonesian public schools, device disparity is extreme. Students bring whatever Android smartphone their household owns: entry-level Mediatek or budget Exynos chipsets, 2GB to 3GB of RAM, scratched camera lenses, and Android 8 or 9.

If your application requires ARCore depth APIs or 60 FPS physics, half the class is instantly excluded. As lead engineer, I had to treat hardware constraints as hard pedagogical boundaries:

```
[ Budget Android Device: 2GB-3GB RAM ]
        │
        ├──► Memory Guard: Strict Object Pooling (Zero Instantiate/Destroy during scans)
        ├──► Rendering Budget: Combined Texture Atlases (1-2 draw calls per model)
        └──► Thermal Throttling: Camera Viewport throttled to stable 30 FPS
```

* **Eliminating Garbage Collector Spikes:** Unity's Mono Garbage Collector on 2GB RAM devices causes noticeable micro-stutters whenever memory is allocated. I refactored the image-target listeners and quiz UI to use strict object pooling. When a student switches between scanning a root cross-section and a stem anatomy card, zero objects are dynamically instantiated or destroyed at runtime.
* **Texture Atlasing in Blender:** For both Plant Escape's botanical structures and AR Menu's 11 continental dishes, I baked all diffuse, normal, and ambient occlusion maps into single 2048×2048 texture atlases per dish category. This reduced draw calls from 14+ down to 1–2 per model, allowing complex 3D meshes to render smoothly on budget Mali GPUs.
* **Thermal Management:** Running camera feeds and image tracking continuously will turn a budget plastic phone body into a hand warmer within 15 minutes. I locked the camera capture rate to 30 FPS with downscaled tracking resolution, cutting thermal output by ~35% while maintaining tracking stability.

---

## 2. Marker Physics: Paper Stock and Classroom Lighting

One of the quickest ways for an AR project to fail in a classroom is ignoring physical marker physics.

In our earliest prototypes, markers were printed on standard gloss-laminated photo paper. The moment we stepped into a classroom with overhead fluorescent strip lighting, the cameras were blinded by **specular glare hot-spots**. Vuforia's feature-point detector lost contrast edges, causing models to jitter or disappear completely.

```
[ Overhead Fluorescent Lights ]
             │
             ▼ (Reflective Glare Hot-Spot)
    [ Glossy Paper: FAILS ] ──► Lost Feature Points ──► Tracking Jitter
    [ Ivory 260gsm Matte: PASS ] ──► Diffuse Light ──► Solid 5cm-100cm Lock
```

To solve this:
1. **Paper Substrate Calibration:** We switched from glossy paper to **custom Ivory 260gsm matte cardstock** (7.5 × 10 cm for Plant Escape; 34-page full-color spiral workbook for AR Menu). The matte finish dispersed direct fluorescent reflections, allowing clean optical edge detection.
2. **High-Entropy Marker Design:** Every marker was designed with asymmetrical, high-contrast border geometries and distinctive line drawings to maximize high-confidence feature points in Vuforia's target database.
3. **Scanning Cone Range:** In blackbox field tests at SMP N 1 Muntilan, this combination achieved a reliable scan distance ranging from **5 cm up to 100 cm** at incident angles up to 45 degrees, accommodating students scanning cards while sitting or leaning over crowded desks.

![Student Scanning 34-Page Printed Manual Book under Fluorescent Classroom Lighting](/images/ar-kitchen/ar-menu-classroom-trial-scan.jpg)
*Figure 1: Field-testing optical tracking stability at SMK Negeri 3 Klaten. The matte-laminated spiral workbook prevented fluorescent glare blowouts, maintaining reliable tracking on budget Android hardware.*

---

## 3. The Empirical Data: Why Physical + AR Beats Both Slides and Cards

In software engineering, we track latency and crash rates. In EdTech, the ultimate metric is **learning retention**.

At SMP Negeri 1 Muntilan, we conducted a formal **3-arm experimental pre-test/post-test trial** across **75 Grade 8 students** to isolate the pedagogical impact of Augmented Reality:

| Study Group | Method / Medium | Sample | Mean Score Gain | Comprehension Agreement |
| :--- | :--- | :---: | :---: | :---: |
| **Experimental Cohort 1** | **Plant Escape (Physical Cards + Mobile AR)** | **27 Students** | **+14.81 points** | **96.30%** |
| **Experimental Cohort 2** | Science Card Games only (Physical cards, no AR) | 26 Students | +9.73 points | 90.77% |
| **Control Group** | Conventional Lecture (Static PowerPoint slides) | 22 Students | +3.91 points | 50.00% |

Running inferential statistics (One-Way ANOVA in SPSS) on the pre/post-test delta confirmed a statistically significant difference (**$p = 0.005$**, $p < 0.05$) between the Plant Escape AR cohort and the traditional lecture cohort.

![Students Scanning Physical Cards with Mobile AR at SMP Negeri 1 Muntilan](/images/plant-escape/plant-escape-ar-classroom-trial.jpg)
*Figure 2: Experimental Cohort 1 students at SMP Negeri 1 Muntilan scanning physical botanical cards to trigger real-time 3D plant anatomy cutaways (+14.81 mean score gain).*

![Small-Group Collaborative Card Game Learning Dynamics](/images/plant-escape/plant-escape-card-classroom-trial.jpg)
*Figure 3: Tactile peer collaboration in action. Having physical playing cards on the table anchored social interaction and spontaneous peer-to-peer explanation.*

### Why did the combined medium win?
* **Tactile Social Grounding:** Screen-only learning often leads to isolated, passive consumption. Having physical playing cards on the table forced students to sit in small clusters of 4–5, negotiate card trades, and physically pass targets to one another.
* **Spatial Dissection:** Abstract botanical concepts like *monocot vs. dicot vascular bundles* or *xylem/phloem nutrient transport* are notoriously difficult to conceptualize from flat 2D textbook cross-sections. Holding a card while orbiting a 3D cutaway gave students immediate spatial intuition that PowerPoint diagrams could never replicate.

---

## 4. The Vocational Case: Eliminating Food Waste at SMK N 3 Klaten

While Plant Escape focused on middle school biology, **AR MENU** tackled a direct financial and resource constraint in vocational high school education (*SMK Culinary Arts / Tata Boga*).

Grade 10 vocational students learning Continental Cuisine (*Dasar Masakan Kontinental*) must master strict international plating aesthetics — portion height, focal placement, color balance, and sauce drizzling. 

However, practicing continental cuisine requires expensive lab ingredients: premium beef cuts, heavy creams, cheeses, fresh berries, and imported herbs. Because food waste cannot be repurposed once plated and sauced, lab budgets typically restrict students to **only 1 or 2 hands-on plating drills per semester**.

```
[ Traditional Culinary Lab ] ──► Expensive Ingredients ──► 1-2 Drills / Semester (High Error Risk)
[ AR Menu Simulation ]       ──► Zero Perishable Waste  ──► Unlimited 3D Practice ──► Confident Lab Entry
```

By engineering **AR MENU** as a 178 MB Android simulator paired with a 34-page workbook, students could rotate, inspect, and evaluate 11 photorealistic continental dishes in 360 degrees, completing formative ingredient quizzes on their desks.

![Vocational Culinary Students Testing AR Menu at SMK Negeri 3 Klaten](/images/ar-kitchen/ar-menu-classroom-trial-large.jpg)
*Figure 4: Large-scale classroom evaluation with 30 Grade 10 culinary students at SMK Negeri 3 Klaten, validating 3D plating aesthetics prior to physical kitchen practicums.*

In formal academic evaluations conducted for an engineering thesis at FT UNY:
* **Subject Matter Experts (Culinary Faculty):** Rated the system **96.00%** (*Sangat Layak* / Highly Suitable).
* **Media & Software Experts:** Rated the system **97.00%** (*Sangat Layak* / Highly Suitable).
* **Classroom Field Trials (35 students at SMK Negeri 3 Klaten):** Achieved **87.63% suitability**, with students reporting significantly higher confidence before entering their first physical kitchen practicum.

---

## 5. Architectural Principles for EdTech Engineers

Building educational technology that actually survives classroom deployment taught me three rules that guide my engineering work today:

1. **Design for the lowest common hardware denominator.**  
   If your application requires flagship hardware to achieve a smooth frame rate, it is an academic luxury, not an educational tool. Building for public schools forced me to write cleaner, more efficient C# and optimize 3D assets to their absolute essentials.
2. **Physical artifacts anchor digital experiences.**  
   Pure software often isolates learners behind individual glass screens. Pairing mobile AR with physical artifacts (58 collectible cards, spiral-bound recipe workbooks) creates collaborative social dynamics that enhance learning far more than screen pixels alone.
3. **Prove your engineering with pedagogical data.**  
   A beautiful 3D model means nothing if students don't retain the knowledge. Taking the extra step to run controlled trials, compute normalized gain scores, and test statistical significance ($p < 0.05$) turns a coding experiment into defensible, peer-reviewed educational technology.
