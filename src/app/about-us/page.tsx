import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Users2,
  MapPin,
  Phone,
  Building2,
  Clock,
} from "lucide-react";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "About The Shed Master — Industrial Construction & Engineering India",
  description:
    "Learn about The Shed Master. Providing engineered Pre-Engineered Buildings, conventional steel sheds, and certified fire pipelines across India with trust and precision.",
  alternates: {
    canonical: "https://theshedmaster.com/about-us",
  },
  openGraph: {
    title: "About The Shed Master — Built on Trust, Driven by Quality",
    description:
      "Engineering durable industrial infrastructure across Indian manufacturing and logistics hubs.",
    url: "https://theshedmaster.com/about-us",
    images: [{ url: "/images/about_facility_v2.jpg" }],
  },
};

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      {/* About Header Banner */}
      <div className="bg-gradient-to-b from-[#F0F7F4] to-white pt-8 pb-14 border-b border-gray-100">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#0D4734] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#CDE3D6]">
              <span>COMPANY OVERVIEW</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
              Building Enduring Industrial Foundations Across India
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The Shed Master is a trusted Indian industrial construction and engineering firm dedicated to high-performance shed construction, certified fire pipelines, and structural steel fabrication.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Story & Facility Visual */}
      <div className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100">
                <Image
                  src="/images/about_facility_v2.jpg"
                  alt="The Shed Master engineering workshop and leadership on site"
                  width={750}
                  height={500}
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 text-gray-900 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-emerald-800 font-semibold">
                          Engineering Leadership
                        </div>
                        <div className="text-base font-semibold text-gray-900 mt-0.5">
                          The Shed Master — Industrial Specialists
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#0D4734] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        TSM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0D4734]">
                <span className="h-0.5 w-6 inline-block rounded-full bg-[#0D4734]" />
                <span>OUR CORE IDENTITY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
                Engineering Discipline Combined with Ground-Level Agility
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Industrial sheds and manufacturing plants represent substantial capital investments. At The Shed Master, our philosophy centers on engineering structures that optimize operational cubic space, resist harsh Indian weather, and remain flexible for future line expansion.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our team brings hands-on field supervision to every square foot. We eliminate bureaucratic delays and opaque pricing, offering clients direct access to senior project engineers and realistic project schedules.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="p-4 rounded-xl bg-[#F0F7F4] border border-[#DEECE5]">
                  <div className="text-2xl font-bold text-[#0D4734]">100%</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">
                    Strict Indian Standards (IS) Code Adherence
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F0F7F4] border border-[#DEECE5]">
                  <div className="text-2xl font-bold text-[#0D4734]">Pan India</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">
                    Multi-State Site Execution Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 4 Guiding Pillars */}
      <div className="py-16 sm:py-20 bg-[#F8FAF9] border-y border-gray-100">
        <Container>
          <SectionHeading
            tag="OUR PRINCIPLES"
            title="The Values That Guide Every Shed We Erect"
            description="No shortcuts, no fabricated claims. Just honest Indian industrial construction done right."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                icon: ShieldCheck,
                title: "Certified Materials Only",
                desc: "We exclusively procure structural plates, hot-rolled sections, and C-class pipes from certified primary and secondary mills.",
              },
              {
                icon: Clock,
                title: "Strict Timeline Milestones",
                desc: "Every phase from shop fabrication to bolt-torquing is monitored against critical path schedules to prevent delivery overruns.",
              },
              {
                icon: Building2,
                title: "Structural Safety First",
                desc: "Structures calculated for regional wind loads (IS 875) and seismic factors (IS 1893) to protect your assets and workforce.",
              },
              {
                icon: Users2,
                title: "Direct Engineering Communication",
                desc: "You deal directly with experienced project engineers and technical leadership, ensuring complete clarity at every stage.",
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Pan India Reach Section */}
      <div className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0D4734]">
                <span className="h-0.5 w-6 inline-block rounded-full bg-[#0D4734]" />
                <span>GEOGRAPHIC REACH</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                Serving Key Industrial Clusters Across India
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                With mobile fabrication setups, trusted logistics partnerships, and experienced travelling erection teams, The Shed Master undertakes industrial assignments across India&apos;s leading manufacturing corridors.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                {[
                  "Delhi NCR (Gurugram, Manesar, Noida, Faridabad)",
                  "Rajasthan (Bhiwadi, Neemrana, Jaipur, Alwar)",
                  "Maharashtra (Pune, Chakan, Ranjangaon, Nashik)",
                  "Gujarat (Sanand, Ahmedabad, Dahej, Vadodara)",
                  "Madhya Pradesh (Indore, Pithampur, Dewas)",
                  "Uttar Pradesh & Haryana Industrial Zones",
                ].map((zone, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#0D4734] shrink-0" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F0F7F4] rounded-3xl p-8 border border-[#DEECE5] space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Ready to Consult With Our Team?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We are happy to visit your site, analyze soil and plinth levels, or review structural drawings prepared by your architects.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${companyInfo.phoneTel}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 text-gray-900 hover:border-[#0D4734] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 uppercase font-medium">Call Directly</div>
                    <div className="text-sm font-semibold">{companyInfo.phoneFormatted}</div>
                  </div>
                </a>

                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-current text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/90 uppercase font-medium">Instant Consultation</div>
                    <div className="text-sm font-semibold">Message on WhatsApp</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
