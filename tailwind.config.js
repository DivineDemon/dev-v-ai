import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3c83f6",
        "primary-foreground": "#ffffff",
        "background-light": "#f5f7f8",
        "background-dark": "#020617",
        "surface-dark": "#0f172a",
        "border-dark": "#1e293b",
        "text-muted": "#94a3b8",
        "accent": "#0ea5e9",
      },
      fontFamily: {
        "sans": ["JetBrains Mono", "monospace"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'scroll-up': 'scroll-up 30s linear infinite',
        'scroll-down': 'scroll-down 30s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
