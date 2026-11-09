import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { servicesData } from "@/data/services";

const service = servicesData.find((s) => s.slug === "structural-fabrication");

export const metadata: Metadata = {
  title: "Heavy Structural Steel Fabrication — Gantry Girders & Framing",
  description:
    "Custom heavy structural steel fabrication and erection by The Shed Master. Crane runway beams, mezzanine floors, portal frames, and pipe racks for Indian industrial plants.",
  keywords: [
    "Structural Steel Fabrication India",
    "Heavy Steel Portal Frames",
    "Crane Gantry Girder Fabrication",
    "Industrial Mezzanine Floor",
    "Pipe Rack Fabrication",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/services/structural-fabrication",
  },
  openGraph: {
    title: "Heavy Structural Steel Fabrication — The Shed Master",
    description:
      "Precision heavy steel fabrication, CNC cutting, certified SAW welding, and mobile crane erection across India.",
    url: "https://theshedmaster.com/services/structural-fabrication",
    images: [{ url: "/images/structural_fabrication_v2.jpg" }],
  },
};

export default function StructuralFabricationPage() {
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
