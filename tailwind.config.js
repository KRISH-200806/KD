/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
      },
      fontFamily: {
        gujarati: ['"Noto Serif Gujarati"', "serif"],
        gujarati2:["Anek Gujarati", "sans-serif"]
      },
    },
  },
  plugins: [],
};
