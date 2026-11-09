import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact The Shed Master — Direct Industrial Estimates & Consultation",
  description:
    "Get in touch with The Shed Master. Contact our team directly at 9211050139 or theshedmaster17@gmail.com for industrial shed quotes, fire pipeline consultations, and structural fabrication estimates.",
  keywords: [
    "The Shed Master Contact",
    "The Shed Master Phone",
    "9211050139",
    "theshedmaster17@gmail.com",
    "Industrial Shed Quotation India",
  ],
  alternates: {
    canonical: "https://theshedmaster.com/contact",
  },
  openGraph: {
    title: "Contact The Shed Master — Direct Industrial Estimates",
    description:
      "Get a fast, transparent quote for PEB sheds, conventional factory structures, and fire pipeline work. Call 9211050139.",
    url: "https://theshedmaster.com/contact",
    images: [{ url: "/images/hero_shed_v2.jpg" }],
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Contact Header Banner */}
      <div className="bg-gradient-to-b from-[#F0F7F4] to-white pt-8 pb-14 border-b border-gray-100">
        <Container>
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#0D4734] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#CDE3D6]">
              <span>GET IN TOUCH DIRECTLY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
              Let&apos;s Discuss Your Industrial Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Have an upcoming warehouse, factory expansion, or fire safety mandate? Reach out directly to our engineering team for honest technical advice and itemized quotes.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Contact Grid */}
      <div className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Direct Contact Details
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We believe in zero communication barriers. Speak directly with the leadership responsible for your project.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${companyInfo.phoneTel}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAF9] hover:bg-[#F0F7F4] border border-gray-100 hover:border-[#DEECE5] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3EE] text-[#0D4734] group-hover:bg-[#0D4734] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Direct Line / Phone
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mt-0.5">
                      {companyInfo.phoneFormatted}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Directly connects with our senior team
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAF9] hover:bg-[#F0F7F4] border border-gray-100 hover:border-[#DEECE5] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3EE] text-[#0D4734] group-hover:bg-[#0D4734] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-base font-semibold text-gray-900 mt-0.5 break-all">
                      {companyInfo.email}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Send drawings or BOQ for review
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#E8F8EE] hover:bg-[#D4F3E0] border border-[#25D366]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <WhatsAppIcon className="w-6 h-6 fill-current text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-base font-semibold text-emerald-950 mt-0.5">
                      Chat With us on WhatsApp
                    </div>
                    <div className="text-xs text-emerald-700 mt-1">
                      Typically replies in under 15 minutes
                    </div>
                  </div>
                </a>

                {/* Coverage & Hours */}
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Coverage: </span>
                      <span>{companyInfo.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Working Hours: </span>
                      <span>{companyInfo.businessHours}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Fire Safety: </span>
                      <span>{companyInfo.emergencyFireSupport}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Send Us Your Project Requirements"
                subtitle="Fill out the form below and our senior engineering team will review your inquiry and follow up promptly."
              />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
