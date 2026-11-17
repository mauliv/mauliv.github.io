import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Global base fields — mirrors research/opencode/content-model.md §1.
// `collection` omitted: Astro exposes entry.collection automatically.

const evidenceItem = z.object({
  type: z.enum(['internal-pdf', 'journal', 'hki', 'external-press', 'video', 'live', 'repository']),
  label: z.string().min(1),
  url: z.string().min(1),
  is_internal: z.boolean(),
  status: z.enum(['available', 'needs-confirmation', 'restricted']),
});

const base = {
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  summary: z.string().optional(),
  excerpt: z.string().optional(),
  institution_logo: z.string().optional(),
  project_logo: z.string().optional(),
  role: z.string().min(1),
  period: z.object({
    start: z.string().regex(/^\d{4}(-\d{2})?$/),
    end: z.string().regex(/^\d{4}(-\d{2})?$|^present$/),
  }),
  tech_stack: z.array(z.string().min(1)).min(1),
  metrics: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.string().min(1),
        provenance: z.string().min(1),
      }),
    )
    .default([]),
  live_url: z.string().url().nullable().default(null),
  archive_status: z.enum(['live', 'archived', 'restricted', 'demo-only']),
  provenance_source: z.string().min(1),
  privacy_level: z.enum(['public', 'anonymized', 'internal-only']),
  epistemic_status: z.enum(['verified-fact', 'interpretation', 'needs-confirmation']),
  verification_notes: z.string().default(''),
  evidence: z.array(evidenceItem).default([]),
};

// The `systems` collection holds two content families (post Phase 17 regroup):
// production web platforms and AR/EdTech builds. Strict shapes, union-ed.
const systemShape = z
  .object({
    ...base,
    architecture_type: z.enum(['native', 'mvc-framework', 'cms', 'headless']),
    database: z.object({
      local_development: z.string(),
      production_cluster: z.string(),
      concurrency_mechanism: z.string(),
    }),
    security_profile: z.object({
      auth_provider: z.string(),
      network_perimeter: z.string(),
      audit_logging: z.string().optional(),
    }),
  })
  .strict();

const arShape = z
  .object({
    ...base,
    engine: z.string().min(1),
    xr_sdk: z.string().optional(),
    target_platform: z.string().min(1),
    physical_artifacts: z.array(z.string()).default([]),
    pedagogical_framework: z.string().min(1),
    empirical_evaluation: z
      .object({
        method: z.string(),
        trial_site: z.string(),
        statistical_outcome: z.string(),
      })
      .optional(),
    intellectual_property: z
      .array(
        z.object({
          title: z.string().optional(),
          type: z.string(),
          number: z.string(),
          issuing_body: z.string(),
          url: z.string().url().optional(),
        }),
      )
      .default([]),
    publications: z
      .array(
        z.object({
          journal: z.string(),
          volume: z.string(),
          date: z.string(),
          focus: z.string(),
        }),
      )
      .default([]),
    grants_and_honors: z.array(z.string()).default([]),
  })
  .strict();

const systems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/systems' }),
  schema: z.union([systemShape, arShape]),
});

