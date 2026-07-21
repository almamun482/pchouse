"use client";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

export default function BuyNowButton({ product }: { product: Omit<CartItem, "qty"> }) {
  const { addItem } = useCart();
  return (
    <button onClick={() => addItem(product, 1)} className="flex-1 bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md py-2.5 transition-colors">
      Buy Now
    </button>
  );
}