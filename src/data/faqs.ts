export interface FaqItem {
  id: string;
  category: "General" | "PEB Shed" | "Conventional Shed" | "Fire Pipeline" | "Structural Fabrication";
  question: string;
  answer: string;
}

export const generalFaqs: FaqItem[] = [
  {
    id: "g1",
    category: "General",
    question: "What areas and states across India do you serve?",
    answer:
      "The Shed Master undertakes industrial shed construction, fire pipeline installations, and structural fabrication across India, with strong operational coverage in Delhi NCR, Rajasthan, Maharashtra, Gujarat, Madhya Pradesh, Uttar Pradesh, Haryana, and surrounding industrial belts.",
  },
  {
    id: "g2",
    category: "General",
    question: "How do I get an estimate or quote for my project?",
    answer:
      "You can submit our online consultation form, email us at theshedmaster17@gmail.com, or directly call or WhatsApp our team at +91 92110 50139. Share your plot dimensions, proposed usage, and location, and we will prepare a preliminary layout and transparent quotation.",
  },
  {
    id: "g3",
    category: "General",
    question: "Do you handle complete turnkey construction from design to erection?",
    answer:
      "Yes. We offer complete end-to-end execution, including structural design, architectural planning, factory fabrication, transportation, foundation coordinate guidance, on-site crane erection, sheeting, and final commissioning handover.",
  },
  {
    id: "g4",
    category: "PEB Shed",
    question: "What is the difference between PEB and Conventional Sheds?",
    answer:
      "PEB (Pre-Engineered Building) uses high-tensile custom tapered steel sections fabricated off-site, offering wider clear spans without columns and 40% faster erection. Conventional sheds use standard hot-rolled heavy steel sections (ISMB/ISMC) and trusses, which are ideal for high localized equipment loads, compact plots, or heavy vibration machinery.",
  },
  {
    id: "g5",
    category: "PEB Shed",
    question: "What is the typical completion timeline for an industrial shed?",
    answer:
      "For standard PEB sheds between 15,000 to 50,000 sq.ft., total fabrication and erection typically takes 8 to 14 weeks from drawing approval. Conventional sheds of similar size take approximately 10 to 16 weeks depending on site readiness and complexity.",
  },
  {
    id: "g6",
    category: "Fire Pipeline",
    question: "Do your fire pipeline systems comply with Fire Department NOC standards?",
    answer:
      "Yes. Every fire fighting pipeline, pump room, and sprinkler system we build strictly complies with IS 3844, IS 13039, and National Building Code (NBC) standards, ensuring compliance during official Fire Department inspections.",
  },
  {
    id: "g7",
    category: "Fire Pipeline",
    question: "What type of maintenance do you provide for fire pipeline networks?",
    answer:
      "We provide hydraulic pressure testing, pump testing, nozzle flushing, valve lubrication, and scheduled periodic maintenance checks to guarantee zero leakages and 100% emergency readiness.",
  },
  {
    id: "g8",
    category: "Structural Fabrication",
    question: "Can you fabricate and erect heavy crane gantry girders?",
    answer:
      "Yes. We specialize in heavy crane gantry girders engineered to accommodate 5T, 10T, 20T, and 50T overhead EOT cranes, with high-strength bolts, rail alignment, and reinforced column brackets.",
  },
  {
    id: "g9",
    category: "Structural Fabrication",
    question: "What quality assurance and welding standards do you maintain?",
    answer:
      "All welding is performed by qualified welders using IS 816 / AWS standards. We perform dimensional checks, weld throat inspections, and non-destructive testing (such as dye-penetrant testing) to ensure structural integrity.",
  },
  {
    id: "g10",
    category: "General",
    question: "What payment terms and milestone structures do you follow?",
    answer:
      "Our milestone payments are transparent and linked to tangible project progress: initial design & advance upon order confirmation, material procurement milestone, factory fabrication milestone, dispatch to site milestone, and final balance upon erection completion and handover.",
  },
];
