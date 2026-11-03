import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Building,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Business Enquiries | Request a Quotation",
  description:
    "Get in touch with Medibowl International Private Limited, Chennai, India. Request a quotation, submit export requirements, or reach our commercial desk via email, phone, or WhatsApp.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      {/* Contact Hero */}
      <section className="relative bg-[#032666] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Medibowl International Registered Corporate Office"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            className="mb-6 text-slate-300"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
              Direct Trade Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Connect With Medibowl International
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We welcome product enquiries, institutional quotation requests, and international export proposals. Reach our commercial team directly or submit your specifications below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Contacts Card + RFQ Form */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Verified Company Contact Details (Col Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Office Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Corporate Entity
                  </span>
                  <h2 className="text-xl font-bold text-[#032666] mt-1">
                    {COMPANY_INFO.legalName}
                  </h2>
                  <p className="text-xs text-[#5E6C84] mt-1">
                    {COMPANY_INFO.corporateTagline}
                  </p>
                </div>

                <div className="space-y-5 text-xs sm:text-sm">
                  {/* Registered Office */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#032666]/10 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#043784]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Registered Corporate Office
                      </span>
                      <p className="font-semibold text-[#172B4D] leading-relaxed">
                        {COMPANY_INFO.registeredOffice.fullAddress}
                      </p>
                      <p className="text-xs text-[#5E6C84] mt-1">
                        Villivakkam, Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  {/* Sourcing Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#032666]/10 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-[#043784]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Official Enquiries Email
                      </span>
                      <a
                        href="mailto:medibowlinternational@gmail.com"
                        className="font-bold text-[#034EA6] hover:underline break-all"
                      >
                        medibowlinternational@gmail.com
                      </a>
                      <p className="text-xs text-[#5E6C84] mt-0.5">
                        Direct commercial trade desk inbox
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp Numbers */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#032666]/10 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-[#043784]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Phone & WhatsApp Lines
                      </span>
                      <p className="font-bold text-[#172B4D]">
                        +91 9941244779
                      </p>
                      <p className="font-bold text-[#172B4D]">
                        +91 7305791601
                      </p>
                      <p className="text-xs text-[#5E6C84] mt-0.5">
                        Direct call or messaging support
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#032666]/10 text-[#032666] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-[#043784]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Operational Desk Hours
                      </span>
                      <p className="font-medium text-[#172B4D]">
                        {COMPANY_INFO.contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919941244779?text=Hello%20Medibowl%20International%2C%20I%20would%20like%20to%20enquire%20about%20pharmaceutical%20procurement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 9941244779)</span>
                  </a>
                </div>
              </div>

              {/* Office Location Preview Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#032666]">
                    Chennai Location
                  </span>
                  <span className="text-xs text-[#D4AF37] font-bold">Tamil Nadu, India</span>
                </div>
                <p className="text-xs text-[#5E6C84] leading-relaxed">
                  Our registered office is situated in Villivakkam, Chennai—a strategic hub providing immediate connectivity to Chennai International Airport and maritime shipping terminals for international cargo dispatch.
                </p>
                <div className="p-3 bg-[#F7F9FA] rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Licensed corporate entity registered under Indian Companies Act.</span>
                </div>
              </div>
            </div>

            {/* Right Column: 10-Field Form (Col Span 7) */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Commercial RFQ & Sourcing Form"
                subtitle="Please specify your product, molecule, required strength, and volume. Our sourcing team will contact you with current availability and commercial terms."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

