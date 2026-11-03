import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";
import { ShieldAlert, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Regulatory & Legal Disclaimer",
  description:
    "Official regulatory disclaimer regarding pharmaceutical supply, licensing compliance, destination-country regulations, and non-medical advice notice for Medibowl International Private Limited.",
};

export default function RegulatoryDisclaimerPage() {
  return (
    <div className="bg-white min-h-[70vh] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Regulatory Disclaimer" }]}
          className="mb-8 text-slate-500"
        />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#032666]/10 text-[#032666]">
            <ShieldAlert className="w-4 h-4 text-[#043784]" />
            <span>Statutory Compliance Notice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#032666] tracking-tight">
            Official Regulatory Disclaimer
          </h1>

          <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

          {/* Primary Verbatim Approved Disclaimer Box */}
          <div className="p-8 bg-[#F7F9FA] rounded-2xl border-l-4 border-[#032666] border border-[#E2E8F0] shadow-sm space-y-4 text-base text-[#172B4D] leading-relaxed">
            <h2 className="text-lg font-bold text-[#032666] uppercase tracking-wide">
              {COMPANY_INFO.legalName}
            </h2>
            <p className="font-medium text-slate-800">
              {COMPANY_INFO.regulatoryDisclaimer}
            </p>
          </div>

          {/* Detailed Legal Clauses */}
          <div className="space-y-6 pt-6 text-sm text-[#5E6C84] leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#032666]">
                1. Regulatory Framework & Licensing
              </h3>
              <p>
                Medibowl International Private Limited operates in strict adherence to the applicable provisions of the Drugs and Cosmetics Act, applicable export-import policies of the Directorate General of Foreign Trade (DGFT), and international statutory guidelines governing pharmaceutical commercial distribution.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#032666]">
                2. Destination-Country Regulatory Approvals
              </h3>
              <p>
                Product availability, commercial quotation, export processing, and physical consignment clearance are strictly contingent upon the receiving buyer possessing valid import authorisations, product registrations, and institutional dispensing licenses as mandated by the health authority of the destination country.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#032666]">
                3. Informational Purpose & No Medical Advice
              </h3>
              <p>
                The information, chemical descriptions, therapeutic categories, and specifications displayed across this website (www.medibowlinternational.com) are published exclusively for commercial B2B, procurement, and informational evaluation. Nothing herein constitutes clinical diagnostic guidance, medical advice, or an offer of sale to consumers without statutory medical prescription.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#032666]">
                4. Inquiries & Verification
              </h3>
              <p>
                For regulatory inquiries, batch pedigree verifications, or documentation requests, please contact our registered office in Villivakkam, Chennai or email{" "}
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

          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#032666] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#043784] transition-colors"
            >
              <span>Contact Regulatory Desk</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
            <span className="text-xs text-slate-400">
              Last Updated & Verified: November 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

