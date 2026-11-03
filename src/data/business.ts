export interface BusinessVertical {
  id: string;
  slug: string;
  title: string;
  headline: string;
  intro: string;
  badge: string;
  heroImage: string;
  targetAudience: string[];
  keyOfferings: {
    title: string;
    description: string;
  }[];
  regulatoryNotice?: string;
  primaryCtaText: string;
  primaryCtaLink: string;
}

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: "b2b",
    slug: "b2b",
    title: "B2B Solutions",
    headline: "Your Reliable Pharmaceutical Procurement Partner",
    badge: "Institutional & Enterprise",
    intro: "Medibowl International Private Limited works directly with commercial healthcare buyers, wholesale distributors, pharmacy retail chains, and hospital procurement departments to ensure dependable, cost-efficient, and transparent pharmaceutical sourcing.",
    heroImage: "/three-core-commercial-verticals/b2b-procurement-partner.png",
    targetAudience: [
      "Pharmaceutical Distributors & Stockists",
      "Pharmaceutical Wholesalers & Traders",
      "International Importers & Trading Houses",
      "Retail & Hospital Pharmacy Chains",
      "Private & Government Hospital Networks",
      "Clinics, Daycare & Specialized Medical Centres",
      "Pharmaceutical Procurement Agencies",
      "Eligible Government & Institutional Buyers"
    ],
    keyOfferings: [
      {
        title: "Competitive Multi-Source Procurement",
        description: "Leveraging direct connections across accredited pharmaceutical manufacturers to secure competitive volume pricing without intermediary inflation."
      },
      {
        title: "Product Availability Coordination",
        description: "Real-time tracking of therapeutic formulations, active lot availability, and scheduled manufacturing runs to guarantee delivery continuity."
      },
      {
        title: "Bulk Procurement & Tender Fulfillment",
        description: "Structured volume fulfillment capabilities tailored to hospital formulary cycles, NGO healthcare tenders, and distributor inventory replenishment."
      },
      {
        title: "Long-term Strategic Business Partnerships",
        description: "Predictable supply contracts with designated account managers, transparent lead times, and dedicated trade documentation assistance."
      }
    ],
    primaryCtaText: "Become Our Business Partner",
    primaryCtaLink: "/become-a-partner"
  },
  {
    id: "b2c",
    slug: "b2c",
    title: "B2C Solutions",
    headline: "Making Healthcare Products More Accessible",
    badge: "Consumer & Patient Access",
    intro: "Medibowl International is dedicated to facilitating broader, reliable access to essential medications, wellness products, and everyday healthcare consumables for patients and individual consumers—under strict clinical and regulatory supervision.",
    heroImage: "/three-core-commercial-verticals/b2c-accessible-healthcare.png",
    targetAudience: [
      "Individual Patients & Families",
      "Caregivers Managing Chronic Illnesses",
      "Home Healthcare Providers",
      "Patients Requiring Sourced Speciality Medications"
    ],
    keyOfferings: [
      {
        title: "Quality Generic & Branded Medicines",
        description: "Accessible sourcing of essential prescription formulations, ensuring authentic pedigree and safe packaging."
      },
      {
        title: "Wellness & Preventive Healthcare Products",
        description: "Nutritional supplements, vitamins, immune boosters, and therapeutic daily wellness products."
      },
      {
        title: "Home Medical Consumables",
        description: "Sterile gauze, wound dressings, examination gloves, sanitization products, and diabetic care accessories."
      },
      {
        title: "Select Healthcare Essentials",
        description: "Personal health monitoring accessories, pulse oximeters, digital thermometers, and mobility aids."
      }
    ],
    regulatoryNotice: "Important Patient Notice: Medibowl International operates in strict compliance with applicable drug distribution regulations. All prescription-required pharmaceuticals (Rx) necessitate a valid, verifiable medical prescription from a registered healthcare practitioner prior to order confirmation or dispatch. Unrestricted prescription medicine sales are strictly prohibited.",
    primaryCtaText: "Enquire About Products",
    primaryCtaLink: "/contact-us?type=b2c"
  },
  {
    id: "exports",
    slug: "international-exports",
    title: "International Exports",
    headline: "Taking Pharmaceutical & Healthcare Products Beyond Borders",
    badge: "Cross-Border Trade",
    intro: "As an emerging player in global pharmaceutical trade, Medibowl International connects quality Indian and international healthcare manufacturers with global healthcare markets, facilitating transparent and compliant export workflows across 7 target continents and regions.",
    heroImage: "/three-core-commercial-verticals/international-exports-beyond-borders.png",
    targetAudience: [
      "International Pharmaceutical Importers",
      "Regional Pharmaceutical Wholesalers & Stockists",
      "Overseas Hospital Groups & Ministry Buyers",
      "Healthcare Trading & Tender Consortia"
    ],
    keyOfferings: [
      {
        title: "Comprehensive Export Product Portfolio",
        description: "Single-point export coordination spanning generic formulations, branded medicines, sterile surgical items, consumables, and hospital devices."
      },
      {
        title: "Pharmaceutical Sourcing & Quality Audit",
        description: "Systematic manufacturer screening, lot inspection, batch traceability, and pharmacopoeial verification (USP/BP/IP/Ph. Eur.)."
      },
      {
        title: "Export Order Management & Packaging",
        description: "Climate-resilient export packaging, multilingual labeling support, palletization, and validated temperature-controlled cold-chain shippers."
      },
      {
        title: "Commercial & Regulatory Documentation",
        description: "Complete trade documentation support including Commercial Invoices, Packing Lists, Certificates of Analysis (CoA), Free Sale Certificates (FSC), and shipping documentation."
      },
      {
        title: "Shipment Coordination & Multimodal Logistics",
        description: "Coordination with international freight forwarders for air and ocean cargo, custom clearances, and destination port tracking under standard INCOTERMS."
      },
      {
        title: "Buyer and Supplier Relationship Bridge",
        description: "Acting as an agile, reliable liaison between manufacturing plants and overseas procurement managers for seamless trade execution."
      }
    ],
    regulatoryNotice: "All export operations are subject to applicable regulatory approvals, destination country import licenses, product registrations, and compliance with statutory export documentation.",
    primaryCtaText: "Submit International Trade Enquiry",
    primaryCtaLink: "/contact-us?type=export"
  }
];

export function getBusinessVerticalBySlug(slug: string): BusinessVertical | undefined {
  return BUSINESS_VERTICALS.find((v) => v.slug === slug || v.id === slug);
}

