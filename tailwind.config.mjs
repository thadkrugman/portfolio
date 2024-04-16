/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "#ffffff",
        "base-content": "#000000",
        "base-content-dark": "#636363",
        "base-dark": "#131313",
        "base-dark-content": "#ffffff",
        "base-dark-content-dark": "#949494",
        blurple: "#5200FF",
        accent: "#3CFED0",
        "transparent-light": "rgba(255, 255, 255, .3)",
        "transparent-dark": "rgba(0, 0, 0, .3)",
        content: "#ffffff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          lg: "32px",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "740px",
          },
          "@screen lg": {
            maxWidth: "1164px",
          },
          "@screen xl": {
            maxWidth: "1164",
          },
          "@screen 2xl": {
            maxWidth: "1164px",
          },
        },
      });
    }),
  ],
};
