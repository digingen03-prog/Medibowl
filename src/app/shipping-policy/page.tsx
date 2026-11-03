import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AlertCircle, Ship, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Logistics Policy (Draft for Legal Review)",
  description:
    "Provisional shipping, freight, and international logistics policy draft for Medibowl International Private Limited.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-white min-h-[70vh] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Shipping Policy" }]}
          className="mb-8 text-slate-500"
        />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Draft for Corporate & Legal Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#032666] tracking-tight">
            Shipping & Logistics Policy
          </h1>

          <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Legal Notice:</strong> This document represents an operational overview draft. Binding international shipping terms are governed individually by formal contractual INCOTERMS (FOB, CIF, CFR, Ex-Works) agreed upon in commercial supply contracts.
          </div>

          <div className="space-y-6 pt-4 text-sm text-[#5E6C84] leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                1. International INCOTERMS Standards
              </h2>
              <p>
                All cross-border consignments dispatched by Medibowl International Private Limited are negotiated under standard International Chamber of Commerce (ICC) INCOTERMS. Commercial quotations explicitly specify whether terms are Ex-Works (EXW), Free On Board (FOB), Cost & Freight (CFR), or Cost, Insurance and Freight (CIF).
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                2. Temperature-Controlled & Cold-Chain Shipping
              </h2>
              <p>
                Specialized pharmaceutical formulations, biologics, oncology injectables, and critical care medicines are shipped using validated thermal packaging with continuous electronic data loggers to ensure temperature maintenance between 2°C and 8°C throughout transit.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-[#032666]">
                3. Customs Clearance & Shipping Documentation
              </h2>
              <p>
                Medibowl manages all origin statutory export documentation, customs filings, and regulatory declarations from Indian sea and air terminals. The buyer remains responsible for destination customs clearance, import duty payment, and local regulatory permits unless CIF destination door delivery is explicitly contracted.
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

