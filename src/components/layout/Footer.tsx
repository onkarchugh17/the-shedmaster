import React from "react";
import Link from "next/link";
import {
  Warehouse,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { servicesData } from "@/data/services";
import Container from "../shared/Container";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#061A13] text-gray-300 border-t border-[#123628]">
      {/* Top Banner / Callout in Footer */}
      <div className="border-b border-[#0F3527] py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D4734] text-emerald-300 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Direct Helpline</div>
                <a
                  href={`tel:${companyInfo.phoneTel}`}
                  className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  {companyInfo.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D4734] text-emerald-300 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Official Email</div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D4734] text-emerald-300 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">WhatsApp Consultation</div>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Chat With us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1 & 2: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0D4734] text-white flex items-center justify-center">
                  <Warehouse className="w-5 h-5" />
                </div>
                <span className="text-xl font-semibold text-white tracking-tight">
                  {companyInfo.name}
                </span>
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                {companyInfo.description}
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-gray-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{companyInfo.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{companyInfo.businessHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>BIS & NBC Standard Industrial Execution</span>
                </div>
              </div>
            </div>

            {/* Column 3: Core Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B8460] group-hover:bg-emerald-400 transition-colors" />
                      <span>{service.shortTitle}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-xs inline-flex items-center gap-1 pt-1"
                  >
                    <span>View All Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                    About The Shed Master
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Project Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-400 hover:text-white transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Get in Touch / Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Coverage & Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Coverage & Enquiries
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Have an upcoming warehouse or factory project? Contact our team directly for consultation and estimates.
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${companyInfo.phoneTel}`}
                  className="block text-center py-2 px-3 rounded-lg bg-[#0D4734] hover:bg-[#083325] text-white text-xs font-semibold transition-colors"
                >
                  Call +91 92110 50139
                </a>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-[#0F3527] py-6 text-xs text-gray-400">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
