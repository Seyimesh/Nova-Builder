/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3368c0",
        secondary: "#eef4ff",
        background: "#f7faff",
        darkBlue: "#1b4282",
        lightBlue: "#8dd6ff",
        dimBlue: "#f7faff",
        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
