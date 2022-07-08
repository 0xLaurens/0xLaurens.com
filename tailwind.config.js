/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: "'Roboto', serif"
      }
    }
  },
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
        "base-200": "#E8E8E8",
        "base-300": "#CCCCCC",

      },
      dark: {
        primary: "#6C63FF",
        "primary-content": "#ffffff",
        secondary: "#3930AF",
        "secondary-content": "#ffffff",
        accent: "#DE7682",
        "accent-content": "#ffffff",
        neutral: "#191D24",
        "neutral-focus": "#111318",
        "neutral-content": "#A6ADBB",
        "base-100": "#2A303C",
        "base-200": "#E8E8E8",
        "base-300": "#CCCCCC",
        "base-content": "#A6ADBB",
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