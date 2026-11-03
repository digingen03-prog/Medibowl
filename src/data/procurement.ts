export interface ProcurementStep {
  stepNumber: number;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export const PROCUREMENT_STEPS: ProcurementStep[] = [
  {
    stepNumber: 1,
    id: "requirement-sharing",
    title: "Requirement Sharing",
    subtitle: "Understanding Clinical & Commercial Needs",
    description: "The buyer submits detailed product requirements including chemical or brand names, dosage form, strength, target quantity, required packaging, destination country, and compliance specifications.",
    deliverables: [
      "Structured Request for Quotation (RFQ)",
      "Technical specifications review",
      "Regulatory & destination country requirements check"
    ],
    timeline: "Initial Review within 24 Hours"
  },
  {
    stepNumber: 2,
    id: "product-sourcing",
    title: "Product Sourcing & Availability",
    subtitle: "Evaluating Certified Manufacturers",
    description: "Medibowl evaluates its network of certified manufacturers and stockists to identify matching products, verify current batch availability, check shelf-life validity, and review regulatory documentation.",
    deliverables: [
      "Manufacturer credential verification",
      "Lot availability & remaining shelf-life confirmation",
      "Certificate of Analysis (CoA) review"
    ],
    timeline: "24 – 48 Hours"
  },
  {
    stepNumber: 3,
    id: "quotation-confirmation",
    title: "Quotation & Commercial Confirmation",
    subtitle: "Transparent Pricing & Agreement",
    description: "A formal commercial quotation is presented detailing unit pricing, payment terms, packaging specifications, estimated lead times, and applicable INCOTERMS (FOB, CIF, CFR, Ex-Works).",
    deliverables: [
      "Formal Proforma Invoice (PI)",
      "Itemized pricing and logistics breakdown",
      "Commercial terms agreement"
    ],
    timeline: "Upon Sourcing Validation"
  },
  {
    stepNumber: 4,
    id: "order-processing",
    title: "Order Processing & Procurement",
    subtitle: "Coordinating Manufacturing & Dispatch",
    description: "Upon order confirmation and commercial agreement, Medibowl initiates batch allocation or procurement from approved facilities, coordinating quality checks and export-standard packaging.",
    deliverables: [
      "Production & batch allocation tracking",
      "Pre-dispatch quality audit and packaging inspection",
      "Cold-chain preparation where required"
    ],
    timeline: "As per agreed contract schedule"
  },
  {
    stepNumber: 5,
    id: "documentation-dispatch",
    title: "Documentation & Cargo Dispatch",
    subtitle: "Compliance & Multimodal Shipping",
    description: "All statutory commercial and shipping documentation is prepared. The consignment is securely packed, labeled, customs-cleared, and handed over to designated freight forwarders.",
    deliverables: [
      "Commercial Invoice & Packing List",
      "Certificates of Analysis (CoA) & Origin",
      "Air Waybill (AWB) / Bill of Lading (BL) & tracking numbers"
    ],
    timeline: "Prompt Cargo Clearance"
  },
  {
    stepNumber: 6,
    id: "delivery-business-support",
    title: "Delivery & Continuous Business Support",
    subtitle: "Long-term Partnership Continuity",
    description: "The shipment is tracked until safe delivery at the buyer's destination facility. Medibowl remains actively engaged to gather feedback, address queries, and support repeat procurement cycles.",
    deliverables: [
      "Real-time shipment milestone tracking",
      "Delivery confirmation and receiving audit",
      "Dedicated account management for replenishment"
    ],
    timeline: "End-to-End Continuity"
  }
];

