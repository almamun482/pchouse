"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { slides } from "@/data/slides";

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="container-x pt-6">
      <div className="relative w-full aspect-[1290/412] rounded-xl overflow-hidden">
        {slides.map((s, i) => (
          <Link
            key={s.id}
            href={s.href}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </Link>
        ))}

        {/* Segmented bar indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-white" : "w-5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}