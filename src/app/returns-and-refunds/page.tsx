import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AlertCircle, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy (Draft for Legal Review)",
  description:
    "Provisional returns, claims, and replacement policy draft for Medibowl International Private Limited.",
};

export default function ReturnsAndRefundsPage() {
  return (
    <div className="bg-white min-h-[70vh] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Returns & Refunds" }]}
          className="mb-8 text-slate-500"
        />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Draft for Corporate & Legal Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#032666] tracking-tight">
            Returns, Replacements & Claims Policy
          </h1>

          <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Legal Notice:</strong> This document represents a provisional operational draft. Due to the regulated nature of pharmaceuticals and sterile medical disposables, returns are subject to strict regulatory conditions and bilateral commercial terms.
          </div>

          <div className="space-y-6 pt-4 text-sm text-[#5E6C84] leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                1. Regulated Goods Return Restrictions
              </h2>
              <p>
                In accordance with good distribution practices (GDP) and drug regulatory laws, pharmaceuticals, temperature-sensitive biologics, and sterile surgical products cannot be returned once delivered and unsealed, to safeguard public health and prevent counterfeit re-entry into the supply chain.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                2. Damage in Transit & Discrepancy Claims
              </h2>
              <p>
                In the rare event of transit damage, packaging breaches, or physical discrepancies upon port arrival, the buyer must document the incident with photographic evidence, surveyor report, and written notification within 48 hours of cargo discharge.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                3. Quality Claims & Manufacturer Recalls
              </h2>
              <p>
                If any batch is recalled by the originating manufacturer or regulatory authority, Medibowl International facilitates immediate batch quarantine, documentation audit, and replacement or commercial reconciliation according to the underlying supply agreement.
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

