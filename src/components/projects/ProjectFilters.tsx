"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectItem, projectCategories, ProjectCategory } from "@/data/projects";

interface ProjectFiltersProps {
  projects: ProjectItem[];
  initialCategory?: ProjectCategory;
  showAllLimit?: number;
}

export default function ProjectFilters({
  projects,
  initialCategory = "All",
  showAllLimit,
}: ProjectFiltersProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>(initialCategory);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  const displayedProjects = showAllLimit
    ? filteredProjects.slice(0, showAllLimit)
    : filteredProjects;

  return (
    <div className="space-y-8">
      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {projectCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? "bg-[#0D4734] text-white shadow-sm"
                  : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {displayedProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-sm">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
