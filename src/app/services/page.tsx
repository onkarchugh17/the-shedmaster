import React from "react";
import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import HomeCtaSection from "@/components/home/HomeCtaSection";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Industrial Construction Services — PEB, Conventional Sheds & Fire Pipelines",
  description:
    "Explore the 4 core industrial services of The Shed Master: Pre-Engineered Building (PEB) sheds, conventional structural steel sheds, industrial fire pipeline systems, and custom fabrication.",
  alternates: {
    canonical: "https://theshedmaster.com/services",
  },
  openGraph: {
    title: "Industrial Construction Services — The Shed Master",
    description:
      "PEB Sheds, Conventional Sheds, Fire Pipeline Work & Heavy Structural Steel Fabrication across India.",
    url: "https://theshedmaster.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Services Header Banner */}
      <div className="bg-gradient-to-b from-[#F0F7F4] to-white pt-8 pb-14 border-b border-gray-100">
        <Container>
          <Breadcrumbs items={[{ label: "Our Services" }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#0D4734] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#CDE3D6]">
              <span>OUR CORE CAPABILITIES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
              Comprehensive Industrial Construction Services
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From heavy manufacturing facilities and logistics warehouses to fire safety installations and custom steel structures, we deliver robust solutions across India.
            </p>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <div className="py-16 sm:py-20 bg-white">
        <Container>
          <SectionHeading
            tag="FOUR PILLARS"
            title="Specialized Industrial Engineering Services"
            description="Explore our dedicated service specializations below for detailed specifications, benefits, applications and past execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <HomeCtaSection />
    </main>
  );
}
