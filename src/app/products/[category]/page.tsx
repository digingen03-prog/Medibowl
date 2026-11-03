import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { PRODUCT_CATEGORIES, getProductCategoryBySlug } from "@/data/products";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Boxes,
  Truck,
  MessageSquareQuote,
  Sparkles,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getProductCategoryBySlug(resolvedParams.category);

  if (!category) {
    return {
      title: "Product Category Not Found",
    };
  }

  return {
    title: `${category.title} Sourcing & Export`,
    description: `${category.shortDescription} Sourced and exported internationally by Medibowl International Private Limited, Chennai, India.`,
    openGraph: {
      title: `${category.title} | Medibowl International`,
      description: category.shortDescription,
      images: [
        {
          url: category.cardImage,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getProductCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  // Related categories (other 6 categories)
  const relatedCategories = PRODUCT_CATEGORIES.filter(
    (c) => c.slug !== category.slug
  ).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Category Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#032666] via-[#032666]/90 to-[#043784]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: category.title },
            ]}
            className="mb-6 text-slate-300"
          />

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              {category.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {category.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {category.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Category Deep Overview & Sourcing Highlights */}
      <section className="py-16 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#032666]/10 text-[#032666]">
                <span>Category Scope & Quality Benchmark</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#032666]">
                About Our {category.title} Sourcing
              </h2>
              <div className="w-14 h-1 bg-[#D4AF37] rounded-full" />
              <p className="text-base text-[#172B4D] leading-relaxed">
                {category.fullDescription}
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#032666] block">
                  Procurement & Clinical Advantages:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#172B4D]">
                  {category.keyBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="p-3 rounded-lg bg-[#F7F9FA] border border-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packaging & Logistics Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#F7F9FA] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#032666]">
                  <Boxes className="w-4 h-4 text-[#D4AF37]" />
                  <span>Packaging & Quality Specifications</span>
                </div>
                <h3 className="text-lg font-bold text-[#032666]">
                  Standard Institutional Specifications
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#5E6C84]">
                  {category.procurementSpecs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">›</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-[#032666] block">
                    Regulatory Assurance:
                  </span>
                  <p>
                    All supplies in this category comply with applicable Indian and international pharmacopoeial standards. Batch test reports and Certificates of Analysis (CoA) accompany export consignments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategory Listing Grid */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
              Therapeutic & Product Lineup
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#032666]">
              Subcategories Available for Sourcing ({category.subcategories.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6C84] mt-2">
              Medibowl International coordinates supply for the following specialized therapeutic lines within {category.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub, idx) => (
              <div
                key={sub.name}
                className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  </div>
                  <h3 className="text-base font-bold text-[#032666] mb-2 leading-snug">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-[#5E6C84] leading-relaxed">
                    {sub.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#034EA6]">
                  <span>Available on RFQ</span>
                  <Link
                    href={`/contact-us?category=${encodeURIComponent(category.title)}&req=${encodeURIComponent(sub.name)}`}
                    className="hover:text-[#D4AF37] flex items-center gap-0.5 text-xs font-bold"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Sourcing RFQ Form for this Category */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialCategory={category.title}
            title={`Request Quotation for ${category.title}`}
            subtitle={`Submit your specific dosage, molecule, packaging, or volume specifications for ${category.title}. Our trade desk will prepare an itemized commercial quotation.`}
          />
        </div>
      </section>

      {/* Related Categories Navigation */}
      <section className="py-14 bg-[#F7F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Cross-Portfolio Sourcing
              </span>
              <h3 className="text-xl font-bold text-[#032666]">
                Explore Other Healthcare Portfolios
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-[#034EA6] hover:text-[#032666] flex items-center gap-1"
            >
              <span>View All 7 Portfolios</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCategories.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.slug}`}
                className="group bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {rel.badge}
                  </span>
                  <h4 className="text-base font-bold text-[#032666] group-hover:text-[#043784] mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#5E6C84] line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#034EA6]">
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

