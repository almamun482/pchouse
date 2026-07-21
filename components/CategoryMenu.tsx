"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, ChevronRight } from "lucide-react";
import type { Category } from "@/data/categories";

export default function CategoryMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Category>(categories[0]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-2 bg-brand text-white font-semibold px-4 py-3 text-sm">
        <MenuIcon size={18} />
        Shop By Category
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 flex w-[820px] shadow-xl border border-gray-100 bg-white">
          {/* Left: top-level category list */}
          <ul className="w-64 shrink-0 border-r border-gray-100 py-2">
            {categories.map((cat) => (
              <li
                key={cat.slug}
                onMouseEnter={() => setActive(cat)}
                className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm ${
                  active.slug === cat.slug
                    ? "bg-brand-light text-brand font-semibold"
                    : "text-ink hover:bg-gray-50"
                }`}
              >
                <Link href={`/category/${cat.slug}`} className="flex-1">
                  {cat.name}
                </Link>
                <ChevronRight size={14} />
              </li>
            ))}
          </ul>

          {/* Right: subcategories of the active category */}
          <div className="flex-1 p-6">
            <h4 className="font-bold text-ink mb-3">{active.name}</h4>
            <div className="grid grid-cols-2 gap-3">
              {active.children.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/category/${sub.slug}`}
                  className="text-sm text-muted hover:text-brand"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
