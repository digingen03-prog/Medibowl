import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import {
  Globe2,
  Ship,
  FileText,
  Boxes,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Plane,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "International Pharmaceutical Exports & Global Trade",
  description:
    "Cross-border pharmaceutical export solutions across Asia, Africa, Middle East, Europe, CIS, and Latin America. Commercial documentation, cold-chain logistics, and regulatory compliance.",
};

export default function InternationalExportsPage() {
  const exportServices = [
    {
      title: "Pharmaceutical Sourcing & Quality Audit",
      description:
        "Rigorous verification of manufacturing facilities, cGMP standards, batch release documentation, and pharmacopoeial conformity.",
      icon: ShieldCheck,
    },
    {
      title: "Bulk Procurement Coordination",
      description:
        "Aggregating production runs for government health tenders, multilateral aid programs, and international distributor orders.",
      icon: Boxes,
    },
    {
      title: "Export Order Management & Packaging",
      description:
        "Climate-resilient export packaging, multilingual labeling coordination, palletization, and validated thermal shippers.",
      icon: Ship,
    },
    {
      title: "Commercial & Statutory Documentation",
      description:
        "Complete trade dossiers: Commercial Invoices, Packing Lists, Certificates of Analysis (CoA), Free Sale Certificates (FSC), and Certificate of Origin.",
      icon: FileText,
    },
    {
      title: "Multimodal Shipment Coordination",
      description:
        "Collaborating with licensed IATA freight forwarders for air and sea cargo, customs export filings, and destination port tracking.",
      icon: Plane,
    },
    {
      title: "Buyer & Supplier Relationship Bridge",
      description:
        "Serving as a responsive commercial conduit between Indian manufacturing plants and overseas institutional procurement managers.",
      icon: Scale,
    },
  ];

  return (
    <div className="bg-white">
      {/* Export Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="International Shipping and Global Pharmaceutical Logistics"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "International Exports" }]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Cross-Border Trade
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Taking Pharmaceutical & Healthcare Products Beyond Borders
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International Private Limited facilitates transparent, compliant, and cost-efficient cross-border supply of quality healthcare products to international distributors, hospital groups, and healthcare agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Target Regions Showcase */}
      <section className="py-16 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Global Market Vision"
            title="Our Seven Intended Export Regions"
            description="Our export infrastructure is designed to service key emerging and international healthcare corridors under destination country regulatory compliance."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.targetRegions.map((region) => (
              <div
                key={region.code}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{region.name}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#032666] mb-2">
                    {region.name} Region
                  </h3>
                  <p className="text-xs text-[#5E6C84] leading-relaxed mb-4">
                    {region.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Demand:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {region.focus.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#F7F9FA] text-[#032666] border border-slate-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Export Capabilities */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Trade Execution"
            title="Comprehensive Export Management Capabilities"
            description="From initial manufacturer audit to port dispatch and INCOTERMS execution, we take ownership of every cross-border logistical milestone."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E2E8F0] hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#032666]">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Responsibility Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#D4AF37] shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white">
                  Regulatory & Destination-Country Compliance
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  All export operations are subject to applicable regulatory approvals, destination-country licensing requirements, product registrations, and verified institutional documentation.
                </p>
              </div>
            </div>
            <Link
              href="/regulatory-disclaimer"
              className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View Regulatory Notice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Export RFQ Form */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialBusinessType="Importer"
            title="International Trade Enquiry"
            subtitle="Submit your cross-border procurement specifications. Our export desk will review destination compliance and furnish an itemized Proforma Invoice."
          />
        </div>
      </section>
    </div>
  );
}

