/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF4A00", // exact orange accent measured from reference footer
          dark: "#050C2E",    // exact dark navy footer background
          light: "#FFF4EE",
        },
        panel: "#111111",      // support-desk card background
        footercard: "#1E2A47", // branch card background
        ink: "#222833",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
