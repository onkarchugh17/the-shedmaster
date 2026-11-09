import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { servicesData } from "@/data/services";

const service = servicesData.find((s) => s.slug === "fire-pipeline-work");

export const metadata: Metadata = {
  title: "Fire Pipeline & Hydrant Installation — NBC & Fire NOC Compliant",
  description:
    "Complete turnkey industrial firefighting pipeline systems by The Shed Master. Fire pump rooms, hydrant rings, sprinkler networks, and pressure testing across industrial plants in India.",
  keywords: [
    "Fire Pipeline Work India",
    "Industrial Fire Hydrant System",
    "Fire Pump House Installation",
    "Factory Fire Sprinkler System",
    "Fire NOC Compliance",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/services/fire-pipeline-work",
  },
  openGraph: {
    title: "Fire Pipeline & Hydrant Installation — The Shed Master",
    description:
      "NBC-compliant fire protection systems, heavy class MS piping, pump houses, and certified hydrostatic testing.",
    url: "https://theshedmaster.com/services/fire-pipeline-work",
    images: [{ url: "/images/fire_pipeline_v2.jpg" }],
  },
};

export default function FirePipelineWorkPage() {
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
