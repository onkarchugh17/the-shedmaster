export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  cardPoints: string[];
  features: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  applications: string[];
  specs: {
    label: string;
    value: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "peb-shed",
    slug: "peb-shed",
    title: "Pre-Engineered Building (PEB) Shed",
    shortTitle: "PEB Shed",
    tagline: "High-Strength, Fast-Track Steel Construction for Modern Industry",
    shortDescription:
      "Pre-engineered building solutions for industrial, commercial and agricultural needs.",
    heroDescription:
      "Our Pre-Engineered Building (PEB) sheds provide rapid installation, large column-free clear spans, and superior material efficiency. Engineered with high-tensile steel designed to withstand extreme Indian climate and wind load conditions.",
    image: "/images/peb_shed_v2.jpg",
    cardPoints: [
      "Cost Effective",
      "Quick Installation",
      "Long Span & Durable",
    ],
    features: [
      {
        title: "Clear-Span Architecture",
        description:
          "Enables expansive obstruction-free floor areas of up to 60+ meters without intermediate interior columns.",
      },
      {
        title: "High-Grade Structural Steel",
        description:
          "Fabricated with certified high-yield 345 MPa steel components for lightweight rigidity and maximum longevity.",
      },
      {
        title: "Fast-Track Erection",
        description:
          "Off-site factory fabrication and bolted on-site assembly reduces total project timelines by 40–50% compared to traditional masonry.",
      },
      {
        title: "Energy-Efficient Cladding",
        description:
          "Premium color-coated Galvalume roof and wall sheeting with optional insulation to keep interior temperatures stable.",
      },
    ],
    benefits: [
      {
        title: "Lower Overall Capital Cost",
        description:
          "Optimized tapered frame geometry eliminates redundant steel weight, cutting material and foundation costs.",
      },
      {
        title: "Seamless Future Expansion",
        description:
          "Easily expand length by adding standard structural bays without disrupting ongoing factory operations.",
      },
      {
        title: "Weather & Seismic Resistance",
        description:
          "Calculated according to IS 875 wind codes and IS 1893 seismic standards for high safety in all Indian seismic zones.",
      },
      {
        title: "Low Maintenance Life Cycle",
        description:
          "Anti-corrosive primer systems and high-durability coatings guarantee decades of rust-free industrial service.",
      },
    ],
    applications: [
      "Manufacturing & Heavy Assembly Plants",
      "E-Commerce & Logistics Warehousing",
      "Cold Storage & Agro-Processing Facilities",
      "Automobile Workshops & Distribution Hubs",
      "Aviation Hangars & Bulk Material Storage",
      "Textile & FMCG Production Units",
    ],
    specs: [
      { label: "Primary Frame Material", value: "High-Strength 345 MPa Structural Plate" },
      { label: "Secondary Members", value: "Cold-Formed Z & C Purlins (IS 801 / IS 811)" },
      { label: "Clear Span Capabilities", value: "15 meters to 60+ meters column-free" },
      { label: "Roof & Wall Sheeting", value: "0.50mm / 0.60mm Galvalume / Color-Coated Steel" },
      { label: "Standard Wind Speed Design", value: "Up to 50 m/s (as per IS 875 Part 3)" },
      { label: "Standard Bay Spacing", value: "6.0m, 7.5m, 8.0m, or customized spacing" },
    ],
    process: [
      {
        step: "01",
        title: "Land & Load Assessment",
        description: "We analyze your site dimensions, crane capacity needs, soil conditions, and operational layout.",
      },
      {
        step: "02",
        title: "Engineering Design & Modeling",
        description: "Structural design using 3D modeling and calculation to Indian Standards (IS 800:2007).",
      },
      {
        step: "03",
        title: "Controlled Factory Fabrication",
        description: "Beams, built-up columns, and purlins fabricated, shot-blasted, primed, and quality-tested.",
      },
      {
        step: "04",
        title: "On-Site Bolted Erection",
        description: "High-speed assembly using high-tensile anchor bolts and cranes by experienced erection crews.",
      },
    ],
    faqs: [
      {
        question: "What makes PEB sheds faster to construct than conventional sheds?",
        answer:
          "In PEB, the primary steel members and secondary framing are manufactured concurrently in the workshop while civil foundation work happens on site. Once the foundation cures, the components are bolted together rapidly without wet concrete delays or slow field welding.",
      },
      {
        question: "Can an overhead EOT crane be installed inside a PEB shed?",
        answer:
          "Yes. We regularly design PEB sheds with crane brackets, gantry girders, and reinforced column profiles capable of handling 5 Ton, 10 Ton, 20 Ton, or higher capacity industrial overhead cranes.",
      },
      {
        question: "What is the typical lifespan of a PEB warehouse shed?",
        answer:
          "With quality Galvalume cladding and protective epoxy anti-rust primer coatings, a properly constructed PEB structure reliably delivers 30 to 50+ years of robust industrial service.",
      },
    ],
  },
  {
    id: "conventional-shed",
    slug: "conventional-shed",
    title: "Conventional Steel Shed",
    shortTitle: "Conventional Shed",
    tagline: "Heavy-Duty, Time-Tested Structural Steel Truss Construction",
    shortDescription:
      "Traditional steel structures built strong for various applications.",
    heroDescription:
      "Engineered for heavy industrial applications requiring custom geometry, high localized load-bearing capacity, and site adaptability. Conventional sheds utilize standard hot-rolled structural steel sections, angular trusses, and site-welded or bolted joints.",
    image: "/images/conventional_shed_v2.jpg",
    cardPoints: [
      "Versatile Design",
      "Customized to Your Needs",
      "Ideal for Small & Medium Projects",
    ],
    features: [
      {
        title: "Hot-Rolled Structural Sections",
        description:
          "Constructed using standard ISMC channels, ISMB beams, angles, and pipes from premier steel suppliers.",
      },
      {
        title: "Custom Truss Geometries",
        description:
          "Pratt, Howe, Fink, or North-Light roof trusses designed specifically to match site constraints and natural lighting needs.",
      },
      {
        title: "Exceptional Load Sturdiness",
        description:
          "Ideally suited for supporting heavy machinery, heavy overhead hoist mechanisms, and roof-mounted piping loads.",
      },
      {
        title: "High Site Adaptability",
        description:
          "Easily accommodated to non-rectangular plots, existing masonry boundaries, or irregular topographical layouts.",
      },
    ],
    benefits: [
      {
        title: "Maximum Structural Rigidity",
        description:
          "Heavy section structural members absorb intense machine vibrations, stamping loads, and mechanical impact.",
      },
      {
        title: "Local Material Availability",
        description:
          "Fabricated with widely available standard Indian steel sections, reducing procurement lead times for rapid start.",
      },
      {
        title: "Easy On-Site Modifications",
        description:
          "Modifications, mezzanine floor additions, and equipment mounting points can be welded or retrofitted easily.",
      },
      {
        title: "Cost-Effective for Compact Footprints",
        description:
          "Economical for workshop sheds, processing sheds, and small-to-medium manufacturing plots.",
      },
    ],
    applications: [
      "Heavy Machinery & Engineering Machine Shops",
      "Foundries, Forging & Metal Stamping Units",
      "Agricultural Godowns & Grain Storage",
      "Automobile Body Shops & Repair Garages",
      "Chemical Processing Sheds & Raw Material Yards",
      "Commercial Sheds & Rural Industrial Sheds",
    ],
    specs: [
      { label: "Primary Structural Steel", value: "Hot-rolled ISMB Beams, ISMC Channels, Angles (IS 2062 Grade)" },
      { label: "Roof Truss Types", value: "Angular Truss, Tubular Truss, North-Light Truss" },
      { label: "Connection Method", value: "Certified Site Welding & High-Grade Bolted Splices" },
      { label: "Sheeting Material", value: "Corrugated Galvanized Iron / Color Coated Steel 0.45mm-0.60mm" },
      { label: "Standard Heights", value: "2m to 14m side height as per requirements" },
      { label: "Corrosion Protection", value: "Single Red Oxide Primer + Synthetic Enamel / Epoxy Finish" },
    ],
    process: [
      {
        step: "01",
        title: "Site Survey & Truss Geometry",
        description: "Detailed measurement of site boundary, column centers, and clearance requirements.",
      },
      {
        step: "02",
        title: "Truss Fabrication & Fit-Up",
        description: "Precision cutting, gusset plate alignment, and certified arc/MIG welding in our fabrication yard.",
      },
      {
        step: "03",
        title: "Column Erection & Plinth Alignment",
        description: "Vertical plumb alignment, base plate grouting, and cross-bracing installation.",
      },
      {
        step: "04",
        title: "Truss Hoisting & Roof Sheeting",
        description: "Mobile crane hoisting of trusses, purlin fixing, and weather-tight roof sheeting installation.",
      },
    ],
    faqs: [
      {
        question: "When should I choose a conventional shed over a PEB shed?",
        answer:
          "Conventional sheds are often the preferred choice for smaller to mid-sized units (under 10,000 sq.ft.), irregular site plots, locations requiring heavy localized point loads, or projects where quick local modification and easy future on-site welding are critical.",
      },
      {
        question: "What type of paint protection is applied?",
        answer:
          "We apply one coat of high-grade zinc chromate / red oxide anti-corrosive primer followed by one finish coat of industrial synthetic enamel or industrial-grade polyurethane/epoxy paints for lasting corrosion protection.",
      },
      {
        question: "Can you provide natural daylight in a conventional shed?",
        answer:
          "Yes, we incorporate high-transmittance polycarbonate skylight sheets (typically 5% to 10% of roof area) and turbo ventilators along the roof ridge for natural light and passive air circulation.",
      },
    ],
  },
  {
    id: "fire-pipeline-work",
    slug: "fire-pipeline-work",
    title: "Fire Pipeline & Hydrant Installation",
    shortTitle: "Fire Pipeline Work",
    tagline: "Certified Fire Fighting Systems for Industrial Safety & NOC Compliance",
    shortDescription:
      "Design, supply, installation and maintenance of complete firefighting systems.",
    heroDescription:
      "We engineer, install, and test complete industrial fire protection pipeline networks in compliance with NBC (National Building Code) and local Fire Department norms. From fire pump rooms and internal hydrant rings to automated sprinkler systems.",
    image: "/images/fire_pipeline_v2.jpg",
    cardPoints: [
      "Fire Pump Systems",
      "Pipeline Installation",
      "Testing & Maintenance",
    ],
    features: [
      {
        title: "Heavy-Gauge MS Fire Piping",
        description:
          "Installed with ERW / Seamless heavy class C-grade MS pipes, grooved couplings, and high-pressure welded joints.",
      },
      {
        title: "Fire Pump House Setup",
        description:
          "Integration of main electric fire pump, standby diesel generator fire pump, and pressure-balancing jockey pump.",
      },
      {
        title: "Hydrant & Sprinkler Networks",
        description:
          "Internal landing valves, exterior courtyard hydrants, hose reels, and automated temperature-activated sprinkler grids.",
      },
      {
        title: "Hydrostatic Pressure Testing",
        description:
          "Rigorous 1.5x working pressure hydraulic testing to ensure zero leaks, certified before final commissioning.",
      },
    ],
    benefits: [
      {
        title: "Full Fire Department Compliance",
        description:
          "Designed to meet IS 3844 and NBC standards, ensuring smooth Fire Department inspection and NOC approval.",
      },
      {
        title: "Rapid Automatic Suppression",
        description:
          "Automated sprinkler heads contain fire incidents immediately at the source, preventing catastrophic asset loss.",
      },
      {
        title: "Industrial Grade Durability",
        description:
          "Anti-corrosive epoxy coatings and distinctive bright fire-red industrial enamel protection for long service life.",
      },
      {
        title: "Complete End-to-End Service",
        description:
          "From hydraulic layout calculations to pump installation, pipe grooving, testing, and periodic AMC maintenance.",
      },
    ],
    applications: [
      "Manufacturing Units & Engineering Plants",
      "Large Warehouses & Logistics Hubs",
      "Chemical Processing & Storage Facilities",
      "Commercial Complexes & Multi-Level Showrooms",
      "Pharmaceutical Clean Rooms & Cold Chains",
      "Textile Mills, Paper Mills & Packaging Units",
    ],
    specs: [
      { label: "Piping Material", value: "IS 1239 / IS 3589 Heavy Class MS / Seamless Pipes" },
      { label: "Diameter Range", value: "25mm up to 300mm NB pipelines" },
      { label: "Pump Configuration", value: "Main Electric Pump + Standby Diesel Engine Pump + Jockey Pump" },
      { label: "Hydrant Equipment", value: "Gunmetal IS 5290 Single/Double Headed Landing Valves, RRL Hoses" },
      { label: "Sprinkler Rating", value: "68°C / 79°C Quartzoid Bulb Sprinklers (UL/FM or ISI standard)" },
      { label: "Pressure Testing Standard", value: "1.5x working pressure (up to 14–16 kg/cm²) for 24 hours" },
    ],
    process: [
      {
        step: "01",
        title: "Fire Load & Hazard Assessment",
        description: "Calculation of required water demand, pump flow rate (LPM), and head pressure according to NBC norms.",
      },
      {
        step: "02",
        title: "Hydraulic Piping Layout",
        description: "Drafting schematic isometric routing for pump house, ring main, risers, and hydrant locations.",
      },
      {
        step: "03",
        title: "Fabrication & Pipe Installation",
        description: "Certified welding, grooved victaulic couplings, heavy unistrut clevis hangers, and valve manifolds.",
      },
      {
        step: "04",
        title: "Pressure Testing & Handover",
        description: "24-hour hydrostatic holding test, flow rate validation, pump auto-start sequencing, and documentation.",
      },
    ],
    faqs: [
      {
        question: "Do your fire pipeline systems comply with local Fire NOC requirements?",
        answer:
          "Yes. All our installations are engineered strictly adhering to IS 3844, IS 13039, and the National Building Code (NBC) guidelines, which are mandatory for state fire department clearance and industrial NOC issuance.",
      },
      {
        question: "What is included in the fire pump room setup?",
        answer:
          "A complete setup includes the primary electric motor-driven fire pump, an auxiliary diesel engine-driven standby pump (which starts automatically during power outages), a jockey pump for pressure stabilization, control panels, suction/discharge headers, and air vessels.",
      },
      {
        question: "Can you install fire pipelines inside an already operational factory?",
        answer:
          "Yes. Our installation crews work with pre-fabricated spools and scheduled off-shift or section-by-section installation to avoid interrupting your daily factory production.",
      },
    ],
  },
  {
    id: "structural-fabrication",
    slug: "structural-fabrication",
    title: "Heavy Structural Steel Fabrication",
    shortTitle: "Structural Fabrication",
    tagline: "Precision Heavy Steel Framing, Gantry Girders & Industrial Infrastructure",
    shortDescription:
      "Custom steel fabrication for industrial, commercial and infrastructure projects.",
    heroDescription:
      "Specialized in bespoke heavy structural steel fabrication. We fabricate and erect heavy columns, built-up crane gantry girders, mezzanine floors, stair towers, pipe racks, and complex industrial portal frames with uncompromising dimensional accuracy.",
    image: "/images/structural_fabrication_v2.jpg",
    cardPoints: [
      "Precision Fabrication",
      "Heavy Duty Structures",
      "Custom Designs",
    ],
    features: [
      {
        title: "Certified Heavy Steel Plates",
        description:
          "Utilizing high-tensile steel plates and hot-rolled profiles cut with CNC oxy-plasma cutting machines for tight tolerances.",
      },
      {
        title: "Heavy Crane Gantry Girders",
        description:
          "Designed and fabricated for high fatigue resistance to support heavy 10T to 50T overhead factory cranes.",
      },
      {
        title: "Mezzanine & Multi-Tier Platforms",
        description:
          "Maximize vertical factory space with engineered structural steel mezzanines for storage, offices, or machinery.",
      },
      {
        title: "Precision Fit-up & Welded Joints",
        description:
          "Full penetration submerged arc welding (SAW) and certified MIG welding verified by non-destructive testing (NDT).",
      },
    ],
    benefits: [
      {
        title: "Extreme Structural Integrity",
        description:
          "Heavy steel frames built to handle high dynamic operational loads, mechanical vibrations, and heavy payloads.",
      },
      {
        title: "Customized to Your Machinery Layout",
        description:
          "Every beam, bracket, and connection tailored precisely to your specific machinery footprints and production workflow.",
      },
      {
        title: "Turnkey Design to Erection",
        description:
          "From structural CAD drawing and yard fabrication to heavy mobile crane hoisting and bolt-torquing on site.",
      },
      {
        title: "Anti-Corrosion Surface Finishing",
        description:
          "Shot-blasted steel surfaces coated with zinc phosphate or epoxy primers to guard against industrial atmospheric corrosion.",
      },
    ],
    applications: [
      "Overhead Crane Gantry Girders & Runway Beams",
      "Multi-Tier Industrial Mezzanine Floors",
      "Pipe Racks & Cable Tray Bridges for Refineries & Chemicals",
      "Silo Supporting Structures & Hopper Platforms",
      "Heavy Equipment & Compressor Base Foundations",
      "Industrial Staircases, Walkways & Safety Catwalks",
    ],
    specs: [
      { label: "Steel Material Grades", value: "IS 2062 Grade E250 / E350 (Fe410 / Fe490) High Tensile" },
      { label: "Cutting & Preparation", value: "CNC Plasma / Oxy-Fuel Profile Cutting with Chamfering" },
      { label: "Welding Standards", value: "AWS D1.1 / IS 816 certified multi-pass MIG and Submerged Arc Welding" },
      { label: "Fasteners & Bolting", value: "Grade 8.8 and 10.9 High-Strength Friction Grip (HSFG) bolts" },
      { label: "Surface Preparation", value: "Sa 2.5 shot-blasting or mechanical power wire brushing" },
      { label: "Paint System", value: "Zinc Phosphate / Epoxy Primer with Polyurethane Topcoat" },
    ],
    process: [
      {
        step: "01",
        title: "Engineering Review & Shop Drawings",
        description: "Preparation of detailed fabrication and connection drawings with exact member marks and bolt hole schedules.",
      },
      {
        step: "02",
        title: "Material Sourcing & CNC Cutting",
        description: "Testing raw steel plates and cutting beams with precision beveling for deep-penetration weld joints.",
      },
      {
        step: "03",
        title: "Welding & Non-Destructive Testing",
        description: "Continuous welding in jigs followed by visual and dye-penetrant testing (DPT) for critical joints.",
      },
      {
        step: "04",
        title: "Erection & Torque Verification",
        description: "On-site rigging, crane hoisting, vertical plum alignment, and calibrated torque-tightening of bolts.",
      },
    ],
    faqs: [
      {
        question: "Can you fabricate custom mezzanine floors inside an existing shed?",
        answer:
          "Yes. We design and install self-supporting structural steel mezzanine floors inside existing buildings, engineered specifically around your floor space, load requirements (e.g. 500–1500 kg/m²), and access stairs.",
      },
      {
        question: "What quality checks are performed on fabricated structural members?",
        answer:
          "We conduct dimensional verification, camber checks, weld throat thickness measurements, and dye-penetrant testing (DPT) on critical structural joints before dispatch.",
      },
      {
        question: "Do you supply and install crane rails for overhead cranes?",
        answer:
          "Yes. We supply crane rails (CR-80, CR-100, etc.), forged clamping clips, resilient rubber pads, and crane stop buffers alongside the gantry girders.",
      },
    ],
  },
];
