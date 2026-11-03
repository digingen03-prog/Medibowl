import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, MessageSquareQuote, Layers } from "lucide-react";

export function ProductPortfolioGrid() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Seven Strategic Portfolios"
          title="Comprehensive Healthcare Products Under One Roof"
          description="Explore our seven specialized product categories tailored to hospitals, commercial distributors, healthcare institutions, and international markets."
          align="center"
          className="mb-14"
        />

        {/* 7 Product Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, index) => {
            // Give 7th card a balanced layout or full row styling if on large screen
            const isLast = index === PRODUCT_CATEGORIES.length - 1;

            return (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col overflow-hidden group ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Card Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.cardImage}
                    alt={`${cat.title} - Medibowl International Supply`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032666]/80 via-[#032666]/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#032666] shadow">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Subcategory Count Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-slate-200">
                      {cat.subcategories.length} Specialized Subcategories
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#032666] group-hover:text-[#043784] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed line-clamp-3">
                      {cat.shortDescription}
                    </p>
                  </div>

                  {/* Subcategory Preview Chips */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub.name}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#F7F9FA] text-[#172B4D] border border-slate-200"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {cat.subcategories.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#EDF2F7] text-[#5E6C84]">
                          +{cat.subcategories.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Dual Action CTAs from requirements */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Link
                        href={`/products/${cat.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#F7F9FA] hover:bg-[#032666] text-[#032666] hover:text-white rounded-lg text-xs font-bold transition-colors border border-[#E2E8F0]"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/contact-us?category=${encodeURIComponent(cat.title)}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] rounded-lg text-xs font-bold transition-colors shadow-sm"
                      >
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Catalog RFQ Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F7F9FA] rounded-2xl border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#032666]">
              Looking for a specialized formulation or institutional contract?
            </h4>
            <p className="text-xs sm:text-sm text-[#5E6C84]">
              Our pharmaceutical sourcing specialists coordinate custom volumes, packaging, and regulatory documentation.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#032666] hover:bg-[#043784] text-white text-xs font-bold uppercase tracking-wider rounded-lg shrink-0 shadow transition-colors"
          >
            <span>Request Full Product Dossier</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

