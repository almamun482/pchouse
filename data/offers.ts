export type Offer = {
  id: number;
  slug: string;
  image: string; // path inside /public/images/offers/
  dateRange: string;
  locationType: string;
  title: string;
  description: string;
};

export const offers: Offer[] = [
  {
    id: 1,
    slug: "bkash-1000tk-cashback-offer",
    image: "/images/website/offer/fast-storage.jpeg",
    dateRange: "07 Jul 2026-31 Aug 2026",
    locationType: "Online",
    title: "Gadget Fest",
    description: "Pc House BD তে চলছে গ্যাজেট উৎসব ডিল।",
  },
  {
    id: 2,
    slug: "router-and-mini-ups-bundle-offer",
    image: "/images/website/offer/mchose.jpeg",
    dateRange: "01 Jul 2026-31 Jul 2026",
    locationType: "Online Shop",
    title: "Fast Storage",
    description: "আপনার important files, photos, videos & games এখন রাখুন আরও fast & secure way-তে",
  },
  {
    id: 3,
    slug: "air-conditioner-deal",
    image: "/images/website/offer/Gadget-Fest.jpeg",
    dateRange: "09 Jul 2026-31 Aug 2026",
    locationType: "All Outlet",
    title: "Mchose Accessories Deal",
    description: "Pc House BD তে চলছে Mchose Accessories Deal যেখানে থাকছে নির্দিষ্ট প্রোডাক্ট এর উপর...",
  },
];