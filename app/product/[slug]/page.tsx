import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { specialsOfferProducts, gamingPcProducts, laptopOfferProducts } from "@/data/dealProducts";
import { getProductDetail } from "@/data/productDetail";
import { mainNav } from "@/data/mainNav";
import ProductTabs from "@/components/product/ProductTabs";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";

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

  const categorySlug = dealProduct?.categorySlug;
  let productCategory = mainNav.find((c) => c.slug === categorySlug);
  let productSubCategory = productCategory?.children.find((s) => s.slug === categorySlug);

  if (!productCategory && categorySlug) {
    productCategory = mainNav.find((c) => c.children.some((s) => s.slug === categorySlug));
    productSubCategory = productCategory?.children.find((s) => s.slug === categorySlug);
  }

  const productImages = dealProduct?.images && dealProduct.images.length > 0
    ? dealProduct.images
    : [product.image];
  const gallery = productImages;
  const relatedList = allDealProducts.filter((p) => p.slug !== params.slug).slice(0, 10);

  return (
    <div className="bg-white">
      <Breadcrumb
        items={
          productCategory
            ? productSubCategory && productSubCategory.slug !== productCategory.slug
              ? [
                  { label: productCategory.label, href: `/category/${productCategory.slug}` },
                  { label: productSubCategory.name, href: `/category/${productSubCategory.slug}` },
                  { label: product.name },
                ]
              : [
                  { label: productCategory.label, href: `/category/${productCategory.slug}` },
                  { label: product.name },
                ]
            : [{ label: product.name }]
        }
      />

      <div className="container-x py-6">
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
                          <span className="font-bold text-brand">{formatTaka(p.price)}৳</span>{" "}
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
              <ProductPurchasePanel product={product} detail={detail} gallery={gallery} />
            </div>

            <ProductTabs detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
}