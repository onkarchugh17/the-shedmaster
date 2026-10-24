import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Users2,
  Cpu,
} from "lucide-react";
import Container from "../shared/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "High-Quality Materials",
    description: "Built to withstand Indian weather conditions and heavy industrial wear.",
  },
  {
    icon: Cpu,
    title: "Custom Design Solutions",
    description: "Tailored to your plot, business machinery requirements and budget.",
  },
  {
    icon: Users2,
    title: "Experienced Team",
    description: "Deep engineering expertise in sheds, fire pipeline systems and structural steel.",
  },
  {
    icon: Compass,
    title: "Pan India Support",
    description: "From initial layout design to on-site crane erection and handover, we handle it all.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAF9] border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, description, CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0D4734]">
              <span className="h-0.5 w-6 inline-block rounded-full bg-[#0D4734]" />
              <span>WHY CHOOSE THE SHED MASTER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
              Built on Trust. Driven by Quality.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              We combine engineering expertise, certified steel materials, and professional execution to deliver structures that stand strong for decades across Indian industrial zones.
            </p>

            <div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D4734] hover:bg-[#083325] text-white text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
