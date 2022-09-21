/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // tiles: "url('/background/palet.png')",
        // tilesOne: "url('/background/paletOne.png')",
        // tilesTwo: "url('/background/paletTwo.png')",
      },
      colors: {
        footer: "#1F1F1F",
        header: "#501800",
        main: "#FF6600",
      },
      fontFamily: {
        OpenSans: "Open Sans",
        Pacifico: "Pacifico",
        Poppins: "Poppins",
      },
      dropShadow: {
        mainDrop: "1px 1px 1px rgba(0, 0, 0, 1)",
      },
      boxShadow: {
        mainDrop: "0px 2px 10px 0px rgba(0, 0, 0, 1)",
      },
      animation: {
        move: "move 10s linear infinite",
        moveTwo: "moveTwo 10s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(100%)" },
        },
        moveTwo: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
    },
  },
  plugins: [],
};
