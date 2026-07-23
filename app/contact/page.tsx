import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ExternalLink } from "lucide-react";
import { storeLocations } from "@/data/locations";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = { title: "Contact - PC House BD" };

export default function ContactPage() {
  return (
    <div className="bg-[#F2F3F8]">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <div className="container-x py-8 space-y-6">
        {/* Top info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white section-card p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted">Contact Us</p>
              <p className="font-bold text-ink">01673991833</p>
            </div>
          </div>

          <div className="bg-white section-card p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted">For Corporate Deals &amp; Complain</p>
              <p className="font-bold text-ink">pchousebd2009@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Store locations */}
        <div className="space-y-6">
          {storeLocations.map((loc) => (
            <div key={loc.id} className="bg-white section-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                <div className="relative h-48 md:h-auto">
                  <Image
                    src={loc.image}
                    alt={loc.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#0073E6] text-white text-xs font-bold rounded px-3 py-1.5 leading-tight">
                    Business Hours
                    <br />
                    10AM–8PM
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="font-bold text-ink">{loc.title}</h2>
                    <span className="bg-[#EBEDF8] text-brand text-xs font-semibold rounded-full px-3 py-1">
                      {loc.closedDay}
                    </span>
                  </div>

                  <p className="text-sm text-muted mb-3">{loc.address}</p>

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-semibold text-brand">
                    {loc.categories.map((cat, i) => (
                      <span key={cat} className="flex items-center gap-3">
                        {cat}
                        {i < loc.categories.length - 1 && <span className="text-gray-300 font-normal">|</span>}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-brand text-brand font-semibold text-sm rounded-md px-4 py-2 hover:bg-brand hover:text-white transition-colors"
                  >
                    Map
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}