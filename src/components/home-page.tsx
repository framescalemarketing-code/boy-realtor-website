"use client";

import { useMemo, useState } from "react";
import type { Listing, ListingFilter } from "@/lib/types/listing";
import { filterListings } from "@/lib/listings/get-listings";
import { AboutSection } from "./about-section";
import { BuyersSection } from "./buyers-section";
import { HeroSearch } from "./hero-search";
import { PropertyGrid } from "./property-grid";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

interface HomePageProps {
  initialListings: Listing[];
}

export function HomePage({ initialListings }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<ListingFilter>("all");

  const filteredListings = useMemo(
    () => filterListings(initialListings, searchQuery, activeFilter),
    [initialListings, searchQuery, activeFilter],
  );

  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-white">
      <SiteHeader />
      <HeroSearch
        searchQuery={searchQuery}
        activeFilter={activeFilter}
        onSearchChange={setSearchQuery}
        onFilterChange={setActiveFilter}
        onSearchSubmit={() => undefined}
      />
      <PropertyGrid listings={filteredListings} />
      <BuyersSection />
      <AboutSection />
      <SiteFooter />
    </div>
  );
}
