/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "#000000",
      primary: "#ffffff",
      green: "#00ff00",
      magenta: "#ff00ff",
      red: "#ff0000",
      grey: "#808080",
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

