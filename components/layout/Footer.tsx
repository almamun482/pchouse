import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Store,
  Building2,
  Wrench,
  Smartphone,
} from "lucide-react";
import { supportDesks, branches } from "@/data/footer";

const branchIcons = { "Retail Branch": Store, "Head Office": Building2, "Service Center & RMA": Wrench } as const;

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      {/* Support desk strip */}
      <div className="border-b border-white/10">
        <div className="container-x py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportDesks.map((d) => (
            <div
              key={d.title}
              className="flex items-start gap-3 bg-panel border border-white/10 rounded-md px-4 py-3"
            >
              <div className="h-9 w-9 shrink-0 rounded bg-white/5 border border-white/15 flex items-center justify-center text-brand">
                <Smartphone size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-brand text-xs font-bold tracking-wide uppercase">
                  {d.title}
                </p>
                {d.numbers.map((n, i) => (
                  <p key={i} className="text-xs text-white/70 leading-relaxed">
                    {n}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-x grid grid-cols-1 lg:grid-cols-4 gap-10 py-10 text-center lg:text-left">
        {/* Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm mb-5 flex flex-col items-center lg:items-start">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-brand shrink-0" />
              <a href="mailto:pchousebd2009@gmail.com" className="hover:text-brand">
                pchousebd2009@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-brand shrink-0" />
              <a href="tel:+8809617179141" className="hover:text-brand">
                (+88) 09617179141
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
            {[Facebook, Youtube, Twitter, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/15 hover:bg-brand hover:border-brand transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <Link
              href="/our-location"
              className="flex items-center gap-1.5 text-xs font-semibold border border-brand text-brand px-3 py-2 rounded-md hover:bg-brand hover:text-white transition-colors"
            >
              <MapPin size={13} /> OUR LOCATION
            </Link>
            <Link
              href="/complaint"
              className="flex items-center gap-1.5 text-xs font-semibold border border-brand text-brand px-3 py-2 rounded-md hover:bg-brand hover:text-white transition-colors"
            >
              RAISE A COMPLAINT
            </Link>
          </div>
        </div>

        {/* About Us — bullet-separated on mobile, two columns on desktop */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold mb-4">About Us</h4>

          {/* Mobile: inline, bullet-separated, centered */}
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm lg:hidden">
            {[
              { href: "/about-us", label: "About Us" },
              { href: "/delivery-information", label: "Delivery Information" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-and-conditions", label: "Terms & Conditions" },
              { href: "/brands", label: "Brands" },
              { href: "/contact", label: "Contact us" },
              { href: "/blog", label: "Blog" },
              { href: "/warranty-policy", label: "Warranty Policy" },
            ].map((item, i, arr) => (
              <li key={item.href} className="flex items-center gap-2">
                <Link href={item.href} className="hover:text-brand">{item.label}</Link>
                {i < arr.length - 1 && <span className="text-brand">•</span>}
              </li>
            ))}
          </ul>

          {/* Desktop: two columns */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about-us" className="hover:text-brand">About Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-brand">Privacy Policy</Link></li>
              <li><Link href="/brands" className="hover:text-brand">Brands</Link></li>
              <li><Link href="/blog" className="hover:text-brand">Blog</Link></li>
            </ul>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/delivery-information" className="hover:text-brand">Delivery Information</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-brand">Terms &amp; Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-brand">Contact us</Link></li>
              <li><Link href="/warranty-policy" className="hover:text-brand">Warranty Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Affiliation</h4>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="h-20 w-20 rounded bg-white p-2 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/bcs222.png"
                alt="Affiliation partner 1"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="h-20 w-20 rounded bg-white p-2 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/ecs222.png"
                alt="Affiliation partner 2"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Branch cards */}
      <div className="border-t border-white/10">
        <div className="container-x py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((b) => {
            const Icon = branchIcons[b.title as keyof typeof branchIcons] ?? Store;
            return (
              <div
                key={b.title}
                className="rounded-lg border border-white/5 bg-footercard p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-brand" />
                  <h5 className="text-white font-semibold text-sm">{b.title}</h5>
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-3">
                  {b.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < b.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>

                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <Clock size={13} className="text-brand shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white/90">Business Hour:</strong> {b.businessHour}
                    </span>
                  </li>
                  {b.hotline && (
                    <li className="flex items-start gap-2">
                      <Phone size={13} className="text-brand shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white/90">Hotline:</strong> {b.hotline}
                      </span>
                    </li>
                  )}
                  {b.whatsapp && (
                    <li className="flex items-start gap-2">
                      <MessageCircle size={13} className="text-brand shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white/90">WhatsApp:</strong> {b.whatsapp}
                      </span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <Clock size={13} className="text-brand shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white/90">Weekend:</strong> {b.weekend}
                    </span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            Copyright © {new Date().getFullYear()} PCHouse, All Rights Reserved | Develop by{" "}
            <a href="#" className="text-brand hover:underline">
              Againsoft
            </a>
          </p>
          
          <Image
            src="/images/pchouse-payment.png"
            alt="Accepted payment methods"
            width={630}
            height={71}
            style={{ width: "630px", height: "auto" }}
          />
        </div>
      </div>
    </footer>
  );
}
