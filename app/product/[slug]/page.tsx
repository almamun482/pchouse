import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Minus, Plus, MessageCircle, Send, Phone, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { specialsOfferProducts, gamingPcProducts, laptopOfferProducts } from "@/data/dealProducts";
import { getProductDetail } from "@/data/productDetail";
import ProductTabs from "@/components/ProductTabs";
import ProductGallery from "@/components/ProductGallery";
import QuantitySelector from "@/components/QuantitySelector";
import BuyNowButton from "@/components/BuyNowButton";
import ViewMoreInfoLink from "@/components/ViewMoreInfoLink";

const allDealProducts = [...specialsOfferProducts, ...gamingPcProducts, ...laptopOfferProducts];

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export function generateStaticParams() {
  const productSlugs = products.map((p) => ({ slug: p.slug }));
  const dealSlugs = allDealProducts.map((p) => ({ slug: p.slug }));
  return [...productSlugs, ...dealSlugs];
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const baseProduct = products.find((p) => p.slug === params.slug);
  const dealProduct = allDealProducts.find((p) => p.slug === params.slug);

  if (!baseProduct && !dealProduct) return notFound();

  const product = baseProduct
    ? {
        slug: params.slug,
        name: baseProduct.name,
        price: baseProduct.price,
        oldPrice: baseProduct.oldPrice,
        image: baseProduct.image,
        rating: baseProduct.rating,
        category: baseProduct.category,
      }
    : {
        slug: params.slug,
        name: dealProduct!.name,
        price: dealProduct!.price,
        oldPrice: dealProduct!.oldPrice,
        image: dealProduct!.image,
        rating: dealProduct!.rating,
        category: "Product",
      };

  const detail = getProductDetail(params.slug);
  const productImages = dealProduct?.images && dealProduct.images.length > 0
    ? dealProduct.images
    : [product.image];
  const gallery = productImages;
  const relatedList = allDealProducts.filter((p) => p.slug !== params.slug).slice(0, 10);

  return (
    <div className="bg-white">
      <div className="container-x py-6">
        <div className="flex items-center gap-1.5 text-sm text-muted mb-4 flex-wrap">
          <Link href="/" className="hover:text-brand">Home</Link>
          <ChevronRight size={14} />
          <span className="hover:text-brand cursor-pointer">{product.category}</span>
          <ChevronRight size={14} />
          <span className="hover:text-brand cursor-pointer">{detail.brand}</span>
          <ChevronRight size={14} />
          <span className="text-ink font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 bg-white section-card p-5 h-fit">
            <h3 className="text-lg font-medium text-[#212529] mb-4 pb-3 border-b border-gray-100">Related Product</h3>
            <div className="space-y-3">
              {relatedList.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 hover:border-brand transition-colors"
                >
                  <div className="relative h-14 w-14 shrink-0 rounded bg-gray-50 overflow-hidden">
                    <Image src={`https://images.unsplash.com/${p.image}?w=100&h=100&fit=crop`} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand-dark line-clamp-2 leading-snug mb-1">{p.name}</p>
                    <p className="text-sm">
                      {p.oldPrice > p.price ? (
                        <>
                          <span className="font-bold" style={{ color: "#EF4A23" }}>{formatTaka(p.price)}৳</span>{" "}
                          <span className="text-gray-500 line-through">{formatTaka(p.oldPrice)}৳</span>
                        </>
                      ) : (
                        <span className="font-bold text-ink">{formatTaka(p.price)}৳</span>
                      )}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white section-card p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductGallery images={gallery} alt={product.name} />

                <div>
                  <h1 className="text-lg font-medium text-[#212529] mb-3">{product.name}</h1>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
                      Price: <strong className="text-brand">{formatTaka(product.price)}৳</strong>{" "}
                      {product.oldPrice && product.oldPrice > product.price && (<span className="text-muted line-through">{formatTaka(product.oldPrice)}৳</span>)}
                    </span>
                    <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
                      Status: <strong className="text-emerald-600">{detail.status}</strong>
                    </span>
                    <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
                      Product Code: <strong>{detail.productCode}</strong>
                    </span>
                    <span className="border border-gray-200 rounded px-3 py-1.5 text-sm">
                      Brand: <strong className="text-ink">{detail.brand}</strong>
                    </span>
                  </div>

                  {detail.quickSpecs.length > 0 && (
                    <div className="space-y-1.5 mb-3">
                      <p className="text-sm text-black">Model: {detail.model}</p>
                      {detail.quickSpecs.map((q, i) => (
                        <p key={i} className="text-sm text-black">{q}</p>
                      ))}
                    </div>
                  )}

                  <ViewMoreInfoLink />

                  <div className="mt-4">
                    <p className="font-bold text-ink mb-2">Payment Options</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-brand-light border border-brand/30 rounded-lg p-3">
                        <p className="text-lg font-extrabold text-brand">
                          {formatTaka(product.price)}৳{" "}
                          {(product.oldPrice ?? 0) > product.price && (
                            <span className="text-sm text-muted line-through font-normal">
                              {formatTaka(product.oldPrice!)}৳
                            </span>
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
                    <BuyNowButton
                      product={{
                        slug: product.slug ?? params.slug,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                    <a href="https://wa.me/8801973167989" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-md py-2.5 transition-colors"><MessageCircle size={16} /> Whatsapp</a>
                    <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md py-2.5 transition-colors"><Send size={16} /> Messenger</a>
                    <a href="tel:+8809617179141" className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-md py-2.5 transition-colors"><Phone size={16} /> 09617179141</a>
                  </div>
                </div>
              </div>
            </div>

            <ProductTabs detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
}