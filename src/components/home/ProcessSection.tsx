import React from "react";
import { MessageSquare, FileText, Cog, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";

const steps = [
  {
    step: "1",
    icon: MessageSquare,
    title: "Consultation",
    description: "Tell us about your requirements, land dimensions, and operational needs.",
  },
  {
    step: "2",
    icon: FileText,
    title: "Design & Quote",
    description: "We create a tailored engineering solution with a transparent, itemized quote.",
  },
  {
    step: "3",
    icon: Cog,
    title: "Fabrication & Installation",
    description: "Our team gets to work with quality fabrication, certified welding, and rapid erection.",
  },
  {
    step: "4",
    icon: CheckCircle2,
    title: "Handover & Support",
    description: "On-time completion, final safety inspections, and dependable ongoing support.",
  },
];

export default function ProcessSection() {
  return (
    <section id="our-process" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          tag="OUR PROCESS"
          title="A Simple & Transparent Process"
          description="From your first enquiry to final handover, we keep everything simple, clear and hassle-free."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col items-start group">
                {/* Connecting arrow for desktop */}
                {!isLast && (
                  <div className="hidden lg:flex items-center absolute top-5 -right-4 translate-x-1/2 text-gray-300 z-10 pointer-events-none">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}

                {/* Step badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0D4734] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#F0F7F4] text-[#0D4734] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
