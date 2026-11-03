import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Target, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

export function AboutCompanySection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Corporate Foundations"
          title="About Medibowl International"
          description="Built on ethical responsibility, clinical reliability, and global collaboration, Medibowl International strives to make high-quality healthcare products universally accessible."
          align="center"
          className="mb-14"
        />

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#032666]/5 text-[#032666] flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-[#043784]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
              Guiding Horizon
            </span>
            <h3 className="text-2xl font-bold text-[#032666] mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-[#5E6C84] leading-relaxed">
              {COMPANY_INFO.about.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#032666]/5 text-[#032666] flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#043784]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
              Purpose & Commitment
            </span>
            <h3 className="text-2xl font-bold text-[#032666] mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-[#5E6C84] leading-relaxed">
              {COMPANY_INFO.about.mission}
            </p>
          </div>
        </div>

        {/* 8 Core Values Preview Grid */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
              Guiding Principles
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#032666]">
              Our Eight Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-4 rounded-xl bg-[#F7F9FA] border border-slate-200/80 hover:bg-white hover:border-[#D4AF37] transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <h4 className="text-sm font-bold text-[#032666]">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-[#5E6C84] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#032666] hover:text-[#043784]"
            >
              <span>Learn More About Our Company & Management Principles</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

