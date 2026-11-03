import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { GSAPInitializer } from "@/components/ui/GSAPInitializer";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.canonicalUrl),
  title: {
    default: `${COMPANY_INFO.legalName} | International Pharmaceutical & Healthcare Solutions`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    "Medibowl International Private Limited is an international pharmaceutical and healthcare products trading, distribution, and export company based in Chennai, India. Specializing in generic & branded medicines, surgicals, consumables, speciality pharmaceuticals, oncology, and medical equipment.",
  keywords: [
    "Medibowl International",
    "Pharmaceutical Exporter India",
    "Pharmaceutical Trading Company",
    "Generic Medicines Export",
    "Branded Pharmaceuticals Sourcing",
    "Surgical Products Supplier",
    "Medical Consumables Wholesale",
    "Speciality Pharmaceuticals",
    "Oncology Medicines Export",
    "Hospital Medical Equipment",
    "Chennai Pharmaceutical Distributor"
  ],
  authors: [{ name: "Medibowl International Private Limited" }],
  creator: "Medibowl International Private Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.canonicalUrl,
    siteName: COMPANY_INFO.legalName,
    title: `${COMPANY_INFO.legalName} | Connecting Healthcare. Delivering Quality. Globally.`,
    description:
      "A trusted international corporate partner for pharmaceutical sourcing, hospital supplies, and cross-border healthcare product distribution.",
    images: [
      {
        url: "/logos/medibowl-actual-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Medibowl International Private Limited Corporate Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: COMPANY_INFO.legalName,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.canonicalUrl,
    logo: `${COMPANY_INFO.canonicalUrl}/logos/medibowl-logo.svg`,
    description: COMPANY_INFO.about.heroIntro,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.registeredOffice.addressLine1,
      addressLocality: COMPANY_INFO.registeredOffice.locality,
      addressRegion: COMPANY_INFO.registeredOffice.state,
      postalCode: COMPANY_INFO.registeredOffice.pincode,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9941244779",
        contactType: "customer support",
        email: COMPANY_INFO.contact.primaryEmail,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Tamil", "Hindi"],
      },
    ],
    slogan: COMPANY_INFO.corporateTagline,
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-[#172B4D] flex flex-col min-h-screen">
        <GSAPInitializer />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
