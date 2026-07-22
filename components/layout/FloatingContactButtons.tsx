"use client";

import { MessageCircle, Phone, Send } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8801973167989";
const MESSENGER_LINK = "https://m.me/yourpage";
const PHONE_LINK = "tel:+8809617179141";

export default function FloatingContactButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a href={MESSENGER_LINK} target="_blank" rel="noopener noreferrer" aria-label="Message us on Messenger" className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-colors">
        <Send size={20} />
      </a>

      <a href={PHONE_LINK} aria-label="Call us" className="h-12 w-12 rounded-full bg-ink hover:bg-black text-white flex items-center justify-center shadow-lg transition-colors">
        <Phone size={20} />
      </a>

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors">
        <MessageCircle size={20} />
      </a>
    </div>
  );
}