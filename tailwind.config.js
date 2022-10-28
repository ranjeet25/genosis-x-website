/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Quicksand: ["Quicksand"],
        cursive: ["Marck Script", "cursive"],
      },

      animation: {
        "spin-slow": "spin 30s linear infinite",
        flicker: "flicker-in-1 2s linear both",
      },

      backgroundImage: {
        wave: "url('/src/assets/images/new_bg.svg')",
      },
    },
  },
};
