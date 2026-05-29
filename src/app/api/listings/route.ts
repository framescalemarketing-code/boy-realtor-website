import { NextResponse } from "next/server";
import { mockListings } from "@/lib/listings/mock";

/**
 * Listings API — stub for future IDX integration.
 * Replace the mock return with your IDX vendor's RESO/REST API when ready.
 */
export async function GET() {
  // TODO: When IDX is configured, call vendor API here using:
  // process.env.IDX_API_KEY, IDX_CLIENT_ID, IDX_API_URL, etc.
  return NextResponse.json(mockListings);
}
