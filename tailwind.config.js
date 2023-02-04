/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E2749',
        'secondary': '#273469',
        'accents': '#E4D9FF',
        'text1': '#EBEBFF',
        'test': '#353946',
        'orange': '#FFAE42'
      }
    },
  },
  plugins: [],
}
