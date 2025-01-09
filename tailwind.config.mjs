/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter Variable", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#1E1E1E",
        light: "#F8F8F8",
        gray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
