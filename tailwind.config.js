/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#242d52",
        darkGray: "hsl(233 12% 13% / 1)",
      },
      textColor: {
        darkGrayishBlue: "hsl(227 12% 61% / 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
