import { getCollection, type CollectionEntry } from 'astro:content';
import { resolveProject, type ProjectRef } from './relations';

export type Testimonial = CollectionEntry<'testimonials'>;
export type { ProjectRef };

/**
 * Invariant defense (Antislop F-02, ADR-0001):
 * Placeholders NEVER render anywhere on the site as cards or quotes.
 * `isPublished` strictly requires `is_placeholder !== true`.
 */
export function isPublished(t: Testimonial): boolean {
  return t.data.is_placeholder !== true;
}

/** All published testimonials, newest first (undated entries last). */
export async function publishedTestimonials(): Promise<Testimonial[]> {
  const all = await getCollection('testimonials');
  return all
    .filter(isPublished)
    .sort((a, b) => (b.data.date ?? '').localeCompare(a.data.date ?? ''));
}

/** Published endorsements attached to a project slug — the project-page join. */
export async function testimonialsFor(slug: string): Promise<Testimonial[]> {
  const all = await getCollection('testimonials');
  return all.filter((t) => isPublished(t) && t.data.related_project_slug === slug);
}

/** Re-exported for callers that resolve project links. */
export { resolveProject } from './relations';
