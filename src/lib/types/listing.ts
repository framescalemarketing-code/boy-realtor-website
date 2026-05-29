export type ListingFilter = "all" | "first-time" | "new";

export interface Listing {
  id: string;
  image: string;
  price: string;
  priceValue: number;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  mlsNumber?: string;
  status?: "active" | "pending" | "sold";
  tags: ListingFilter[];
  isNew?: boolean;
}
