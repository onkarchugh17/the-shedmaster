import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { servicesData } from "@/data/services";

const service = servicesData.find((s) => s.slug === "peb-shed");

export const metadata: Metadata = {
  title: "PEB Shed Construction — Pre-Engineered Building Solutions India",
  description:
    "High-speed, long-span Pre-Engineered Building (PEB) sheds by The Shed Master. Engineered with certified 345 MPa steel for factories, logistics warehouses, and commercial spaces across India.",
  keywords: [
    "PEB Shed India",
    "Pre-Engineered Building Contractor",
    "PEB Warehouse Construction",
    "Industrial Steel Shed",
    "Clear Span Shed",
    "The Shed Master",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/services/peb-shed",
  },
  openGraph: {
    title: "PEB Shed Construction — The Shed Master",
    description:
      "Cost-effective, rapid installation, long-span Pre-Engineered Buildings across Indian industrial zones.",
    url: "https://theshedmaster.com/services/peb-shed",
    images: [{ url: "/images/peb_shed_v2.jpg" }],
  },
};

export default function PebShedPage() {
  if (!service) return notFound();

  return (
    <main className="flex-1">
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        description={service.heroDescription}
      />
      <ServiceDetailContent service={service} />
    </main>
  );
}
