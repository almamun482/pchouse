"use client";

import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

export default function BuyNowButton({
  product,
  selectedColor,
}: {
  product: Omit<CartItem, "qty" | "color">;
  selectedColor?: string;
}) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem({ ...product, color: selectedColor }, 1)}
      className="flex-1 bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md py-2.5 transition-colors"
    >
      Buy Now
    </button>
  );
}