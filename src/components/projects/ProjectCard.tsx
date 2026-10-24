import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={project.image}
          alt={`${project.title} in ${project.location} by The Shed Master`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Category tag badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#0D4734] px-2.5 py-1 rounded-full text-[11px] font-semibold border border-gray-100 shadow-xs">
          {project.category}
        </div>

        {/* Area/Capacity tag */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-medium drop-shadow-sm">
          {project.areaOrCapacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex items-center justify-between gap-4">
        <div className="space-y-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#0D4734] transition-colors truncate">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>

        <Link
          href={`/projects#${project.slug}`}
          className="w-9 h-9 rounded-full bg-gray-50 group-hover:bg-[#0D4734] text-gray-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
          aria-label={`View details of ${project.title}`}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
