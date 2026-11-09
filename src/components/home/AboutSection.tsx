import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Container from "../shared/Container";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Industrial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
              <Image
                src="/images/about_facility_v2.jpg"
                alt="The Shed Master engineering leadership and fabrication facility"
                width={700}
                height={500}
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Leadership badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center font-bold text-sm shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">
                      Precision Engineered
                    </div>
                    <div className="text-[11px] text-gray-500">
                      Industrial Structural Specialists
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0D4734]">
              <span className="h-0.5 w-6 inline-block rounded-full bg-[#0D4734]" />
              <span>ABOUT THE SHED MASTER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
              Engineering Resilient Industrial Infrastructure Across India
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">The Shed Master</span> has earned a dependable reputation in industrial infrastructure across India. We bridge precision structural engineering with cost-efficient execution for warehouses, factories, and commercial spaces.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether erecting large-span Pre-Engineered Buildings, constructing heavy conventional factory sheds, installing compliant fire pipeline networks, or fabricating high-capacity crane runways, we approach every project with zero compromise on safety and quality.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Certified structural grade steel",
                "Strict adherence to IS 800 & NBC codes",
                "Direct senior engineering oversight",
                "Fixed pricing & committed milestones",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0D4734] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D4734] hover:bg-[#083325] text-white text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
