"use client";

import Image from "next/image";
import type { ColorOption } from "@/data/productDetail";

export default function ProductGallery({
  images,
  alt,
  colorOptions,
  activeIndex,
  onActiveIndexChange,
}: {
  images: string[];
  alt: string;
  colorOptions?: ColorOption[];
  activeIndex: number;
  onActiveIndexChange: (i: number) => void;
}) {
  return (
    <div>
      <div className="relative aspect-square rounded-lg overflow-hidden bg-white border border-gray-100 mb-6">
        <Image
          src={`https://images.unsplash.com/${images[activeIndex]}?w=700&h=700&fit=crop`}
          alt={alt}
          fill
          className="object-contain p-6"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {images.map((g, i) => (
          <button
            key={i}
            onClick={() => onActiveIndexChange(i)}
            className={`relative h-20 w-20 shrink-0 rounded-md overflow-hidden bg-white transition-all ${
              activeIndex === i ? "border-2 border-brand" : "border border-gray-200 hover:border-brand/50"
            }`}
          >
            <Image
              src={`https://images.unsplash.com/${g}?w=150&h=150&fit=crop`}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-contain p-1.5"
            />
          </button>
        ))}
      </div>
    </div>
  );
}