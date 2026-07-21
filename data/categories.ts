export type SubCategory = {
  name: string;
  slug: string;
};

export type Category = {
  name: string;
  slug: string;
  icon: string; // lucide icon name
  children: SubCategory[];
};

// Top-level categories + sample sub-categories, mirroring the real
// TechPickly (OpenCart) mega-menu structure.
export const categories: Category[] = [
  {
    name: "Consumer Electronics and IT Equipment's",
    slug: "consumer-electronics-and-it-equipments",
    icon: "Laptop",
    children: [
      { name: "Computing & IT Infrastructure", slug: "computing-and-it-infrastructure" },
      { name: "AI Devices & Smart IoT", slug: "ai-devices-and-smart-iot" },
      { name: "Mobile Phones & Accessories", slug: "mobile-phones-and-accessories" },
      { name: "Audio & Video Equipment", slug: "audio-and-video-equipment" },
    ],
  },
  {
    name: "Electric Equipment's and Components",
    slug: "electric-equipments-and-components",
    icon: "Plug",
    children: [
      { name: "Electronic Components & Semiconductors", slug: "electronic-components-and-semiconductors" },
      { name: "Electrical Distribution & Protection", slug: "electrical-distribution-and-protection" },
      { name: "Power Supplies & Transformers", slug: "power-supplies-and-transformers" },
      { name: "Wires, Cables & Assemblies", slug: "wires-cables-and-assemblies" },
    ],
  },
  {
    name: "Health, Beauty & Personal Care",
    slug: "health-beauty-and-personal-care",
    icon: "HeartPulse",
    children: [
      { name: "Medical Devices & Health Tech", slug: "medical-devices-and-health-tech" },
      { name: "Skincare, Cosmetics & Makeup", slug: "skincare-cosmetics-and-makeup" },
      { name: "Hair & Personal Care Tools", slug: "hair-and-personal-care-tools" },
      { name: "Fragrances & Wellness", slug: "fragrances-and-wellness" },
    ],
  },
  {
    name: "Fashion Apparel & Lifestyle",
    slug: "fashion-apparel-and-lifestyle",
    icon: "Shirt",
    children: [
      { name: "Apparel & Clothing", slug: "apparel-and-clothing" },
      { name: "Footwear & Shoes", slug: "footwear-and-shoes" },
      { name: "Bags & Travel Luggage", slug: "bags-and-travel-luggage" },
      { name: "Jewelry, Watches & Eyewear", slug: "jewelry-watches-and-eyewear" },
    ],
  },
  {
    name: "Family Kids, Sports & Recreation",
    slug: "family-kids-sports-and-recreation",
    icon: "Baby",
    children: [
      { name: "Baby & Kids Care", slug: "baby-and-kids-care" },
      { name: "Toys & Educational Games", slug: "toys-and-educational-games" },
      { name: "Sports & Fitness Equipment", slug: "sports-and-fitness-equipment" },
      { name: "Outdoor Recreation & Camping", slug: "outdoor-recreation-and-camping" },
    ],
  },
  {
    name: "Smart Agriculture & Food Industry",
    slug: "smart-agriculture-and-food-industry",
    icon: "Sprout",
    children: [
      { name: "AgTech & Smart Farming", slug: "agtech-and-smart-farming" },
      { name: "Farming & Harvesting Machinery", slug: "farming-and-harvesting-machinery" },
      { name: "Agriculture Commodities", slug: "agriculture-commodities" },
      { name: "Food & Beverage Processing", slug: "food-and-beverage-processing" },
    ],
  },
  {
    name: "Construction, Infrastructure & Engineering",
    slug: "construction-infrastructure-and-engineering",
    icon: "HardHat",
    children: [
      { name: "Building Materials", slug: "building-materials" },
      { name: "Heavy Machinery", slug: "heavy-machinery" },
      { name: "Hand & Power Tools", slug: "hand-and-power-tools" },
    ],
  },
  {
    name: "Energy, Solar & Sustainability",
    slug: "energy-solar-and-sustainability",
    icon: "Sun",
    children: [
      { name: "Solar Panels & Inverters", slug: "solar-panels-and-inverters" },
      { name: "Deep Cycle 12V LiFePO4 Batteries", slug: "deep-cycle-12v-lifepo4-batteries" },
      { name: "Energy Storage Systems", slug: "energy-storage-systems" },
    ],
  },
  {
    name: "Industrial Technology, Machineries & Materials",
    slug: "industrial-technology-machineries-and-materials",
    icon: "Factory",
    children: [
      { name: "Industrial Automation", slug: "industrial-automation" },
      { name: "Raw Materials", slug: "raw-materials" },
      { name: "Manufacturing Equipment", slug: "manufacturing-equipment" },
    ],
  },
  {
    name: "Home, Decor & Appliances",
    slug: "home-decor-and-appliances",
    icon: "Sofa",
    children: [
      { name: "Kitchen Appliances", slug: "kitchen-appliances" },
      { name: "Home Decor", slug: "home-decor" },
      { name: "Furniture", slug: "furniture" },
    ],
  },
];

export function findCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
