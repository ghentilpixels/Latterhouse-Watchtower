/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#151e2b',
          800: '#1b263b',
          700: '#2d3a4d',
        },
        gold: {
          500: '#c29b57',
          600: '#a68245',
        },
        offwhite: '#FDFBF7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
