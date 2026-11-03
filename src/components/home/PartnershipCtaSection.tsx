import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { Handshake, ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone } from "lucide-react";

export function PartnershipCtaSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#032666] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#043784]/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Proposition & Audience (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider">
              <Handshake className="w-4 h-4" />
              <span>Strategic Supply Partnerships</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Build a Stronger Pharmaceutical Supply Network Together.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Medibowl International invites international importers, distributors, healthcare institutions, and commercial pharmaceutical partners to collaborate on sustainable, transparent, and mutually beneficial supply agreements.
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                Who We Partner With:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {COMPANY_INFO.partnerAudience.slice(0, 6).map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/become-a-partner"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>Partner With Medibowl International</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/20 transition-all duration-200"
              >
                <span>Send Sourcing Proposal</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Direct Trade Desk Contacts Box (Col Span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#021B47] rounded-2xl border border-[#043784] p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="border-b border-[#043784] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Direct Trade Desk
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Connect With Our Procurement Office
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Ready to evaluate product availability or request commercial terms?
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3 bg-[#032666] rounded-xl border border-[#043784] flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">
                      Official Enquiries Email
                    </span>
                    <a
                      href="mailto:medibowlinternational@gmail.com"
                      className="text-white hover:text-[#D4AF37] font-semibold break-all"
                    >
                      medibowlinternational@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-[#032666] rounded-xl border border-[#043784] flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">
                      Phone / WhatsApp Sourcing Line
                    </span>
                    <a
                      href="https://wa.me/919941244779"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#D4AF37] font-semibold"
                    >
                      +91 9941244779 / 7305791601
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-[#032666]/60 rounded-xl border border-[#043784] text-[11px] text-slate-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>
                  Chennai, Tamil Nadu, India registered office. Fast turnaround for quotation submissions and export feasibility inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

