export type FeaturedCategory = {
  name: string;
  slug: string;
  icon:
    | "Cpu"
    | "CircuitBoard"
    | "HardDrive"
    | "Laptop"
    | "MemoryStick"
    | "Mouse"
    | "Keyboard"
    | "Camera"
    | "Video"
    | "Tablet"
    | "Headphones"
    | "BatteryCharging"
    | "Monitor"
    | "Wifi"
    | "Watch"
    | "Projector";
};

export const featuredCategories: FeaturedCategory[] = [
  { name: "Processor", slug: "processor", icon: "Cpu" },
  { name: "Motherboard", slug: "motherboard", icon: "CircuitBoard" },
  { name: "SSD", slug: "ssd", icon: "HardDrive" },
  { name: "Laptops", slug: "laptops", icon: "Laptop" },
  { name: "Graphics Card", slug: "graphics-card", icon: "MemoryStick" },
  { name: "Mouse", slug: "mouse", icon: "Mouse" },
  { name: "Keyboard", slug: "keyboard", icon: "Keyboard" },
  { name: "Action Camera", slug: "action-camera", icon: "Camera" },
  { name: "Gimbal Collection", slug: "gimbal-collection", icon: "Video" },
  { name: "Graphics Tablet", slug: "graphics-tablet", icon: "Tablet" },
  { name: "Headphones & Headsets", slug: "headphones-and-headsets", icon: "Headphones" },
  { name: "Power Bank", slug: "power-bank", icon: "BatteryCharging" },
  { name: "Monitor", slug: "monitor", icon: "Monitor" },
  { name: "Networking", slug: "networking", icon: "Wifi" },
  { name: "Smart Watch", slug: "smart-watch", icon: "Watch" },
  { name: "Projector", slug: "projector", icon: "Projector" },
];