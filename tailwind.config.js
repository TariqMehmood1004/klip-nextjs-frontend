// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
    screens: {
      sm: '375px',       // Mobile
      md: '768px',       // Tablet
      lg: '1024px',      // Desktop
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};