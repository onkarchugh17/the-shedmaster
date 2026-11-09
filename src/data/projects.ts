export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "PEB Sheds" | "Conventional Sheds" | "Fire Pipeline" | "Structural Fabrication";
  location: string;
  image: string;
  areaOrCapacity: string;
  scope: string;
  duration: string;
  summary: string;
  highlights: string[];
}

export const projectCategories = [
  "All",
  "PEB Sheds",
  "Conventional Sheds",
  "Fire Pipeline",
  "Structural Fabrication",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectsData: ProjectItem[] = [
  {
    id: "peb-shed-bhiwadi",
    slug: "peb-shed-bhiwadi",
    title: "Industrial PEB Shed",
    category: "PEB Sheds",
    location: "Bhiwadi, Rajasthan",
    image: "/images/project_peb_bhiwadi_v2.jpg",
    areaOrCapacity: "48,000 Sq. Ft.",
    scope: "Design, Fabrication & Erection of Multi-Bay PEB Warehouse",
    duration: "4.5 Months",
    summary:
      "A modern clear-span manufacturing shed with Galvalume standing-seam roof system, high side clearance, and integrated loading docks built in Bhiwadi's premier industrial corridor.",
    highlights: [
      "32-meter clear span without intermediate interior pillars",
      "High-grade Galvalume color-coated insulated roofing sheets",
      "Reinforced heavy crane gantry beams for 10-ton EOT crane",
      "Designed for 47 m/s wind speed zone compliance",
    ],
  },
  {
    id: "conventional-shed-indore",
    slug: "conventional-shed-indore",
    title: "Heavy Conventional Factory Shed",
    category: "Conventional Sheds",
    location: "Indore, Madhya Pradesh",
    image: "/images/project_conventional_indore_v2.jpg",
    areaOrCapacity: "26,500 Sq. Ft.",
    scope: "Heavy Structural Steel Truss Workshop & Fabrication Shop",
    duration: "3 Months",
    summary:
      "Engineered for heavy stamping and machining operations with heavy ISMB steel columns, angular Pratt trusses, and multiple motorized rolling shutter access bays.",
    highlights: [
      "Heavy hot-rolled steel section columns and trusses (IS 2062)",
      "High roof ventilation with industrial turbo vents and ridge monitors",
      "Designed to support high dynamic vibration from machinery",
      "Wide vehicle apron for smooth trailer movement",
    ],
  },
  {
    id: "fire-pipeline-noida",
    slug: "fire-pipeline-noida",
    title: "Fire Pipeline & Hydrant Installation",
    category: "Fire Pipeline",
    location: "Noida, Uttar Pradesh",
    image: "/images/project_fire_noida_v2.jpg",
    areaOrCapacity: "Pump Room + 1,800m Ring Main",
    scope: "Turnkey Fire Hydrant, Sprinkler Grid & Pump House Setup",
    duration: "2 Months",
    summary:
      "Complete end-to-end industrial fire protection system including main electric fire pump, diesel backup engine, jockey pump, internal hydrant ring, and automated sprinkler network.",
    highlights: [
      "IS 1239 heavy class C-grade MS piping with grooved victaulic couplings",
      "Main electric pump (2850 LPM) + standby diesel pump + jockey pump",
      "Complete NBC & Local Fire Department compliance for NOC",
      "Hydrostatically tested up to 15 kg/cm² pressure holding",
    ],
  },
  {
    id: "structural-fabrication-pune",
    slug: "structural-fabrication-pune",
    title: "Structural Steel Portal Frame Fabrication",
    category: "Structural Fabrication",
    location: "Pune, Maharashtra",
    image: "/images/project_fabrication_pune_v2.jpg",
    areaOrCapacity: "380 Metric Tons Steel",
    scope: "Fabrication & Mobile Crane Erection of Portal Frames & Girders",
    duration: "3.5 Months",
    summary:
      "Precision structural steel fabrication of heavy portal frames, built-up crane runways, and cross-bracing frameworks for an engineering manufacturing plant in Chakan, Pune.",
    highlights: [
      "High-tensile IS 2062 E350 steel plates and rolled sections",
      "Multi-pass submerged arc welding (SAW) with 100% NDT inspection",
      "Heavy crane runway beams engineered for 20-ton crane cycles",
      "Shot-blasted and coated with heavy-duty epoxy primer system",
    ],
  },
  {
    id: "peb-warehouse-manesar",
    slug: "peb-warehouse-manesar",
    title: "Logistics Hub PEB Structure",
    category: "PEB Sheds",
    location: "Manesar, Haryana",
    image: "/images/peb_shed_v2.jpg",
    areaOrCapacity: "65,000 Sq. Ft.",
    scope: "Turnkey Pre-Engineered Logistics Warehouse",
    duration: "5 Months",
    summary:
      "Expansive e-commerce fulfillment warehouse featuring 12-meter clear height, energy-efficient polycarbonate skylights, and multiple hydraulic dock leveler bays.",
    highlights: [
      "Optimal tapered column profile reducing structural dead weight",
      "Integrated natural lighting with 8% skylight coverage",
      "Canopy over all dock areas for weather-protected loading",
      "Completed 2 weeks ahead of scheduled delivery date",
    ],
  },
  {
    id: "conventional-godown-nashik",
    slug: "conventional-godown-nashik",
    title: "Agricultural Storage Shed",
    category: "Conventional Sheds",
    location: "Nashik, Maharashtra",
    image: "/images/conventional_shed_v2.jpg",
    areaOrCapacity: "18,000 Sq. Ft.",
    scope: "Tubular Steel Truss & Cladding Construction",
    duration: "2.5 Months",
    summary:
      "High-ventilation agricultural storage shed built with tubular and angular steel trusses to preserve harvested produce under optimum dry conditions.",
    highlights: [
      "Custom tubular truss framework reducing steel weight",
      "Anti-condensation under-roof insulation barrier",
      "Weather-sealed bird-proof louvers and continuous ridge vents",
      "Sturdy plinth protection against monsoon runoff",
    ],
  },
  {
    id: "fire-system-dahej",
    slug: "fire-system-dahej",
    title: "Chemical Plant Fire Protection Network",
    category: "Fire Pipeline",
    location: "Dahej, Gujarat",
    image: "/images/fire_pipeline_v2.jpg",
    areaOrCapacity: "3,200m Ring Main + Deluge System",
    scope: "High-Hazard Fire Suppression & Foam-Water Manifold",
    duration: "3 Months",
    summary:
      "Specialized high-pressure fire fighting pipeline and deluge water spray network engineered specifically for a chemical and solvent storage facility.",
    highlights: [
      "Seamless heavy-wall carbon steel piping with anti-corrosive wrapping",
      "Automated deluge valve system connected to flame sensors",
      "Double landing valves and foam proportioning monitors",
      "Certified to strict chemical safety and insurance audit norms",
    ],
  },
  {
    id: "mezzanine-gantry-sanand",
    slug: "mezzanine-gantry-sanand",
    title: "Heavy Mezzanine & Gantry Steelwork",
    category: "Structural Fabrication",
    location: "Sanand, Gujarat",
    image: "/images/structural_fabrication_v2.jpg",
    areaOrCapacity: "220 Metric Tons Steel",
    scope: "Industrial Mezzanine Floor & Equipment Support Structure",
    duration: "2 Months",
    summary:
      "Engineered structural mezzanine platform for automotive component assembly line, featuring heavy steel decking, safety railings, and access staircases.",
    highlights: [
      "Heavy load bearing capacity of 1,200 kg per square meter",
      "Grade 10.9 high-strength friction grip (HSFG) bolted joints",
      "Chequered plate flooring with anti-skid industrial surface",
      "Fabricated and installed without stopping ground-floor machinery",
    ],
  },
];
