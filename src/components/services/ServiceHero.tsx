import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "../shared/Container";
import Breadcrumbs from "../shared/Breadcrumbs";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { companyInfo } from "@/data/company";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  description: string;
}

export default function ServiceHero({
  title,
  tagline,
  description,
}: ServiceHeroProps) {
  return (
    <div className="bg-gradient-to-b from-[#F0F7F4] via-[#F8FAF9] to-white pt-8 pb-14 border-b border-gray-100">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: title },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#0D4734] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#CDE3D6]">
            <span>ENGINEERED BY THE SHED MASTER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-emerald-800 font-medium mb-3">
            {tagline}
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(title)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D4734] hover:bg-[#083325] text-white text-sm font-semibold transition-all shadow-md active:scale-[0.98]"
            >
              <span>Enquire About {title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/919211050139?text=Hello%20The%20Shed%20Master%2C%20I%20am%20interested%20in%20${encodeURIComponent(title)}%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#E8F8EE] text-gray-800 border border-gray-200 hover:border-[#25D366] text-sm font-semibold transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-current" />
              <span>Chat With Us</span>
            </a>

            <a
              href={`tel:${companyInfo.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#0D4734] px-3 py-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0D4734]" />
              <span>Call +91 92110 50139</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
