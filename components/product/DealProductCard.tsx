import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { DealProduct } from "@/data/dealProducts";

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export default function DealProductCard({ product }: { product: DealProduct }) {
  const save = product.oldPrice - product.price;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative block bg-white border border-gray-100 rounded-lg shadow-card transition-all duration-300 ease-out hover:scale-105 overflow-hidden"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.15)" }}
    >
      {save > 0 && (
        <span className="absolute left-2 top-2 z-10 rounded px-2 py-0.5 text-[11px] font-semibold text-white bg-sky-600">
          Save {formatTaka(save)}৳
        </span>
      )}

      <div className="relative aspect-square bg-gray-50">
        <Image
          src={`https://images.unsplash.com/${product.image}?w=400&h=400&fit=crop`}
          alt={product.name}
          fill
          className="object-cover"
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

        <div className="flex items-center gap-2 mt-2">
          <span className="text-brand font-bold text-sm">{formatTaka(product.price)}৳</span>
          {product.oldPrice > product.price && (
            <span className="text-xs text-muted line-through">{formatTaka(product.oldPrice)}৳</span>
          )}
        </div>
      </div>
    </Link>
  );
}