import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Users,
  ShieldAlert,
  FileCheck2,
  Heart,
  Pill,
  Sparkles,
  Thermometer,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2C Healthcare Solutions | Patient & Consumer Supply",
  description:
    "Making quality healthcare products more accessible. Generic & branded medicines, wellness supplements, and medical consumables under strict prescription governance.",
};

export default function B2CPage() {
  const offerings = [
    {
      title: "Generic Medicines",
      description:
        "High-quality, affordable bioequivalent tablets, capsules, and therapeutic formulations for long-term health management.",
      icon: Pill,
    },
    {
      title: "Branded Medicines",
      description:
        "Authentic originator and established ethical prescription medicines from licensed pharmaceutical manufacturers.",
      icon: FileCheck2,
    },
    {
      title: "Wellness & Healthcare Products",
      description:
        "Nutritional supplements, vitamins, immune system boosters, and clinical wellness formulations.",
      icon: Sparkles,
    },
    {
      title: "Medical Consumables",
      description:
        "Home healthcare disposables including sterile dressings, gauze, examination gloves, and sanitization essentials.",
      icon: Heart,
    },
    {
      title: "Select Healthcare Essentials",
      description:
        "Everyday monitoring tools such as digital thermometers, blood pressure monitors, pulse oximeters, and supportive healthcare accessories.",
      icon: Thermometer,
    },
  ];

  return (
    <div className="bg-white">
      {/* B2C Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000&auto=format&fit=crop"
            alt="B2C Healthcare Accessibility"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Business Solutions", href: "/business-solutions/b2c" },
              { label: "B2C Solutions" },
            ]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Consumer & Patient Access
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Making Healthcare Products More Accessible
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International is dedicated to facilitating broader, reliable access to essential medications, wellness products, and everyday healthcare consumables for patients and individual consumers—under strict clinical and regulatory supervision.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Prescription & Regulatory Notice Banner */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3.5 text-amber-900">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold uppercase tracking-wider text-xs block mb-1 text-amber-800">
                Important Patient & Regulatory Notice:
              </span>
              <p>
                Medibowl International conducts all pharmaceutical supply operations in accordance with applicable drug distribution regulations. All prescription-required pharmaceuticals (Rx) necessitate a valid, verifiable medical prescription from a registered medical practitioner prior to order confirmation or dispatch. Unrestricted prescription medicine sales are strictly prohibited. Product information provided on this website is for informational purposes and does not constitute medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Offerings Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Healthcare Accessible for All"
            title="What We Offer for Patients & Home Healthcare"
            description="High-quality healthcare essentials coordinated with safety, authenticity, and clear clinical guidance."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E2E8F0] shadow-sm hover:border-[#D4AF37] hover:bg-white hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#032666]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Enquiry Form */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialBusinessType="B2C"
            title="Enquire About Products"
            subtitle="Please provide your product inquiry. Note that all prescription medicine requests require a verified prescription."
          />
        </div>
      </section>
    </div>
  );
}

