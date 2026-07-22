import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { mainNav } from "@/data/mainNav";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export function generateStaticParams() {
  const slugs: string[] = [];
  mainNav.forEach((c) => {
    slugs.push(c.slug);
    c.children.forEach((s) => slugs.push(s.slug));
  });
  return slugs.map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Try top-level nav item first, then treat as a sub-category slug.
  let parent = mainNav.find((c) => c.slug === params.slug);
  let subName = parent?.label;

  if (!parent) {
    parent = mainNav.find((c) => c.children.some((s) => s.slug === params.slug));
    const sub = parent?.children.find((s) => s.slug === params.slug);
    if (!parent || !sub) return notFound();
    subName = sub.name;
  }

  const activeParent = parent!;

  return (
    <div className="container-x py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-brand">Home</Link>
        <ChevronRight size={14} />
        <Link href={`/category/${activeParent.slug}`} className="hover:text-brand">
          {activeParent.label}
        </Link>
        {subName && subName !== activeParent.label && (
          <>
            <ChevronRight size={14} />
            <span className="text-ink font-medium">{subName}</span>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="border border-gray-100 rounded-lg p-4">
            <h4 className="font-bold mb-3">{activeParent.label}</h4>
            <ul className="space-y-2 text-sm">
              {activeParent.children.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/category/${s.slug}`}
                    className={`hover:text-brand ${
                      s.slug === params.slug ? "text-brand font-semibold" : "text-muted"
                    }`}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-100 rounded-lg p-4">
            <h4 className="font-bold mb-3">Price Range</h4>
            <div className="space-y-2 text-sm text-muted">
              {["Under $25", "$25 - $50", "$50 - $100", "$100 - $500", "$500+"].map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-brand" />
                  {r}
                </label>
              ))}
            </div>
          </div>

          <div className="border border-gray-100 rounded-lg p-4">
            <h4 className="font-bold mb-3">Rating</h4>
            <div className="space-y-2 text-sm text-muted">
              {[5, 4, 3, 2].map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-brand" />
                  {r}★ &amp; up
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-muted">
              Showing <strong className="text-ink">{products.length}</strong> results for{" "}
              <strong className="text-ink">{subName}</strong>
            </p>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1.5 outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-md p-1">
                <button className="p-1.5 bg-brand text-white rounded">
                  <LayoutGrid size={14} />
                </button>
                <button className="p-1.5 hover:text-brand">
                  <List size={14} />
                </button>
              </div>
              <button className="lg:hidden p-1.5 border border-gray-200 rounded-md">
                <SlidersHorizontal size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}