import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import {
  Handshake,
  Building2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Business Partner | Strategic Pharmaceutical Sourcing",
  description:
    "Partner with Medibowl International Private Limited. Strategic collaborations for pharmaceutical importers, distributors, wholesalers, and hospital networks globally.",
};

export default function BecomeAPartnerPage() {
  const partnerSegments = [
    {
      title: "International Pharmaceutical Importers",
      description: "Direct cross-border sourcing, custom packaging, and comprehensive regulatory documentation for overseas import clearance.",
    },
    {
      title: "Pharmaceutical Distributors & Stockists",
      description: "Dependable regional stock allocations, volume discounts, and uninterrupted batch availability across chronic and acute therapeutic segments.",
    },
    {
      title: "Pharmaceutical Wholesalers",
      description: "Bulk procurement pricing and diversified portfolio access across generic, branded, and institutional pharmaceutical lines.",
    },
    {
      title: "Healthcare Procurement Companies",
      description: "Single-window turnkey procurement assistance for government tenders, private healthcare systems, and NGO aid programs.",
    },
    {
      title: "Hospitals & Medical Institutions",
      description: "Hospital formulary replenishment, emergency critical care injectables, surgical disposables, and diagnostic devices.",
    },
    {
      title: "Pharmaceutical Trading Companies",
      description: "Agile back-to-back supply partnerships, confidential contract fulfillment, and international logistics execution.",
    },
    {
      title: "Medical Equipment Dealers",
      description: "Supply of multi-parameter monitors, ECG units, hospital beds, and infusion pumps with technical documentation.",
    },
    {
      title: "Surgical Product Distributors",
      description: "Comprehensive surgical instrument sets, sterile consumables, surgical gloves, and operating theatre essentials.",
    },
    {
      title: "Healthcare Supply Chain Partners",
      description: "Logistics, warehousing, and freight collaboration to optimize temperature-monitored international distribution corridors.",
    },
  ];

  const partnershipBenefits = [
    {
      title: "Diverse Single-Source Portfolio",
      description: "Consolidate procurement across all 7 healthcare categories through a single trusted corporate vendor.",
    },
    {
      title: "Transparent Commercial Terms",
      description: "Direct manufacturer-benchmarked pricing without opaque markups or hidden processing fees.",
    },
    {
      title: "Full Regulatory Dossier Support",
      description: "Assistance with Certificates of Analysis (CoA), GMP evidence, and product documentation for local health authority filings.",
    },
    {
      title: "Dedicated Account Management",
      description: "Designated commercial specialists handling order tracking, customized scheduling, and responsive query resolution.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
            alt="Business Partnership in Healthcare"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Become a Partner" }]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Commercial Collaboration
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s Build a Stronger Pharmaceutical Supply Network Together
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International invites international importers, distributors, wholesale traders, and hospital procurement directors to forge sustainable, value-driven supply alliances.
            </p>
          </div>
        </div>
      </section>

      {/* Nine Partner Segments Grid */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner Segments"
            title="Who We Collaborate With"
            description="Our partnership models are engineered to provide commercial scale, regulatory certainty, and dedicated support across all key healthcare stakeholder tiers."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSegments.map((seg, idx) => (
              <div
                key={seg.title}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#032666]/10 text-[#032666] flex items-center justify-center text-xs font-bold font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-[#D4AF37]">✦</span>
                  </div>
                  <h3 className="text-base font-bold text-[#032666] mb-2 leading-snug">
                    {seg.title}
                  </h3>
                  <p className="text-xs text-[#5E6C84] leading-relaxed">
                    {seg.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#034EA6]">
                  <span>Partnership Track</span>
                  <Link
                    href={`/contact-us?type=${encodeURIComponent(seg.title)}`}
                    className="text-xs font-bold hover:text-[#D4AF37] flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Advantages */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Mutual Growth"
            title="Why Partner with Medibowl International?"
            description="We prioritize lasting business value over one-off transactions, providing structural advantages for our distribution partners."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E2E8F0] space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#032666] text-[#D4AF37] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#032666]">
                  {benefit.title}
                </h4>
                <p className="text-xs text-[#5E6C84] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Partnership Proposal Form */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialBusinessType="Distributor"
            title="Submit Partnership Proposal"
            subtitle="Outline your organization's distribution scope, territory, and target product categories. Our executive management will schedule an introductory discussion."
          />
        </div>
      </section>
    </div>
  );
}

