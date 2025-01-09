/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter Tight Variable", "sans-serif"],
      },
      colors: {
        // Custom Colors
        primary: "#cc5728", // #cc5728 for Primary Color
        secondary: "#046c0c", // #046c0c for Secondary Color
        accent1: "#bcf56c", // #bcf56c for Accent Color 1
        accent2: "#8bb357", // #8bb357 for Accent Color 2
        neutralDark: "#433b34", // #433b34 for Neutral Dark
        neutralLight: "#cecbca", // #cecbca for Neutral Light
        white: "#ffffff", // #ffffff for white (background, text, etc.)
        black: "#000000", // black for text and contrast
        neutral: {
          0: "#FFFFFF",
          10: "#F9FAFB",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#AEB2BA",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
          100: "#030712",
        },
      },
    },
  },
  plugins: [],
};
