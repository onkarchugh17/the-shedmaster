import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Warehouse, Building2, Flame, Wrench } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

const serviceIcons: Record<string, React.ElementType> = {
  "peb-shed": Warehouse,
  "conventional-shed": Building2,
  "fire-pipeline-work": Flame,
  "structural-fabrication": Wrench,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = serviceIcons[service.id] || Warehouse;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Card Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={`${service.title} - The Shed Master`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Circular Icon Pill floating over image */}
        <div className="absolute bottom-3 left-4 w-10 h-10 rounded-full bg-white text-[#0D4734] shadow-md flex items-center justify-center border border-emerald-100">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0D4734] transition-colors">
          {service.shortTitle}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Feature Checkpoints */}
        <div className="mt-5 pt-4 border-t border-gray-100 space-y-2.5">
          {service.cardPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
              <div className="w-4 h-4 rounded-full bg-[#EAF3EE] text-[#0D4734] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-6 pt-2">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0D4734] hover:text-[#083325] group-hover:translate-x-1 transition-all"
          >
            <span>Know More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
