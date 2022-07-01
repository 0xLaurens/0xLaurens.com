/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        primary: "#f6994b",
        secondary: "#1c74bc",
        accent: "#1965a3",
        "base-100": "#ffffff", //orginal: #FFFFFF
      },
      dark: {
        ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
        primary: "#f6994b",
        secondary: "#1c74bc",
        accent: "#1965a3",
      }
    }, ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}