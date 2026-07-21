import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Star, ShoppingCart, Heart, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { findProduct, relatedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = findProduct(params.slug);
  if (!product) return notFound();

  const related = relatedProducts(product.slug);
  const gallery = [product.image, product.image, product.image];

  return (
    <div className="container-x py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-brand">Home</Link>
        <ChevronRight size={14} />
        <span className="hover:text-brand cursor-pointer">{product.category}</span>
        <ChevronRight size={14} />
        <span className="text-ink font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-100 mb-3">
            <Image
              src={`https://images.unsplash.com/${product.image}?w=700&h=700&fit=crop`}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <div key={i} className="relative aspect-square rounded-md overflow-hidden border border-gray-100 cursor-pointer hover:border-brand">
                <Image
                  src={`https://images.unsplash.com/${g}?w=200&h=200&fit=crop`}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold text-ink mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className={
                    i < Math.round(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-muted">({product.rating} rating)</span>
          </div>

          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-3xl font-extrabold text-brand">${product.price}</span>
            {product.oldPrice && (
              <span className="text-lg text-muted line-through">${product.oldPrice}</span>
            )}
          </div>

          <p className="text-sm text-muted leading-relaxed mb-6">{product.description}</p>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center border border-gray-200 rounded-md">
              <button className="px-3 py-2 hover:text-brand">-</button>
              <span className="px-4 py-2 border-x border-gray-200 text-sm">1</span>
              <button className="px-3 py-2 hover:text-brand">+</button>
            </div>
            <button className="btn-primary flex-1">
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button className="border border-gray-200 rounded-md p-2.5 hover:border-brand hover:text-brand">
              <Heart size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-gray-100 pt-5">
            {[
              { icon: Truck, text: "Free global shipping" },
              { icon: ShieldCheck, text: "Secure payment" },
              { icon: RotateCcw, text: "7-day easy returns" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted">
                <f.icon size={16} className="text-brand shrink-0" />
                {f.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-14 border border-gray-100 rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-100 text-sm font-semibold">
          <button className="px-6 py-3 border-b-2 border-brand text-brand">Description</button>
          <button className="px-6 py-3 text-muted hover:text-brand">Specification</button>
          <button className="px-6 py-3 text-muted hover:text-brand">Reviews</button>
        </div>
        <div className="p-6 text-sm text-muted leading-relaxed">
          <p>{product.description}</p>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-14">
        <h2 className="section-title mb-6">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
