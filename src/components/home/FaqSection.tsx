"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import { generalFaqs } from "@/data/faqs";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(generalFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const displayedFaqs = generalFaqs.slice(0, 6);

  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <Container>
        <SectionHeading
          tag="FAQS"
          title="Frequently Asked Questions"
          description="Common questions about our PEB sheds, conventional steel structures, fire pipelines and fabrication services."
          actionText="View All FAQs"
          actionHref="/faqs"
        />

        <div className="max-w-3xl mx-auto space-y-3 mt-8">
          {displayedFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-gray-100 bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 hover:text-[#0D4734] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0D4734]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-[#FBFDFB]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Have a question not listed here?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D4734] hover:text-[#083325]"
          >
            <span>Chat with our team directly</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
