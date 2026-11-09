import React from "react";
import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions — The Shed Master",
  description:
    "Terms and Conditions for industrial shed contracting, fire pipeline installations, and structural steel fabrication services executed by The Shed Master.",
  alternates: {
    canonical: "https://theshedmaster.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex-1 bg-white py-12 sm:py-16">
      <Container size="narrow">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500 mb-8">
            Last Updated: October 2026
          </p>

          <section className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p>
              These Terms and Conditions govern all commercial agreements, quotations, structural fabrications, fire pipeline installations, and construction contracts executed by <strong>{companyInfo.name}</strong> (&ldquo;Contractor&rdquo;).
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              1. Quotations, Pricing & Validity
            </h2>
            <p>
              All formal project quotations, BOQs (Bill of Quantities), and pricing summaries issued by The Shed Master are based on prevailing raw steel plate, tube, and resin prices. Formal quotes remain valid for 15 days from issuance unless otherwise specified in writing. Any statutory increase in GST or raw steel index after contract finalization shall be adjusted as per mutually agreed escalation clauses.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              2. Engineering Standards & Quality Assurance
            </h2>
            <p>
              We construct all Pre-Engineered Buildings, conventional sheds, and structural frames in compliance with relevant Bureau of Indian Standards (IS 800:2007 for steel design, IS 875 Part 3 for wind load parameters, IS 1893 for earthquake criteria). Fire pipeline systems comply strictly with IS 3844 and NBC (National Building Code) guidelines. Certified test certificates (MTC) for structural steel plates and Class-C pipes can be furnished upon client request.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              3. Site Readiness & Civil Foundations
            </h2>
            <p>
              Unless explicitly contracted under a composite civil-plus-structural turnkey agreement:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The client is responsible for accurate anchor bolt embedding, plinth level alignment, and RCC pedestal construction as per anchor layout drawings provided by The Shed Master.</li>
              <li>The site must have clear motorable access roads suitable for trailers carrying long-span structural trusses and mobile cranes.</li>
              <li>Uninterrupted 3-phase electricity (or DG supply) and construction water must be provided at the site boundary by the client.</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              4. Payment Milestones
            </h2>
            <p>
              Commercial contracts follow transparent milestone schedules:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Mobilization advance upon contract signing and shop drawing release</li>
              <li>Procurement milestone upon dispatch of raw steel plates and sections to fabrication yard</li>
              <li>Fabrication milestone upon inspection and dispatch of finished members to site</li>
              <li>Erection and alignment milestones during crane assembly</li>
              <li>Final retention balance upon successful erection handover and hydrostatic fire testing</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              5. Warranties & Handover
            </h2>
            <p>
              We provide standard structural workmanship warranties covering fabrication integrity, weld soundness, and sheeting watertightness against manufacturing defects. Normal industrial wear and tear or modifications carried out without our written concurrence are excluded.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">
              6. Dispute Resolution
            </h2>
            <p>
              Any disputes arising out of contracts entered into with The Shed Master shall be resolved through mutual executive discussion with the management of The Shed Master. In the event of formal legal proceedings, jurisdiction shall lie exclusively with the competent courts in Delhi NCR.
            </p>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mt-6 text-xs sm:text-sm">
              <div className="font-semibold text-gray-900">{companyInfo.name}</div>
              <div>Direct Phone: {companyInfo.phoneFormatted}</div>
              <div>Official Email: {companyInfo.email}</div>
              <div>Operational Coverage: {companyInfo.address}</div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
