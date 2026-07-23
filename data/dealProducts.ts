export type DealProduct = {
  id: number;
  slug: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  images?: string[];
  categorySlug?: string;
  processor?: "Intel" | "AMD" | "Apple" | "";
  ram?: string;
  ssd?: string;
  graphics?: string;
  availability?: "In Stock" | "Pre Order" | "Up Coming";
};

export const specialsOfferProducts: DealProduct[] = [
  { id: 101, slug: "wanbo-vali-1-pro-900-projector", name: "Wanbo Vali 1 Pro 900 ANSI Lumens Auto Focus Google TV Smart Projector", price: 32890, oldPrice: 35000, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 102, slug: "wanbo-togo-pro-500-projector", name: "Wanbo ToGo Pro 500 ANSI Lumens 1080P Portable Android Projector", price: 32500, oldPrice: 33000, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 103, slug: "magcubic-l018-650-projector", name: "Magcubic L018 650 ANSI Lumens Portable Outdoor Projector", price: 14500, oldPrice: 19000, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 104, slug: "magcubic-hy320-ntv-projector", name: "Magcubic HY320 NTV (Netflix, YouTube) Officially Licensed Android Projector", price: 13500, oldPrice: 13500, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 105, slug: "cheerlux-c9-3600-projector", name: "Cheerlux C9 3600 Lumens Full HD Android Projector (New Edition)", price: 15499, oldPrice: 19500, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 106, slug: "cheerlux-c1770-4000-projector", name: "Cheerlux C1770 4000 Lumens Android Full HD Multimedia Projector", price: 20400, oldPrice: 29000, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 107, slug: "wanbo-mozart-1-pro-1200-projector", name: "Wanbo Mozart 1 Pro 1200 Lumens Smart Android Portable LED Projector", price: 42000, oldPrice: 46000, rating: 5, image: "photo-1478720568477-152d9b164e26", categorySlug: "projector", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 108, slug: "titan-army-p275mv-monitor", name: "Titan Army P275MV 27 inch 4K 160Hz IPS Mini LED Gaming Monitor", price: 55400, oldPrice: 58000, rating: 5, image: "photo-1527443224154-c4a3942d3acf", categorySlug: "monitor", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 109, slug: "xiaomi-redmi-g34wq-monitor", name: "Xiaomi REDMI G34WQ 34 inch 180Hz UWQHD Gaming Monitor", price: 38200, oldPrice: 42400, rating: 5, image: "photo-1527443224154-c4a3942d3acf", categorySlug: "monitor", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 110, slug: "teclast-artpad-pro-lte-tablet", name: "Teclast ArtPad Pro LTE 8GB 256GB 12.7 inch IPS Tablet", price: 36000, oldPrice: 40900, rating: 5, image: "photo-1544244015-0df4b3ffc6b0", categorySlug: "tablet", processor: "", ram: "8 GB", ssd: "256GB SSD", graphics: "", availability: "In Stock" },
  { id: 111, slug: "xp-pen-artist-22-plus-tablet", name: "XP-Pen Artist 22 Plus X3 Pro Stylus Drawing Display Tablet", price: 63000, oldPrice: 69000, rating: 5, image: "photo-1544244015-0df4b3ffc6b0", categorySlug: "tablet", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 112, slug: "aoc-agon-ag493qcx-monitor", name: 'AOC AGON AG493QCX 49" Dual FHD 144Hz VA Curved Gaming Monitor', price: 124500, oldPrice: 149000, rating: 5, image: "photo-1527443224154-c4a3942d3acf", categorySlug: "monitor", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 113, slug: "logitech-g923-trueforce-wheel", name: "Logitech G923 TRUEFORCE Gaming Racing Wheel for PlayStation and PC", price: 42990, oldPrice: 53000, rating: 5, image: "photo-1592840062661-a5a7f78e2056", categorySlug: "gaming", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 114, slug: "magegee-captain87-keyboard", name: "MageGee Captain87 Rapid Trigger Magnetic Switch Keyboard", price: 6300, oldPrice: 6900, rating: 5, image: "photo-1595225476474-63038da0f2f9", categorySlug: "keyboard", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 115, slug: "furycube-g87-keyboard", name: "Furycube G87 RGB Gasket Hot-swappable Wired Mechanical Keyboard", price: 4500, oldPrice: 4900, rating: 5, image: "photo-1595225476474-63038da0f2f9", categorySlug: "keyboard", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 116, slug: "magegee-gk960-keyboard", name: "MageGee GK960 Wired RGB Gaming Keyboard", price: 2300, oldPrice: 2600, rating: 5, image: "photo-1595225476474-63038da0f2f9", categorySlug: "keyboard", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 117, slug: "furycube-g9-pro-mouse", name: "Furycube G9 Pro Lightweight Ergonomic Wireless Gaming Mouse", price: 3500, oldPrice: 4000, rating: 5, image: "photo-1527814050087-3793815479db", categorySlug: "mouse", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
  { id: 118, slug: "mchose-g3-v2-pro-mouse", name: "MCHOSE G3 V2 Pro Tri-mode Gaming Mouse", price: 4200, oldPrice: 4600, rating: 5, image: "photo-1527814050087-3793815479db", categorySlug: "mouse", processor: "", ram: "", ssd: "", graphics: "", availability: "In Stock" },
];

export const gamingPcProducts: DealProduct[] = [
  { id: 201, slug: "amd-ryzen-5-5600-desktop-pc", name: "AMD Ryzen 5 5600 Desktop PC", price: 73999, oldPrice: 83000, rating: 5, image: "photo-1587202372775-e229f172b9d7", categorySlug: "desktop", processor: "AMD", ram: "16 GB", ssd: "512GB SSD", graphics: "Dedicated 6GB", availability: "In Stock" },
  { id: 202, slug: "intel-i5-12400f-desktop-pc", name: "Intel i5 12400F Desktop PC", price: 109000, oldPrice: 120000, rating: 5, image: "photo-1587202372775-e229f172b9d7", categorySlug: "desktop", processor: "Intel", ram: "16 GB", ssd: "512GB SSD", graphics: "Dedicated 8GB", availability: "In Stock" },
  { id: 203, slug: "intel-i5-13400f-desktop-pc", name: "Intel i5 13400F Desktop PC", price: 127500, oldPrice: 138500, rating: 5, image: "photo-1587202372775-e229f172b9d7", categorySlug: "desktop", processor: "Intel", ram: "16 GB", ssd: "1TB SSD", graphics: "Dedicated 8GB", availability: "In Stock" },
  { id: 204, slug: "amd-ryzen-7-9800x3d-desktop-pc", name: "AMD Ryzen 7 9800X3D Desktop PC", price: 325000, oldPrice: 349000, rating: 5, image: "photo-1587202372775-e229f172b9d7", categorySlug: "desktop", processor: "AMD", ram: "32 GB", ssd: "1TB SSD", graphics: "Dedicated 16GB", availability: "In Stock" },
  { id: 205, slug: "amd-ryzen-7-7700-desktop-pc", name: "AMD Ryzen 7 7700 Desktop PC", price: 141900, oldPrice: 159000, rating: 5, image: "photo-1587202372775-e229f172b9d7", categorySlug: "desktop", processor: "AMD", ram: "16 GB", ssd: "512GB SSD", graphics: "Dedicated 8GB", availability: "In Stock" },
  { id: 206, slug: "amd-ryzen-7-7700-gaming-desktop-pc", name: "AMD Ryzen 7 7700 Gaming Desktop PC", price: 112000, oldPrice: 120000, rating: 5, image: "photo-1587202372775-e229f172b9d7", categorySlug: "desktop", processor: "AMD", ram: "32 GB", ssd: "1TB SSD", graphics: "Dedicated 12GB", availability: "In Stock" },
];

export const laptopOfferProducts: DealProduct[] = [
  { id: 301, slug: "asus-rog-strix-g513rc", name: "Asus Rog Strix G513RC-HN056 15.6 inch FHD 144Hz 8GB DDR5 RAM 1TB SSD Gaming Laptop", price: 129500, oldPrice: 138000, rating: 5, image: "photo-1496181133206-80ce9b88a853", categorySlug: "laptops", processor: "AMD", ram: "8 GB", ssd: "1TB SSD", graphics: "Dedicated 6GB", availability: "In Stock" },
  { id: 302, slug: "asus-tuf-f15-fx507zc4", name: "ASUS TUF Gaming F15 FX507ZC4-HN065 Core i7-12700H 15.6 inch FHD 8GB RAM 512GB SSD Gaming Laptop", price: 130000, oldPrice: 145500, rating: 5, image: "photo-1496181133206-80ce9b88a853", categorySlug: "laptops", processor: "Intel", ram: "8 GB", ssd: "512GB SSD", graphics: "Dedicated 4GB", availability: "In Stock" },
  { id: 303, slug: "asus-tuf-a15-fa507rf", name: "ASUS TUF Gaming A15 FA507RF-HN029 AMD Ryzen 7 6800HS 15.6 inch FHD 16GB RAM 512GB SSD RTX 2050 Laptop", price: 115000, oldPrice: 130000, rating: 5, image: "photo-1496181133206-80ce9b88a853", categorySlug: "laptops", processor: "AMD", ram: "16 GB", ssd: "512GB SSD", graphics: "Dedicated 4GB", availability: "In Stock" },
  { id: 304, slug: "samsung-galaxy-book-core-i5", name: 'Samsung Galaxy Book Core i5 11th Gen 8GB RAM 256GB SSD 15.6" FHD Laptop', price: 79999, oldPrice: 88900, rating: 5, image: "photo-1496181133206-80ce9b88a853", categorySlug: "laptops", processor: "Intel", ram: "8 GB", ssd: "256GB SSD", graphics: "Shared / Integrated", availability: "In Stock" },
  { id: 305, slug: "chuwi-minibook-x-n150", name: "Chuwi MiniBook X Intel Celeron N150 10.5 inch FHD+ Touch Laptop", price: 45000, oldPrice: 49900, rating: 5, image: "photo-1496181133206-80ce9b88a853", categorySlug: "laptops", processor: "Intel", ram: "8 GB", ssd: "256GB SSD", graphics: "Shared / Integrated", availability: "In Stock" },
  { id: 306, slug: "asus-zenbook-q409za", name: "ASUS ZenBook Q409ZA-EVO.i5256BL Intel Core i5-1240P 14 inch OLED 8GB DDR5 256GB SSD Laptop", price: 99000, oldPrice: 110000, rating: 5, image: "photo-1496181133206-80ce9b88a853", categorySlug: "laptops", processor: "Intel", ram: "8 GB", ssd: "256GB SSD", graphics: "Shared / Integrated", availability: "In Stock" },
];