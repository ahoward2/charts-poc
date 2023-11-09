/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "grey-light": "#F5F5F5",
        "grey-dark": "#5E5E5E",
        "grey-medium": "#D8D8D8",
        green: "#69A379",
        "green-light": "rgba(105, 163, 121, 0.5)",
        "owl-blue-dark": "#1D2951",
        "owl-blue-light": "#8391BF",
        blue: "475481",
        "blue-light": "rbga(65, 102, 169, 0.5)",
        red: "#A95151",
        orange: "#DC8C2F",
        purple: "#8D629C",
        pink: "#CE6DAD",
        aqua: "#A2D4E3",
        yellow: "#E4CC77",
        "yellow-light": "rbga(228, 204, 119, 0.5)",
        brown: "#BD936D",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
