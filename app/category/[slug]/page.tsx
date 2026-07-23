"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { mainNav } from "@/data/mainNav";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { specialsOfferProducts, gamingPcProducts, laptopOfferProducts } from "@/data/dealProducts";
import CategoryProductCard from "@/components/category/CategoryProductCard";

const allProducts = [...specialsOfferProducts, ...gamingPcProducts, ...laptopOfferProducts];

const processorOptions = ["Intel", "AMD", "Apple"];
const ramOptions = ["8 GB", "16 GB", "32 GB", "64 GB", "128 GB"];
const ssdOptions = ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"];
const graphicsOptions = [
  "Shared / Integrated", "Dedicated 2GB", "Dedicated 4GB", "Dedicated 6GB",
  "Dedicated 8GB", "Dedicated 12GB", "Dedicated 16GB", "Dedicated 32GB",
];
const availabilityOptions = ["In Stock", "Pre Order", "Up Coming"];

const categoryFilterMap: Record<string, ("processor" | "ram" | "ssd" | "graphics")[]> = {
  desktop: ["processor", "ram", "ssd", "graphics"],
  laptops: ["processor", "ram", "ssd", "graphics"],
  tablet: ["ram", "ssd"],
  monitor: [],
  keyboard: [],
  mouse: [],
  gaming: [],
  projector: [],
};

function getRelevantFilters(slug: string) {
  return categoryFilterMap[slug] ?? ["processor", "ram", "ssd", "graphics"];
}

function FilterCheckboxGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white section-card p-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full font-bold text-sm text-ink pb-3 border-b border-gray-100"
      >
        {title}
        <ChevronDown size={15} className={`transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <div className="space-y-2 pt-3">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer hover:text-ink">
              <input
                type="checkbox"
                className="accent-brand"
                checked={selected.includes(opt)}
                onChange={() => onToggle(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function useToggleList(initial: string[] = []) {
  const [list, setList] = useState<string[]>(initial);
  const toggle = (value: string) => {
    setList((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };
  return [list, toggle] as const;
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(400000);
  const [sortBy, setSortBy] = useState("default");
  const [showCount, setShowCount] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const [selectedAvailability, toggleAvailability] = useToggleList();
  const [selectedProcessors, toggleProcessor] = useToggleList();
  const [selectedRam, toggleRam] = useToggleList();
  const [selectedSsd, toggleSsd] = useToggleList();
  const [selectedGraphics, toggleGraphics] = useToggleList();

  let parent = mainNav.find((c) => c.slug === params.slug);
  let subName = parent?.label;

  if (!parent) {
    parent = mainNav.find((c) => c.children.some((s) => s.slug === params.slug));
    const sub = parent?.children.find((s) => s.slug === params.slug);
    subName = sub?.name ?? parent?.label ?? "Products";
  }

  const activeParent = parent ?? mainNav[0];
  const relevantFilters = getRelevantFilters(params.slug);

  const filteredProducts = useMemo(() => {
    const base = allProducts.filter((p) => p.categorySlug === params.slug);

    let list = base.filter((p) => {
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (selectedAvailability.length > 0 && !selectedAvailability.includes(p.availability ?? "")) return false;
      if (selectedProcessors.length > 0 && !selectedProcessors.includes(p.processor ?? "")) return false;
      if (selectedRam.length > 0 && !selectedRam.includes(p.ram ?? "")) return false;
      if (selectedSsd.length > 0 && !selectedSsd.includes(p.ssd ?? "")) return false;
      if (selectedGraphics.length > 0 && !selectedGraphics.includes(p.graphics ?? "")) return false;
      return true;
    });

    if (sortBy === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [
    minPrice, maxPrice, sortBy, params.slug,
    selectedAvailability, selectedProcessors, selectedRam, selectedSsd, selectedGraphics,
  ]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / showCount));
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * showCount,
    currentPage * showCount
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const filterPanel = (
    <>
      <div className="bg-white section-card p-4">
        <h3 className="font-bold text-sm text-ink pb-3 border-b border-gray-100 mb-4">Price Range</h3>

        <div className="relative h-1.5 bg-gray-200 rounded-full mb-6 overflow-visible max-w-full">
          <div
            className="absolute h-1.5 bg-brand rounded-full"
            style={{
              left: `${(minPrice / 400000) * 100}%`,
              right: `${100 - (maxPrice / 400000) * 100}%`,
            }}
          />
          <input
            type="range"
            min={0}
            max={400000}
            step={1000}
            value={minPrice}
            onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 1000))}
            className="range-thumb-only absolute w-full top-1/2 -translate-y-1/2 accent-brand pointer-events-none appearance-none bg-transparent"
          />
          <input
            type="range"
            min={0}
            max={400000}
            step={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 1000))}
            className="range-thumb-only absolute w-full top-1/2 -translate-y-1/2 accent-brand pointer-events-none appearance-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 1000))}
            className="w-full border border-gray-200 rounded-md px-2 py-1.5 text-sm outline-none focus:border-brand"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 1000))}
            className="w-full border border-gray-200 rounded-md px-2 py-1.5 text-sm outline-none focus:border-brand"
          />
        </div>
      </div>

      <FilterCheckboxGroup title="Availability" options={availabilityOptions} selected={selectedAvailability} onToggle={toggleAvailability} />
      {relevantFilters.includes("processor") && (
        <FilterCheckboxGroup title="Processor" options={processorOptions} selected={selectedProcessors} onToggle={toggleProcessor} />
      )}
      {relevantFilters.includes("ram") && (
        <FilterCheckboxGroup title="RAM" options={ramOptions} selected={selectedRam} onToggle={toggleRam} />
      )}
      {relevantFilters.includes("ssd") && (
        <FilterCheckboxGroup title="SSD" options={ssdOptions} selected={selectedSsd} onToggle={toggleSsd} />
      )}
      {relevantFilters.includes("graphics") && (
        <FilterCheckboxGroup title="Graphics" options={graphicsOptions} selected={selectedGraphics} onToggle={toggleGraphics} />
      )}
    </>
  );

  return (
    <div className="bg-[#F2F3F8] overflow-x-hidden">
      <Breadcrumb
        items={
          subName && subName !== activeParent.label
            ? [
                { label: activeParent.label, href: `/category/${activeParent.slug}` },
                { label: subName },
              ]
            : [{ label: activeParent.label }]
        }
      />

      <div className="container-x py-6 max-w-full">
        <div className="bg-white section-card p-5 mb-6">
          <h1 className="text-xl font-bold text-brand-dark mb-2">
            {subName} Price in Bangladesh (BD)
          </h1>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {subName} Price in Bangladesh starts from a budget-friendly range and goes up depending on
            configuration. Browse below and order yours now!
          </p>

          {activeParent.children.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {activeParent.children.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/category/${sub.slug}`}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    sub.slug === params.slug
                      ? "bg-brand-dark text-white border-transparent"
                      : "border-gray-200 text-ink hover:border-brand"
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="hidden lg:block lg:col-span-1 lg:row-span-2 space-y-4 h-fit">
            {filterPanel}
          </aside>

          <div className="lg:col-span-3">
            <div className="lg:hidden bg-white section-card px-4 py-3 mb-4 flex items-center justify-between gap-3">
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold text-brand"
              >
                <SlidersHorizontal size={16} />
                Filter
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-md px-2 py-1 outline-none bg-white"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="bg-white section-card px-4 py-3 mb-6 flex items-center justify-between flex-wrap gap-3">
              <h2 className="font-bold text-ink">{subName}</h2>
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted">Show:</span>
                  <select
                    value={showCount}
                    onChange={(e) => {
                      setShowCount(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border border-gray-200 rounded-md px-2 py-1 outline-none bg-white"
                  >
                    <option value={12}>12</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-200 rounded-md px-2 py-1 outline-none bg-white"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {paginatedProducts.length === 0 ? (
              <div className="bg-white section-card py-16 text-center text-muted">
                No products match the selected filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedProducts.map((p) => (
                  <CategoryProductCard key={p.id} product={p} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="bg-white section-card px-4 py-3 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm overflow-x-auto max-w-full pb-1">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="font-semibold text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:text-brand shrink-0"
                  >
                    PREV
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i + 1)}
                      className={`h-7 w-7 shrink-0 flex items-center justify-center font-semibold rounded-full transition-colors ${
                        currentPage === i + 1 ? "bg-brand text-white" : "text-ink hover:text-brand"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="font-semibold text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:text-brand shrink-0"
                  >
                    NEXT
                  </button>
                </div>
                <p className="text-sm text-muted whitespace-nowrap">
                  Showing {(currentPage - 1) * showCount + 1} to{" "}
                  {Math.min(currentPage * showCount, filteredProducts.length)} of {filteredProducts.length} (
                  {totalPages} Pages)
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-3 space-y-6 mt-6">
            {filteredProducts.length > 0 && (
              <div className="bg-white section-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-ink mb-4">Latest {subName} Price List</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 text-left">
                        <th className="py-2 pr-4 font-bold text-ink">{subName} List</th>
                        <th className="py-2 font-bold text-ink text-right">Price In BD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.slice(0, 8).map((p) => (
                        <tr key={p.id} className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-muted">{p.name}</td>
                          <td className="py-2 text-ink font-semibold text-right whitespace-nowrap">
                            {p.price.toLocaleString("en-IN")}৳
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="bg-white section-card p-6 md:p-8 text-sm text-muted leading-relaxed space-y-4">
              <h2 className="text-lg font-bold text-ink">{subName} in Bangladesh</h2>
              <p>
                Replace this paragraph with your own SEO description for this category — coverage, pricing range,
                popular brands, and why customers should buy from your store.
              </p>
              <h3 className="font-bold text-ink">Why Choose Us for {subName}?</h3>
              <p>Describe your pricing, warranty, and after-sales support advantages here.</p>
              <h3 className="font-bold text-ink">Factors to Consider When Buying {subName}</h3>
              <p>Add buying-guide content specific to this category here.</p>
              <h3 className="font-bold text-ink">Price of {subName} in Bangladesh</h3>
              <p>Add pricing tiers and budget guidance for this category here.</p>
            </div>
          </div>
        </div>
      </div>

      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-2/3 max-w-sm bg-[#F2F3F8] overflow-y-auto p-4 space-y-4">
            <div className="flex items-center justify-between bg-white section-card px-4 py-3">
              <h3 className="font-bold text-ink">Filters</h3>
              <button onClick={() => setFilterOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            {filterPanel}
          </div>
        </div>
      )}
    </div>
  );
}