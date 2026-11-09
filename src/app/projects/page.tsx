import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
} from "lucide-react";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { projectsData } from "@/data/projects";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Industrial Construction Projects Gallery — Real Sheds & Installations",
  description:
    "Explore completed industrial construction projects by The Shed Master across India: PEB sheds in Bhiwadi, conventional factories in Indore, fire pipeline networks in Noida, and structural fabrication in Pune.",
  keywords: [
    "Industrial Shed Projects India",
    "PEB Shed Bhiwadi",
    "Conventional Factory Indore",
    "Fire Pipeline Installation Noida",
    "Structural Steel Pune",
    "The Shed Master Projects",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/projects",
  },
  openGraph: {
    title: "Industrial Construction Projects Gallery — The Shed Master",
    description:
      "Real projects. Real results. Browse our industrial PEB sheds, conventional structures, and fire pipeline projects.",
    url: "https://theshedmaster.com/projects",
    images: [{ url: "/images/hero_shed_v2.jpg" }],
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      {/* Projects Header Banner */}
      <div className="bg-gradient-to-b from-[#F0F7F4] to-white pt-8 pb-14 border-b border-gray-100">
        <Container>
          <Breadcrumbs items={[{ label: "Projects & Portfolio" }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#0D4734] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#CDE3D6]">
              <span>PROVEN TRACK RECORD</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
              Real Projects. Real Results.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Browse our portfolio of completed Pre-Engineered Buildings, heavy structural steel sheds, fire safety pipeline networks, and custom fabrication installations across India.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-gray-700">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D4734]" />
                Pan India Execution
              </span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D4734]" />
                Committed Handover Timelines
              </span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D4734]" />
                Strict BIS Compliance
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Filterable Project Gallery */}
      <div className="py-14 sm:py-20 bg-white">
        <Container>
          <SectionHeading
            tag="PORTFOLIO EXPLORER"
            title="Filter by Project Category"
            description="Select a category to view specialized execution across our core construction disciplines."
          />

          <ProjectFilters projects={projectsData} />
        </Container>
      </div>

      {/* Detailed Project Case Spotlights */}
      <div className="py-16 sm:py-20 bg-[#F8FAF9] border-t border-gray-100">
        <Container>
          <SectionHeading
            tag="IN-DEPTH SPOTLIGHTS"
            title="Featured Project Case Studies"
            description="Detailed breakdown of engineering challenges, specifications, and on-site delivery."
          />

          <div className="space-y-12 sm:space-y-16 mt-10">
            {projectsData.slice(0, 4).map((project) => (
              <div
                key={project.id}
                id={project.slug}
                className="scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Image */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-md bg-gray-100 h-64 sm:h-80 lg:h-96">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.location}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#0D4734] px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                        Duration: {project.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-emerald-800 font-semibold">
                      Scope: {project.scope} | Scale: {project.areaOrCapacity}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Project Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-gray-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D4734] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/contact?service=${encodeURIComponent(project.category)}`}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0D4734] hover:bg-[#083325] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
                      >
                        <span>Enquire for Similar Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`https://wa.me/919211050139?text=Hello%20The%20Shed%20Master%2C%20I%20saw%20your%20project%20${encodeURIComponent(project.title)}%20in%20${encodeURIComponent(project.location)}%20and%20would%20like%20to%20discuss%20my%20requirements.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-xs sm:text-sm font-medium transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Chat With Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Direct Quote Banner */}
      <div className="bg-[#081E17] text-white py-14 border-t border-gray-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Have a New Industrial Project in Mind?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                Share your plot dimensions or structural requirements. We provide complimentary technical feasibility and cost estimates.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#081E17] hover:bg-gray-100 text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${companyInfo.phoneTel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0F3528] text-white hover:bg-[#144233] text-sm font-semibold transition-colors border border-emerald-900"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {companyInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
