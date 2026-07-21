import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(100 - (product.price / product.oldPrice) * 100)
      : null;

  return (
    <div className="group relative bg-white border border-gray-100 rounded-lg shadow-card hover:shadow-lg transition-shadow overflow-hidden">
      {product.badge && (
        <span
          className={`absolute left-2 top-2 z-10 rounded px-2 py-0.5 text-[11px] font-semibold text-white ${
            product.badge === "Hot"
              ? "bg-red-500"
              : product.badge === "New"
              ? "bg-emerald-500"
              : "bg-brand"
          }`}
        >
          {product.badge}
        </span>
      )}
      {discount && (
        <span className="absolute right-2 top-2 z-10 rounded px-2 py-0.5 text-[11px] font-semibold text-white bg-brand-dark">
          -{discount}%
        </span>
      )}

      <Link href={`/product/${product.slug}`} className="block relative aspect-square bg-gray-50">
        <Image
          src={`https://images.unsplash.com/${product.image}?w=500&h=500&fit=crop`}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-3">
        <p className="text-xs text-muted mb-1 truncate">{product.category}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-ink line-clamp-2 min-h-[2.5rem] hover:text-brand">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className={
                i < Math.round(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-200"
              }
            />
          ))}
          <span className="text-[11px] text-muted ml-1">({product.rating})</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-brand font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted line-through">${product.oldPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <button className="btn-primary flex-1 !py-2 text-xs">
            <ShoppingCart size={14} /> Add to Cart
          </button>
          <button
            aria-label="Wishlist"
            className="border border-gray-200 rounded-md p-2 hover:border-brand hover:text-brand"
          >
            <Heart size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
