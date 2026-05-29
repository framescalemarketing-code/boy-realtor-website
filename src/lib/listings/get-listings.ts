import type { Listing } from "@/lib/types/listing";
import { mockListings } from "./mock";

/**
 * Fetches listings for the site. Uses mock data until IDX is configured.
 * When IDX_API_KEY is set, this will call the internal API route instead.
 */
export async function getListings(): Promise<Listing[]> {
  const useIdx = Boolean(process.env.IDX_API_KEY);

  if (useIdx) {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/listings`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      return res.json() as Promise<Listing[]>;
    }
  }

  return mockListings;
}

export function filterListings(
  listings: Listing[],
  query: string,
  filter: "all" | "first-time" | "new",
): Listing[] {
  const normalizedQuery = query.trim().toLowerCase();

  return listings.filter((listing) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "first-time" && listing.tags.includes("first-time")) ||
      (filter === "new" && listing.isNew);

    if (!matchesFilter) return false;

    if (!normalizedQuery) return true;

    const searchable = `${listing.address} ${listing.city}`.toLowerCase();
    return searchable.includes(normalizedQuery);
  });
}
