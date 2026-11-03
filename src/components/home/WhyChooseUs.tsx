import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Layers,
  Globe2,
  Users2,
  TrendingDown,
  Handshake,
  FileCheck2,
  Boxes,
  Award,
} from "lucide-react";

export function WhyChooseUs() {
  const iconList = [
    Layers,
    Globe2,
    Users2,
    TrendingDown,
    Handshake,
    FileCheck2,
    Boxes,
    Award,
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Operating Principles"
          title="Why Choose Medibowl International?"
          description="Built on transparency, certified sourcing, and dependable international execution. Here are the core pillars that define our relationship with healthcare buyers."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.whyChooseUs.map((item, idx) => {
            const Icon = iconList[idx] || Award;

            return (
              <div
                key={item.id}
                className="bg-[#F7F9FA] rounded-xl border border-[#E2E8F0] p-6 hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#032666] group-hover:text-[#D4AF37] group-hover:bg-[#032666] transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#D4AF37]/50 font-mono transition-colors">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#032666] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-[#034EA6]">
                  <span>Pillar {item.id}</span>
                  <span className="text-[#D4AF37]">✦</span>
                  <span className="text-slate-400 font-normal">Core Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

