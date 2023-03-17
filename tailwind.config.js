/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        blob: "blob 20s linear infinite",
        spain: "spain 23s linear 0s infinite",
        spainSlow: "spain 20s linear 0s infinite",
        spainMedium: "spain 17s linear 0s infinite",
        spainFast: "spain 15s linear 0s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%) ",
          },
          "100%": {
            transform: "translate(-100%, -100%) ",
          },
          "0%": {
            transform: "translate(100%, 100%) ",
          },
        },
        spain: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(359deg)",
          },
        },
      },
    },
    plugins: [],
  },
};
