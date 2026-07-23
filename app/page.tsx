import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedCategoryGrid from "@/components/home/FeaturedCategoryGrid";
import DealProductCard from "@/components/product/DealProductCard";
import {
  specialsOfferProducts,
  gamingPcProducts,
  laptopOfferProducts,
} from "@/data/dealProducts";

const brands = ["Xiaomi", "MSI", "AOC", "ViewSonic", "Lenovo"];

export default function HomePage() {
  return (
    <div>
      <HeroSlider />

      {/* Notice bar — replace with your real announcement text */}
      <section className="container-x pt-6">
        <div className="w-full max-w-full bg-white rounded-[25px] mx-auto my-2 py-4 px-[15px] shadow-[0_3px_8px_rgba(0,0,0,0.05)] overflow-hidden">
          <p className="animate-marquee text-sm text-muted font-medium">
            অর্ডার করার পূর্বে কাস্টমার কেয়ার থেকে পন্যের স্টক ও ডেলিভারি সম্পর্কে জেনে নেয়ার অনুরোধ করা যাচ্ছে। প্রযুক্তি পণ্যের মূল্য অস্থিতিশীল হওয়ায় কারণে যেকোন মুহূর্তে যেকোন প্রযুক্তি পণ্যের মূল্য পরিবর্তন হতে পারে।
          </p>
        </div>
      </section>

      {/* Featured Category */}
      <FeaturedCategoryGrid />

      {/* Specials Offer Products */}
      <section className="container-x pb-10">
        <div className="bg-white rounded-lg text-center py-2 mb-6">
          <h2 className="text-xl md:text-xl font-bold text-ink">Specials Offer Products</h2>
          <p className="text-sm text-muted">Massive Sale Alert: Insane Discounts, Limited Time Only!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialsOfferProducts.map((p) => (
            <DealProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promo banners */}
      <section className="container-x pb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/category/gaming" className="group relative block rounded-xl overflow-hidden aspect-[630/238]">
          <Image
            src="/images/website/banner/gaming-gear-bottom-1.jpg"
            alt="Gaming Gear Promo"
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
        <Link href="/category/tablet" className="group relative block rounded-xl overflow-hidden aspect-[630/238]">
          <Image
            src="/images/website/banner/new-web-slider-teclast.jpg"
            alt="Android Tablet Promo"
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
      </section>

      {/* Gaming PC */}
      <section className="container-x pb-10">
        <div className="bg-white rounded-lg text-center py-2 mb-6">
          <h2 className="text-xl md:text-xl font-bold text-ink">Gaming PC</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {gamingPcProducts.map((p) => (
            <DealProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Laptop Offer */}
      <section className="container-x pb-10">
        <div className="bg-white rounded-lg text-center py-2 mb-6">
          <h2 className="text-xl md:text-xl font-bold text-ink">Laptop Offer</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {laptopOfferProducts.map((p) => (
            <DealProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SEO text block — replace with your own article text */}
      <section className="container-x pb-14">
        <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-8 text-sm text-muted leading-relaxed space-y-4">
          <h2 className="text-lg font-bold text-ink">Trusted Retail Computer Store In BD</h2>
          <p>
            <strong className="text-ink">PC House BD</strong> is one of the most popular gadget
            and computer retail and online shops in Bangladesh. Replace this paragraph with your
            own SEO description — company history, mission, and what makes your store trustworthy.
          </p>

          <h3 className="font-bold text-ink">Best PC Retail &amp; Online Shop in Bangladesh</h3>
          <p>
            Describe why customers should buy from you online or in-store — delivery options,
            product range, and after-sales support.
          </p>

          <h3 className="font-bold text-ink">Best Laptop &amp; Notebook Shop in Bangladesh</h3>
          <p>
            Describe your laptop and notebook selection here — brands carried, price ranges, and
            use cases (gaming, business, student).
          </p>

          <h3 className="font-bold text-ink">Best Desktop PC Shop in Bangladesh</h3>
          <p>
            Describe your desktop PC and custom PC building services here.
          </p>

          <h3 className="font-bold text-ink">Best Price, Product &amp; After-sales Service</h3>
          <p>
            Close with your value proposition — best price guarantee, warranty support, and
            nationwide delivery coverage.
          </p>
        </div>
      </section>
    </div>
  );
}