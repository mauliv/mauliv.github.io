---
id: "xr-ar-kitchen"
title: "AR Kitchen / AR Menu: Vocational Continental Cuisine Plating"
slug: "ar-kitchen"
summary: "Mobile AR vocational training simulator rendering 360-degree continental plating simulations and recipe theory to eliminate perishable ingredient waste in vocational culinary arts schools (SMK Culinary Arts)."
excerpt: "To eliminate expensive perishable ingredient waste in vocational culinary education, I engineered a mobile AR training simulator in Unity and Vuforia. Rendering 11 inspectable 3D continental dishes anchored to physical workbook markers, the app allows Grade 10 students to master plating aesthetics and curriculum competencies before stepping into the physical kitchen."
role: "Lead Unity & AR Developer"
period:
  start: "2022-09"
  end: "2023-04"
project_logo: "/images/ar-kitchen/ar-menu-logo.png"
institution_logo: "/logos/uny.svg"
tech_stack:
  - "Unity 3D (2021.3.0f1 LTS)"
  - "C# State Architecture"
  - "Vuforia Engine (dbFood Targets)"
  - "Android (Mobile AR)"
  - "Photogrammetry & 3D Plating Assets"
  - "Vocational Culinary Curriculum (Phase E)"
metrics:
  - label: "Expert Validation"
    value: "97.00% (Media & Software) · 96.00% (Culinary Matter)"
    provenance: "FT UNY Undergraduate Thesis (Skripsi), Widad Zita Nuriana (2023)"
  - label: "Classroom Field Trial"
    value: "87.63% suitability verified across 35 students at SMK Negeri 3 Klaten"
    provenance: "Skripsi Field Trial Data, SMK Negeri 3 Klaten"
  - label: "Artifact Package"
    value: "178 MB Unity Android APK + 34-Page Full-Color Manual Book"
    provenance: "Skripsi Research Output (FT UNY)"
  - label: "3D Plating Repertoire"
    value: "11 inspectable continental culinary dishes (Appetizers, Mains, Desserts)"
    provenance: "AR-Menu Unity project assets"
  - label: "Resource Efficiency"
    value: "Zero perishable food waste during plating and aesthetic layout drills"
    provenance: "06-ar-kitchen-vocational-dossier.pdf:4"
  - label: "Curriculum Standard"
    value: "National Vocational High School Curriculum (Phase E - Continental Cuisine)"
    provenance: "National Vocational Curriculum, Ministry of Education (Kemendikbudristek)"
live_url: null
archive_status: "archived"
engine: "Unity 3D (v2021.3.0f1 LTS)"
xr_sdk: "Vuforia Engine"
target_platform: "Android"
physical_artifacts:
  - "Physical vocational recipe textbook markers (dbFood / dbFoodNew)"
pedagogical_framework: "Multimedia Development Life Cycle (MDLC)"
intellectual_property: []
publications: []
grants_and_honors: []
provenance_source: "AR-Menu Unity project; career-archive.md:38, 79-83, 225-229"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Engineered and compiled with Unity 2021.3.0f1 LTS and Vuforia Engine. Developed for vocational secondary culinary education."
evidence:
  - type: "internal-pdf"
    label: "Technical Case Study & Vocational Dossier"
    url: "/docs/edtech/06-ar-kitchen-vocational-dossier.pdf"
    is_internal: true
    status: "available"
---

## 1. The Challenge: The Cost of Practicing Continental Cuisine

In culinary vocational high schools (**SMK Culinary Arts / Tata Boga**), Grade 10 students learn Continental Cuisine (*Dasar Masakan Kontinental*). Mastering this subject requires a keen eye for visual presentation — balancing color contrast, portion height, focal placement, and sauce drizzling.

However, hands-on plating practice in schools faces several major obstacles:
1. **Expensive Ingredients:** Continental dishes require costly ingredients — such as specialty beef cuts, heavy creams, cheeses, fresh berries, and imported herbs — that strain school lab budgets.
2. **Food Waste:** Once raw or cooked food is plated and sauced, it cannot be disassembled or stored for another student to practice. Every mistake means wasted food and money.
3. **Limited Repetition:** Because of high ingredient costs, each student typically only gets 1 or 2 live plating attempts per semester, leaving little room for trial and error.

**AR Menu** was built as a digital training simulator. It lets students view, rotate, and practice arranging photorealistic 3D continental dishes on their desks using Augmented Reality — building spatial confidence before ever stepping into the physical kitchen.

---

## 2. Curriculum Alignment: National Vocational Curriculum (Phase E)

I designed the application specifically around the national vocational curriculum (**Kurikulum Merdeka SMK — Phase E Learning Objectives**):

![Curriculum Alignment - CP & ATP Dasar Masakan Kontinental](/images/ar-kitchen/ar-menu-kd.png)

* **Curricular Element:** *Praktik Dasar Memasak Secara Menyeluruh* (Comprehensive Basic Cooking Practice).
* **Subject Focus:** *Dasar Masakan Kontinental* (Foundations of Continental Cuisine).
* **Key Learning Goals:**
  1. Understand the classification, history, and terminology of international dishes.
  2. Master mise en place and ingredient preparation with precision.
  3. Apply international plating principles (focal point, proportion, balance, and color harmony).

