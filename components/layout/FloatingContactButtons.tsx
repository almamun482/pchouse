"use client";

import { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const WHATSAPP_LINK = "https://wa.me/8801973167989";
const MESSENGER_LINK = "https://m.me/yourpage";
const PHONE_LINK = "tel:+8809617179141";

export default function FloatingContactButtons() {
  const { totalQty } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div className="fixed right-4 bottom-14 z-50 flex flex-col gap-3">
        <a href={MESSENGER_LINK} target="_blank" rel="noopener noreferrer" aria-label="Message us on Messenger" className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: "#0084FF" }}>
          <FaFacebookMessenger size={26} color="white" />
        </a>

        <a href={PHONE_LINK} aria-label="Call us" className="h-14 w-14 rounded-full border border-white/30 flex items-center justify-center shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: "#1C1C1C" }}>
          <FaPhoneAlt size={22} color="white" />
        </a>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: "#25D366" }}>
          <FaWhatsapp size={28} color="white" />
        </a>

        <button onClick={() => setCartOpen(true)} aria-label="View cart" className="relative h-14 w-14 rounded-[3px] bg-brand-dark hover:bg-slate-800 text-white border border-white/40 flex flex-col items-center justify-center gap-0.5 shadow-lg transition-colors">
          <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-brand text-white text-[10px] font-bold flex items-center justify-center">
            {totalQty}
          </span>
          <ShoppingCart size={18} />
          <span className="text-[9px] font-bold tracking-wide">CART</span>
        </button>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}