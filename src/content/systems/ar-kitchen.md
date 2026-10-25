---
id: "xr-ar-kitchen"
title: "AR Kitchen / AR Menu: Vocational Continental Cuisine Plating"
slug: "ar-kitchen"
summary: "Mobile AR teaching module rendering 360-degree continental plating simulations and recipe theory for vocational culinary arts students (SMK Tata Boga)."
excerpt: "Designed to eliminate perishable ingredient waste in vocational training, AR Menu renders 11 inspectable 3D continental dishes anchored to textbook markers, paired with curriculum-aligned formative evaluations for Grade 10 culinary cohorts."
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
  - "Kurikulum Merdeka SMK (Fase E)"
metrics:
  - label: "3D Plating Repertoire"
    value: "11 inspectable continental culinary dishes (Appetizers, Mains, Desserts)"
    provenance: "AR-Menu Unity project assets"
  - label: "Target Student Audience"
    value: "Grade 10 Vocational Culinary Students (SMK Tata Boga, Fase E)"
    provenance: "CP & ATP Dasar Masakan Kontinental (Kurikulum Merdeka)"
  - label: "Resource Efficiency"
    value: "Zero perishable food waste during plating and aesthetic layout drills"
    provenance: "06-ar-kitchen-vocational-dossier.pdf:4"
  - label: "Curriculum Standard"
    value: "Kurikulum Merdeka SMK (Fase E - Dasar Masakan Kontinental)"
    provenance: "Kurikulum Merdeka SMK Kemendikbudristek"
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

In culinary vocational high schools (**SMK Tata Boga / Kuliner**), Grade 10 students learn Continental Cuisine (*Dasar Masakan Kontinental*). Mastering this subject requires a keen eye for visual presentation — balancing color contrast, portion height, focal placement, and sauce drizzling.

However, hands-on plating practice in schools faces several major obstacles:
1. **Expensive Ingredients:** Continental dishes require costly ingredients — such as specialty beef cuts, heavy creams, cheeses, fresh berries, and imported herbs — that strain school lab budgets.
2. **Food Waste:** Once raw or cooked food is plated and sauced, it cannot be disassembled or stored for another student to practice. Every mistake means wasted food and money.
3. **Limited Repetition:** Because of high ingredient costs, each student typically only gets 1 or 2 live plating attempts per semester, leaving little room for trial and error.

**AR Menu** was built as a digital training simulator. It lets students view, rotate, and practice arranging photorealistic 3D continental dishes on their desks using Augmented Reality — building spatial confidence before ever stepping into the physical kitchen.

---

## 2. Curriculum Alignment: Kurikulum Merdeka SMK (Fase E)

The application was designed specifically around the national vocational curriculum (**Capaian Pembelajaran dan Alur Tujuan Pembelajaran — Fase E**):

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

The application was built in **Unity 2021.3 (LTS)** using the **Vuforia Engine** SDK for marker tracking:

```
[ Main Menu ] ──► [ Curriculum Competencies ] ──► [ AR Plating Scanner ]
                                                            │
                                                            ▼
                                                   [ Formative Quizzes ]
                                                   • Question bank on herbs & spices
                                                   • Instant scoring and explanations
```

### Key Engineering Implementation:
* **Tabletop Marker Tracking:** Vuforia target markers (`dbFood.xml`) calibrated for rock-solid stability on flat kitchen countertops under overhead fluorescent lighting.
* **360° Touch Navigation:** Intuitive single-finger drag rotation and two-finger pinch-to-zoom let students inspect sauce textures, garnish layers, and plate edges from any perspective.
* **Formative Quiz Engine (`QuizManager.cs`):** Interactive quizzes testing student recall of key continental spices and herbs (e.g., identifying recipes that call for fresh rosemary, thyme, basil, or oregano).

![In-App Assessment Question on Continental Herbs](/images/ar-kitchen/ar-menu-soal1.png)

![Formative Evaluation Score & Feedback Screen](/images/ar-kitchen/ar-menu-eval1.png)

---

## 5. Educational Impact

* **Zero-Waste Repetition:** Students can practice evaluating plating aesthetics as many times as needed without wasting a single gram of food.
* **Confident Kitchen Labs:** Students arrive at the physical cooking practicum already familiar with how the finished dish should look, where garnishes belong, and proper portion proportions.
* **Classroom-Ready:** Delivered as a lightweight mobile app accompanied by a physical printed student workbook (*Modul Ajar Boga*).
