export type Slide = {
  id: number;
  image: string; // path inside /public/images/slides/
  alt: string;
  href: string;
};

export const slides: Slide[] = [
  { id: 1, image: "/images/website/sliders/1111.jpeg", alt: "World Cup Projector Deal", href: "/category/projector" },
  { id: 2, image: "/images/website/sliders/sjgam-gaming-console.jpeg", alt: "Slide 2", href: "/todays-deals" },
  { id: 3, image: "/images/website/sliders/monitor-slider.jpg", alt: "Slide 3", href: "/todays-deals" },
  { id: 4, image: "/images/website/sliders/furycube-g.jpg", alt: "Slide 4", href: "/todays-deals" },
];