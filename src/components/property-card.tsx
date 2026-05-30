import { Bath, Bed, MapPin, Square } from "lucide-react";
import type { Listing } from "@/lib/types/listing";
import { AgentCard } from "./agent-card";

interface PropertyCardProps {
  listing: Listing;
}

export function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#7288ae]/20 group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4efe5]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.image}
          alt={listing.address}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#111844] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium">
          {listing.price}
        </div>
        {listing.isNew && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#4b5694] text-white px-2.5 py-1 sm:px-3 rounded-lg text-xs sm:text-sm">
            New
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="mb-2 sm:mb-3 min-w-0">
          <h3 className="text-lg text-[#111844] mb-1 line-clamp-2">
            {listing.address}
          </h3>
          <div className="flex items-start gap-1 text-[#4b5694]">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="text-sm break-words">{listing.city}</span>
          </div>
        </div>

        <AgentCard variant="inline" />

        <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-[#eae0cf] mt-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 sm:gap-2 text-[#4b5694] text-center sm:text-left">
            <Bed className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {listing.beds} Beds
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 sm:gap-2 text-[#4b5694] text-center sm:text-left">
            <Bath className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {listing.baths} Baths
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 sm:gap-2 text-[#4b5694] text-center sm:text-left">
            <Square className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {listing.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-4 sm:mt-6 py-3 bg-[#eae0cf] text-[#111844] rounded-xl hover:bg-[#4b5694] hover:text-white transition-colors text-sm sm:text-base"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
