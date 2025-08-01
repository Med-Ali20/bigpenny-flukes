/** @type {import('tailwindcss').Config} */
// import { type Config } from "tailwindcss";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,otf}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D2451E",
        secondary: "#FBFBF8",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        salford: ["var(--font-salford-sans)"],
      },
    },
  },
  plugins: [],
};

