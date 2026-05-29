# IDX / MLS integration guide

This site is built to swap mock listings for real MLS data when your individual-realtor IDX account is ready.

## Prerequisites

1. Active MLS membership through your brokerage
2. Signed IDX agreement with your MLS board
3. An IDX vendor approved by your MLS (e.g. IDX Broker, Showcase IDX, iHomefinder, RealSavvy)

## Environment variables

Add these in Vercel (or `.env.local` for development). **Never expose API keys in client-side code.**

| Variable | Required | Description |
|----------|----------|-------------|
| `IDX_API_KEY` | Yes | API key from your IDX vendor |
| `IDX_API_URL` | Yes | Base URL for the vendor REST/RESO API |
| `IDX_CLIENT_ID` | Maybe | OAuth client ID if vendor uses OAuth |
| `IDX_CLIENT_SECRET` | Maybe | OAuth secret (server-only) |
| `IDX_OFFICE_ID` | Maybe | Your brokerage/office identifier |
| `IDX_AGENT_ID` | Maybe | Your agent MLS ID for filtered listings |
| `NEXT_PUBLIC_SITE_URL` | Prod | e.g. `https://listedbyjeff.com` — used for server-side API fetch |

When `IDX_API_KEY` is set, `getListings()` in `src/lib/listings/get-listings.ts` will call `/api/listings`, which should proxy to your vendor.

## Field mapping

Map vendor response fields to `Listing` in `src/lib/types/listing.ts`:

| Our field | Typical IDX / RESO field |
|-----------|------------------------|
| `id` | `ListingKey` or `ListingId` |
| `image` | First `Media[].MediaURL` or `Photos[0].Uri` |
| `price` | Formatted `ListPrice` |
| `priceValue` | Numeric `ListPrice` |
| `address` | `UnparsedAddress` or `StreetNumber` + `StreetName` |
| `city` | `City`, `StateOrProvince`, `PostalCode` combined |
| `beds` | `BedroomsTotal` |
| `baths` | `BathroomsTotalInteger` or `BathroomsFull` |
| `sqft` | `LivingArea` |
| `mlsNumber` | `ListingId` or `MLSNumber` |
| `status` | `StandardStatus` → map to `active` / `pending` / `sold` |
| `isNew` | `OnMarketDate` within last 7–14 days (your MLS rules) |
| `tags` | Derive `first-time` from price range or property type if needed |

## Implementation steps

1. Obtain API credentials from your IDX vendor
2. Update `src/app/api/listings/route.ts` to `fetch` the vendor endpoint with your key
3. Add a mapper function `mapVendorListingToListing(raw): Listing`
4. Set env vars in Vercel and redeploy
5. Add MLS-required disclaimers to the footer (wording from your MLS / vendor docs)
6. Display “Last updated” timestamp if required

## Compliance reminders

- Do not scrape MLS websites directly
- Show broker/office attribution as required
- Respect photo copyright and listing display rules
- Some boards restrict which fields can be shown on IDX sites

## Testing without IDX

Leave `IDX_API_KEY` unset. The site uses `src/lib/listings/mock.ts` automatically.