---

## 3. Interactive 3D Plating Catalog: 11 Continental Dishes

The app includes 11 photorealistic 3D food models spanning appetizers, main courses, and desserts:

| Category | Dishes Included | Learning Focus |
| :--- | :--- | :--- |
| **Appetizers & Soups** | • Bruschetta<br>• Patatas Bravas<br>• French Vegetable Soup<br>• Lettuce Bowl Salad | Garnish placement, bread and spread balance, soup portion height. |
| **Main Courses** | • Steak and Potatoes<br>• Chicken Parmesan | Protein orientation, carving angles, sauce pooling, starch elevation. |
| **Desserts & Pastries** | • Beetroot Cheesecake<br>• Chartreuse Ice Cream & Mini Tart<br>• Zeppola con Crema<br>• Custard Pie (*Pie Susu*) | Delicate piping, fruit symmetry, pastry glazing, color vibrance. |

Students scan image markers printed in their student workbook (`dbFood.xml`) to project any dish directly in front of them, inspecting it from every angle in full 3D.

---

## 4. Technical Implementation & Interactive Features

I engineered the application in **Unity 2021.3 (LTS)** with C# using the **Vuforia Engine** SDK for marker tracking, optimized for low-end Android hardware:

```
[ Main Menu ] ──► [ Curriculum Competencies ] ──► [ AR Plating Scanner ]
                                                            │
                                                            ▼
                                                   [ Formative Quizzes ]
                                                   • Question bank on herbs & spices
                                                   • Instant scoring and explanations
```

### Key Modules I Implemented:
* **Tabletop Marker Tracking:** I calibrated Vuforia target markers (`dbFood.xml`) for rock-solid tracking stability on flat classroom desks under overhead fluorescent lighting.
* **360° Touch Navigation:** I built touch-gesture controllers for single-finger drag rotation and two-finger pinch-to-zoom, letting students inspect sauce textures, garnish layers, and plate edges from any perspective.
* **Formative Quiz Engine (`QuizManager.cs`):** I authored an interactive quiz module testing student recall of key continental spices and herbs (e.g., identifying recipes that call for fresh rosemary, thyme, basil, or oregano).

![AR Menu Mobile Application Main Interface](/images/ar-kitchen/ar-menu-home-screen.jpg)

![AR Camera Viewport with 3D Dish Inspection and Component Breakdown](/images/ar-kitchen/ar-menu-3d-salad-inspection.jpg)

---

## 5. Empirical Evaluation & Educational Impact

The application and companion manual book were developed following the **ADDIE** (Analysis, Design, Development, Implementation, Evaluation) framework and empirically evaluated through an undergraduate engineering thesis (*Tugas Akhir Skripsi*, Widad Zita Nuriana, FT UNY, 2023), where I served as the technical developer and software partner.

![Vocational Culinary Students Testing AR Menu at SMK Negeri 3 Klaten](/images/ar-kitchen/ar-menu-classroom-trial-large.jpg)

### A. Rigorous Expert & Classroom Validation
The system underwent both formal academic validation by university faculty and on-site empirical field testing at **SMK Negeri 3 Klaten** with 35 Grade 10 Culinary Arts students (*Kelas X Jurusan Kuliner*):

| Evaluation Stage | Evaluator / Audience | Sample Size | Score / Feasibility | Assessment Category |
| :--- | :--- | :---: | :---: | :--- |
| **Media & Software Expert** | FT UNY Educational Media Lecturer | 1 Expert | **97.00%** | *Sangat Layak* (Highly Suitable) |
| **Subject Matter Expert** | FT UNY Culinary Education Lecturer | 1 Expert | **96.00%** | *Sangat Layak* (Highly Suitable) |
| **Small-Scale Usability Trial** | Grade 10 Culinary Students (SMK N 3 Klaten) | 5 Students | **88.80%** | *Sangat Layak* (Highly Suitable) |
| **Large-Scale Classroom Trial** | Grade 10 Culinary Students (SMK N 3 Klaten) | 30 Students | **87.63%** | *Sangat Layak* (Highly Suitable) |

![Student Scanning 34-Page Manual Book with AR App during Field Trial](/images/ar-kitchen/ar-menu-classroom-trial-scan.jpg)

### B. Tangible Classroom Benefits
* **Zero-Waste Repetition:** Students can rotate, inspect, and evaluate plating aesthetics (height, focal placement, color contrast, sauce pooling) as many times as needed without consuming expensive, perishable lab ingredients (specialty beef cuts, heavy creams, cheeses).
* **Confident Kitchen Labs:** Students arrive at the physical cooking practicum with established spatial memory of the target dish presentation, drastically reducing plating errors during timed kitchen drills.
* **Dual-Artifact Deployment:** Delivered as an optimized **178 MB Unity Android application** paired with a **34-page full-color printed student workbook (*Manual Book AR MENU*)** containing the calibrated marker targets and recipe theory.
