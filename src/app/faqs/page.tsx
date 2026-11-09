"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { generalFaqs } from "@/data/faqs";
import { companyInfo } from "@/data/company";

const categories = [
  "All",
  "General",
  "PEB Shed",
  "Conventional Shed",
  "Fire Pipeline",
  "Structural Fabrication",
] as const;

export default function FaqsPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    g1: true,
    g4: true,
    g6: true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    selectedCat === "All"
      ? generalFaqs
      : generalFaqs.filter((item) => item.category === selectedCat);

  return (
    <main className="flex-1">
      {/* FAQ Header Banner */}
      <div className="bg-gradient-to-b from-[#F0F7F4] to-white pt-8 pb-14 border-b border-gray-100">
        <Container>
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#0D4734] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#CDE3D6]">
              <span>KNOWLEDGE & GUIDANCE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Find transparent answers to common queries regarding engineering design, cost factors, fire NOC compliance, timelines, and execution.
            </p>
          </div>
        </Container>
      </div>

      {/* Filter and FAQ list */}
      <div className="py-14 sm:py-20 bg-white">
        <Container>
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? "bg-[#0D4734] text-white shadow-xs"
                    : "bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="max-w-3xl space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-xs transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 hover:text-[#0D4734] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[#0D4734] bg-[#EAF3EE] px-2 py-0.5 rounded-full shrink-0">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0D4734]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FBFDFB]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions block */}
          <div className="max-w-3xl mt-12 p-6 sm:p-8 rounded-2xl bg-[#F0F7F4] border border-[#DEECE5] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Have a project-specific query?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Our engineering team is readily available for technical queries and cost estimates.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${companyInfo.phoneTel}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D4734] hover:bg-[#083325] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Write to Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
