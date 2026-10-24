import React from "react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import ServiceCard from "../services/ServiceCard";
import { servicesData } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          tag="OUR SERVICES"
          title="Complete Solutions for Modern Infrastructure"
          description="Four core services to meet your industrial, commercial and agricultural requirements."
          actionText="View All Services"
          actionHref="/services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
