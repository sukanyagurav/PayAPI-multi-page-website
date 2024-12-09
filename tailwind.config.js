/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "900px",
        lg: "1000px",
        xl: "1440px",
      },
      colors: {
        dark_pink: "#BA4270",
      },
      fontFamily: {
        sans: ["Public Sans", "sans"],
        serif: ["DM Serif Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
