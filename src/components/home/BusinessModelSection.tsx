import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_VERTICALS } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Building, Users, Globe2, ShieldCheck, Check } from "lucide-react";

export function BusinessModelSection() {
  const iconList = [Building, Users, Globe2];

  return (
    <section className="py-20 sm:py-24 bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Three Core Commercial Verticals"
          title="Connecting Manufacturers, Suppliers, Distributors & Healthcare Buyers"
          description="Whether supplying wholesale healthcare distributors, catering to supervised consumer wellness, or orchestrating international export shipments, our business model delivers integrity and execution excellence."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_VERTICALS.map((vertical, idx) => {
            const Icon = iconList[idx] || Building;
            const isFeatured = vertical.id === "exports";

            return (
              <div
                key={vertical.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured
                    ? "bg-[#032666] text-white border-[#043784] shadow-xl relative"
                    : "bg-white text-[#172B4D] border-[#E2E8F0] shadow-sm hover:shadow-md"
                }`}
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={vertical.heroImage}
                    alt={vertical.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isFeatured
                        ? "bg-gradient-to-t from-[#032666] via-[#032666]/60 to-transparent"
                        : "bg-gradient-to-t from-white via-white/50 to-transparent"
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isFeatured
                          ? "bg-[#D4AF37] text-[#032666]"
                          : "bg-[#032666] text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{vertical.title}</span>
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-bold leading-snug ${
                        isFeatured ? "text-white" : "text-[#032666]"
                      }`}
                    >
                      {vertical.headline}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isFeatured ? "text-slate-300" : "text-[#5E6C84]"
                      }`}
                    >
                      {vertical.intro}
                    </p>
                  </div>

                  {/* Target Audience List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/40">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isFeatured ? "text-[#D4AF37]" : "text-[#032666]"
                      }`}
                    >
                      Target Client Audience:
                    </span>
                    <ul className="space-y-1.5 text-xs">
                      {vertical.targetAudience.slice(0, 4).map((aud) => (
                        <li key={aud} className="flex items-start gap-2">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isFeatured ? "text-[#D4AF37]" : "text-[#043784]"
                            }`}
                          />
                          <span
                            className={
                              isFeatured ? "text-slate-200" : "text-[#172B4D]"
                            }
                          >
                            {aud}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Regulatory Disclaimer if present */}
                  {vertical.regulatoryNotice && (
                    <div
                      className={`p-3 rounded-lg text-[11px] leading-snug ${
                        isFeatured
                          ? "bg-[#021B47] text-slate-300 border border-[#043784]"
                          : "bg-[#F7F9FA] text-[#5E6C84] border border-[#E2E8F0]"
                      }`}
                    >
                      <p className="line-clamp-3">{vertical.regulatoryNotice}</p>
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      href={vertical.primaryCtaLink}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        isFeatured
                          ? "bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] shadow"
                          : "bg-[#032666] hover:bg-[#043784] text-white shadow-sm"
                      }`}
                    >
                      <span>{vertical.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

