"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { deliveryOptions } from "@/data/deliveryOptions";

const HOME_DELIVERY_FEE = deliveryOptions.find((d) => d.id === "home")?.fee ?? 0;

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, subtotal } = useCart();
  const [promo, setPromo] = useState("");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Mount the drawer immediately when opened, then flip `visible` on the
  // next tick so the CSS transition actually animates in from the right.
  useEffect(() => {
    if (open) {
      setMounted(true);
      // Double rAF: the first frame lets the browser paint the drawer in its
      // "off-screen" starting position; only the second frame flips it to
      // visible, which is what actually triggers the CSS transition.
      const id1 = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(id2);
      });
      return () => cancelAnimationFrame(id1);
    } else {
      setVisible(false);
    }
  }, [open]);

  // Once the slide-out transition finishes, unmount the drawer entirely.
  const handleTransitionEnd = () => {
    if (!open) setMounted(false);
  };

  const deliveryFee = items.length > 0 ? HOME_DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        onTransitionEnd={handleTransitionEnd}
        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-brand-dark text-white px-4 py-4 flex items-center justify-between shrink-0">
          <h3 className="font-bold text-sm tracking-wide">YOUR CART</h3>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-muted p-6">
              <ShoppingCart size={40} className="text-gray-300" />
              <p className="text-sm">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.slug + (item.color ?? "")} className="flex items-start gap-3 px-4 py-4 border-b border-gray-100">
                <div className="relative h-12 w-12 shrink-0 rounded bg-gray-50 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${item.image}?w=100&h=100&fit=crop`}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink line-clamp-2">{item.name}</p>
                  <p className="text-sm mt-1">
                    <span className="font-bold">{formatTaka(item.price)}৳</span>{" "}
                    <span className="text-muted">x {item.qty} =</span>{" "}
                    <span className="font-bold">{formatTaka(item.price * item.qty)}৳</span>
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.slug)}
                  aria-label="Remove item"
                  className="text-gray-400 hover:text-red-500 shrink-0"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="shrink-0 border-t border-gray-100">
            <div className="p-4">
              <div className="flex items-stretch bg-gray-50 border border-gray-200 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Promo Code"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm outline-none"
                />
                <button className="shrink-0 bg-brand-dark hover:bg-slate-800 text-white text-sm font-semibold px-5 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <div className="px-4 pb-2 space-y-2 text-sm">
              <div className="flex justify-between text-muted">
                <span>Sub-Total</span>
                <span className="font-semibold text-ink">{formatTaka(subtotal)}৳</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Home Delivery</span>
                <span className="font-semibold text-ink">{formatTaka(deliveryFee)}৳</span>
              </div>
              <div className="flex justify-between font-bold text-ink pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>{formatTaka(total)}৳</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block text-center bg-brand hover:bg-orange-600 text-white font-bold py-2.5 transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}