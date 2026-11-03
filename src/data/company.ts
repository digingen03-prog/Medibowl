export interface CoreValue {
  title: string;
  description: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
}

export interface TargetRegion {
  name: string;
  code: string;
  description: string;
  focus: string[];
}

export const COMPANY_INFO = {
  legalName: "MEDIBOWL INTERNATIONAL PRIVATE LIMITED",
  shortName: "Medibowl International",
  officialTagline: "Better Health | Brighter Tomorrow",
  corporateTagline: "Connecting Healthcare. Delivering Quality. Globally.",
  proposedDomain: "www.medibowlinternational.com",
  canonicalUrl: "https://www.medibowlinternational.com",
  location: "Chennai, Tamil Nadu, India",
  
  registeredOffice: {
    addressLine1: "No. 57(19), 1st Floor, Redhills Road",
    locality: "Villivakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600049",
    country: "India",
    fullAddress: "No. 57(19), 1st Floor, Redhills Road, Villivakkam, Chennai, Tamil Nadu - 600049, India."
  },
  
  contact: {
    emails: ["medibowlinternational@gmail.com"],
    primaryEmail: "medibowlinternational@gmail.com",
    phones: ["+91 9941244779", "+91 7305791601"],
    phoneDisplay: "+91 9941244779 / 7305791601",
    whatsappNumbers: ["919941244779", "917305791601"],
    primaryWhatsapp: "919941244779",
    businessHours: "Monday to Saturday: 9:00 AM – 6:00 PM IST",
  },
  
  about: {
    heroIntro: "Medibowl International Private Limited is a pharmaceutical and healthcare products trading, distribution and export company committed to connecting quality healthcare products with customers across the world.",
    overview: "Medibowl International Private Limited is an emerging pharmaceutical trading and international supply company focused on meeting the evolving requirements of the global healthcare industry. With an extensive portfolio that encompasses generic medicines, branded pharmaceutical formulations, surgical products, medical consumables, speciality medicines, oncology products, and advanced medical equipment, we act as a trusted procurement and supply bridge connecting healthcare manufacturers and international healthcare buyers.",
    whoWeAreHeading: "Your Gateway to Global Pharmaceutical & Healthcare Markets",
    businessPillars: [
      {
        title: "B2B Pharmaceutical Distribution",
        description: "Dependable supply partnerships for distributors, pharmacies, hospitals, and institutional buyers."
      },
      {
        title: "B2C Pharmaceutical Supply",
        description: "Accessible healthcare products, wellness solutions, and essential medications with prescription governance."
      },
      {
        title: "International Pharmaceutical Exports",
        description: "Facilitating cross-border pharmaceutical and healthcare product trade to emerging and global markets."
      },
      {
        title: "Institutional & Hospital Supplies",
        description: "Comprehensive surgical, consumable, and medical equipment procurement tailored for medical facilities."
      },
      {
        title: "Bulk Pharmaceutical Procurement",
        description: "Streamlined sourcing and volume coordination for government, NGO, and large enterprise clients."
      },
      {
        title: "Speciality & Critical Care Sourcing",
        description: "Dedicated assistance in securing high-value, oncology, and specialty therapeutic formulations."
      }
    ],
    vision: "To be recognized globally as a trusted, reliable and comprehensive pharmaceutical and healthcare supply partner, delivering high-quality healthcare products with efficiency, transparency and professional integrity.",
    mission: "To improve access to quality healthcare by bridging the gap between pharmaceutical manufacturers and global healthcare buyers through responsible sourcing, dependable distribution, ethical practices and a customer-first commitment."
  },

  coreValues: [
    {
      title: "Integrity",
      description: "We conduct all business operations with uncompromised honesty, ethical responsibility, and strict compliance with global healthcare standards."
    },
    {
      title: "Quality Commitment",
      description: "We prioritize patient safety and clinical reliability by sourcing products from certified and dependable manufacturers."
    },
    {
      title: "Customer Satisfaction",
      description: "Our procurement models are engineered around customer requirements, timely response, and dependable order execution."
    },
    {
      title: "Professional Excellence",
      description: "We uphold international business benchmarks across trade documentation, logistics management, and partner relations."
    },
    {
      title: "Transparency",
      description: "Open communication, transparent pricing structures, and clear tracking across every procurement stage."
    },
    {
      title: "Reliability",
      description: "A steadfast supply chain partner ensuring product availability and dependable dispatch schedules."
    },
    {
      title: "Global Collaboration",
      description: "Fostering long-term mutually rewarding relationships with international distributors, hospitals, and healthcare agencies."
    },
    {
      title: "Continuous Improvement",
      description: "Constantly expanding our therapeutic portfolio, streamlining operational workflows, and elevating customer experience."
    }
  ] as CoreValue[],

  whyChooseUs: [
    {
      id: 1,
      title: "Comprehensive Product Portfolio",
      description: "From essential generic drugs and branded pharmaceuticals to sterile surgicals, medical consumables, critical care therapeutics, oncology treatments, and hospital medical devices—Medibowl offers single-window healthcare sourcing."
    },
    {
      id: 2,
      title: "Global Business Orientation",
      description: "Designed from the foundation to cater to international healthcare markets with a structured approach to cross-border documentation, packaging standards, and export logistics."
    },
    {
      id: 3,
      title: "Customer-Centric Approach",
      description: "Every enquiry receives personalized procurement consultation, tailored product matching, responsive communication, and order-specific logistics planning."
    },
    {
      id: 4,
      title: "Competitive Sourcing",
      description: "Strong manufacturer networks and multi-source procurement capabilities allow us to provide competitive commercial terms for both bulk institutional and commercial buyers."
    },
    {
      id: 5,
      title: "Professional Business Relationships",
      description: "We prioritize sustainable, long-term business partnerships over transactional engagements, building mutual trust with healthcare professionals and procurement officers."
    },
    {
      id: 6,
      title: "Regulatory Responsibility",
      description: "We strictly adhere to all applicable national and international regulatory frameworks governing pharmaceutical trade, licensing verifications, and import-export clearances."
    },
    {
      id: 7,
      title: "Flexible Procurement Solutions",
      description: "Scalable supply models tailored to the specific volume, packaging, and delivery requirements of distributors, hospitals, clinics, and government institutions."
    },
    {
      id: 8,
      title: "Commitment to Quality",
      description: "Unwavering commitment to procuring products with verified manufacturing pedigree, batch traceability, and adherence to accepted pharmacopoeia standards."
    }
  ] as WhyChooseItem[],

  targetRegions: [
    {
      name: "Asia",
      code: "ASIA",
      description: "Strategic focus on Southeast Asia and South Asian regional healthcare supply corridors.",
      focus: ["Generic Formulations", "Surgical Supplies", "Hospital Consumables"]
    },
    {
      name: "Africa",
      code: "AFRICA",
      description: "Supplying essential medicines, infectious disease treatments, and affordable medical devices to emerging healthcare systems.",
      focus: ["Antibiotics & Anti-malarials", "Essential Generics", "Diagnostic Kits"]
    },
    {
      name: "Middle East",
      code: "MIDDLE_EAST",
      description: "Facilitating specialized pharmaceutical procurement, critical care injectables, and branded formulations.",
      focus: ["Speciality Pharmaceuticals", "Oncology Injectables", "Hospital Equipment"]
    },
    {
      name: "Europe",
      code: "EUROPE",
      description: "Collaborating with authorized distributors adhering to stringent European import compliance and quality norms.",
      focus: ["EU Sourced Equivalents", "Active Medical Consumables", "Specialty APIs"]
    },
    {
      name: "CIS Countries",
      code: "CIS",
      description: "Addressing pharmaceutical demand across Eastern European and Central Asian trading networks.",
      focus: ["Cardiovascular Medicines", "Diabetes Care", "General Surgical Consumables"]
    },
    {
      name: "Latin America",
      code: "LATAM",
      description: "Expanding procurement channels for affordable oncology, hospital furniture, and chronic care generics.",
      focus: ["Oncology Formulations", "Infusion Sets", "Patient Monitoring"]
    },
    {
      name: "Other International Markets",
      code: "GLOBAL",
      description: "Evaluating prospective institutional partnerships, tender participation, and NGO medical relief sourcing globally.",
      focus: ["Institutional Bulk Supply", "Emergency Care Kits", "Custom RFQ Sourcing"]
    }
  ] as TargetRegion[],

  regulatoryDisclaimer: "Medibowl International Private Limited conducts its business in accordance with applicable laws and regulations governing pharmaceutical products, medical devices, distribution and international trade. Product availability, supply and export are subject to applicable regulatory approvals, licensing requirements, product registrations and destination-country regulations. Product information is provided for business and informational purposes and does not constitute medical advice.",
  
  partnerAudience: [
    "International Pharmaceutical Importers",
    "Pharmaceutical Distributors & Stockists",
    "Wholesale Pharmaceutical Traders",
    "Healthcare Procurement Companies",
    "Hospitals & Medical Institutions",
    "Pharmaceutical Trading Companies",
    "Medical Equipment Dealers",
    "Surgical Product Distributors",
    "Healthcare Supply Chain Partners"
  ]
};

