/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nightmare': '#FFC700',
      },
      lineHeight: {
        'lineExtra': '80px'
      },
      fontFamily: {
        'fontEmily': ['"Emilys Candy"', 'cursive'],
        'fontInter': ["'Inter'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
