/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        diablo: {
          blue: "#6699FF",
          gold: "#AA8A28",
          orange: "#FF8000",
          "dark-blue": "#008080",
          yellow: "#FFFF00",
          green: "#00ff00",
          brown: "#9d8e62",
          "dark-brown": "#999966",
        },
      },
    },
  },
  plugins: [],
};

