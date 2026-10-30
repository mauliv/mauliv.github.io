---
id: "post-pemilwa-concurrency"
title: "Why Native PHP Won at Pemilwa: Concurrency Engineering on Constrained Hardware"
slug: "native-php-concurrency-pemilwa"
role: "Lead Systems Architect & Developer"
period:
  start: "2020"
  end: "present"
tech_stack:
  - "PHP (Native)"
  - "PostgreSQL"
  - "Nginx"
  - "Linux"
  - "ACID Row Locking"
metrics:
  - label: "Election Uptime"
    value: "100% (Zero downtime across 5 consecutive annual election cycles)"
    provenance: "UNY Central Data Center Telemetry (2020–2025)"
  - label: "Electorate Scale"
    value: "39,725 eligible student voters across 8 faculties"
    provenance: "UNY Voter Telemetry"
  - label: "Peak Memory Footprint"
    value: "<8MB RAM per worker (vs 35MB+ in standard full-stack MVC frameworks)"
    provenance: "Linux PHP-FPM Process Telemetry"
  - label: "Concurrency Data Integrity"
    value: "0 double votes, 0 lost transactions, 0 recount disputes"
    provenance: "Official Plenary Audit Records"
live_url: "https://pemilwa.uny.ac.id"
archive_status: "live"
category: "architecture-post-mortem"
date: "2026-09"
reading_time_minutes: 8
summary: "An architectural post-mortem on deploying an institutional digital voting system for 39,725 students on shared on-premise hardware — and why bypassing heavy MVC frameworks in favor of lean Native PHP and database-level row locks (SELECT ... FOR UPDATE) guaranteed 100% uptime and zero race conditions under severe traffic spikes."
related_systems:
  - "sys-pemilwa"
tags:
  - "PHP"
  - "Concurrency"
  - "PostgreSQL"
  - "Systems Architecture"
  - "Database Transactions"
  - "High Availability"
provenance_source: "career-archive.md:52-56; pemilwa-architecture-spec; election-telemetry:2020-2025"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Production PostgreSQL cluster at UNY central data center. Synthesizes high-level architectural patterns. All database schemas, identifiers, and pseudo-code in this document are generic illustrative models to maintain production cybersecurity boundaries."
evidence:
  - type: "live"
    label: "Live E-Voting Platform"
    url: "https://pemilwa.uny.ac.id"
    is_internal: false
    status: "available"
  - type: "internal-pdf"
    label: "Pemilwa Concurrency Architecture Dossier"
    url: "/docs/systems/01-pemilwa-concurrency-dossier.pdf"
    is_internal: true
    status: "available"
---

> [!NOTE]
> *Security Disclosure Notice:* In accordance with operational security standards for live university infrastructure, specific internal database table names, schema topologies, and server configurations in this essay have been sanitized into generic architectural models.

Every autumn, Universitas Negeri Yogyakarta (UNY) conducts its annual democratic student elections (*Pemilwa*). For years, this meant physical paper ballots, crowded polling stations across eight faculties, long recount disputes, and immense logistical overhead.

