"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  Mail,
  ArrowRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Products: false,
    "Business Solutions": false,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  // Sticky header background & shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Corporate Micro-Bar */}
      <div className="bg-[#032666] text-white text-xs border-b border-[#043784] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>International Pharmaceutical Trading & Export Company</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200">Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:medibowlinternational@gmail.com"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>medibowlinternational@gmail.com</span>
            </a>
            <a
              href="tel:+919941244779"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#D4AF37] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 9941244779 / +91 7305791601</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full bg-white transition-all duration-200 border-b border-[#E2E8F0] ${
          isScrolled ? "shadow-md py-2" : "py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo size={isScrolled ? "sm" : "md"} />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            ref={dropdownRef}
            className="hidden xl:flex items-center gap-1 2xl:gap-2 flex-shrink min-w-0"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2 xl:px-2.5 2xl:px-3 py-2 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-md transition-colors relative whitespace-nowrap select-none ${
                      isActive
                        ? "text-[#032666] font-bold"
                        : "text-[#172B4D] hover:text-[#043784] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 2xl:left-3 2xl:right-3 h-0.5 bg-[#D4AF37] rounded-full" />
                    )}
                  </Link>
                );
              }

              // Dropdown Menu Item (Products / Business Solutions)
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isOpen ? null : item.label)
                    }
                    className={`inline-flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-2 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap select-none ${
                      isActive || isOpen
                        ? "text-[#032666]"
                        : "text-[#172B4D] hover:text-[#043784] hover:bg-slate-50"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#D4AF37]" : ""
                      }`}
                    />
                    {isActive && (
                      <span className="absolute bottom-2 left-2 right-2 2xl:left-3 2xl:right-3 h-0.5 bg-[#D4AF37] rounded-full" />
                    )}
                  </button>

                  {/* Mega Menu / Dropdown Container with invisible hover bridge */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 pt-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`bg-white border border-[#E2E8F0] rounded-xl shadow-2xl p-4 animate-in fade-in slide-in-from-top-1 duration-150 ${
                          item.label === "Products" ? "w-[620px]" : "w-[360px]"
                        }`}
                      >
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#032666]">
                            {item.label === "Products"
                              ? "Seven Therapeutic & Clinical Categories"
                              : "Business Engagement Models"}
                          </span>
                          <Link
                            href={item.href}
                            className="text-xs font-semibold text-[#034EA6] hover:text-[#D4AF37] flex items-center gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>View Overview</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div
                          className={
                            item.label === "Products"
                              ? "grid grid-cols-2 gap-2"
                              : "flex flex-col gap-2"
                          }
                        >
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="p-2.5 rounded-lg hover:bg-[#F7F9FA] transition-colors group flex flex-col gap-1 border border-transparent hover:border-[#E2E8F0]"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-[#032666] group-hover:text-[#043784]">
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EDF2F7] text-[#032666] group-hover:bg-[#D4AF37]/20 group-hover:text-[#032666]">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <p className="text-xs text-[#5E6C84] line-clamp-2 leading-relaxed">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Request a Quotation */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-4 2xl:px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#032666] bg-[#D4AF37] hover:bg-[#E7C15B] rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
            >
              Request a Quotation
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
            <Link
              href="/contact-us"
              className="hidden xs:inline-flex px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#032666] bg-[#D4AF37] rounded-md transition-colors hover:bg-[#E7C15B]"
            >
              RFQ
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#032666] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#032666]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <BrandLogo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-[#032666] rounded-md"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 px-4 py-6 space-y-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpanded[item.label];
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 text-base font-semibold rounded-lg transition-colors ${
                        isActive
                          ? "bg-[#032666]/10 text-[#032666] font-bold"
                          : "text-[#172B4D] hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 pb-2"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2.5 text-base font-semibold ${
                          isActive
                            ? "text-[#032666] font-bold"
                            : "text-[#172B4D]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="p-2 text-slate-500 hover:text-[#032666]"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#D4AF37]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="pl-4 pr-2 py-1 space-y-1 bg-[#F7F9FA] rounded-lg mt-1">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-[#172B4D] hover:text-[#032666] font-medium rounded hover:bg-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-slate-100 bg-[#F7F9FA] space-y-3">
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] font-bold text-sm uppercase tracking-wider rounded-lg shadow"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-[#5E6C84]">
                <p>Villivakkam, Chennai, Tamil Nadu, India</p>
                <a
                  href="tel:+919941244779"
                  className="font-semibold text-[#032666] hover:underline"
                >
                  +91 9941244779
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
