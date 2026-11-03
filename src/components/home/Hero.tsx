"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Handshake,
  Pill,
  Layers,
  Globe2,
  Users2,
  LayoutGrid,
} from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const featureStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        leftContentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 }
      ).fromTo(
        featureStripRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#021B47] text-white overflow-hidden"
      aria-label="Medibowl International Hero"
    >
      {/* Background Graphic Asset: Hero Image.webp */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.webp"
          alt="Medibowl International Global Pharmaceutical Trading & Healthcare Supply"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        
        {/* Soft Left Navy Gradient Overlay to ensure maximum text readability across all displays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032666]/95 via-[#032666]/75 sm:via-[#032666]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021B47]/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container - Compact vertical padding so everything fits in 100vh fold without scrolling */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 w-full flex flex-col justify-between">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]">
          
          {/* LEFT CONTENT COLUMN (approx 55% width) */}
          <div
            ref={leftContentRef}
            className="lg:col-span-7 xl:col-span-6 space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#D4AF37] rounded-full inline-block shrink-0" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#D4AF37]">
                GLOBAL PHARMACEUTICAL & HEALTHCARE PARTNER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.14]">
              Reliable Pharmaceutical{" "}
              <br className="hidden sm:inline" />
              Supply for{" "}
              <span className="text-[#E7C15B]">
                Global Healthcare
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-[15px] md:text-base text-slate-100/90 leading-relaxed max-w-xl font-normal">
              Trading, distribution and export of quality pharmaceuticals and healthcare products worldwide.
            </p>

            {/* 3 CTA Buttons - Single Horizontal Row on Desktop */}
            <div className="pt-1 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              {/* BUTTON 1: EXPLORE OUR PRODUCTS */}
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#E7C15B] hover:bg-[#D4AF37] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <LayoutGrid className="w-4 h-4 text-[#032666]" />
                <span>EXPLORE OUR PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#032666] transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* BUTTON 2: REQUEST A QUOTATION */}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-slate-50 text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4 text-[#032666]" />
                <span>REQUEST A QUOTATION</span>
              </Link>

              {/* BUTTON 3: PARTNER WITH US */}
              <Link
                href="/become-a-partner"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#032666]/60 hover:bg-[#032666] text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/50 hover:border-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Handshake className="w-4 h-4 text-[#E7C15B]" />
                <span>PARTNER WITH US</span>
              </Link>
            </div>
          </div>

          {/* Right Column Spacer: Clean open window displaying the globe, plane, ship & scientist */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" aria-hidden="true" />
        </div>

        {/* 4 FEATURE ITEMS - INCLUDED IN THE SAME VIEW (NO SCROLL NEEDED) */}
        <div
          ref={featureStripRef}
          className="mt-6 sm:mt-8 pt-2 pb-2 w-full"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 py-3 sm:py-3.5 px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-0 lg:divide-x lg:divide-slate-200">
              
              {/* ITEM 1: 7 Healthcare Categories */}
              <div className="flex items-center gap-3 lg:px-5 first:pl-1">
                <div className="w-10 h-10 rounded-full bg-[#032666] flex items-center justify-center shrink-0 shadow-sm">
                  <Pill className="w-4 h-4 text-[#E7C15B]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#032666] tracking-tight">
                    7 Healthcare Categories
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Medicines, Surgical, Consumables & more
                  </p>
                </div>
              </div>

              {/* ITEM 2: B2B & B2C Solutions */}
              <div className="flex items-center gap-3 lg:px-5">
                <div className="w-10 h-10 rounded-full bg-[#032666] flex items-center justify-center shrink-0 shadow-sm">
                  <Layers className="w-4 h-4 text-[#E7C15B]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#032666] tracking-tight">
                    B2B & B2C Solutions
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    For distributors, institutions & patients
                  </p>
                </div>
              </div>

              {/* ITEM 3: International Exports */}
              <div className="flex items-center gap-3 lg:px-5">
                <div className="w-10 h-10 rounded-full bg-[#032666] flex items-center justify-center shrink-0 shadow-sm">
                  <Globe2 className="w-4 h-4 text-[#E7C15B]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#032666] tracking-tight">
                    International Exports
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Connecting global markets
                  </p>
                </div>
              </div>

              {/* ITEM 4: Reliable Procurement */}
              <div className="flex items-center gap-3 lg:px-5 last:pr-1">
                <div className="w-10 h-10 rounded-full bg-[#032666] flex items-center justify-center shrink-0 shadow-sm">
                  <Users2 className="w-4 h-4 text-[#E7C15B]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#032666] tracking-tight">
                    Reliable Procurement
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Sourcing, supply & distribution support
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
