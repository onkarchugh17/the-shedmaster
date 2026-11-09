"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { companyInfo } from "@/data/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs py-2 px-3 rounded-xl shadow-lg border border-gray-100 pointer-events-auto animate-in fade-in slide-in-from-right-4 duration-300">
          <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
          <span className="font-medium">Chat With us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 hover:bg-[#20bd5a] group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with The Shed Master on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white fill-current group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
