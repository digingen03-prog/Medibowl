"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  variant = "light",
  className = "",
  showTagline = true,
  size = "md",
}: BrandLogoProps) {
  // Height configurations tuned for crispness and prominent header branding
  const heightMap = {
    sm: 42,
    md: 52,
    lg: 64,
  };

  const height = heightMap[size];
  const width = Math.round(height * (980 / 200)); // aspect ratio 980:200 (~4.9:1)

  const logoSrc = "/logos/medibowl-horizontal-logo.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-lg transition-transform duration-200 ${className}`}
      aria-label="Medibowl International Private Limited - Return to Homepage"
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Medibowl International Private Limited - Better Health | Brighter Tomorrow"
          width={width}
          height={height}
          priority
          className="h-10 sm:h-11 md:h-12 lg:h-[50px] w-auto max-w-[210px] xs:max-w-[250px] sm:max-w-[280px] md:max-w-none object-contain transition-opacity duration-200 group-hover:opacity-95"
          style={{ width: "auto" }}
        />
      </div>
    </Link>
  );
}
