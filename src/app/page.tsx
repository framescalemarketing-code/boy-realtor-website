import { HomePage } from "@/components/home-page";
import { getListings } from "@/lib/listings/get-listings";

export default async function Home() {
  const listings = await getListings();
  return <HomePage initialListings={listings} />;
}
