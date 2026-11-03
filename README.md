# MEDIBOWL INTERNATIONAL PRIVATE LIMITED
## Premium International Pharmaceutical & Healthcare Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)](#)

---

### Corporate Identity
- **Legal Entity:** MEDIBOWL INTERNATIONAL PRIVATE LIMITED
- **Official Brand Line:** *Better Health | Brighter Tomorrow*
- **Corporate Website Tagline:** *Connecting Healthcare. Delivering Quality. Globally.*
- **Proposed Domain:** [www.medibowlinternational.com](https://www.medibowlinternational.com)
- **Registered Corporate Office:** No. 57(19), 1st Floor, Redhills Road, Villivakkam, Chennai, Tamil Nadu - 600049, India.
- **Official Email:** medibowlinternational@gmail.com
- **Phone / WhatsApp:** +91 9941244779 / +91 7305791601

---

## Architecture & Technology Stack

- **Framework:** Next.js 15 App Router with React 19 and Server Components by default.
- **Styling:** Tailwind CSS with Royal Blue + Gold corporate design tokens.
- **Form Management & Validation:** React Hook Form + Zod schema validation.
- **Email Delivery:** Resend SDK via lightweight serverless Next.js Route Handler (`/api/contact`).
- **Icons:** Lucide React.
- **Animations:** GSAP + ScrollTrigger with reduced motion support.
- **No Database:** Front-end focused enterprise architecture without database bloat or separate backend servers.

---

## Complete Route Directory (25 Specified Routes)

### Main Pages
- `/` - 11-section corporate homepage.
- `/about-us` - Corporate profile, vision, mission, and eight core values.
- `/products` - Complete 7-category portfolio hub.
- `/business-solutions/b2b` - B2B pharmaceutical distribution & institutional supply.
- `/business-solutions/b2c` - Supervised consumer healthcare access with prescription notice.
- `/international-exports` - Global pharmaceutical export capabilities across 7 target regions.
- `/procurement-process` - Six-stage transparent procurement workflow.
- `/become-a-partner` - Strategic partnerships across 9 industry tiers.
- `/contact-us` - 10-field enterprise RFQ form, verified office details, and WhatsApp connect.

### 7 Specialized Product Category Routes
- `/products/generic-medicines` - 11 subcategories (Tablets, Antibiotics, Cardiovascular, etc.).
- `/products/branded-medicines` - 6 subcategories (Originator, Specialty, Hospital-use).
- `/products/surgical-products` - 9 subcategories (Instruments, Sterile items, Wound care).
- `/products/medical-consumables` - 10 subcategories (Syringes, Infusion sets, Catheters).
- `/products/speciality-pharmaceuticals` - 8 subcategories (Critical care, Injectables, Anaesthesia).
- `/products/oncology-products` - 7 subcategories (Chemotherapy, Targeted therapy, Injectables).
- `/products/medical-equipment` - 10 subcategories (Monitors, Diagnostics, Hospital beds, ECG).

### Legal & Compliance Pages
- `/regulatory-disclaimer` - Verbatim approved statutory disclaimer.
- `/privacy-policy` - Provisional draft for legal review.
- `/terms-and-conditions` - Provisional draft for legal review.
- `/shipping-policy` - Provisional draft for legal review.
- `/returns-and-refunds` - Provisional draft for legal review.

### API & SEO
- `/api/contact` - Lightweight Next.js Route Handler for enquiry validation and email delivery.
- `/sitemap.xml` - Dynamic XML sitemap indexing all 25 paths.
- `/robots.txt` - SEO crawler instructions.

---

## Getting Started

### 1. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Resend API credentials (optional for development; simulated mode active by default):
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=medibowlinternational@gmail.com
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Documentation
- [`docs/CONTENT_MAPPING.md`](./docs/CONTENT_MAPPING.md) - Exact mapping of 12-page source document to website routes.
- [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) - Royal Blue + Gold corporate design tokens & typographic hierarchy.
- [`docs/IMPLEMENTATION_PLAN.md`](./docs/IMPLEMENTATION_PLAN.md) - 10-phase execution roadmap.
- [`docs/PRODUCTION_CHECKLIST.md`](./docs/PRODUCTION_CHECKLIST.md) - Quality assurance & pre-flight verification.

