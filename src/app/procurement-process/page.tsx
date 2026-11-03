import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { PROCUREMENT_STEPS } from "@/data/procurement";
import {
  FileText,
  Search,
  BadgeDollarSign,
  PackageCheck,
  Send,
  HeadphonesIcon,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Procurement & Supply Process | Six-Stage Workflow",
  description:
    "A simple, professional, and transparent 6-stage procurement process. Learn how Medibowl International handles requirement sharing, sourcing, quotation, order processing, and dispatch.",
};

export default function ProcurementProcessPage() {
  const iconList = [
    FileText,
    Search,
    BadgeDollarSign,
    PackageCheck,
    Send,
    HeadphonesIcon,
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="Procurement Process Timeline"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Procurement Process" }]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Sourcing & Supply Workflow
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              A Simple, Professional & Transparent Process
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Medibowl International has structured its pharmaceutical procurement and supply cycle into six distinct, verifiable stages to ensure efficiency, quality assurance, and commercial predictability.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Stage Timeline Breakdown */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PROCUREMENT_STEPS.map((step, idx) => {
            const Icon = iconList[idx] || FileText;

            return (
              <div
                key={step.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 p-6 sm:p-10 relative overflow-hidden"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#032666] via-[#D4AF37] to-[#032666]" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left: Step Number & Icon (Col Span 4) */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#032666] text-[#D4AF37] flex items-center justify-center shadow-md">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
                          Stage 0{step.stepNumber}
                        </span>
                        <span className="text-xs text-slate-400 block font-mono">
                          {step.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-[#F7F9FA] rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#032666] block mb-1">
                        Operational Horizon
                      </span>
                      <p className="text-xs text-[#5E6C84]">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Description & Deliverables (Col Span 8) */}
                  <div className="md:col-span-8 space-y-5">
                    <h2 className="text-2xl font-bold text-[#032666]">
                      {step.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#172B4D] leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#032666] block">
                        Deliverables & Checkpoints:
                      </span>
                      <div className="space-y-2">
                        {step.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E6C84]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded RFQ Submission */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Start Stage 1: Share Your Requirements"
            subtitle="Initiate the procurement workflow by submitting your product requirements below. Our commercial desk will initiate manufacturer sourcing immediately."
          />
        </div>
      </section>
    </div>
  );
}

