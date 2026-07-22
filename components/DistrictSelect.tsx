"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { districts } from "@/data/districts";

export default function DistrictSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (district: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = districts.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand bg-white"
      >
        <span className="font-semibold text-ink">{value || "Select District"}</span>
        <ChevronDown size={16} className="text-muted shrink-0" />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-xl z-50 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 bg-gray-50">
            <Search size={14} className="text-muted shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 min-w-0 bg-transparent text-sm outline-none"
            />
          </div>

          <div className="max-h-56 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-3 py-3 text-sm text-muted">No district found.</p>
            ) : (
              filtered.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => {
                    onChange(d);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`w-full text-left px-3 py-2.5 text-sm transition-colors ${
                    d === value
                      ? "bg-brand-dark text-white font-semibold"
                      : "text-ink hover:bg-gray-50"
                  }`}
                >
                  {d}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}