/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'green-border-card': '#131317',
        'background-card': '#05030A',
        'background-button-nft': '#1D4FFE',
        'gray-area-favorite': '#05030A',
        'gray-card-collectors': 'rgba(255, 255, 255, 0.01)',
        'gray-border-card-collectors': 'rgba(255, 255, 255, 0.04)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        poppins: 'var(--font-poppins)',
      },
      maxWidth: {
        grid: '77.5rem',
        'card-ntf': '17.4375rem',
        'card-collectors': '37rem',
      },
      height: {
        'area-image-nft': '14.75rem',
      }
    },
    screens: {
      '@tablet': '640px',
      '@laptop': '1024px',
      '@desktop': '1280px',
    },
  },
  plugins: [require("tailwindcss-animate")],
}