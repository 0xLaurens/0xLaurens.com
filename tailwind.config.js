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
        primary: "#6C63FF",
        secondary: "#3930AF",
        accent: "#DE7682",
        "base-100": "#ffffff", //orginal: #FFFFFF
      },
      dark: {
        ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
        primary: "#6C63FF",
        secondary: "#3930AF",
        accent: "#DE7682",
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