/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#e7d393',
        'white-100': '#efefef',
      },
      fontFamily: {
        sans: ['"Mona Sans"', 'sans-serif'],
        modern: ['"Modern Negra"', 'sans-serif'],
        serif: ['"DM Serif Text"', 'serif'],
      }
    },
  },
  plugins: [],
}

