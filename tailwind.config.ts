import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--brand-navy)",
          blue: "var(--brand-blue)",
          corporate: "var(--brand-corporate-blue)",
          gold: "var(--brand-gold)",
          champagne: "var(--brand-champagne)",
        },
        background: "var(--background)",
        "background-soft": "var(--background-soft)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(3, 38, 102, 0.05)",
        card: "0 4px 20px rgba(3, 38, 102, 0.07)",
        elevated: "0 10px 30px rgba(3, 38, 102, 0.12)",
        gold: "0 4px 20px rgba(212, 175, 55, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

