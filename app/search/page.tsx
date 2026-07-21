import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { specialsOfferProducts, gamingPcProducts, laptopOfferProducts } from "@/data/dealProducts";
import DealProductCard from "@/components/DealProductCard";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = (searchParams.q || "").trim().toLowerCase();
  const allProducts = [...specialsOfferProducts, ...gamingPcProducts, ...laptopOfferProducts];

  const results = query
    ? allProducts.filter((p) => p.name.toLowerCase().includes(query))
    : [];

  return (
    <div className="container-x py-8">
      <div className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-brand">Home</Link>
        <ChevronRight size={14} />
        <span className="text-ink font-medium">Search Results</span>
      </div>

      <h1 className="text-xl font-bold text-ink mb-6">
        {query ? `Search results for "${searchParams.q}"` : "Please enter a search term"}
      </h1>

      {query && results.length === 0 && (
        <p className="text-muted text-sm">No products found matching your search.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {results.map((p) => (
          <DealProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}