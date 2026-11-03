"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe, MapPin, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

export function InternationalPresence() {
  const [selectedRegion, setSelectedRegion] = useState<string>("ASIA");

  const current =
    COMPANY_INFO.targetRegions.find((r) => r.code === selectedRegion) ||
    COMPANY_INFO.targetRegions[0];

  return (
    <section className="py-20 sm:py-24 bg-[#032666] text-white border-b border-[#043784] relative overflow-hidden">
      {/* Background World Map Graphic Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover text-[#D4AF37]"
          fill="currentColor"
        >
          {/* Subtle abstract world continent outlines */}
          <circle cx="200" cy="180" r="80" opacity="0.3" />
          <circle cx="300" cy="300" r="60" opacity="0.3" />
          <circle cx="520" cy="140" r="70" opacity="0.3" />
          <circle cx="550" cy="260" r="90" opacity="0.3" />
          <circle cx="700" cy="180" r="100" opacity="0.3" />
          <circle cx="820" cy="340" r="60" opacity="0.3" />
          <path
            d="M 150 200 Q 300 100 500 200 T 850 250"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Business Orientation"
          title="Bridging Pharmaceutical Markets Across Borders"
          description="Medibowl International is purposefully structured to establish and expand international pharmaceutical supply corridors across seven intended target regions."
          align="center"
          theme="dark"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Region Navigation Tabs (Col Span 5) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-3">
              Select Intended Market Region:
            </span>
            <div className="flex flex-col gap-2">
              {COMPANY_INFO.targetRegions.map((region) => {
                const isSelected = region.code === selectedRegion;

                return (
                  <button
                    key={region.code}
                    type="button"
                    onClick={() => setSelectedRegion(region.code)}
                    className={`text-left px-4 py-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-[#D4AF37] text-[#032666] border-[#D4AF37] font-bold shadow-lg"
                        : "bg-[#021B47]/80 hover:bg-[#043784] text-slate-200 border-[#043784]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        className={`w-4 h-4 ${
                          isSelected ? "text-[#032666]" : "text-[#D4AF37]"
                        }`}
                      />
                      <span className="text-sm">{region.name}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#032666] text-white"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      Target Scope
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Region Profile & Compliance Card (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#021B47] rounded-2xl border border-[#043784] p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#043784]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Target Regional Strategy
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {current.name} Market Focus
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#032666] border border-[#043784] flex items-center justify-center text-[#D4AF37]">
                  <Globe className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {current.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                  Key Portfolio Alignments for {current.name}:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {current.focus.map((item) => (
                    <div
                      key={item}
                      className="p-3 bg-[#032666] rounded-lg border border-[#043784] text-xs text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory Notice for Global Sourcing */}
              <div className="p-4 bg-[#032666]/60 rounded-xl border border-[#043784] flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>
                  <strong>Export Governance Notice:</strong> All international trade,
                  cross-border supply, and shipping arrangements remain strictly
                  subject to destination-country regulatory clearances, import
                  licensing, product registrations, and verified institutional documentation.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/international-exports"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-all duration-200"
                >
                  <span>Explore Export Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact-us?type=export"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  <span>Submit Regional RFQ</span>
                  <span className="text-[#D4AF37]">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

