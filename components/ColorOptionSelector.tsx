"use client";

import Image from "next/image";
import { useState } from "react";
import type { ColorOption } from "@/data/productDetail";

export default function ColorOptionSelector({ options }: { options: ColorOption[] }) {
  const [active, setActive] = useState(0);

  if (!options || options.length === 0) return null;

  return (
    <div className="mb-3">
      <p className="text-sm mb-2">
        <span className="font-bold text-ink">Color</span>{" "}
        <span className="font-semibold" style={{ color: "#FC724B" }}>{options[active].label}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative h-16 w-16 rounded-md overflow-hidden bg-gray-50 transition-all ${
              active === i ? "border-2" : "border border-gray-200 hover:border-gray-300"
            }`}
            style={active === i ? { borderColor: "#FC724B" } : undefined}
            aria-label={opt.label}
          >
            <Image
              src={`https://images.unsplash.com/${opt.image}?w=150&h=150&fit=crop`}
              alt={opt.label}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}