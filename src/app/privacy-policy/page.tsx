import React from "react";
import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy — The Shed Master",
  description:
    "Privacy Policy for The Shed Master. Details on how we handle client enquiry data, contact information, and project specifications in compliance with Indian IT norms.",
  alternates: {
    canonical: "https://theshedmaster.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white py-12 sm:py-16">
      <Container size="narrow">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mb-8">
            Last Updated: October 2026
          </p>

          <section className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong>{companyInfo.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website (<strong>theshedmaster.com</strong>) or communicate with us regarding industrial shed construction, fire pipeline works, or structural fabrication services across India.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              1. Information We Collect
            </h2>
            <p>
              When you submit a consultation request, quotation form, or get in touch via telephone, email, or WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your full name and contact title</li>
              <li>Phone number and WhatsApp contact details</li>
              <li>Official email address</li>
              <li>Company name, industrial plot address, or state location</li>
              <li>Project requirements, shed dimensions, crane tonnage, and fire safety parameters</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              2. How We Use Your Information
            </h2>
            <p>
              The collected information is used solely for genuine commercial construction and engineering purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Preparing accurate structural cost estimates and itemized quotations</li>
              <li>Scheduling site visits, topographic surveys, and engineering consultations</li>
              <li>Providing technical guidance regarding PEB, conventional sheds, or Fire NOC requirements</li>
              <li>Executing signed construction agreements and tracking project milestones</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              3. Protection & Non-Disclosure of Client Data
            </h2>
            <p>
              We do not sell, rent, or trade your contact information, machinery details, or factory layout blueprints to third-party advertisers or external marketing brokers. Your specifications are held in strict confidence and shared only with our core engineering personnel and structural fabrication technicians who directly execute your project.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              4. Security Measures
            </h2>
            <p>
              We employ standard technical, administrative, and physical security safeguards to protect submitted client information against unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions about this Privacy Policy, wish to update your contact preferences, or request data deletion, please contact:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1 text-xs sm:text-sm">
              <div className="font-semibold text-gray-900">{companyInfo.name}</div>
              <div>Attn: Privacy & Legal Team</div>
              <div>Phone: {companyInfo.phoneFormatted}</div>
              <div>Email: {companyInfo.email}</div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
