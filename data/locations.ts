export type StoreLocation = {
  id: number;
  title: string;
  closedDay: string;
  address: string;
  categories: string[];
  mapUrl: string;
  image: string; // unsplash placeholder — replace with your own store photos
};

export const storeLocations: StoreLocation[] = [
  {
    id: 1,
    title: "Head Office",
    closedDay: "Tuesday Closed",
    address: "Shop: 1414, Level 14, Computer City Center , (Multiplan Center) New Elephant Road, Dhaka-1205, Bangladesh.",
    categories: ["Desktop", "Laptop", "Accessories"],
    mapUrl: "https://maps.app.goo.gl/TFJj2K58QHGwBpsH9",
    image: "/images/website/pchouse/branch-1.png",
  },
  {
    id: 2,
    title: "Showroom",
    closedDay: "Tuesday Closed",
    address: "Shop: 248,249,250, Level 2, Computer City Center , (Multiplan Center) New Elephant Road, Dhaka-1205, Bangladesh.",
    categories: ["Laptop", "Desktop"],
    mapUrl: "https://maps.app.goo.gl/mWBLNqyf6CvsPMww8",
    image: "/images/website/pchouse/branch-2.png",
  },
  {
    id: 3,
    title: "Warranty & Service Center",
    closedDay: "Tuesday Closed",
    address: "Shop: 1414, Level 14, Computer City Center , (Multiplan Center) New Elephant Road, Dhaka-1205, Bangladesh.",
    categories: ["Laptop", "Desktop"],
    mapUrl: "https://maps.app.goo.gl/cCfGsm8u4aV5qqt7A",
    image: "/images/website/pchouse/branch-3.png",
  },
];