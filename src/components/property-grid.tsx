import type { Listing } from "@/lib/types/listing";
import { AgentCard } from "./agent-card";
import { PropertyCard } from "./property-card";

interface PropertyGridProps {
  listings: Listing[];
}

export function PropertyGrid({ listings }: PropertyGridProps) {
  return (
    <div id="homes" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="mb-10 sm:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
        <div className="min-w-0">
          <p className="eyebrow text-[#7288ae] mb-3">Featured Listings</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#111844] mb-3">
            Available Homes
          </h2>
          <p className="text-[#4b5694] text-base sm:text-lg font-light">
            Discover your perfect home in beautiful San Diego
            {listings.length > 0 && (
              <span className="block text-sm sm:text-base mt-1 text-[#7288ae]">
                Showing {listings.length} home{listings.length === 1 ? "" : "s"}
              </span>
            )}
          </p>
        </div>
        <div className="w-full lg:w-auto lg:max-w-sm shrink-0">
          <AgentCard variant="header" />
        </div>
      </div>

      {listings.length === 0 ? (
        <div className="text-center py-12 sm:py-16 px-4 rounded-2xl border border-[#7288ae]/20 bg-[#eae0cf]/10">
          <p className="text-lg sm:text-xl text-[#111844] mb-2">
            No homes match your search
          </p>
          <p className="text-sm sm:text-base text-[#4b5694]">
            Try a different neighborhood, zip code, or filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1280px]:grid-cols-3 gap-7 sm:gap-8 max-w-[1400px] mx-auto">
          {listings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}
