---
id: "mob-fpt-mobile-2020"
title: "Online Technology Skills Training: Mobile Programming (FPT University)"
slug: "fpt-mobile-programming-2020"
project_logo: "/logos/uny.svg"
institution_logo: "/logos/fpt.jpg"
summary: "10-week intensive international virtual mobility program with FPT University Global (Vietnam) & FUNiX, mastering Android native architecture, UI lifecycles, SQLite persistence, and asynchronous networking across four verified production apps."
excerpt: "Completed 10-week virtual technology exchange under course PRM391x_02-A_EN, delivering 17 lesson modules, 4 hands-on applications (Quiz App, Tour Guide, Alarm Clock, Shop Movies), and SeaDev industry product workshops with an 8.4/10 final evaluation mark."
role: "Participant / Mobile Engineering Fellow"
period:
  start: "2020-07"
  end: "2020-09"
tech_stack:
  - "Java (Android SDK)"
  - "Android Studio"
  - "Activity & Fragment Lifecycles"
  - "SQLite & Content Providers"
  - "Broadcast Receivers & Services"
  - "Async Networking & REST APIs"
  - "Google Play Release Workflow"
metrics:
  - label: "Curriculum Completion"
    value: "100% (17/17 technical lesson quizzes completed)"
    provenance: "fpt-summary-report:PRM391x_02-A_EN"
  - label: "Hands-on Application Projects"
    value: "4 production apps delivered (Quiz, Tour Guide, Alarm Clock, Shop Movies)"
    provenance: "fpt-summary-report:assignment-projects"
  - label: "Course Final Grade"
    value: "8.4 / 10.0 (Grade: Complete, Certificate Conferred)"
    provenance: "certificate-le-minh-duc-hoang-van-cuong:2020-09-20"
  - label: "Academic Articulation"
    value: "Cross-credited to Mobile & Cloud Computing (UNY MBKM Framework)"
    provenance: "laporan-kegiatan-fpt-2021:hal-pengesahan-uny"
live_url: null
archive_status: "archived"
program_type: "virtual"
flag: "/flags/vn.svg"
host_institution: "FPT University Global & FUNiX (FPT Corporation)"
location: "Hanoi, Vietnam (Virtual Exchange)"
selection_context: "Selected under UNY Merdeka Belajar (MBKM) international skills development initiative"
provenance_source: "Laporan Kegiatan Program Pelatihan Online Technology Skills Training FPT University (UNY FT 2021); FPT University Certificate of Completion (2020-09-20)"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Endorsed by UNY Faculty of Engineering Deanery and Vice Rector of Planning & Cooperation. Certificate of Completion issued by CEO of FUNiX and Dean of FPT University Global."
evidence:
  - type: "internal-pdf"
    label: "FPT Program Certificate (PDF)"
    url: "/docs/mobility/fpt-mobile-programming-2020.pdf"
    is_internal: true
    status: "available"
---

## 1. Executive Summary & Program Architecture

