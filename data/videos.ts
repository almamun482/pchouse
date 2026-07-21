export type Video = {
  id: number;
  youtubeId: string;
  title: string;
  description: string;
};

// Sample YouTube video IDs (replace with your real product/brand videos)
export const videos: Video[] = [
  {
    id: 1,
    youtubeId: "dQw4w9WgXcQ",
    title: "TechPikly Warehouse Tour 2026",
    description: "A behind-the-scenes look at our global logistics and fulfillment center.",
  },
  {
    id: 2,
    youtubeId: "9bZkp7q19f0",
    title: "Unboxing: Gaming Laptop Pro 15\"",
    description: "First impressions and unboxing of our best-selling gaming laptop.",
  },
  {
    id: 3,
    youtubeId: "eY52Zsg-KVI",
    title: "Top 5 Smart Gadgets This Month",
    description: "Our editors pick the five smart gadgets you should not miss.",
  },
  {
    id: 4,
    youtubeId: "3JZ_D3ELwOQ",
    title: "How We Ship Globally",
    description: "A quick explainer of TechPikly's international shipping process.",
  },
  {
    id: 5,
    youtubeId: "kXYiU_JCYtU",
    title: "Solar Battery Setup Guide",
    description: "Step-by-step guide to setting up a Deep Cycle LiFePO4 battery bank.",
  },
  {
    id: 6,
    youtubeId: "L_jWHffIx5E",
    title: "Customer Reviews Roundup",
    description: "Real customers share their experience shopping with TechPikly.",
  },
];
