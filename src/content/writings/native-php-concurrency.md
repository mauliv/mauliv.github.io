---
id: "post-pemilwa-concurrency"
title: "Why Native PHP Won at Pemilwa: Concurrency Engineering on Constrained Hardware"
slug: "native-php-concurrency-pemilwa"
role: "Systems Architect"
period:
  start: "2020"
  end: "present"
tech_stack:
  - "PHP (Native)"
  - "PostgreSQL"
  - "MySQL"
  - "Nginx"
metrics:
  - label: "Election Uptime"
    value: "Zero downtime across multi-year election cycles"
    provenance: "career-archive.md:203"
live_url: null
archive_status: "live"
category: "architecture-post-mortem"
date: "2026-09"
reading_time_minutes: 6
summary: "An engineering breakdown of why bypassing full-stack MVC frameworks and writing raw PHP with database row-locking allowed university elections to survive concurrency bursts with zero downtime."
related_systems:
  - "sys-pemilwa"
tags:
  - "PHP"
  - "Concurrency"
  - "PostgreSQL"
  - "Architecture"
provenance_source: "identity-framings.md:38-56; career-archive.md:52-56"
privacy_level: "public"
epistemic_status: "interpretation"
verification_notes: "Original technical essay synthesizing documented architecture decisions; no institutional internals disclosed."
evidence:
  - type: "live"
    label: "System in Production"
    url: "https://pemilwa.uny.ac.id"
    is_internal: false
    status: "available"
---

## The Constraint

Election day concentrates an entire university's voting into short bursts on shared on-premise hardware. The failure mode is not average load — it is the spike.

## The Choice

Native PHP instead of a heavy MVC framework: no ORM hydration, no middleware stack, no container bootstrapping between the request and the row lock. Every millisecond of framework overhead was a millisecond of exposure during peak concurrency.

## The Mechanism

Transactional row-locking at the database layer — the only place where ballot integrity can actually be guaranteed. MySQL locally for development parity; PostgreSQL in production on the central cluster, with dialect adjustments for transaction semantics.

## The Lesson

Pragmatism over hype: the architecture was chosen from the hardware outward, not from the trend inward. The system has run every annual election since 2020 with zero downtime.
