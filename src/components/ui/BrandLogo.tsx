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
  // Height configurations tuned for crispness and optimal header proportion
  const heightMap = {
    sm: 36,
    md: 44,
    lg: 54,
  };

  const height = heightMap[size];
  const width = Math.round(height * (620 / 120)); // natural aspect ratio 620:120

  const logoSrc =
    variant === "dark"
      ? "/logos/medibowl-actual-logo-transparent.png"
      : "/logos/medibowl-actual-logo-transparent.png";

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
          className="h-9 xs:h-11 md:h-12 w-auto max-w-[190px] xs:max-w-[240px] sm:max-w-none object-contain transition-opacity duration-200 group-hover:opacity-95"
          style={{ width: "auto" }}
        />
      </div>
    </Link>
  );
}
