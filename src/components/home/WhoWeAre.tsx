import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";
import { ArrowRight, CheckCircle2, Building, Globe, Layers, Stethoscope, Truck, ShieldAlert } from "lucide-react";

export function WhoWeAre() {
  const iconMap = [
    Building,
    Layers,
    Globe,
    Stethoscope,
    Truck,
    ShieldAlert,
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Corporate Profile & Overview (Col Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#032666]/10 text-[#032666] border border-[#032666]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#032666]" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#032666] leading-tight">
              {COMPANY_INFO.about.whoWeAreHeading}
            </h2>

            <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

            <p className="text-base sm:text-lg text-[#172B4D] leading-relaxed">
              Medibowl International Private Limited is an emerging pharmaceutical trading and international supply company focused on meeting the evolving requirements of the global healthcare industry.
            </p>

            <p className="text-sm sm:text-base text-[#5E6C84] leading-relaxed">
              With an extensive portfolio that encompasses generic medicines, branded pharmaceutical formulations, surgical products, medical consumables, speciality medicines, oncology products, and advanced medical equipment, we act as a trusted procurement and supply bridge connecting healthcare manufacturers and international healthcare buyers.
            </p>

            <p className="text-sm sm:text-base text-[#5E6C84] leading-relaxed">
              With a customer-centric approach and an extensive product portfolio, we aim to simplify pharmaceutical procurement and deliver dependable healthcare supply solutions to businesses, healthcare professionals and customers worldwide.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#032666] hover:text-[#043784] group"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Key Capabilities Grid (Col Span 6) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPANY_INFO.about.businessPillars.map((pillar, idx) => {
                const IconComponent = iconMap[idx] || CheckCircle2;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#034EA6]/40 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#032666]/5 group-hover:bg-[#032666] flex items-center justify-center text-[#032666] group-hover:text-[#D4AF37] transition-colors mb-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-[#032666] group-hover:text-[#043784] mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#5E6C84] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#034EA6]">
                      <span>Verified Sourcing</span>
                      <span className="text-[#D4AF37]">✦</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

