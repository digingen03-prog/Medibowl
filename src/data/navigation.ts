export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    badge?: string;
  }[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Generic Medicines",
        href: "/products/generic-medicines",
        description: "Bioequivalent tablets, antibiotics, cardiovascular, and oral formulations.",
        badge: "Essential"
      },
      {
        label: "Branded Medicines",
        href: "/products/branded-medicines",
        description: "Originator and ethical prescription pharmaceuticals from reputed brands.",
        badge: "Premium"
      },
      {
        label: "Surgical Products",
        href: "/products/surgical-products",
        description: "Precision surgical instruments, sterile dressings, and OT supplies.",
        badge: "Sterile"
      },
      {
        label: "Medical Consumables",
        href: "/products/medical-consumables",
        description: "Disposable syringes, IV cannulas, examination gloves, and catheters.",
        badge: "Disposables"
      },
      {
        label: "Speciality Pharmaceuticals",
        href: "/products/speciality-pharmaceuticals",
        description: "Critical care injectables, anaesthesia, and specialized therapeutics.",
        badge: "Critical Care"
      },
      {
        label: "Oncology Products",
        href: "/products/oncology-products",
        description: "Anticancer chemotherapy injectables, oral antineoplastics, and supportive care.",
        badge: "Oncology"
      },
      {
        label: "Medical Equipment",
        href: "/products/medical-equipment",
        description: "Patient monitoring devices, diagnostic tools, hospital beds, and pumps.",
        badge: "Biomedical"
      }
    ]
  },
  {
    label: "Business Solutions",
    href: "/business-solutions/b2b",
    children: [
      {
        label: "B2B Solutions",
        href: "/business-solutions/b2b",
        description: "For distributors, hospitals, wholesale stockists, and institutional buyers.",
        badge: "Wholesale & Hospital"
      },
      {
        label: "B2C Solutions",
        href: "/business-solutions/b2c",
        description: "Patient healthcare access, wellness products, and verified prescription delivery.",
        badge: "Accessible Care"
      }
    ]
  },
  {
    label: "International Exports",
    href: "/international-exports",
  },
  {
    label: "Procurement",
    href: "/procurement-process",
  },
  {
    label: "Become a Partner",
    href: "/become-a-partner",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  }
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Product Portfolio", href: "/products" },
    { label: "B2B Solutions", href: "/business-solutions/b2b" },
    { label: "B2C Solutions", href: "/business-solutions/b2c" },
    { label: "International Exports", href: "/international-exports" },
    { label: "Procurement Workflow", href: "/procurement-process" },
    { label: "Become a Partner", href: "/become-a-partner" },
    { label: "Contact & RFQ", href: "/contact-us" }
  ],
  productCategories: [
    { label: "Generic Medicines", href: "/products/generic-medicines" },
    { label: "Branded Medicines", href: "/products/branded-medicines" },
    { label: "Surgical Products", href: "/products/surgical-products" },
    { label: "Medical Consumables", href: "/products/medical-consumables" },
    { label: "Speciality Pharmaceuticals", href: "/products/speciality-pharmaceuticals" },
    { label: "Oncology Products", href: "/products/oncology-products" },
    { label: "Medical Equipment", href: "/products/medical-equipment" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Returns & Refunds", href: "/returns-and-refunds" },
    { label: "Regulatory Disclaimer", href: "/regulatory-disclaimer" }
  ]
};

