/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#f472b6"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom right, #6366f1, #8b5cf6)"
      }
    }
  },
  plugins: []
};