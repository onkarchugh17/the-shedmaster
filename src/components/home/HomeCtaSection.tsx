import React from "react";
import Image from "next/image";
import { Zap, Tag, Compass } from "lucide-react";
import Container from "../shared/Container";
import ContactForm from "../contact/ContactForm";

export default function HomeCtaSection() {
  return (
    <section id="quote" className="relative py-16 sm:py-20 lg:py-24 bg-[#081E17] text-white overflow-hidden">
      {/* Background industrial steel frame overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/images/cta_background_v2.jpg"
          alt="Industrial Steel Structure Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Forest gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061812] via-[#081E17]/90 to-[#0B2A20]/80 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Description, Perks */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <span className="h-0.5 w-6 inline-block rounded-full bg-emerald-400" />
              <span>GET STARTED TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Build a Stronger Tomorrow Together.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Whether you need a new shed, fire pipeline system or custom fabrication, our team is here to help. Get a free consultation today.
            </p>

            {/* Three feature badges from mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#144233]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F3528] text-emerald-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-200">
                  Quick Response
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F3528] text-emerald-400 flex items-center justify-center shrink-0">
                  <Tag className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-200">
                  Competitive Pricing
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F3528] text-emerald-400 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-200">
                  Pan India Service
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Free Quote Form Card */}
          <div className="lg:col-span-6">
            <ContactForm
              title="Request a Free Quote"
              subtitle="Fill in your project requirements and our team will get back to you with a tailored estimate."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
