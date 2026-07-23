"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Gift,
  Cpu,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { mainNav } from "@/data/mainNav";
import { specialsOfferProducts, gamingPcProducts, laptopOfferProducts } from "@/data/dealProducts";

const allSearchableProducts = [...specialsOfferProducts, ...gamingPcProducts, ...laptopOfferProducts];

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const matches = searchQuery.trim()
    ? allSearchableProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : [];
  const topMatches = matches.slice(0, 7);
  const moreCount = matches.length - topMatches.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-dark">
      {/* Top row: logo, search, action boxes */}
      <div className="container-x flex items-center gap-6 py-3">
        <button
          className="lg:hidden text-white"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo — replace public/images/website/logo/logo.png with your own logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/website/logo/logo.png"
            alt="Site Logo"
            width={160}
            height={40}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:block relative flex-1">
          <form
            onSubmit={handleSearch}
            className="flex items-stretch bg-white rounded-md overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="flex-1 min-w-0 px-4 py-2.5 outline-none text-sm text-ink"
            />
            <button
              type="submit"
              className="flex items-center justify-center shrink-0 bg-brand hover:bg-orange-600 px-4 text-white transition-colors"
            >
              <Search size={18} />
            </button>
          </form>

          {showSuggestions && searchQuery.trim() && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-md shadow-xl border border-gray-100 z-50 overflow-hidden">
              {topMatches.length === 0 ? (
                <p className="px-4 py-3 text-sm text-muted">No products found.</p>
              ) : (
                <>
                  <div className="max-h-[278px] overflow-y-auto">
                    {topMatches.map((p) => (
                      <Link
                        key={p.id}
                        href={`/product/${p.slug}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setShowSuggestions(false)}
                        className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 hover:bg-brand-light transition-colors"
                      >
                        <div className="relative h-12 w-12 shrink-0 rounded bg-gray-50 overflow-hidden">
                          <Image
                            src={`https://images.unsplash.com/${p.image}?w=100&h=100&fit=crop`}
                            alt={p.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-ink line-clamp-1">{p.name}</p>
                          <p className="text-sm font-bold text-brand">{formatTaka(p.price)}৳</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {moreCount > 0 && (
                    <Link
                      href={`/search?q=${encodeURIComponent(searchQuery.trim())}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setShowSuggestions(false)}
                      className="block text-center py-2.5 text-sm text-muted hover:text-brand bg-gray-50"
                    >
                      {moreCount} more results
                    </Link>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
          <Link
            href="/offer"
            className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2 hover:border-brand transition-colors"
          >
            <Gift size={22} className="text-brand shrink-0" />
            <span className="leading-tight">
              <span className="block text-white font-semibold text-sm">Offer</span>
              <span className="block text-white/60 text-[11px]">Latest Offers</span>
            </span>
          </Link>

          <Link
            href="/pc-builder"
            className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2 hover:border-brand transition-colors"
          >
            <Cpu size={22} className="text-white shrink-0" />
            <span className="leading-tight">
              <span className="block text-white font-semibold text-sm">PC Builder</span>
              <span className="block text-white/60 text-[11px]">Build Your PC</span>
            </span>
          </Link>

          <Link
            href="/account/login"
            className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2 hover:border-brand transition-colors"
          >
            <User size={22} className="text-white shrink-0" />
            <span className="leading-tight">
              <span className="block text-white font-semibold text-sm">Account</span>
              <span className="block text-white/60 text-[11px]">Login/Register</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom row: category navigation */}
      <div className="hidden lg:block border-t border-white/10">
        <div className="container-x">
          <nav className="flex items-center gap-x-5">
            {mainNav.map((item, index) => {
              const isLast = index >= mainNav.length - 3;
              return (
              <div
                key={item.slug}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.slug)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={`/category/${item.slug}`}
                  className="flex items-center gap-1 py-3 text-xs font-bold uppercase tracking-wide text-white hover:text-brand transition-colors"
                >
                  {item.label}
                  <ChevronDown size={13} />
                </Link>

                {openDropdown === item.slug && item.children.length > 0 && (
                  <div className={`absolute top-full z-50 min-w-[200px] bg-white shadow-xl border border-gray-100 py-2 ${isLast ? "right-0" : "left-0"}`}>
                    {item.children.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/category/${c.slug}`}
                        className="block px-4 py-2 text-sm text-ink hover:bg-brand-light hover:text-brand"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-brand-dark">
          <div className="container-x py-3 space-y-1">
            <div className="md:hidden relative mb-3">
              <form
                onSubmit={handleSearch}
                className="flex items-stretch bg-white rounded-md overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  className="flex-1 min-w-0 px-4 py-2.5 outline-none text-sm text-ink"
                />
                <button type="submit" className="flex items-center justify-center shrink-0 bg-brand px-4 text-white">
                  <Search size={18} />
                </button>
              </form>

              {showSuggestions && searchQuery.trim() && (
                <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-md shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {topMatches.length === 0 ? (
                    <p className="px-4 py-3 text-sm text-muted">No products found.</p>
                  ) : (
                    <>
                      {topMatches.map((p) => (
                        <Link
                          key={p.id}
                          href={`/product/${p.slug}`}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setShowSuggestions(false);
                            setMobileOpen(false);
                          }}
                          className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 hover:bg-brand-light transition-colors"
                        >
                          <div className="relative h-12 w-12 shrink-0 rounded bg-gray-50 overflow-hidden">
                            <Image
                              src={`https://images.unsplash.com/${p.image}?w=100&h=100&fit=crop`}
                              alt={p.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-ink line-clamp-1">{p.name}</p>
                            <p className="text-sm font-bold text-brand">{formatTaka(p.price)}৳</p>
                          </div>
                        </Link>
                      ))}
                      {moreCount > 0 && (
                        <Link
                          href={`/search?q=${encodeURIComponent(searchQuery.trim())}`}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setShowSuggestions(false);
                            setMobileOpen(false);
                          }}
                          className="block text-center py-2.5 text-sm text-muted hover:text-brand bg-gray-50"
                        >
                          {moreCount} more results
                        </Link>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {mainNav.map((item) => (
              <details key={item.slug} className="border-b border-white/10 py-1">
                <summary className="flex cursor-pointer items-center justify-between py-1.5 text-sm font-semibold text-white uppercase">
                  {item.label}
                  <ChevronDown size={16} />
                </summary>
                <div className="pl-3 pb-2 flex flex-col gap-1">
                  {item.children.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/category/${c.slug}`}
                      className="text-sm text-white/70 hover:text-brand py-1"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <div className="flex flex-col gap-2 pt-3">
              <Link href="/todays-deals" className="text-sm font-medium text-white">Offer — Latest Offers</Link>
              <Link href="/pc-builder" className="text-sm font-medium text-white">PC Builder — Build Your PC</Link>
              <Link href="/account/login" className="text-sm font-medium text-white">Account — Login/Register</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
