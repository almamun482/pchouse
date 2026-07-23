import Image from "next/image";
import Link from "next/link";
import { Calendar, Store } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { offers } from "@/data/offers";

export default function OfferPage() {
  return (
    <div className="bg-[#F2F3F8]">
      <Breadcrumb items={[{ label: "Offer" }]} />

      <div className="container-x py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white section-card overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-muted pb-3 mb-3 border-b border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {offer.dateRange}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Store size={14} />
                    {offer.locationType}
                  </span>
                </div>

                <h2 className="text-center font-bold text-ink mb-2">{offer.title}</h2>
                <p className="text-center text-sm text-muted mb-5 flex-1">{offer.description}</p>

                <Link
                  href={`/offer/${offer.slug}`}
                  className="block text-center bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md py-2.5 text-sm transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}