import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { servicesData } from "@/data/services";

const service = servicesData.find((s) => s.slug === "conventional-shed");

export const metadata: Metadata = {
  title: "Conventional Steel Shed Construction — Heavy Structural Trusses",
  description:
    "Heavy-duty conventional steel sheds and factory workshops by The Shed Master. Hot-rolled structural sections, angular trusses, and site-adapted designs for manufacturing units across India.",
  keywords: [
    "Conventional Shed India",
    "Structural Steel Truss Shed",
    "Factory Workshop Construction",
    "Heavy Structural Steel Shed",
    "Godown Construction",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/services/conventional-shed",
  },
  openGraph: {
    title: "Conventional Steel Shed Construction — The Shed Master",
    description:
      "Versatile design, customized steel trusses, ideal for workshops, manufacturing plants, and agricultural godowns.",
    url: "https://theshedmaster.com/services/conventional-shed",
    images: [{ url: "/images/conventional_shed.jpg" }],
  },
};

export default function ConventionalShedPage() {
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
