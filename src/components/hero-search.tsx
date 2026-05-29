"use client";

import { Search } from "lucide-react";
import type { ListingFilter } from "@/lib/types/listing";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

const filterChips: { id: ListingFilter; label: string }[] = [
  { id: "all", label: "All Homes" },
  { id: "first-time", label: "First-Time Buyer" },
  { id: "new", label: "New Listings" },
];

interface HeroSearchProps {
  searchQuery: string;
  activeFilter: ListingFilter;
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: ListingFilter) => void;
  onSearchSubmit: () => void;
}

export function HeroSearch({
  searchQuery,
  activeFilter,
  onSearchChange,
  onFilterChange,
  onSearchSubmit,
}: HeroSearchProps) {
  return (
    <div className="relative flex min-h-[min(100dvh,720px)] sm:min-h-[560px] lg:min-h-[600px] items-center justify-center pt-[4.5rem] sm:pt-20 pb-10 sm:pb-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111844]/60 via-[#111844]/40 to-[#111844]/70" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4 tracking-tight leading-tight">
            listedbyjeff.com
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#eae0cf] max-w-2xl mx-auto px-1 leading-relaxed">
            Your trusted guide to finding your first home in San Diego
          </p>
        </div>

        <form
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit();
            document.getElementById("homes")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <div className="flex flex-1 items-center gap-2 sm:gap-3 min-w-0">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#4b5694] ml-1 sm:ml-3 shrink-0" />
              <input
                type="search"
                enterKeyHint="search"
                placeholder="Search neighborhood, zip, or address..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 min-w-0 px-2 sm:px-3 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-none outline-none text-[#111844] placeholder:text-[#7288ae]"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#111844] text-white text-base sm:text-lg rounded-lg sm:rounded-xl hover:bg-[#4b5694] transition-colors shrink-0"
            >
              Search
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6 max-w-lg sm:max-w-none mx-auto sm:mx-0">
          {filterChips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => onFilterChange(chip.id)}
              className={`w-full px-4 sm:px-6 py-2.5 sm:py-2 text-sm sm:text-base rounded-lg transition-colors border text-center ${
                activeFilter === chip.id
                  ? "bg-white text-[#111844] border-white"
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/40"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