The **Online Technology Skills Training: Mobile Programming** was an intensive 10-week international virtual exchange hosted by **FPT University Global** in partnership with **FUNiX** (the digital education arm of Vietnam's leading technology conglomerate, FPT Corporation). Running from **July 18, 2020 to September 20, 2020**, the program provided rigorous, production-grade training in native Android mobile software engineering for selected international students.

Administered under course code **`PRM391x_02-A_EN`**, the curriculum merged self-paced technical modules with active faculty mentorship, scheduled code reviews, bilateral cultural exchange sessions, and direct industry workshops hosted by engineering leaders from **SeaDev** (Southeast Asia Development). 

The program was formally integrated into Universitas Negeri Yogyakarta's academic pathway through the **Merdeka Belajar – Kampus Merdeka (MBKM)** framework (Peraturan Rektor UNY No. 5 Tahun 2020), transferring core competencies directly into advanced coursework in *Mobile and Cloud Computing Architecture* (TIN6136 / TIN6237) and *Mobile Application Development* (TIN6145 / TIN6246).

---

## 2. Technical Curriculum & Core Engineering Modules

The coursework spanned five progressive phases, taking candidates from fundamental Android OS architecture to distributed network requests and release engineering:

### Part 1 — Android OS Runtime & Development Environment
- **Operating System Foundations**: Understanding the Android software stack (Linux Kernel, Hardware Abstraction Layer, Android Runtime/ART, Native C/C++ Libraries, Java API Framework).
- **Environment & Build Tools**: Development environment setup using Android Studio, Gradle build script configuration, SDK build tools, and hardware virtualization via Android Virtual Device (AVD) emulators.
- **Application Structure**: Deep dive into `AndroidManifest.xml` declaration, permission models, resource bundling (`res/values`, `res/layout`), and the compilation lifecycle from bytecode to DEX (Dalvik Executable) files.

### Part 2 — UI Hierarchy, Widget Controls & Activity Lifecycles
- **Activity State Machine**: Mastering transition hooks (`onCreate`, `onStart`, `onResume`, `onPause`, `onStop`, `onDestroy`) and state preservation across configuration events (e.g., screen orientation changes and process recreation).
- **Layout Architecture**: Constructing fluid and responsive user interfaces using nested `LinearLayout`, relational coordinate alignment with `RelativeLayout`, and flattened view trees via `ConstraintLayout`.
- **UI Componentry**: Designing accessible user inputs utilizing `TextView`, `EditText`, `Button`, `RadioGroup`, `CheckBox`, and dynamic data adapter binding with `Spinner` and list elements.

### Part 3 — Event Handling, Custom Components, Intents & Dynamic Fragments
- **Event-Driven Architecture**: Implementation of asynchronous UI listeners (`OnClickListener`, `OnTouchListener`), custom compound views, and user event dispatching.
- **Inter-Component Messaging**: Coordinating system navigation through **Intents**:
  - *Explicit Intents*: Direct transitions between internal activities passing serialized key-value pairs via `Bundle` extras.
  - *Implicit Intents & Intent Filters*: Delegating actions (camera, phone dialer, external browser routing) to external apps adhering to MIME types and action categories.
- **Modular Fragment Architecture**: Decoupling presentation logic into reusable **Fragments**, controlling dynamic layout transitions using `FragmentManager` and `FragmentTransaction`, back-stack transaction management, and adaptive two-pane layouts for tablets and landscape displays.

### Part 4 — System Services, Background Broadcasts & SQLite Data Persistence
- **Android Services**: Implementing non-visual background processing for long-running computational tasks, handling Service lifecycles (`startService` vs. `bindService`), and background execution boundaries.
- **Broadcast Receivers**: Registering dynamic and manifest-declared broadcast listeners to react to system triggers (network status toggles, boot completion) and custom intra-application broadcast events.
- **Content Providers**: Architectural principles for securely sharing structured application data across sandbox boundaries.
- **Embedded Relational Persistence (SQLite)**: Structuring local offline storage via `SQLiteOpenHelper`. Implementing schema migrations, indexed query performance, parameterized transactions, and robust CRUD (Create, Read, Update, Delete) operations.

### Part 5 — Location APIs, Asynchronous Networking & Production Release
- **Location-Based Services (LBS)**: Integrating Google Play Services Location API to obtain fused GPS coordinates, geocoding addresses, and requesting runtime hardware permissions (`ACCESS_FINE_LOCATION`).
- **Concurrency & Multithreading**: Utilizing `AsyncTask` to dispatch background threads for network I/O and heavy computations, preventing Application Not Responding (ANR) errors and ensuring smooth 60 FPS UI rendering.
- **HTTP Networking & REST APIs**: Establishing network sockets via `HttpURLConnection`, consuming RESTful web endpoints, handling HTTP response codes, and deserializing JSON payloads into strongly typed domain models.
- **Release Engineering & Play Store Deployment**: Configuring ProGuard code obfuscation and resource shrinking, generating signed release APKs using production cryptographic keystores, and adhering to Google Play Developer Console publishing guidelines.

---

## 3. Graded Hands-on Projects Portfolio

To achieve formal certification, candidates were required to build, test, and submit four standalone production-grade Android applications evaluated by FPT faculty:

| Project | Technical Focus | Implementation Highlights |
| :--- | :--- | :--- |
| **1. Quiz App** | Dynamic UI Controls & State | Stateful question flow, dynamic scoring calculation, and selection input validation. |
| **2. Tour Guide App** | Fragment Architecture & Routing | Multi-tab ViewPager navigation, modular Fragment lifecycles, and implicit Intent location mapping. |
| **3. Alarm Clock** | Background Processing & Scheduling | Android `AlarmManager` integration, background `BroadcastReceiver` wake hooks, and SQLite alarm storage. |
| **4. Shop Movies** | REST APIs & Relational Storage | Asynchronous HTTP networking (`AsyncTask`), remote JSON parsing, and offline SQLite media catalog caching. |

1. **Project 1 — Interactive Quiz App**:
   - Built an interactive educational quiz engine featuring dynamic question state transitions, randomized options, and real-time score tracking.
   - Leveraged `RadioGroup` and `RadioButton` listeners with rigorous edge-case handling to prevent unanswered submissions and invalid state loops.

2. **Project 2 — Tour Guide App**:
   - Engineered a multi-category city tourism discovery platform utilizing modular `Fragments` embedded within a tabbed `ViewPager` navigation system.
   - Implemented rich media cards and explicit/implicit `Intents` to open geographical locations directly inside native mapping applications.

3. **Project 3 — Background Alarm Clock App**:
   - Developed a time-critical scheduler combining Android's native `AlarmManager` with custom `BroadcastReceiver` hooks to guarantee reliable alarm firings even after the main application process was killed by the OS.
   - Built a local `SQLite` persistence layer storing customizable alarm configurations, recurring frequency patterns, and custom audio alert selections.

4. **Project 4 — Shop Movies Commercial App**:
   - Created an end-to-end commercial movie browsing and purchasing application consuming live remote movie metadata via background asynchronous HTTP requests (`AsyncTask`).
   - Integrated offline database caching in `SQLite` to enable full catalog browsing under intermittent network conditions, accompanied by dynamic poster thumbnail hydration.

---

## 4. Industry Mentorship & Professional Immersion

Beyond self-paced laboratory exercises, the program incorporated active mentorship and industry immersion:

- **Dedicated Faculty Mentorship**: Weekly progress tracking, code reviews, and structured Q&A consultations with FPT University mentors (Ms. Nguyen Thi Ut and Ms. Hannah Quỳnh Mai), ensuring milestone deadlines were met without technical roadblocks.
- **Industry Product Workshop (SeaDev)**: Attended a dedicated technical workshop on **August 12, 2020** delivered by senior product engineers from **SeaDev** (a multinational software engineering agency operating across Southeast Asia and the US). The session covered agile sprint delivery, commercial product roadmapping, and mobile deployment pipelines.
- **Bilateral Cultural Exchange**: Participated in bilateral cultural exchange forums connecting Indonesian fellows with Vietnamese students, presenting comparative cultural perspectives and building international collaboration skills.

---

## 5. Academic Articulation & Downstream Systems Impact

Participating in the FPT mobile programming fellowship provided foundational technical fluency that immediately accelerated subsequent engineering initiatives:

1. **University Curriculum Articulation**:
   - Formally documented and validated in the Deanery Activity Report (*Laporan Kegiatan Program Pelatihan Online Technology Skills Training FPT University*, UNY FT 2021).
   - Provided prerequisite mastery in software design patterns, multithreaded architecture, and database transactions for advanced undergraduate courses:
     - *Mobile and Cloud Computing Architecture (TIN6136 / Practicum TIN6237)*
     - *Mobile Application Development (TIN6145 / Practicum TIN6246)*

2. **Direct Bridge to Production Engineering**:
   - The architectural discipline gained from managing Android lifecycles, SQLite transactional integrity, and asynchronous networking directly informed the design of UNY's mission-critical **Pemilwa E-Voting platform** (native concurrency, zero-downtime database row locks) deployed immediately in late 2020.
   - Served as the technical stepping stone toward subsequent mobile AR development on Unity/C#, leading to the dual-copyrighted **Plant Escape AR** and **AR Kitchen** spatial educational applications.

---

## 6. Official Verification & Completion Record

| Evaluation Area | Program Requirement | Candidate Achievement | Status |
| :--- | :--- | :--- | :---: |
| **Lesson Quizzes** | 17 technical modules | 17 / 17 completed | **100% Passed** |
| **Graded Projects** | 4 standalone applications | 4 / 4 evaluated | **100% Delivered** |
| **Technical Mentorship** | 8 milestone Q&As | 8 / 8 sessions attended | **100% Complete** |
| **Final Grade** | Passing threshold | **8.4 / 10.0** | **Certified Complete** |

- **Official Certificate of Completion**: Authorized and conferred on **September 20, 2020** by **Le Minh Duc** (Chief Executive Officer, FUNiX) and **Hoang Van Cuong** (Dean, FPT University Global).
- **Institutional Endorsement**: Approved and signed on **February 5, 2021** by **Prof. Herman Dwi Surjono, Ph.D.** (Dean of the Faculty of Engineering, UNY) and **Dr. rer. nat. Senam** (Vice Rector of Planning & Cooperation, UNY).
