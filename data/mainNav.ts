export type MainNavItem = {
  label: string;
  slug: string;
  children: { name: string; slug: string }[];
};

// Matches the top navigation bar exactly: DESKTOP, LAPTOPS, MONITOR, COMPONENTS,
// TABLET, ACCESSORIES, GAMING, CAMERAS, GADGET, OFFICE EQUIPMENT, NETWORKING, PROJECTOR, TV
export const mainNav: MainNavItem[] = [
  { label: "Desktop", slug: "desktop", children: [
    { name: "Brand PC", slug: "brand-pc" },
    { name: "Gaming PC", slug: "gaming-pc" },
    { name: "Mini PC", slug: "mini-pc" },
  ]},
  { label: "Laptops", slug: "laptops", children: [
    { name: "Gaming Laptop", slug: "gaming-laptop" },
    { name: "Business Laptop", slug: "business-laptop" },
    { name: "Student Laptop", slug: "student-laptop" },
  ]},
  { label: "Monitor", slug: "monitor", children: [
    { name: "Gaming Monitor", slug: "gaming-monitor" },
    { name: "Office Monitor", slug: "office-monitor" },
  ]},
  { label: "Components", slug: "components", children: [
    { name: "Processor", slug: "processor" },
    { name: "Motherboard", slug: "motherboard" },
    { name: "Graphics Card", slug: "graphics-card" },
    { name: "RAM", slug: "ram" },
    { name: "Power Supply", slug: "power-supply" },
    { name: "Casing", slug: "casing" },
  ]},
  { label: "Tablet", slug: "tablet", children: [
    { name: "Android Tablet", slug: "android-tablet" },
    { name: "iPad", slug: "ipad" },
  ]},
  { label: "Accessories", slug: "accessories", children: [
    { name: "Keyboard", slug: "keyboard" },
    { name: "Mouse", slug: "mouse" },
    { name: "Headphone", slug: "headphone" },
  ]},
  { label: "Gaming", slug: "gaming", children: [
    { name: "Gaming Chair", slug: "gaming-chair" },
    { name: "Gaming Headset", slug: "gaming-headset" },
    { name: "Controller", slug: "controller" },
  ]},
  { label: "Cameras", slug: "cameras", children: [
    { name: "Action Camera", slug: "action-camera" },
    { name: "Webcam", slug: "webcam" },
  ]},
  { label: "Gadget", slug: "gadget", children: [
    { name: "Smart Watch", slug: "smart-watch" },
    { name: "Power Bank", slug: "power-bank" },
  ]},
  { label: "Office Equipment", slug: "office-equipment", children: [
    { name: "Printer", slug: "printer" },
    { name: "Scanner", slug: "scanner" },
  ]},
  { label: "Networking", slug: "networking", children: [
    { name: "Router", slug: "router" },
    { name: "Switch", slug: "switch" },
  ]},
  { label: "Projector", slug: "projector", children: [
    { name: "Home Projector", slug: "home-projector" },
    { name: "Business Projector", slug: "business-projector" },
  ]},
  { label: "TV", slug: "tv", children: [
    { name: "Smart TV", slug: "smart-tv" },
    { name: "Android TV", slug: "android-tv" },
  ]},
];