In 2020, as Lead Systems Architect & Developer, I modernized this process into a secure, university-wide digital e-voting platform ([pemilwa.uny.ac.id](https://pemilwa.uny.ac.id)). 

When developers hear "modern web application," their default reflex is to choose a full-stack MVC framework: Laravel, Symfony, Next.js, or Django. For Pemilwa, I made the deliberate, contrarian decision to bypass heavy frameworks and engineer the platform in **lightweight Native PHP with direct PDO and database row-level locks**.

Over five consecutive election cycles (2020 through 2025), that architecture processed **39,725 eligible student voters with 100% uptime, zero race conditions, and zero recount disputes**.

Here is an architectural breakdown of why that choice was made, how concurrency was handled at the metal, and why framework minimalism is often the highest-performance engineering strategy for burst traffic.

![UNY Pemilwa Official E-Voting Platform](/images/pemilwa/01_landing_page.png)
*Figure 1: The official UNY Pemilwa e-voting platform landing page, routing 39,725 students into an atomic single-page voting booth.*

---

## 1. The Operational Constraint: High Stakes and Severe Spikes

In enterprise SaaS, traffic is generally distributed, and temporary degradations can be mitigated with background retry queues. In student elections, the operational parameters are strictly bounded:

* **Strict 10-Hour Window:** Voting opens at 08:00 WIB and closes strictly at 18:00 WIB. All 39,725 students must cast their ballots within this single window.
* **Violent Concurrency Surges:** Traffic is heavily front-loaded and back-loaded: an opening rush at 08:00 WIB as student political coalitions mobilize, followed by a severe panic rush in the final 45 minutes before polls close.
* **Bounded On-Premise Infrastructure:** Hosted on campus servers in the university data center. Without elastic public cloud scaling, the application was bounded by fixed CPU and memory allocations.
* **Zero Political Tolerance for Downtime:** Competing student political coalitions and independent election oversight bodies monitor availability minute-by-minute. If a server throws `502 Bad Gateway` during peak voting, it is immediately perceived as political manipulation or intentional voter disenfranchisement. Uptime is not just a performance metric — it is a requirement for institutional trust.

The system had to be structurally incapable of dropping transactions, crashing under bursts, or permitting duplicate votes.

---

## 2. The MVC Framework Trap: The Cost of Modern Abstractions

Why not use a standard framework like Laravel? 

Under ordinary web workloads, full-stack MVC frameworks provide tremendous productivity. But under a sudden burst of thousands of concurrent requests hitting fixed on-premise hardware, the runtime cost of framework abstractions becomes a bottleneck:

```
[ Incoming HTTP Request ]
           │
           ▼
[ Framework Bootstrap Lifecycle ]
├── Class Loading: Resolving & registering dozens of class files per request
├── Service Container: Bootstrapping Service Providers & Dependency Injection trees
├── Middleware Pipeline: Session initialization, CSRF checks, routing trees, cookie serialization
└── ORM Hydration: Active Record / ORMs creating heavy object instances for relational data
           │
           ▼
[ ~15MB–35MB RAM Allocated per Worker · 25ms–40ms CPU Overhead ]
(Expended before core transactional logic begins)
```

Consider the process concurrency math on an 8GB RAM server:
* **Memory Saturation:** When a framework request requires 15MB–35MB of RAM, 100 concurrent PHP-FPM workers consume 2.5GB–3.5GB of memory just for framework scaffolding.
* **Worker Queue Backlog:** Under sudden traffic surges, available worker processes saturate almost instantly. Incoming requests pile up in the web server backlog, memory pressure leads to disk swapping, and users encounter timeout errors.

### The Lean Native Strategy

By writing direct, modular Native PHP:
1. **Low Memory Footprint:** Each worker process uses **less than 8MB of RAM** (often under 2MB for voting submissions), allowing a standard VM to comfortably run hundreds of concurrent workers without memory exhaustion.
2. **Bytecode Caching (OPcache):** On election day, OPcache validation is locked into memory (`opcache.validate_timestamps=0`). The pre-compiled bytecode executes directly from shared RAM with zero filesystem reads.
3. **Sub-5ms Execution Latency:** Without container bootstrapping, total execution time per request drops to **2ms–4ms**. Requests commit their database transactions and terminate almost instantly, returning workers to the pool to process queued submissions without lag.

```
[ Lean Native Execution Model ]
├── Direct procedural script execution (zero dependency resolution)
├── Bytecode served directly from OPcache shared memory
└── Persistent socket connection to PostgreSQL
           │
           ▼
[ <2MB RAM Allocated · 2ms–4ms Execution Time ]
(Thousands of transactions cleared smoothly per minute)
```

---

## 3. Eliminating Race Conditions: Transactional Row Locking

The most catastrophic failure mode in digital voting is a **double-voting race condition**.

In naïve web applications, eligibility checks are performed at the application layer:

```
[ Voter Request A ] ──► (Check: has_voted == 0?) ──► YES ──► Write Ballot ──► Mark Voted
[ Voter Request B ] ──► (Check: has_voted == 0?) ──► YES ──► Write Ballot ──► Mark Voted
                                  ▲
                       [ TIME-OF-CHECK / TIME-OF-USE GAP ]
```

If a student triggers two concurrent requests (for example, double-clicking on a sluggish connection or opening two browser tabs), both requests can read an "unvoted" status before either writes the update. Both requests proceed to cast a ballot, corrupting the election.

### The Architectural Solution: Pessimistic Row Locking (`FOR UPDATE`)

To guarantee data integrity, state validation must be enforced directly at the database engine level using atomic transactions and row-level serialization:

```sql
-- CONCEPTUAL ARCHITECTURAL PATTERN: Atomic State Serialization
BEGIN;

-- 1. Exclusively lock the voter record. Any concurrent transaction for this voter waits here.
SELECT voter_status FROM voter_registry WHERE voter_id = :id FOR UPDATE;

-- 2. Verify eligibility inside the locked state
-- (If already voted, rollback and terminate immediately)

-- 3. Transition voter state atomically
UPDATE voter_registry SET voter_status = 'VOTED', voted_at = NOW() WHERE voter_id = :id;

-- 4. Insert decoupled anonymous ballots across all eligible governance tiers
INSERT INTO anonymous_ballot_tier_1 (candidate_id) VALUES (:choice1);
INSERT INTO anonymous_ballot_tier_2 (candidate_id) VALUES (:choice2);

-- 5. Record cryptographic audit receipt
INSERT INTO election_audit_ledger (session_hash, timestamp) VALUES (:hash, NOW());

COMMIT;
```

### Why this holds under heavy concurrency:
* **Row-Level Granularity:** PostgreSQL’s Multi-Version Concurrency Control (MVCC) locks **only the individual row** of the specific student submitting their ballot. While Voter A’s row is locked for 3 milliseconds, Voter B from another faculty submits in parallel with zero contention.
* **Deterministic Serialization:** If duplicate requests for the same voter arrive simultaneously, the second request pauses at the row lock until the first transaction commits. When the second request acquires the lock, it observes the updated state, rolls back, and exits cleanly.

---

## 4. Cryptographic Anonymity: Decoupling Identity from Secret Ballots

A core principle of democratic elections is the **secret ballot**: the system must verify that an eligible voter votes exactly once, but it must be mathematically impossible for anyone — including database administrators — to link a voter to their candidate choices.

The database architecture decouples identity from ballot storage across separate logical domains:

```
[ Voter State Registry ]                [ Anonymous Ballot Store ]
• Voter Identity & Faculty              • Candidate Selections Only
• Eligibility Status Flag               • Non-sequential Arbitrary IDs
• Timestamp of Participation            • ZERO Foreign Keys or User Identifiers
          │                                        │
          └──────────────────┬─────────────────────┘
                             ▼
              [ Cryptographic Audit Log ]
              • SHA-256 Hashed Telemetry
              • Validates tally totals against turnout
              • Zero link between voter and choice
```

1. **Voter State Registry:** Records student enrollment and voting eligibility. It verifies *that* a student voted and *when*, but contains no reference to which candidates were selected.
2. **Anonymous Ballot Store:** Isolated tables storing candidate selections with non-correlative IDs. There are zero foreign keys, user references, or session tokens linking these records back to the voter registry.
3. **Audit Ledger:** Stores cryptographic session hashes and timestamps for post-election reconciliation, ensuring the number of ballots cast exactly matches the number of voters marked as participated.

Even with full superuser read access to the database, candidate selections cannot be reverse-engineered to identify individual students.

---

## 5. The Unified 5-Tier Single-Page Ballot Architecture

An institutional university election comprises multiple concurrent governance races:

1. **University Student Senate:** Faculty-level legislative representation.
2. **Student Government President:** Campus-wide universal executive presidential ticket.
3. **Faculty Student Council:** Faculty legislative council.
4. **Faculty Student Board:** Faculty executive board.
5. **Department Student Association:** Academic study program leadership.

### Why Multi-Step Wizards Fail

Legacy systems often divided these races across multi-step wizard screens. If a student's cellular network dropped mid-way, the session was left corrupted — part of their ballots were recorded, but they were locked out before finishing the remaining races.

### The Single-Page Atomic Solution

I re-engineered the voting booth as a **unified single-page responsive ballot**:
* The system evaluates the voter’s verified enrollment against institutional curriculum records, dynamically generating all five eligible races on a single screen.
* Uncontested races (*aklamasi*) display clear informational notices rather than breaking form validation.
* Voters make all selections on one screen and submit their complete ballot with a **single atomic confirmation**.
* Either all ballots commit inside the database transaction, or none do. If a connection drops prior to submission, no vote is recorded, and the student can re-authenticate to complete their vote.

---

## 6. The Dual-Key Authorization Protocol: Institutional Trust

In physical elections, trust is maintained through physical ritual: ballot boxes are inspected in public, sealed with padlocks, and opened only during the evening plenary session in front of witnesses.

In a digital election, how do you prevent suspicions that tallies are being watched or manipulated before polls close?

I engineered a **Dual-Key "Digital Ballot Box Unlocking" Protocol**:

```
[ Voting Window: 08:00 - 18:00 WIB ]
├── Candidate tallies remain cryptographically sealed
└── Public screen streams only aggregate voter turnout percentages
           │
           ▼ (18:00 WIB: Polls Close)
[ Public Plenary in University Auditorium ]
├── Key 1: Entered by Election Commission (KPU)
├── Key 2: Entered by Independent Oversight Board (BAWASLU)
           │
           ▼
[ Real-Time Decryption & Automated Plenary Projection ]
```

![Real-time Faculty Turnout](/images/pemilwa/02_live_count_fakultas.png)
*Figure 2: Real-time voter turnout percentage per faculty, streamed during election day to monitoring screens without exposing secret ballot choices.*

* **Sealed Tabulation:** While voting is active, candidate totals remain sealed. The public dashboard displays only turnout percentages by faculty, providing live operational visibility without disclosing candidate margins.
* **Dual Secret Passphrases:** Access to the tabulation module requires two independent cryptographic keys: one held by the **Election Commission (KPU)**, and one held by the independent **Election Oversight Board (BAWASLU)**. Neither body can unlock the results independently.
* **Public Live Decryption:** At 18:00 WIB during the public plenary, both chairs enter their passphrases simultaneously into the live plenary terminal. The dashboard verifies both keys, computes the official vote tallies, and projects comparative charts onto the auditorium screen in real time.

![Election Results Dashboard](/images/pemilwa/03_rekap_split_columns.png)
*Figure 3: Official candidate results dashboard projected during the public plenary once the dual-key authorization is authenticated.*

---

## 7. Results and Systems Engineering Lessons

Over five consecutive annual election cycles (2020 through 2025):
* **100% Service Availability:** Zero minutes of server downtime and zero dropped transactions across 39,725 registered students.
* **Zero Race Conditions:** Database-level row locking completely eliminated concurrency exploits and duplicate vote attempts.
* **Zero Recount Disputes:** The combination of single-page atomic submissions, tamper-evident audit logging, and dual-key plenary unlocking earned the formal trust of university leadership, faculty deans, and student governing bodies.

### Key Architectural Takeaways:

1. **Design from the hardware outward, not from framework hype inward.**  
   Framework abstractions offer rapid prototyping, but carry non-trivial runtime overhead. Under severe burst concurrency on bounded hardware, choosing a lean execution model ensures rock-solid stability.
2. **The database engine is the true arbiter of concurrency.**  
   Never rely on application-level logic to prevent race conditions. Push state serialization into the database layer with atomic transactions and explicit row-level locks (`SELECT ... FOR UPDATE`).
3. **Engineering trust requires aligning code with institutional governance.**  
   Software reliability alone does not create institutional trust. Designing cryptographic and multi-party procedural checks — like the Dual-Key unlocking module — turns an opaque digital platform into a transparent, verifiable democratic process.
