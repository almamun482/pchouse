import Link from "next/link";
import {
  Cpu,
  CircuitBoard,
  HardDrive,
  Laptop,
  MemoryStick,
  Mouse,
  Keyboard,
  Camera,
  Video,
  Tablet,
  Headphones,
  BatteryCharging,
  Monitor,
  Wifi,
  Watch,
  Projector,
} from "lucide-react";
import { featuredCategories } from "@/data/featuredCategories";

const iconMap = {
  Cpu,
  CircuitBoard,
  HardDrive,
  Laptop,
  MemoryStick,
  Mouse,
  Keyboard,
  Camera,
  Video,
  Tablet,
  Headphones,
  BatteryCharging,
  Monitor,
  Wifi,
  Watch,
  Projector,
};

export default function FeaturedCategoryGrid() {
  return (
    <section className="container-x py-6">
      <div className="bg-white rounded-lg text-center py-2 mb-6">
        <h2 className="text-xl md:text-xl font-bold text-ink">Featured Category</h2>
        <p className="text-sm text-muted">Select Your Category</p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {featuredCategories.map((c) => {
          const Icon = iconMap[c.icon];
          return (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group flex flex-col items-center text-center gap-2 bg-white rounded-lg border border-gray-100 p-4 hover:border-brand hover:shadow-card transition-all"
            >
              <Icon size={65} strokeWidth={1.25} className="text-ink group-hover:text-brand transition-colors" />
              <span className="text-[13px] md:text-xs font-bold leading-snug">{c.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}