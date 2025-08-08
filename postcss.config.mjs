const config = {
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
  plugins: ["@tailwindcss/postcss"],
};

export default config;
