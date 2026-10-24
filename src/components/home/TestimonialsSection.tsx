import React from "react";
import { Star, Quote } from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAF9] border-t border-gray-100">
      <Container>
        <SectionHeading
          tag="CLIENT TESTIMONIALS"
          title="What Our Clients Say"
          description="Trusted by businesses across India for our quality, commitment and on-time delivery."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-9 h-9 rounded-lg bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author & Rating */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.role}, {item.location}
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
