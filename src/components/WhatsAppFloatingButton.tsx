"use client";

import { CONTACT } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 start-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
