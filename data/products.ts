export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  badge?: "Hot" | "New" | "Sale";
  description: string;
};

const img = (seed: string, w = 600, h = 600) =>
  `https://images.unsplash.com/${seed}?w=${w}&h=${h}&fit=crop`;

export const products: Product[] = [
  {
    id: 1,
    slug: "gaming-laptop-pro-15",
    name: "Gaming Laptop Pro 15\" RTX Edition",
    category: "Laptops, Notebooks & Netbooks",
    price: 1299,
    oldPrice: 1499,
    image: "photo-1496181133206-80ce9b88a853",
    rating: 4.6,
    badge: "Hot",
    description:
      "High-performance gaming laptop with a 15-inch display, dedicated graphics, and fast SSD storage — built for gaming and creative workloads.",
  },
  {
    id: 2,
    slug: "true-wireless-earbuds-tws-x2",
    name: "True Wireless Stereo Earbuds TWS X2",
    category: "Headphones, Earphones & Earbuds",
    price: 39,
    oldPrice: 59,
    image: "photo-1590658268037-6bf12165a8df",
    rating: 4.3,
    badge: "Sale",
    description:
      "Compact true wireless earbuds with active noise cancellation, long battery life, and a secure fit for everyday use.",
  },
  {
    id: 3,
    slug: "smart-fitness-watch-gps",
    name: "Sports & GPS Smartwatch",
    category: "Smart Wearables",
    price: 89,
    image: "photo-1523275335684-37898b6baf30",
    rating: 4.5,
    badge: "New",
    description:
      "GPS-enabled fitness smartwatch with heart-rate tracking, sleep monitoring, and a bright always-on display.",
  },
  {
    id: 4,
    slug: "portable-bluetooth-party-speaker",
    name: "Portable Party Speaker with LED Lights",
    category: "Portable Bluetooth Speakers",
    price: 55,
    oldPrice: 70,
    image: "photo-1608043152269-423dbba4e7e1",
    rating: 4.2,
    description:
      "Waterproof outdoor speaker with punchy bass, colorful LED lighting, and long-lasting battery for parties on the go.",
  },
  {
    id: 5,
    slug: "4k-ultra-hd-smart-tv-55",
    name: '4K Ultra HD Smart TV 55"',
    category: "Smart TVs, Projectors & Projection Screens",
    price: 449,
    image: "photo-1593359677879-a4bb92f829d1",
    rating: 4.7,
    badge: "Hot",
    description:
      "Crisp 4K resolution smart TV with HDR support, built-in streaming apps, and a slim bezel-less design.",
  },
  {
    id: 6,
    slug: "fast-charging-gan-adapter-65w",
    name: "65W GaN Fast Charging Wall Adapter",
    category: "Cables, Adapters & Wireless Chargers",
    price: 24,
    image: "photo-1591290619762-c4b4c9d47f6f",
    rating: 4.4,
    description:
      "Compact GaN wall charger delivering 65W fast charging for laptops, phones, and tablets from a single port.",
  },
  {
    id: 7,
    slug: "high-capacity-power-bank-20000",
    name: "High-Capacity Power Bank 20000mAh",
    category: "Power Banks & Portable Chargers",
    price: 32,
    oldPrice: 42,
    image: "photo-1585338447937-7082f8fc763d",
    rating: 4.1,
    badge: "Sale",
    description:
      "20000mAh power bank with dual USB output and fast charging support to keep all your devices powered on the go.",
  },
  {
    id: 8,
    slug: "mini-pc-desktop-workstation",
    name: "Mini PC Desktop Workstation",
    category: "Desktop PCs & Workstations",
    price: 389,
    image: "photo-1587202372775-e229f172b9d7",
    rating: 4.5,
    badge: "New",
    description:
      "Space-saving mini PC with capable processing power for office work, media centers, and light workstation tasks.",
  },
];

export function findProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, count = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
