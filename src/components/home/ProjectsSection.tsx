import React from "react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import ProjectFilters from "../projects/ProjectFilters";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="recent-work" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAF9] border-t border-gray-100">
      <Container>
        <SectionHeading
          tag="OUR RECENT WORK"
          title="Real Projects. Real Results."
          actionText="View All Projects"
          actionHref="/projects"
        />

        <ProjectFilters projects={projectsData} showAllLimit={4} />
      </Container>
    </section>
  );
}
