"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { DealProduct } from "@/data/dealProducts";

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export default function CategoryProductCard({ product }: { product: DealProduct }) {
  const { addItem } = useCart();
  const savePercent =
    product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      1
    );
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative block bg-white border border-gray-100 rounded-lg shadow-card transition-all duration-300 ease-out hover:scale-105 overflow-hidden"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.15)" }}
    >
      {savePercent > 0 && (
        <span className="absolute left-2 top-2 z-10 rounded px-2 py-0.5 text-[11px] font-semibold text-white bg-brand">
          Save {savePercent}%
        </span>
      )}

      <div className="relative aspect-square bg-gray-50">
        <Image
          src={`https://images.unsplash.com/${product.image}?w=400&h=400&fit=crop`}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-0.5 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.round(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-200"
              }
            />
          ))}
        </div>

        <h3 className="text-sm font-medium text-ink line-clamp-2 min-h-[2.5rem] group-hover:text-brand">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-2 mb-3">
          <span className="text-brand font-bold text-sm">{formatTaka(product.price)}৳</span>
          {product.oldPrice > product.price && (
            <span className="text-xs text-muted line-through">{formatTaka(product.oldPrice)}৳</span>
          )}
        </div>

        <button
          onClick={handleBuyNow}
          className="w-full flex items-center justify-center gap-1.5 bg-brand-dark hover:bg-slate-800 text-white text-xs font-semibold rounded-md py-2 transition-colors"
        >
          <ShoppingCart size={13} />
          Buy Now
        </button>
      </div>
    </Link>
  );
}