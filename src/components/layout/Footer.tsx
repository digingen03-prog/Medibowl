import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { COMPANY_INFO } from "@/data/company";
import { FOOTER_LINKS } from "@/data/navigation";
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Globe,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#032666] text-white border-t border-[#043784] overflow-hidden">
      {/* Upper Pre-Footer Callout Bar */}
      <div className="bg-[#021B47] py-8 border-b border-[#043784]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Global Pharmaceutical Procurement
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Connecting Healthcare. Delivering Quality. Globally.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-md"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/become-a-partner"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#043784] hover:bg-[#034EA6] text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-[#034EA6] transition-all duration-200"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Company Profile (Col Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" size="md" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Medibowl International Private Limited is an emerging
              pharmaceutical trading, distribution, and international export
              company connecting quality healthcare products with healthcare
              systems worldwide.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  No. 57(19), 1st Floor, Redhills Road, Villivakkam, Chennai,
                  Tamil Nadu - 600049, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="mailto:medibowlinternational@gmail.com"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  medibowlinternational@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+919941244779"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  +91 9941244779 / 7305791601
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 pb-1 border-b border-[#043784]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Portfolio (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 pb-1 border-b border-[#043784]">
              Product Portfolio
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {FOOTER_LINKS.productCategories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-xs">›</span>
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Compliance & Legal (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 pb-1 border-b border-[#043784]">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 mb-6">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-3 bg-[#021B47] rounded-lg border border-[#043784]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Entity</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Medibowl International Private Limited is incorporated under the
                Companies Act, India. Operations are conducted in strict
                accordance with statutory drug trading and export regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer Block */}
        <div className="mt-12 pt-8 border-t border-[#043784]">
          <div className="p-4 bg-[#021B47]/80 rounded-xl border border-[#043784] text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-[#D4AF37] block mb-1 uppercase tracking-wider text-[11px]">
              Regulatory & Legal Disclaimer
            </span>
            <p>{COMPANY_INFO.regulatoryDisclaimer}</p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Proposed Domain */}
        <div className="mt-8 pt-6 border-t border-[#043784] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Medibowl International Private Limited. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Chennai, Tamil Nadu, India</span>
            <span>•</span>
            <span className="text-[#D4AF37]">
              www.medibowlinternational.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

