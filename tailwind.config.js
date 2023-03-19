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
        blob: "blob 15s linear infinite",
        spain: "spain 60s linear 0s infinite",
        spainSlow: "spain 53s linear 0s infinite",
        spainMedium: "spain 43s linear 0s infinite",
        spainFast: "spain 33s linear 0s infinite",
        spainXFast: "spain 3s linear 0s infinite",
        spainXSFast: "spain 9s linear 0s infinite",

        // fluid: "fluid 10s ease infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%) ",
          },
          "33%": {
            transform: "translate(300%, 50%) ",
          },
          "66%": {
            transform: "translate(-100%, -150%) ",
          },
          "100%": {
            transform: "translate(0%, 0%) ",
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
        fluid: {
          "0%": {
            backgroundPosition: "0 0%",
          },
          "50%": {
            backgroundPosition: "300% 50%",
          },
          "100%": {
            backgroundPosition: "0 50%",
          },
        },
      },
    },
    plugins: [],
  },
};
