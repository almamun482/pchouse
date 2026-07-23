"use client";

import Link from "next/link";
import { X, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

export default function CartAddedModal() {
  const { lastAdded, clearLastAdded, totalQty, subtotal } = useCart();

  if (!lastAdded) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
      onClick={clearLastAdded}
    >
      <div
        className="relative bg-white rounded-lg max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={clearLastAdded}
          aria-label="Close"
          className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center border-2 border-white shadow-md hover:bg-orange-600"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col items-center text-center mb-4">
          <CheckCircle2 size={40} className="text-emerald-500 mb-3" />
          <p className="text-sm text-ink">
            You have added <span className="text-brand-dark font-semibold">{lastAdded.name}</span> to your shopping cart!
          </p>
        </div>

        <div className="border border-gray-200 rounded-md divide-y divide-gray-100 mb-5">
          <div className="flex items-center justify-between px-4 py-2.5 text-sm">
            <span className="text-muted">Cart Quantity:</span>
            <strong>{totalQty}</strong>
          </div>
          <div className="flex items-center justify-between px-4 py-2.5 text-sm">
            <span className="text-muted">Cart Total:</span>
            <strong>{formatTaka(subtotal)}৳</strong>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/cart"
            onClick={clearLastAdded}
            className="text-center bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md py-2.5 text-sm transition-colors"
          >
            VIEW CART
          </Link>
          <Link
            href="/checkout"
            onClick={clearLastAdded}
            className="text-center bg-brand-dark hover:bg-slate-800 text-white font-semibold rounded-md py-2.5 text-sm transition-colors"
          >
            CONFIRM ORDER
          </Link>
        </div>
      </div>
    </div>
  );
}