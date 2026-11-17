import { getCollection } from 'astro:content';
import { detailCollections, entryHref, type CollectionId } from './routes';

export interface ProjectRef {
  title: string;
  href: string;
}

/** Resolve an entry slug to its title + URL. Slugs are globally unique (33/33). */
export async function resolveProject(slug: string): Promise<ProjectRef | null> {
  for (const c of detailCollections) {
    const entries = await getCollection(c);
    const hit = entries.find((e) => e.data.slug === slug);
    if (hit) return { title: hit.data.title, href: entryHref(c as CollectionId, slug) };
  }
  return null;
}

/**
 * Build guard for every related_project_slug in the site (press AND testimonials).
 * Throws inside `astro build` instead of silently dropping a reference.
 */
export async function assertRelationsResolve(): Promise<void> {
  const press = await getCollection('press');
  for (const p of press) {
    const slugs = [
      ...(p.data.related_project_slug ? [p.data.related_project_slug] : []),
      ...(p.data.related_project_slugs ? p.data.related_project_slugs : []),
    ];
    for (const slug of slugs) {
      const target = await resolveProject(slug);
      if (!target) {
        throw new Error(
          `Press article "${p.data.title}" has related project slug "${slug}", but no entry with that slug exists. Fix the slug in src/content/press/.`,
        );
      }
    }
  }
  const testimonials = await getCollection('testimonials');
  for (const t of testimonials) {
    const slug = t.data.related_project_slug;
    if (!slug) continue;
    const target = await resolveProject(slug);
    if (!target) {
      throw new Error(
        `Testimonial by "${t.data.name}" has related_project_slug "${slug}", but no entry with that slug exists. Fix the slug in src/content/testimonials/.`,
      );
    }
  }
}

/** Get all press coverage related to a given project/credential slug. */
export async function pressFor(slug: string) {
  const press = await getCollection('press');
  return press.filter((p) => {
    if (p.data.related_project_slug === slug) return true;
    if (p.data.related_project_slugs?.includes(slug)) return true;
    return false;
  });
}
