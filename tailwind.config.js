/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#d97706', light: '#fbbf24', dark: '#b45309' },
        secondary: { DEFAULT: '#e7e5e4', light: '#fafaf9', dark: '#a8a29e' },
        surface: {
          DEFAULT: '#1c1917',
          50: '#1c1917',
          100: '#292524',
          200: '#44403c',
          300: '#57534e',
        },
        ink: { DEFAULT: '#fafaf9', soft: '#e7e5e4', muted: '#a8a29e' },
      },
      fontFamily: {
        display: ['Cinzel', 'system-ui', 'sans-serif'],
        sans: ['Karla', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 28px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 36px rgba(0,0,0,0.16)',
        glow: '0 0 24px #d9770655',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-page': 'slidePage 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slidePage: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