const operations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/operations' }),
  schema: z.union([
    // The International Office dossier
    z
      .object({
        ...base,
        mandate_type: z.string(),
        decree_records: z.object({
          status: z.string(),
          verification: z.string(),
        }),
        functional_domains: z.array(z.string()).min(1),
        regulatory_frameworks: z.array(z.string()).default([]),
        delegations_hosted: z.array(z.string()).default([]),
        delegation_partnerships: z
          .object({
            core_recurring: z
              .array(
                z.object({
                  institution: z.string().min(1),
                  location: z.string().min(1),
                  batches: z.number().int().positive(),
                  institution_logo: z.string().optional(),
                }),
              )
              .default([]),
            bilateral: z
              .array(
                z.object({
                  institution: z.string().min(1),
                  location: z.string().min(1),
                  evidence: z.array(evidenceItem).default([]),
                }),
              )
              .default([]),
          })
          .optional(),
        scholarship_programs_supported: z.array(z.string()).default([]),
      })
      .strict(),
    // Flagship International Events (parent page: /international)
    z
      .object({
        ...base,
        event_type: z.enum(['cultural-festival', 'partnership-forum', 'symposium', 'conference']),
        committee_role: z.string().min(1),
        host_institution: z.string().min(1),
        location: z.string().min(1),
        venue: z.string().optional(),
        theme: z.string().optional(),
        tiered_committee: z
          .object({
            steering: z.string(),
            operational: z.string(),
          })
          .optional(),
      })
      .strict(),
    // Exchange / mobility programs (parent page: /international)
    z
      .object({
        ...base,
        program_type: z.enum(['in-person', 'virtual']),
        flag: z.string().optional(),
        host_institution: z.string().min(1),
        location: z.string().min(1),
        selection_context: z.string().optional(),
      })
      .strict(),
  ]),
});

const credentials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/credentials' }),
  schema: z.union([
    // Degrees, licences, certifications, tests, awards
    z
      .object({
        ...base,
        credential_type: z.enum(['degree', 'license', 'certification', 'ip', 'grant', 'test', 'mobility', 'internship', 'award', 'course']),
        institution: z.string().optional(),
        conferred_date: z.string().optional(),
        gpa: z.string().optional(),
        thesis_title: z.string().optional(),
        issuing_body: z.string().optional(),
        validity: z.string().optional(),
        standardized_scores: z
          .array(
            z.object({
              exam: z.string(),
              score: z.string(),
              date: z.string(),
            }),
          )
          .default([]),
        professional_licenses: z
          .array(
            z.object({
              title: z.string(),
              issuing_body: z.string(),
              validity: z.string(),
            }),
          )
          .default([]),
      })
      .strict(),
    // Leadership & grants entries (parent section: Credentials -> Leadership & Impact)
    z
      .object({
        ...base,
        organization: z.string().min(1),
        leadership_scope: z.object({
          divisions_managed: z.number().int().positive().optional(),
          focus_areas: z.array(z.string()).default([]),
        }),
        competitive_achievements: z
          .array(
            z.object({
              title: z.string(),
              category: z.string(),
              issuing_body: z.string(),
              date: z.string(),
            }),
          )
          .default([]),
        community_and_grants: z
          .array(
            z.object({
              title: z.string(),
              amount: z.string().optional(),
              target: z.string().optional(),
              issuing_body: z.string(),
            }),
          )
          .default([]),
      })
      .strict(),
  ]),
});

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z
    .object({
      ...base,
      category: z.enum(['architecture-post-mortem', 'edtech-didactics', 'institutional-systems']),
      date: z.string().regex(/^\d{4}(-\d{2})?$/),
      reading_time_minutes: z.number().int().positive(),
      summary: z.string().min(1),
      related_systems: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
    })
    .strict(),
});

// Testimonials: lean schema (not the full base) — placeholder-safe by design.
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z
    .object({
      name: z.string().min(1),
      initials: z.string().min(1).max(3),
      role: z.string().min(1),
      company: z.string().min(1),
      quote: z.string().min(1),
      related_project_slug: z.string().optional(),
      is_placeholder: z.boolean().default(true),
      date: z.string().optional(),
    })
    .strict(),
});

// Press: articles about the candidate (News page). Not a career entry — no detail route.
const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z
    .object({
      title: z.string().min(1),
      publisher: z.string().min(1),
      language: z.string().optional(),
      date: z.string().regex(/^\d{4}(-\d{2})?(-\d{2})?$/),
      url: z.string().url(),
      related_project_slug: z.string().optional(),
      related_project_slugs: z.array(z.string()).optional(),
      summary: z.string().optional(),
      pending: z.boolean().default(false),
    })
    .strict(),
});

export const collections = { systems, operations, credentials, writings, testimonials, press };
