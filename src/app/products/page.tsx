import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { ArrowRight, MessageSquareQuote, CheckCircle, ShieldCheck, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical & Healthcare Products Portfolio",
  description:
    "Explore Medibowl International's comprehensive 7 healthcare product portfolios: generic medicines, branded pharmaceuticals, surgical products, consumables, speciality formulations, oncology, and medical equipment.",
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Portfolio Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000&auto=format&fit=crop"
            alt="Pharmaceutical and Healthcare Portfolio"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Products" }]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Complete Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Comprehensive Healthcare Products Under One Roof
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International Private Limited delivers single-window access to seven specialized healthcare categories, ensuring certified sourcing, verified quality, and international compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Catalog */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PRODUCT_CATEGORIES.map((cat, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={cat.id}
                id={cat.slug}
                className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Category Image Preview (Col Span 5) */}
                  <div
                    className={`lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[300px] w-full bg-slate-100 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={cat.cardImage}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#032666]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-[#032666] shadow">
                        {cat.badge}
                      </span>
                    </div>
                  </div>

                  {/* Category Details & Subcategories (Col Span 7) */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-10 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                        Category 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#032666]">
                        {cat.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed">
                      {cat.fullDescription}
                    </p>

                    {/* Subcategories Highlight Grid */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#032666] block">
                        Included Subcategories ({cat.subcategories.length}):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#172B4D]">
                        {cat.subcategories.map((sub) => (
                          <div key={sub.name} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                            <span className="font-medium">{sub.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-100">
                      <Link
                        href={`/products/${cat.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#032666] hover:bg-[#043784] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                      >
                        <span>View {cat.title} Details</span>
                        <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                      </Link>

                      <Link
                        href={`/contact-us?category=${encodeURIComponent(cat.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                      >
                        <MessageSquareQuote className="w-4 h-4" />
                        <span>Enquire for {cat.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sourcing Assurance Notice */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 bg-[#F7F9FA] rounded-2xl border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#032666]">
                  Verified Pharmacopoeial Quality Standards
                </h4>
                <p className="text-xs text-[#5E6C84]">
                  Batch-specific Certificates of Analysis (CoA), GMP certifications, and documentation support are coordinated for all commercial and institutional consignments.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shrink-0 transition-colors shadow-sm"
            >
              <span>Submit General Sourcing RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

