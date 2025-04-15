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
        planningBg: " #F7F7F7",
        gray: ": #BDBDBD",
        statistictextcolor: " #8EA3B7",
        darkblue: " #006ED3",
      },
      fontFamily: {
        manrope: ["Manrope", "san-serif"],
      },
      boxShadow: {
        blueglow: "0px 10px 30px 0px #369FFF66",
        orangeglow: "0px 10px 30px 0px #FF993A66",
        greenglow: "0px 10px 30px 0px #8AC53E66",
        yellowglow: "0px 10px 30px 0px #FFD14366",
      },
    },
  },
  plugins: [],
};
