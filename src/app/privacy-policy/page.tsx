import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft for Legal Review)",
  description:
    "Privacy Policy draft for Medibowl International Private Limited. Learn how commercial inquiry data and business communications are handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-[70vh] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Privacy Policy" }]}
          className="mb-8 text-slate-500"
        />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Draft for Corporate & Legal Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#032666] tracking-tight">
            Privacy Policy
          </h1>

          <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Legal Notice:</strong> This document represents a provisional operational draft. The full corporate privacy policy is currently subject to formal review by Medibowl International Private Limited&apos;s legal counsel.
          </div>

          <div className="space-y-6 pt-4 text-sm text-[#5E6C84] leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                1. Data Collection & Business Inquiries
              </h2>
              <p>
                Medibowl International Private Limited collects corporate and commercial information submitted via our Request for Quotation (RFQ) and contact forms—including company name, representative name, business email, contact number, destination market, and therapeutic product requirements.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                2. Purpose of Information Processing
              </h2>
              <p>
                Collected data is utilized strictly for evaluating product availability, preparing commercial proforma invoices, verifying corporate purchasing credentials, communicating order milestones, and adhering to pharmaceutical trade due diligence.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                3. Confidentiality & Non-Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade client procurement data to unauthorized third parties. Trade specifications are disclosed solely to verified manufacturing partners and logistics carriers strictly necessary for order fulfillment.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                4. Data Protection Inquiries
              </h2>
              <p>
                For questions regarding data retention or commercial privacy standards, please write to our compliance officer at{" "}
                <a
                  href="mailto:medibowlinternational@gmail.com"
                  className="text-[#034EA6] font-semibold hover:underline"
                >
                  medibowlinternational@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
            <span>Status: Draft Under Legal Review</span>
            <span>Medibowl International Private Limited</span>
          </div>
        </div>
      </div>
    </div>
  );
}

