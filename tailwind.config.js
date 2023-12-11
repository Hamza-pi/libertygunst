/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        segoe: ["Noto Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        opSans: ["Open Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary_blue: "#3663F0",
        white: "#FFFFFF",
        grey: "#6F6F6F",
        textGrey: "#353535",
        textGrey2: "#515151",
        borderGrey: "#D4D4D4",
        inputText: "#A6A6A6",
        hover: "rgba(54, 99, 240, 0.15)",
        adminBg: "rgba(54, 99, 240, 0.22)",
      },
      boxShadow: {
        inputShadow: "2px 2px 7px 0px rgba(0, 0, 0, 0.15)",
      },
      backgroundColor: {
        black: "#000000",
        grey: "#2C2C2C",
      },
    },
  },
  plugins: [],
};
