"use client";

import { useRef, useState } from "react";
import { Star } from "lucide-react";
import type { ProductDetail } from "@/data/productDetail";

type Tab = "specification" | "description" | "reviews";

export default function ProductTabs({ detail }: { detail: ProductDetail }) {
  const [active, setActive] = useState<Tab>("specification");
  const specRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const refs: Record<Tab, React.RefObject<HTMLDivElement>> = {
    specification: specRef,
    description: descRef,
    reviews: reviewRef,
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "specification", label: "Specification" },
    { id: "description", label: "Description" },
    { id: "reviews", label: `Reviews (${detail.reviews.length})` },
  ];

  const goToTab = (id: Tab) => {
    setActive(id);
    refs[id].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white section-card overflow-hidden">
      {/* Sticky tab bar */}
      <div className="sticky top-0 z-10 flex flex-wrap gap-2 p-4 bg-white border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => goToTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap transition-colors duration-300 ${
              active === tab.id
                ? "bg-brand-dark text-white"
                : "bg-white text-ink border border-gray-200 hover:border-brand"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        {/* Specification */}
        <div ref={specRef} id="specification" className="scroll-mt-[100px]">
          <h2 className="text-lg font-medium text-[#212529] mb-4">Specification:</h2>
          {detail.specSections.map((section) => (
            <div key={section.title} className="mb-4">
              <div className="font-bold text-sm px-4 py-3" style={{ backgroundColor: "#E5E8F7", color: "#2645FE" }}>
                {section.title}
              </div>
              <div className="border-b border-gray-100 divide-y divide-gray-100">
                {section.rows.map((row) => (
                  <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-0 text-sm">
                    <span className="font-bold text-ink px-4 py-3 bg-[#F5F5F5]">{row.label}</span>
                    <span className="sm:col-span-2 text-ink px-4 py-3 bg-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div ref={descRef} className="mt-8 pt-8 border-t border-gray-100 scroll-mt-[100px]">
          <h2 className="text-lg font-medium text-[#212529] mb-3">Description:</h2>
          <h3 className="font-bold text-ink mb-2">{detail.descriptionHeading}</h3>
          <div className="space-y-3 text-sm text-muted leading-relaxed mb-4">
            {detail.descriptionParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {detail.keyFeatures.length > 0 && (
            <>
              <h3 className="font-bold text-ink mb-2">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted mb-4">
                {detail.keyFeatures.map((f, i) => (
                  <li key={i}><strong className="text-ink">{f.title}</strong> — {f.text}</li>
                ))}
              </ul>
            </>
          )}

          {detail.whoShouldBuy.length > 0 && (
            <>
              <h3 className="font-bold text-ink mb-2">Who Should Buy This?</h3>
              <ul className="space-y-2 text-sm text-muted mb-4">
                {detail.whoShouldBuy.map((f, i) => (
                  <li key={i}><strong className="text-ink">{f.title}</strong> — {f.text}</li>
                ))}
              </ul>
            </>
          )}

          <h3 className="font-bold text-ink mb-2">{detail.closingHeading}</h3>
          <p className="text-sm text-muted leading-relaxed">{detail.closingParagraph}</p>
        </div>

        {/* Reviews */}
        <div ref={reviewRef} className="mt-8 pt-8 border-t border-gray-100 scroll-mt-[100px]">
          <h2 className="text-lg font-medium text-[#212529] mb-4">Reviews ({detail.reviews.length}):</h2>
          <p className="text-sm text-muted mb-4">Get specific details about this product from customers who own it.</p>

          {detail.reviews.map((r, i) => (
            <div key={i} className="mb-4 pb-4 border-b border-gray-100">
              <p className="font-semibold text-ink text-sm">{r.name}</p>
              <div className="flex items-center gap-0.5 my-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className={s < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                ))}
              </div>
              <p className="text-sm text-muted">{r.comment}</p>
            </div>
          ))}

          <h3 className="font-bold text-ink mb-3 mt-6">Write your review</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input type="text" placeholder="Your Name*" className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand" />
            <input type="email" placeholder="Your Email" className="border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand" />
          </div>
          <textarea placeholder="Your Review*" rows={4} className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand mb-3" />
          <div className="flex items-center gap-3 text-sm text-muted mb-4">
            <span>Rating:</span>
            <span>Bad</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <input key={n} type="radio" name="rating" className="accent-brand" />
            ))}
            <span>Good</span>
          </div>
          <button className="bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md px-6 py-2.5 transition-colors">Continue</button>
        </div>
      </div>
    </div>
  );
}