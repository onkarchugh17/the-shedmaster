import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "The Shed Master — Industrial Sheds, Fire Pipeline & Steel Fabrication India",
  description:
    "India's premier industrial construction company. High-strength PEB sheds, conventional factory structures, NBC-compliant fire pipeline networks, and custom structural steel fabrication.",
  keywords: [
    "PEB Shed India",
    "Pre-Engineered Buildings",
    "Industrial Shed Construction",
    "Conventional Factory Shed",
    "Fire Pipeline Installation",
    "Industrial Fire Hydrant System",
    "Structural Steel Fabrication",
    "Warehouse Construction Bhiwadi Pune Indore",
    "The Shed Master",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/",
  },
  openGraph: {
    title: "The Shed Master — Industrial Sheds, Fire Pipeline & Steel Fabrication India",
    description:
      "Precision PEB sheds, conventional steel sheds, and certified fire pipeline installations across India by The Shed Master.",
    url: "https://theshedmaster.com/",
    siteName: "The Shed Master",
    images: [
      {
        url: "/images/hero_shed.jpg",
        width: 1200,
        height: 675,
        alt: "The Shed Master Industrial Warehouse Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Four Service Cards */}
      <ServicesSection />

      {/* 3. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 4. Our Process */}
      <ProcessSection />

      {/* 5. Recent Projects */}
      <ProjectsSection />

      {/* 6. About The Shed Master */}
      <AboutSection />

      {/* 7. Client Testimonials */}
      <TestimonialsSection />

      {/* 8. FAQs */}
      <FaqSection />

      {/* 9. Contact Form & Final CTA */}
      <HomeCtaSection />
    </main>
  );
}
