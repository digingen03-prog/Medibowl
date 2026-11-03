import React from "react";
import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ProductPortfolioGrid } from "@/components/home/ProductPortfolioGrid";
import { BusinessModelSection } from "@/components/home/BusinessModelSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InternationalPresence } from "@/components/home/InternationalPresence";
import { ProcurementWorkflowSection } from "@/components/home/ProcurementWorkflowSection";
import { AboutCompanySection } from "@/components/home/AboutCompanySection";
import { PartnershipCtaSection } from "@/components/home/PartnershipCtaSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/company";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01: HERO */}
      <Hero />

      {/* SECTION 02: WHO WE ARE */}
      <WhoWeAre />

      {/* SECTION 03: PRODUCT PORTFOLIO */}
      <ProductPortfolioGrid />

      {/* SECTION 04: BUSINESS MODEL */}
      <BusinessModelSection />

      {/* SECTION 05: WHY CHOOSE MEDIBOWL */}
      <WhyChooseUs />

      {/* SECTION 06: INTERNATIONAL PRESENCE */}
      <InternationalPresence />

      {/* SECTION 07: PROCUREMENT PROCESS */}
      <ProcurementWorkflowSection />

      {/* SECTION 08: ABOUT COMPANY */}
      <AboutCompanySection />

      {/* SECTION 09: BUSINESS PARTNERSHIP CTA */}
      <PartnershipCtaSection />

      {/* SECTION 10: CONTACT & DIRECT RFQ SECTION */}
      <section className="py-20 sm:py-24 bg-[#F7F9FA] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Sourcing Desk"
            title="Initiate Your Pharmaceutical Enquiry"
            description="Whether requesting a bulk export quotation, hospital supply pricing, or exploring international distribution partnerships, our commercial team is at your disposal."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Corporate Contacts & Office Info (Col Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-[#032666] mt-1">
                    Medibowl International Private Limited
                  </h3>
                  <p className="text-xs text-[#5E6C84] mt-1">
                    Connecting Healthcare. Delivering Quality. Globally.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#172B4D]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#032666]/5 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Registered Office
                      </span>
                      <p className="font-medium text-[#172B4D] leading-relaxed">
                        {COMPANY_INFO.registeredOffice.fullAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#032666]/5 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Official Sourcing Email
                      </span>
                      <a
                        href="mailto:medibowlinternational@gmail.com"
                        className="font-medium text-[#034EA6] hover:underline"
                      >
                        medibowlinternational@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#032666]/5 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Direct Lines / WhatsApp
                      </span>
                      <p className="font-medium text-[#172B4D]">
                        +91 9941244779 / +91 7305791601
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Card */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919941244779?text=Hello%20Medibowl%20International%20Trade%20Desk%2C%20I%20would%20like%20to%20enquire%20about%20pharmaceutical%20procurement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quick Chat on WhatsApp (+91 9941244779)</span>
                  </a>
                </div>

                {/* Operational Hours */}
                <div className="p-3 bg-[#F7F9FA] rounded-xl text-xs text-[#5E6C84]">
                  <span className="font-bold text-[#032666] block mb-0.5">
                    Operational Hours:
                  </span>
                  <span>{COMPANY_INFO.contact.businessHours}</span>
                </div>
              </div>
            </div>

            {/* Right Column: 10-Field RFQ Form (Col Span 7) */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Direct Business Enquiry & RFQ"
                subtitle="Fill out the requirements below. Our international sourcing desk will prepare an itemized commercial quotation."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

