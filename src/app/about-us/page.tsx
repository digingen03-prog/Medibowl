import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/company";
import {
  Compass,
  Target,
  ShieldCheck,
  Award,
  Globe2,
  Users2,
  CheckCircle2,
  ArrowRight,
  Building2,
  Stethoscope,
  Truck,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Core Values",
  description:
    "Learn about Medibowl International Private Limited, our vision, mission, eight corporate core values, and our ethical approach to global pharmaceutical trading and supply.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
            alt="Corporate Pharmaceutical Headquarters"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Connecting Healthcare. Delivering Quality. Globally.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International Private Limited is an emerging pharmaceutical trading, distribution, and export corporation committed to delivering dependability, ethical integrity, and clinical precision to healthcare buyers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are & Our Business */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#032666]/10 text-[#032666]">
                <span>Our Corporate Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#032666]">
                Who We Are & What Drives Us
              </h2>
              <div className="w-14 h-1 bg-[#D4AF37] rounded-full" />
              <p className="text-base text-[#172B4D] leading-relaxed">
                Medibowl International Private Limited is an emerging pharmaceutical trading and international supply company focused on meeting the evolving requirements of the global healthcare industry.
              </p>
              <p className="text-sm sm:text-base text-[#5E6C84] leading-relaxed">
                Headquartered in Chennai, Tamil Nadu, India, we specialize in the sourcing, supply, distribution, and export of a comprehensive range of pharmaceutical products, generic and branded medicines, surgical products, medical consumables, speciality pharmaceuticals, oncology products, and medical equipment.
              </p>
              <p className="text-sm sm:text-base text-[#5E6C84] leading-relaxed">
                We believe that reliable access to high-quality healthcare products is a fundamental global necessity. By operating as a responsible liaison between accredited pharmaceutical manufacturing plants and institutional healthcare buyers, we streamline cross-border procurement workflows, reduce supply friction, and maintain uncompromised adherence to quality benchmarks.
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#032666] block mb-2">
                  Key Operational Corridors:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#172B4D]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>B2B Institutional Supply</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Supervised B2C Healthcare Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>International Export Coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Hospital Formulary Procurement</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                  alt="Pharmaceutical Laboratory and Research Excellence"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[380px]"
                />
                <div className="p-6 bg-[#032666] text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    Corporate Integrity
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Registered entity under the Companies Act, operating with transparent commercial standards and rigorous verification of manufacturing sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Purpose & Direction"
            title="Our Vision & Mission"
            description="Our dual commitments define how we conduct business, interact with partners, and contribute to worldwide public health."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Guiding North Star
              </span>
              <h3 className="text-2xl font-bold text-[#032666] mb-4">Our Vision</h3>
              <p className="text-base text-[#172B4D] leading-relaxed">
                {COMPANY_INFO.about.vision}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Everyday Mandate
              </span>
              <h3 className="text-2xl font-bold text-[#032666] mb-4">Our Mission</h3>
              <p className="text-base text-[#172B4D] leading-relaxed">
                {COMPANY_INFO.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Eight Core Values */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Eight Foundations"
            title="Our Core Values"
            description="Every negotiation, trade agreement, and logistics consignment is guided by these eight non-negotiable principles."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E2E8F0] hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#032666] text-[#D4AF37] flex items-center justify-center text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                      Value
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#032666] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-[#034EA6]">
                  <span>Adherence Verified</span>
                  <span className="text-[#D4AF37]">✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Approach to Healthcare Supply */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
              Methodology & Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#032666]">
              Our Approach to Healthcare Supply
            </h2>
            <p className="text-sm sm:text-base text-[#5E6C84] mt-3 leading-relaxed">
              We operate under the firm conviction that pharmaceuticals cannot be treated as ordinary commodities. Every transaction requires structured due diligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#032666]/10 text-[#032666] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#043784]" />
              </div>
              <h3 className="text-base font-bold text-[#032666]">
                1. Rigorous Manufacturer Due Diligence
              </h3>
              <p className="text-xs text-[#5E6C84] leading-relaxed">
                We select and work with pharmaceutical manufacturing plants that uphold documented cGMP standards, validate batch records, and offer full traceability across all active substances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#032666]/10 text-[#032666] flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#043784]" />
              </div>
              <h3 className="text-base font-bold text-[#032666]">
                2. Temperature-Validated Logistics
              </h3>
              <p className="text-xs text-[#5E6C84] leading-relaxed">
                From cold-chain injectables requiring 2°C to 8°C packaging to ambient generics, we coordinate packaging and multimodal transport to preserve chemical stability throughout transit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#032666]/10 text-[#032666] flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-[#043784]" />
              </div>
              <h3 className="text-base font-bold text-[#032666]">
                3. Destination Country Compliance
              </h3>
              <p className="text-xs text-[#5E6C84] leading-relaxed">
                Every export shipment is preceded by regulatory verification of product registration status, import licensing in the receiving jurisdiction, and statutory customs documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Strategic Partnership CTA Banner */}
      <section className="py-16 bg-[#032666] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
            Collaborate With Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl mx-auto">
            Ready to Explore a Supply Partnership with Medibowl International?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            Our trade desk evaluates new distributor applications, hospital supply contracts, and regional agency proposals with diligence and transparency.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/become-a-partner"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors"
            >
              <span>Explore Partnership Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/20 transition-colors"
            >
              <span>Contact Our Chennai Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

