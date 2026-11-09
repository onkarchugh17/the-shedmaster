import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Settings,
  ArrowRight,
  ShieldCheck,
  Building,
  ChevronDown,
} from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import ContactForm from "../contact/ContactForm";
import { ServiceItem } from "@/data/services";

interface ServiceDetailContentProps {
  service: ServiceItem;
}

export default function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Main Visual & Key Overview */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
              <Image
                src={service.image}
                alt={`${service.title} engineering and installation by The Shed Master`}
                width={800}
                height={500}
                className="w-full h-[320px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
                  Field Execution
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-1">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight leading-snug">
              Engineered for Durability, Safety, and Maximum Space Efficiency
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At The Shed Master, every {service.shortTitle} project is executed with precision engineering calculations, certified materials, and stringent quality control.
            </p>

            <div className="space-y-3 pt-2">
              {service.cardPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={`#enquire`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D4734] hover:bg-[#083325] text-white text-sm font-semibold transition-all shadow-sm"
              >
                <span>Request Quotation for {service.shortTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Core Features */}
      <div className="bg-[#F8FAF9] py-16 border-y border-gray-100">
        <Container>
          <SectionHeading
            tag="KEY CAPABILITIES"
            title={`Features of Our ${service.shortTitle}`}
            description="Built to the highest industrial specifications for structural integrity and operational safety."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center mb-4">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. Technical Specifications Table */}
      <Container>
        <SectionHeading
          tag="TECHNICAL SPECIFICATIONS"
          title="Engineering Standards & Material Grades"
          description="We use certified structural materials compliant with Bureau of Indian Standards (BIS) and NBC guidelines."
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F0F7F4] border-b border-gray-200">
                <th className="py-4 px-6 text-xs font-semibold text-[#0D4734] uppercase tracking-wider w-1/3">
                  Specification Parameter
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-[#0D4734] uppercase tracking-wider">
                  The Shed Master Standard
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {service.specs.map((spec, idx) => (
                <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-gray-900 bg-gray-50/50">
                    {spec.label}
                  </td>
                  <td className="py-3.5 px-6 text-gray-700">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      {/* 4. Strategic Benefits & Applications */}
      <div className="bg-[#F8FAF9] py-16 border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0D4734]">
                <span className="h-0.5 w-6 inline-block rounded-full bg-[#0D4734]" />
                <span>BUSINESS BENEFITS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                Why Industry Leaders Choose Our {service.shortTitle}
              </h2>

              <div className="space-y-4 pt-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs">
                    <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0D4734] shrink-0" />
                      <span>{benefit.title}</span>
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed pl-6">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Applications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0D4734]">
                <span className="h-0.5 w-6 inline-block rounded-full bg-[#0D4734]" />
                <span>APPLICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                Ideal For Various Sectors
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-gray-100 flex items-center gap-3 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 5. Process Execution */}
      <Container>
        <SectionHeading
          tag="WORKFLOW"
          title={`Our ${service.shortTitle} Execution Process`}
          description="From initial feasibility check to final site commissioning, we deliver structured execution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {service.process.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold text-[#0D4734] mb-3 block">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* 6. Service-Specific FAQs */}
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            tag="QUESTIONS & ANSWERS"
            title={`${service.shortTitle} FAQs`}
            description="Clear answers regarding design, cost, timelines, and specifications."
            align="center"
          />

          <div className="space-y-3 mt-8">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden shadow-xs"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 group-hover:text-[#0D4734] transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-[#0D4734]" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>

      {/* 7. Dedicated Enquiry CTA Section */}
      <div id="enquire" className="bg-[#081E17] text-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                DISCUSS YOUR PROJECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
                Get a Customized Proposal for Your {service.shortTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Connect directly with our engineering team. We provide free land layout advice, structural optimization suggestions, and upfront pricing.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-gray-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Transparent itemized billing with zero hidden costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct technical oversight by experienced engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Execution across Pan India</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm
                initialService={service.title}
                title={`Enquire: ${service.shortTitle}`}
                subtitle="Submit your requirements to receive a detailed cost analysis."
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
