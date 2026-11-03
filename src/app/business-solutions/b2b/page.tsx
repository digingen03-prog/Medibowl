import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Building2,
  CheckCircle2,
  Handshake,
  TrendingDown,
  Boxes,
  Truck,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Pharmaceutical Procurement & Institutional Supply",
  description:
    "Reliable B2B pharmaceutical procurement partner for distributors, wholesalers, hospital chains, and healthcare institutions across India and international markets.",
};

export default function B2BPage() {
  const targetAudience = [
    "Pharmaceutical Distributors & Stockists",
    "Pharmaceutical Wholesalers",
    "Importers & Exporters",
    "Retail & Hospital Pharmacy Chains",
    "Hospitals & Healthcare Institutions",
    "Clinics & Medical Centres",
    "Pharmaceutical Trading Companies",
    "Eligible Government & Institutional Buyers",
  ];

  const pillars = [
    {
      title: "Competitive Sourcing",
      description:
        "Direct manufacturer networks and multi-source procurement capabilities allow us to negotiate competitive commercial terms for both institutional tenders and high-frequency commercial wholesale orders.",
      icon: TrendingDown,
    },
    {
      title: "Product Availability Coordination",
      description:
        "Proactive stock monitoring, manufacturing schedule coordination, and batch reservation ensure stable supply lines and minimize clinical stock-out risks.",
      icon: Boxes,
    },
    {
      title: "Bulk Procurement & Formularies",
      description:
        "Comprehensive formulary fulfillment across all 7 product categories, supporting bulk institutional packings, hospital-grade cartons, and specialized batch allocations.",
      icon: Truck,
    },
    {
      title: "Long-term Business Partnerships",
      description:
        "Structured contractual frameworks with designated account executives, transparent delivery timelines, and full commercial documentation support.",
      icon: Handshake,
    },
  ];

  return (
    <div className="bg-white">
      {/* B2B Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
            alt="B2B Pharmaceutical Procurement"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Business Solutions", href: "/business-solutions/b2b" },
              { label: "B2B Solutions" },
            ]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Institutional & Enterprise
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Your Reliable Pharmaceutical Procurement Partner
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International Private Limited works directly with commercial healthcare buyers, wholesale distributors, pharmacy retail chains, and hospital procurement departments to ensure dependable, cost-efficient, and transparent pharmaceutical sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Clients"
            title="Who We Serve in B2B Healthcare"
            description="Our B2B procurement division is configured to meet the rigorous commercial, quality, and volume needs of established healthcare institutions."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudience.map((audience) => (
              <div
                key={audience}
                className="p-5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#D4AF37] transition-all flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#032666]/10 text-[#032666] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-[#043784]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#032666]">
                  {audience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Value Delivery"
            title="How We Empower B2B Healthcare Procurement"
            description="Our structured procurement approach guarantees pricing advantages, delivery predictability, and regulatory peace of mind."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-[#F7F9FA] border border-[#E2E8F0] hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#032666]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5E6C84] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded B2B RFQ Form */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialBusinessType="B2B"
            title="Submit B2B Procurement Enquiry"
            subtitle="Request institutional pricing, annual contract terms, or volume supply feasibility. Our commercial desk will review and respond promptly."
          />
        </div>
      </section>
    </div>
  );
}

