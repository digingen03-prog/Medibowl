export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  heroImage: string;
  cardImage: string;
  subcategories: {
    name: string;
    description: string;
  }[];
  keyBenefits: string[];
  procurementSpecs: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "generic-medicines",
    slug: "generic-medicines",
    title: "Generic Medicines",
    badge: "Essential Healthcare",
    shortDescription: "A comprehensive portfolio of bioequivalent generic medicines across key therapeutic segments, ensuring affordability and therapeutic efficacy.",
    fullDescription: "Generic medicines form the backbone of modern global healthcare, providing cost-effective alternatives to originator pharmaceuticals without compromising on therapeutic efficacy, safety, or quality. Medibowl International coordinates the sourcing, distribution, and export of bioequivalent generic medicines produced in certified manufacturing facilities adhering to international pharmacopoeia standards (USP/BP/IP/Ph. Eur.). Our extensive portfolio addresses chronic, acute, and preventive healthcare demands worldwide.",
    cardImage: "/seven-strategic-portfolios/generic-medicines.webp",
    heroImage: "/seven-strategic-portfolios/generic-medicines.webp",
    subcategories: [
      { name: "Tablets & Capsules", description: "Solid oral dosage forms encompassing immediate-release, sustained-release, and enteric-coated formulations." },
      { name: "Antibiotics & Antimicrobials", description: "Broad-spectrum and targeted antibacterial, antifungal, and antiviral formulations for infection control." },
      { name: "Analgesics & Anti-inflammatory Medicines", description: "Pain management medicines, non-steroidal anti-inflammatory drugs (NSAIDs), and antipyretics." },
      { name: "Cardiovascular Medicines", description: "Antihypertensives, statins, beta-blockers, ACE inhibitors, and antiarrhythmic therapies." },
      { name: "Diabetes & Endocrinology Products", description: "Oral hypoglycaemic agents, insulin sensitisers, and metabolic support therapies." },
      { name: "Gastrointestinal Medicines", description: "Proton pump inhibitors (PPIs), antacids, antiemetics, and gastroprokinetic agents." },
      { name: "Respiratory Medicines", description: "Bronchodilators, antihistamines, antiasthmatics, and oral expectorant combinations." },
      { name: "Neurology & Psychiatry Products", description: "Anticonvulsants, mood stabilisers, anxiolytics, and central nervous system therapeutics." },
      { name: "Dermatology Products", description: "Topical antifungal, antibacterial, corticosteroid creams, ointments, and medicinal lotions." },
      { name: "Vitamins & Nutritional Supplements", description: "Multivitamin complexes, essential minerals, iron preparations, and nutritional adjuncts." },
      { name: "Other Therapeutic Formulations", description: "Diverse specialized formulations catering to specific institutional and regional clinical needs." }
    ],
    keyBenefits: [
      "Rigorous adherence to international pharmacopoeial standards",
      "Cost-effective therapeutic alternatives for public & private healthcare",
      "Stable shelf-life packaging optimized for international export",
      "Comprehensive regulatory documentation support"
    ],
    procurementSpecs: [
      "Available in blisters, strips, and institutional bulk bottles",
      "Custom multilingual packaging options available upon verification",
      "Batch-specific Certificates of Analysis (CoA) provided"
    ]
  },
  {
    id: "branded-medicines",
    slug: "branded-medicines",
    title: "Branded Medicines",
    badge: "Originator & Premium",
    shortDescription: "Original and specialized branded pharmaceutical formulations from reputed multinational and domestic manufacturers.",
    fullDescription: "Medibowl International facilitates the procurement and supply of established branded pharmaceuticals for institutional buyers, hospital pharmacies, and authorized international distributors. We work within legal and authorized channels to source authentic branded formulations manufactured by leading pharmaceutical corporations, ensuring supply continuity for critical and chronic healthcare management.",
    cardImage: "/seven-strategic-portfolios/branded-medicines.webp",
    heroImage: "/seven-strategic-portfolios/branded-medicines.webp",
    subcategories: [
      { name: "Prescription Medicines", description: "Clinically monitored prescription-only pharmaceuticals covering primary and specialty care." },
      { name: "Specialty Branded Formulations", description: "High-tier branded drugs designed for complex therapeutic indications." },
      { name: "Chronic Therapy Medicines", description: "Long-term therapeutic management lines for cardiovascular, neurological, and metabolic conditions." },
      { name: "Acute Care Medicines", description: "Fast-acting hospital-grade branded emergency and acute therapeutic formulations." },
      { name: "Hospital-use Medicines", description: "Restricted and institutional-use formulations intended for supervised hospital administration." },
      { name: "Other Branded Pharmaceutical Products", description: "Specialized ethical branded product lines sourced on client request." }
    ],
    keyBenefits: [
      "Authentic product sourcing with verifiable manufacturer provenance",
      "Strict temperature-monitored supply chain coordination",
      "Support for hospital formulary procurement and chronic disease management",
      "Authorized multi-country supply coordination"
    ],
    procurementSpecs: [
      "Original manufacturer packaging and tamper-evident seals",
      "Cold-chain logistics coordination where required (2°C - 8°C)",
      "Strict prescription and regulatory documentation compliance"
    ]
  },
  {
    id: "surgical-products",
    slug: "surgical-products",
    title: "Surgical Products",
    badge: "Clinical Precision",
    shortDescription: "Precision surgical instruments, sterile procedure essentials, and operative theatre supplies for surgical care.",
    fullDescription: "Surgical interventions demand the highest standard of precision, sterility, and durability. Medibowl International supplies a comprehensive range of surgical instruments, sterile disposables, and operating theatre essentials designed to meet the rigorous demands of surgeons, surgical theatres, and trauma centres globally. Every product line is sourced with strict attention to material biocompatibility, sterility assurance, and international surgical standards.",
    cardImage: "/seven-strategic-portfolios/surgical-products.webp",
    heroImage: "/seven-strategic-portfolios/surgical-products.webp",
    subcategories: [
      { name: "Surgical Instruments", description: "High-grade stainless steel forceps, scissors, scalpels, retractors, and needle holders." },
      { name: "General Surgical Supplies", description: "Disposable surgical packs, drapes, suction handles, and sterile surgical tubing." },
      { name: "Sterile Surgical Products", description: "ETO or Gamma irradiated sterile surgical disposables ensuring immediate clinical readiness." },
      { name: "Dressing Materials", description: "Sterile surgical dressings, cotton wool rolls, absorbent pads, and surgical tapes." },
      { name: "Surgical Gloves", description: "Sterile latex and nitrile surgical gloves offering micro-texture and high tactile sensitivity." },
      { name: "Surgical Masks", description: "Fluid-resistant 3-ply and N95 surgical masks ensuring high bacterial filtration efficiency (BFE)." },
      { name: "Wound Care Products", description: "Advanced hydrocolloid, alginate, foam dressings, and skin closure adhesives." },
      { name: "Operating Theatre Supplies", description: "Sterile surgical gowns, mayo stand covers, light handle covers, and cautery accessories." },
      { name: "Procedure-related Consumables", description: "Customized procedural kits for catheterization, suturing, and minor surgical interventions." }
    ],
    keyBenefits: [
      "Medical-grade surgical stainless steel and hypoallergenic polymers",
      "Validated sterility cycles (Gamma / ETO) with certified sterility indicators",
      "Ergonomic instrument engineering for demanding surgical environments",
      "Available as individual items or packaged procedure packs"
    ],
    procurementSpecs: [
      "Bulk hospital carton packaging with moisture-resistant liners",
      "Color-coded sizing and clear sterile barrier packaging",
      "CE & ISO certified manufacturing supply lines"
    ]
  },
  {
    id: "medical-consumables",
    slug: "medical-consumables",
    title: "Medical Consumables",
    badge: "Hospital Essentials",
    shortDescription: "Daily clinical disposables, infusion sets, personal protective wear, and infection prevention products for healthcare institutions.",
    fullDescription: "Medical consumables are the vital lifeblood of everyday patient care across clinics, diagnostic laboratories, and large tertiary hospital chains. Medibowl International ensures uninterrupted supply of reliable, non-pyrogenic, sterile disposable healthcare consumables. We emphasize product consistency, leak-proof designs, and dependable barrier protection to uphold infection control protocols across all healthcare settings.",
    cardImage: "/seven-strategic-portfolios/medical-consumables.webp",
    heroImage: "/seven-strategic-portfolios/medical-consumables.webp",
    subcategories: [
      { name: "Disposable Syringes & Needles", description: "2-part and 3-part sterile syringes with ultra-sharp luer-slip or luer-lock hypodermic needles." },
      { name: "IV Cannulas & Infusion Sets", description: "Teflon / FEP intravenous cannulas with injection ports and wings across gauges 14G to 26G." },
      { name: "IV Administration Sets", description: "Vented and non-vented infusion sets with precision roller clamps and integrated bacterial filters." },
      { name: "Examination Gloves", description: "Non-sterile latex, nitrile, and vinyl examination gloves for everyday clinical examination." },
      { name: "Face Masks & Protective Wear", description: "Surgical masks, splash aprons, isolation gowns, shoe covers, and protective face shields." },
      { name: "Medical Tubes & Catheters", description: "Foley balloon catheters, suction catheters, nasogastric tubes, and thoracic drainage tubes." },
      { name: "Gauze & Bandages", description: "Absorbent gauze swabs, crepe bandages, conforming bandages, and elastic adhesive rolls." },
      { name: "Wound Dressings", description: "Waterproof transparent film dressings, paraffin gauze, and post-operative island dressings." },
      { name: "Disposable Medical Products", description: "Urine collection bags, bed underpads, specimen containers, and umbilical cord clamps." },
      { name: "Infection Prevention Supplies", description: "Surface disinfectant wipes, hand sanitizing preparations, and biohazard containment liners." }
    ],
    keyBenefits: [
      "Non-toxic, pyrogen-free medical grade polymers",
      "Uniform calibration and smooth plunger movement for painless administration",
      "Cost-optimized institutional packaging for high-frequency consumption",
      "Consistent supply chains preventing hospital stock-outs"
    ],
    procurementSpecs: [
      "Standard international carton packaging (100 pcs / 1000 pcs master cases)",
      "Individual peel-open blister packaging with expiration tracking",
      "Barcoded cartons for seamless hospital inventory management"
    ]
  },
  {
    id: "speciality-pharmaceuticals",
    slug: "speciality-pharmaceuticals",
    title: "Speciality Pharmaceutical Products",
    badge: "Critical Care",
    shortDescription: "High-value, critical care formulations, injectables, anaesthetic agents, and immunological therapies for complex clinical treatments.",
    fullDescription: "Speciality pharmaceuticals represent complex, high-value medications required for acute therapeutic interventions, intensive care units (ICUs), emergency medicine, and rare diseases. Sourcing speciality pharmaceuticals demands meticulous cold-chain monitoring, strict regulatory documentation, and dependable availability. Medibowl International serves as a dedicated sourcing partner for critical care facilities and international healthcare institutions requiring hard-to-source therapeutic formulations.",
    cardImage: "/seven-strategic-portfolios/speciality-pharmaceuticals.webp",
    heroImage: "/seven-strategic-portfolios/speciality-pharmaceuticals.webp",
    subcategories: [
      { name: "Critical Care Medicines", description: "Vasopressors, inotropes, emergency antiarrhythmics, and parenteral resuscitation drugs." },
      { name: "Injectable Formulations", description: "Sterile small and large volume parenterals, lyophilized powders for reconstitution, and prefilled ampoules." },
      { name: "Anaesthesia Products", description: "General and local anaesthetic agents, neuromuscular blocking drugs, and reversal formulations." },
      { name: "Immunological Products", description: "Immune globulins, tetanus antitoxins, specialized antisera, and therapeutic vaccines." },
      { name: "Hormonal Preparations", description: "Corticosteroids, thyroid therapies, fertility hormones, and systemic endocrine regulators." },
      { name: "Speciality Therapeutic Medicines", description: "Targeted therapies for nephrology, rheumatology, and advanced metabolic disorders." },
      { name: "High-value Pharmaceutical Products", description: "Specialized biologics, plasma derivatives, and enzyme replacement therapies." },
      { name: "Other Speciality Formulations", description: "Custom hospital formulations and emergency procurement on clinical request." }
    ],
    keyBenefits: [
      "Strict temperature-controlled end-to-end cold-chain logistics (2°C - 8°C / -20°C)",
      "Direct coordination with verified specialty pharmaceutical manufacturers",
      "Full batch pedigree documentation and temperature data logger reports",
      "Rapid turnaround for institutional critical care orders"
    ],
    procurementSpecs: [
      "Insulated thermal shippers with calibrated phase change materials",
      "Certificate of Analysis, Batch Release, and MSDS documentation included",
      "Hospital-specific batch reservation available upon confirmed contract"
    ]
  },
  {
    id: "oncology-products",
    slug: "oncology-products",
    title: "Oncology Products",
    badge: "Advanced Oncology",
    shortDescription: "Specialized chemotherapy medications, targeted anticancer therapies, and supportive oncology formulations for cancer treatment.",
    fullDescription: "Cancer therapy requires absolute pharmaceutical precision, uncompromised chemical purity, and strict regulatory governance. Medibowl International assists healthcare providers, oncology institutes, and international healthcare distributors in accessing a comprehensive range of antineoplastic agents, cytotoxic injectables, targeted therapies, and supportive care medications. We prioritize safe handling, authentic sourcing, and international export compliance for specialized oncology portfolios.",
    cardImage: "/seven-strategic-portfolios/oncology-products.webp",
    heroImage: "/seven-strategic-portfolios/oncology-products.webp",
    subcategories: [
      { name: "Oncology Tablets & Capsules", description: "Oral antineoplastic therapies, tyrosine kinase inhibitors (TKIs), and hormone receptor modulators." },
      { name: "Oncology Injectables", description: "Cytotoxic infusions, platinum-based complexes, taxanes, and antimetabolite solutions." },
      { name: "Chemotherapy Medicines", description: "Standard therapeutic chemotherapy regimens covering solid tumors and hematologic malignancies." },
      { name: "Targeted Therapy Products", description: "Monoclonal antibodies and targeted molecular inhibitors for precision oncology care." },
      { name: "Supportive Oncology Medicines", description: "Antiemetics (5-HT3 antagonists, NK1 inhibitors), colony stimulating factors, and bone protective agents." },
      { name: "Haematology-related Medicines", description: "Therapies for leukemia, lymphoma, multiple myeloma, and severe aplastic anemias." },
      { name: "Other Specialized Oncology Products", description: "Adjuvant antineoplastics and specialized cytotoxic formulations upon verification." }
    ],
    keyBenefits: [
      "Verified manufacturer sources with strict compliance to antineoplastic standards",
      "Safe handling protocols and impact-resistant specialized transit packaging",
      "Comprehensive regulatory documentation and destination-country import facilitation",
      "Supportive care portfolios ensuring holistic patient therapy coverage"
    ],
    procurementSpecs: [
      "Cytotoxic warning labeling and secondary leak-proof packaging",
      "Temperature-controlled validated cold boxes with digital data loggers",
      "Strict prescription and hospital institution verification required"
    ]
  },
  {
    id: "medical-equipment",
    slug: "medical-equipment",
    title: "Medical Equipment",
    badge: "Biomedical Devices",
    shortDescription: "Clinical diagnostic devices, multi-parameter patient monitors, hospital furniture, and critical care medical devices.",
    fullDescription: "Modern medical practice relies on advanced biomedical devices and robust hospital infrastructure. Medibowl International facilitates the procurement and international distribution of reliable diagnostic equipment, patient monitoring systems, emergency resuscitation devices, and hospital furniture. We collaborate with accredited manufacturers to provide certified medical devices that empower clinicians with accurate diagnostics and durable hospital operational efficiency.",
    cardImage: "/seven-strategic-portfolios/medical-equipment.webp",
    heroImage: "/seven-strategic-portfolios/medical-equipment.webp",
    subcategories: [
      { name: "Patient Monitoring Systems", description: "Multi-parameter monitors tracking ECG, SpO2, NIBP, respiration, and temperature." },
      { name: "Diagnostic Equipment", description: "Clinical ultrasound scanners, digital blood pressure units, glucometers, and otoscopes." },
      { name: "Hospital Beds & Furniture", description: "ICU motorized beds, manual multi-function ward beds, bedside lockers, and overbed tables." },
      { name: "ECG Machines", description: "Portable 3-channel and 12-channel electrocardiographs with built-in thermal printers and interpretation." },
      { name: "Infusion & Syringe Pumps", description: "Micro-infusion syringe drivers and volumetric infusion pumps with multi-level occlusion alarms." },
      { name: "Respiratory Care Equipment", description: "Medical nebulizers, BiPAP/CPAP systems, oxygen concentrators, and portable aspirators." },
      { name: "Oxygen Therapy Equipment", description: "Medical gas regulators, flowmeters, oxygen cylinders, and humidified delivery systems." },
      { name: "Laboratory Equipment", description: "Clinical centrifuges, biochemical analyzers, binocular microscopes, and hematology counters." },
      { name: "Emergency & Critical Care Equipment", description: "Automated External Defibrillators (AEDs), multiparameter transport monitors, and crash carts." },
      { name: "Other Medical Devices", description: "Pulse oximeters, medical phototherapy units, and specialized clinical devices." }
    ],
    keyBenefits: [
      "Rigorous pre-shipment quality inspection and electrical safety testing",
      "International CE / ISO compliance certificates with technical operator manuals",
      "Voltage compatibility configurations (110V / 220V - 240V / 50-60Hz) for target export markets",
      "Warranty coordination and spare parts availability support"
    ],
    procurementSpecs: [
      "Heavy-duty export crate packaging with shock indicators",
      "User manuals, calibration certificates, and accessory packs included",
      "Technical specifications tailored for hospital tender procurement"
    ]
  }
];

export function getProductCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug);
}

