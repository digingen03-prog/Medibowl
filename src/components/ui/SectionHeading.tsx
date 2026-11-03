import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
            isDark
              ? "bg-[#D4AF37]/20 text-[#E7C15B] border border-[#D4AF37]/30"
              : "bg-[#032666]/10 text-[#032666] border border-[#032666]/20"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-[#D4AF37]" : "bg-[#043784]"
            }`}
          />
          {badge}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
          isDark ? "text-white" : "text-[#032666]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#5E6C84]"
          }`}
        >
          {description}
        </p>
      )}

      {/* Subtle gold decorative underline */}
      <div
        className={`w-14 h-1 bg-[#D4AF37] rounded-full mt-4 ${
          isCenter ? "mx-auto" : "mr-auto"
        }`}
      />
    </div>
  );
}

