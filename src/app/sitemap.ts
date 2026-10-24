import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theshedmaster.com";
  const currentDate = new Date("2026-10-21T00:00:00.000Z");

  const routes = [
    "",
    "/services",
    "/services/peb-shed",
    "/services/conventional-shed",
    "/services/fire-pipeline-work",
    "/services/structural-fabrication",
    "/projects",
    "/about-us",
    "/contact",
    "/faqs",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => {
    let priority = 0.8;
    let changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/services/")) {
      priority = 0.9;
    } else if (route === "/projects" || route === "/contact") {
      priority = 0.9;
    } else if (route === "/privacy-policy" || route === "/terms-and-conditions") {
      priority = 0.3;
      changeFrequency = "yearly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}
