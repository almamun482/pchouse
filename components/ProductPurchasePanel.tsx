"use client";

import { useState } from "react";
import { MessageCircle, Send, Phone } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import QuantitySelector from "@/components/QuantitySelector";
import ViewMoreInfoLink from "@/components/ViewMoreInfoLink";
import { useCart } from "@/context/CartContext";
import type { ProductDetail } from "@/data/productDetail";

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export default function ProductPurchasePanel({
  product,
  detail,
  gallery,
}: {
  product: { slug: string; name: string; price: number; oldPrice?: number; image: string };
  detail: ProductDetail;
  gallery: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem } = useCart();

  const selectedColorLabel = detail.colorOptions?.find((c: any) => c.imageIndex === activeIndex)?.label;

  const handleBuyNow = () => {
    addItem(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: gallery[activeIndex] ?? product.image,
        color: selectedColorLabel,
      },
      1
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductGallery
        images={gallery}
        alt={product.name}
        colorOptions={detail.colorOptions}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
      />

      <div>
        <h1 className="text-lg font-medium text-[#212529] mb-3">{product.name}</h1>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
            Price: <strong className="text-brand">{formatTaka(product.price)}৳</strong>{" "}
            {product.oldPrice && product.oldPrice > product.price && (
              <span className="text-muted line-through">{formatTaka(product.oldPrice)}৳</span>
            )}
          </span>
          <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
            Status: <strong className="text-emerald-600">{detail.status}</strong>
          </span>
          <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
            Product Code: <strong>{detail.productCode}</strong>
          </span>
        </div>

        <p className="text-sm mb-2">Brand: <strong className="text-ink">{detail.brand}</strong></p>

        {detail.quickSpecs.length > 0 && (
          <div className="space-y-1.5 mb-3">
            <p className="text-sm text-black">Model: {detail.model}</p>
            {detail.quickSpecs.map((q, i) => (
              <p key={i} className="text-sm text-black">{q}</p>
            ))}
          </div>
        )}

        <ViewMoreInfoLink />

        {detail.colorOptions && detail.colorOptions.length > 0 && (
          <div className="mt-3 mb-3">
            <p className="text-sm mb-2">
              <span className="font-bold text-ink">Color: </span>
              <span className="font-semibold" style={{ color: "#FC724B" }}>
                {selectedColorLabel ?? "Please select"}
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {detail.colorOptions.map((opt: any, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(opt.imageIndex ?? i)}
                  className={`relative h-16 w-16 rounded-md overflow-hidden bg-gray-50 transition-all ${
                    activeIndex === (opt.imageIndex ?? i) ? "border-2" : "border border-gray-200 hover:border-gray-300"
                  }`}
                  style={activeIndex === (opt.imageIndex ?? i) ? { borderColor: "#FC724B" } : undefined}
                  aria-label={opt.label}
                >
                  <img
                    src={`https://images.unsplash.com/${gallery[opt.imageIndex ?? i]}?w=150&h=150&fit=crop`}
                    alt={opt.label}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <p className="font-bold text-ink mb-2">Payment Options</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-brand-light border border-brand/30 rounded-lg p-3">
              <p className="text-lg font-extrabold text-brand">
                {formatTaka(product.price)}৳{" "}
                {product.oldPrice && product.oldPrice > product.price && (
                  <span className="text-sm text-muted line-through font-normal">{formatTaka(product.oldPrice)}৳</span>
                )}
              </p>
              <p className="text-xs text-muted">Cash Discount Price</p>
              <p className="text-xs text-muted">Online / Cash Payment</p>
            </div>
            {detail.emiPerMonth && (
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-lg font-extrabold text-ink">
                  {formatTaka(detail.emiPerMonth)}৳<span className="text-sm font-normal">/month</span>
                </p>
                <p className="text-xs text-muted">Regular Price: {formatTaka(product.price)}৳</p>
                <p className="text-xs text-muted">EMI Facility Available***</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <QuantitySelector />
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md py-2.5 transition-colors"
          >
            Buy Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
          <a href="https://wa.me/8801322928226" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-md py-2.5 transition-colors"><MessageCircle size={16} /> Whatsapp</a>
          <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md py-2.5 transition-colors"><Send size={16} /> Messenger</a>
          <a href="tel:+8809617179141" className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-md py-2.5 transition-colors"><Phone size={16} /> 09617179141</a>
        </div>
      </div>
    </div>
  );
}