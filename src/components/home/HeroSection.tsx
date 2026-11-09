import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Star } from "lucide-react";
import Container from "../shared/Container";

// India silhouette icon in forest green
function IndiaSilhouette({ className = "w-7 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M46 5 C49 6 52 9 53 13 C54 16 53 19 51 22 C53 24 57 25 59 27 C61 29 62 31 64 33 C67 34 71 33 74 35 C78 37 83 39 87 38 C90 39 92 42 93 45 C91 47 88 47 85 47 C82 49 79 52 77 54 C75 57 71 57 68 56 C65 57 63 60 62 63 C63 66 65 69 64 72 C62 75 60 78 57 80 C55 84 53 88 51 92 C49 97 47 103 45 109 C44 111 42 111 41 108 C39 103 37 96 35 91 C33 86 30 81 28 76 C26 72 24 68 23 64 C22 60 20 56 17 53 C14 51 11 52 8 50 C5 48 4 44 5 41 C7 38 11 37 14 38 C17 38 20 36 22 34 C23 30 22 26 24 23 C26 19 29 16 32 13 C35 10 38 6 41 4 Z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-gray-100">
      {/* Background Layer: Full-bleed shed photographic plate with Frosted Glass Backdrop Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Full-width High-Res Modern Shed Image */}
        <Image
          src="/images/hero_shed_modern_v2.jpg"
          alt="Modern Industrial Warehouse Shed and Steel Solutions by The Shed Master"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-[62%_center] xl:object-[58%_center]"
        />

        {/* Desktop Enhanced Frosted Glass Backdrop Blur Overlay behind left typography */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[55%] lg:w-[48%] xl:w-[44%] z-10 pointer-events-none backdrop-blur-md bg-gradient-to-r from-white via-white/95 via-white/80 to-transparent"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Mobile/Tablet Frosted Glass Overlay */}
        <div className="md:hidden absolute inset-0 bg-white/90 backdrop-blur-sm z-10 pointer-events-none" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-20 min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center">
        <Container className="w-full py-8 sm:py-11 lg:py-14">
          <div className="max-w-xl lg:max-w-[490px] xl:max-w-[530px]">
            {/* Tagline */}
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#475569] uppercase mb-3 sm:mb-3.5">
              STRONG STRUCTURES. SAFER SPACES. A BRIGHTER TOMORROW.
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-4.5">
              <span className="block">Sheds, Fire Pipeline</span>
              <span className="block">&amp; Steel Solutions</span>
              <span className="block font-normal text-[#1E293B] mt-1 sm:mt-1.5">
                for Your Growing Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] text-[#475569] leading-relaxed font-normal mb-7 sm:mb-8 max-w-[460px]">
              From PEB sheds and conventional structures to fire pipeline systems
              and custom fabrication, we deliver complete solutions for
              industrial, commercial and agricultural needs across India.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-[10px] bg-[#0E382B] hover:bg-[#08281E] active:scale-[0.98] text-white text-[14px] font-semibold transition-all shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-[10px] bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-300 text-[14px] font-semibold transition-all shadow-xs"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Badges Strip with Hairline Dividers */}
            <div className="grid grid-cols-4 items-start max-w-[460px]">
              {/* Badge 1: Quality Construction */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                <ShieldCheck className="w-6 h-6 text-[#1E293B] stroke-[1.8] mb-2" />
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  Quality
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  Construction
                </span>
              </div>

              {/* Badge 2: On-Time Delivery */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2 border-l border-gray-200">
                <Truck className="w-6 h-6 text-[#1E293B] stroke-[1.8] mb-2" />
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  On-Time
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  Delivery
                </span>
              </div>

              {/* Badge 3: Pan India Service */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2 border-l border-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#1E293B] stroke-[1.8] stroke-current fill-none mb-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" />
                </svg>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  Pan India
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  Service
                </span>
              </div>

              {/* Badge 4: End-to-End Support */}
              <div className="flex flex-col items-center text-center px-1 sm:px-2 border-l border-gray-200">
                <Star className="w-6 h-6 text-[#1E293B] stroke-[1.8] mb-2" />
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  End-to-End
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#0F172A] leading-tight block">
                  Support
                </span>
              </div>
            </div>
          </div>
        </Container>

        {/* Floating Pan-India Badge on Bottom-Right of Shed Apron */}
        <div className="hidden sm:flex absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-8 xl:bottom-8 xl:right-10 bg-white/90 backdrop-blur-md rounded-xl py-2.5 px-4 shadow-lg border border-white/60 items-center gap-3 z-20">
          <div className="text-[#0D4734] shrink-0">
            <IndiaSilhouette className="w-7 h-8" />
          </div>
          <div className="text-left">
            <div className="text-[12px] font-bold text-[#0F172A] leading-tight">
              Serving Businesses
            </div>
            <div className="text-[11px] text-[#475569] font-medium leading-tight mt-0.5">
              Across India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
