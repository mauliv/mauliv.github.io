// Phase 17 invariant: the URL segment, the parent index page, and the breadcrumb
// label are the same name. Never reintroduce a namespace without its index page.
export const collectionSegments = {
  systems: 'it',
  operations: 'international',
  credentials: 'credentials',
  writings: 'writing',
} as const;

export type CollectionId = keyof typeof collectionSegments;
export type UrlSegment = (typeof collectionSegments)[CollectionId];

export const detailCollections = [
  'systems',
  'operations',
  'credentials',
  'writings',
] as const satisfies readonly CollectionId[];

/** Segment -> the exact breadcrumb parent (label must match the index page h1). */
export const parentLabels: Record<CollectionId, { label: string; href: string }> = {
  systems: { label: 'IT', href: '/it' },
  operations: { label: 'International', href: '/international' },
  credentials: { label: 'Credentials', href: '/credentials' },
  writings: { label: 'Field notes', href: '/writing' },
};

export function entryHref(collection: CollectionId, slug: string): string {
  return `/${collectionSegments[collection]}/${slug}`;
}

/** Canonical index-page list — shared by the header Index disclosure and the homepage Index. */
export const siteIndex = [
  { href: '/it', label: 'IT', icon: 'it' },
  { href: '/international', label: 'International', icon: 'international' },
  { href: '/credentials', label: 'Credentials', icon: 'credentials' },
  { href: '/social-media', label: 'Social Media', icon: 'social' },
  { href: '/networks', label: 'IT Support & Networks', icon: 'networks' },
  { href: '/certificates', label: 'Certificates', icon: 'certificates' },
  { href: '/news', label: 'News', icon: 'news' },
  { href: '/publications', label: 'Publications', icon: 'publications' },
  { href: '/writing', label: 'Field notes', icon: 'writing' },
  { href: '/testimonials', label: 'Testimonials', icon: 'testimonials' },
] as const;
