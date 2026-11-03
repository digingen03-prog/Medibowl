import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";
import { AlertCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions (Draft for Legal Review)",
  description:
    "Terms and conditions draft governing the use of Medibowl International Private Limited's corporate website and commercial RFQ portal.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white min-h-[70vh] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Terms & Conditions" }]}
          className="mb-8 text-slate-500"
        />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Draft for Corporate & Legal Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#032666] tracking-tight">
            Terms & Conditions of Website Use
          </h1>

          <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Legal Notice:</strong> This document represents a provisional operational draft. The binding corporate terms and conditions are subject to formal legal execution and final approval by the Board of Directors of Medibowl International Private Limited.
          </div>

          <div className="space-y-6 pt-4 text-sm text-[#5E6C84] leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                1. Acceptance of Corporate Terms
              </h2>
              <p>
                By accessing and utilizing this website (www.medibowlinternational.com), corporate visitors and institutional procurement officers agree to be bound by these Terms and Conditions and our Regulatory Disclaimer.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                2. Request for Quotations (RFQ) & Commercial Offers
              </h2>
              <p>
                Information displayed on this website does not constitute a legally binding unilateral offer to sell. Quotations, availability timelines, and commercial prices generated in response to RFQ submissions are confirmed only through formal Proforma Invoices or bilateral procurement contracts.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                3. Intellectual Property Rights
              </h2>
              <p>
                The corporate name, trade mark, official Medibowl logo, website graphics, layouts, and product descriptions are the exclusive intellectual property of Medibowl International Private Limited and may not be reproduced without express written authorization.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                4. Governing Law & Jurisdiction
              </h2>
              <p>
                All commercial engagements and matters arising from the use of this website shall be governed by and construed in accordance with the laws of the Republic of India. The courts of Chennai, Tamil Nadu shall have exclusive jurisdiction.
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

