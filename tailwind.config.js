/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./privacidade.html"],
  theme: {
    extend: {
      colors: {
        ink: "#150a12",
        "ink-deep": "#0b0509",
        wine: {
          DEFAULT: "#6b0f2a",
          light: "#8f1c3b",
          dark: "#3c0817",
        },
        emerald: {
          DEFAULT: "#0e4d3c",
          light: "#166a52",
          dark: "#082e24",
        },
        indigo: {
          DEFAULT: "#22285c",
          light: "#333c82",
          dark: "#141838",
        },
        gold: {
          DEFAULT: "#c9a03f",
          light: "#e6c874",
          dark: "#8a6a24",
        },
        parchment: "#f1e6cf",
        "parchment-dim": "#cbb98f",
      },
      fontFamily: {
        display: ["Cinzel Decorative", "serif"],
        headline: ["Cinzel", "serif"],
        body: ["Cormorant Garamond", "serif"],
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "1rem", full: "9999px" },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(201,160,63,0.18) 0%, rgba(201,160,63,0) 70%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
