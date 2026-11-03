import React from "react";
import Link from "next/link";
import { PROCUREMENT_STEPS } from "@/data/procurement";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FileText,
  Search,
  BadgeDollarSign,
  PackageCheck,
  Send,
  HeadphonesIcon,
  ArrowRight,
  Clock,
} from "lucide-react";

export function ProcurementWorkflowSection() {
  const iconList = [
    FileText,
    Search,
    BadgeDollarSign,
    PackageCheck,
    Send,
    HeadphonesIcon,
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="End-to-End Execution"
          title="A Simple, Professional & Transparent Process"
          description="From initial product specification to customs dispatch and final delivery, our six-stage procurement model ensures complete clarity and adherence to healthcare standards."
          align="center"
          className="mb-16"
        />

        {/* 6-Step Visual Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCUREMENT_STEPS.map((step, idx) => {
            const Icon = iconList[idx] || FileText;

            return (
              <div
                key={step.id}
                className="bg-[#F7F9FA] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Step Indicator Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#032666] text-[#D4AF37] flex items-center justify-center font-bold shadow group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white border border-[#E2E8F0] text-[#032666] rounded-full">
                      Step 0{step.stepNumber}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-[#032666] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables & Turnaround */}
                <div className="pt-4 border-t border-slate-200/80 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1 text-xs text-[#172B4D]">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#034EA6]">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{step.timeline}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Full Procurement Page */}
        <div className="mt-12 text-center">
          <Link
            href="/procurement-process"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#032666] hover:bg-[#043784] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors"
          >
            <span>View Complete Sourcing & Supply Details</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

