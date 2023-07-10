/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    require("path").join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#1e66f5',
          secondary: '#dd7878',
          tertiary: '#8839ef',
          warning: '#d20f39',
        } 
      }
    },
  },
  plugins: [...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")()],
};
