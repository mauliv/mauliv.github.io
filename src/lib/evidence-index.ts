import { getCollection, type CollectionEntry } from 'astro:content';
import { detailCollections, entryHref, type CollectionId } from './routes';

export interface EvidencePillData {
  type: 'internal-pdf' | 'journal' | 'hki' | 'external-press' | 'video' | 'live' | 'repository';
  label: string;
  url: string;
  is_internal: boolean;
  status: 'available' | 'needs-confirmation' | 'restricted';
}

export interface EvidenceRow {
  collection: CollectionId;
  entry: CollectionEntry<CollectionId>;
  pill: EvidencePillData;
}

/** Flattens every evidence pill across all detail-routed collections, stable-ordered. */
export async function gatherEvidence(): Promise<EvidenceRow[]> {
  const rows: EvidenceRow[] = [];
  for (const collection of detailCollections) {
    const entries = await getCollection(collection);
    for (const entry of entries) {
      for (const pill of entry.data.evidence) {
        rows.push({ collection, entry, pill });
      }
    }
  }
  return rows;
}

export function relatedHref(row: EvidenceRow): string {
  return entryHref(row.collection, row.entry.data.slug);
}

const CERT_TYPES = new Set(['internal-pdf', 'hki']);
const CERT_CREDENTIAL_TYPES = new Set(['license', 'certification', 'test', 'degree']);

/** Rows shown on the /certificates document repository — single source for count + page. */
export async function certificatesRows(): Promise<EvidenceRow[]> {
  return (await gatherEvidence()).filter((r) => {
    if (CERT_TYPES.has(r.pill.type)) return true;
    const data = r.entry.data as Record<string, unknown>;
    const ct = typeof data.credential_type === 'string' ? data.credential_type : null;
    return ct !== null && CERT_CREDENTIAL_TYPES.has(ct);
  });
}
