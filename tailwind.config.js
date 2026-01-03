/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10a34a",       // CargoPanda Green
        "primary-dark": "#0b6f33",
        accent: "#f0541e",        // CargoPanda Orange
        dark: "#020617",          // Dark background
        light: "#f7f9fb",         // Light background
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}