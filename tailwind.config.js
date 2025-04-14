/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        blue: " #369FFF",
        orange: " #FF993A",
        green: " #8AC53E",
        yellow: " #FFD143",
        lightblue: "rgb(154, 201, 246)",
        bordercolor: " #F0F0F0",
      },
      fontFamily: {
        manrope: ["Manrope", "san-serif"],
      },
    },
  },
  plugins: [],
};
