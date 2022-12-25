/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        comRegular: ["comforta_regular", "sans-serif"],

        comMedium: ["comforta_medium", "sans-serif"],

        comBold: ["comforta_bold", "sans-serif"],

        comSmBold: ["comforta_semi_bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}