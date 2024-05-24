/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#464646",
        "base-content": "#b8b8b8",
        "base-content-darker": "rgba(255, 255, 255, .70)",
        primary: "#b8b8b8",
        accent: "#464646",
        "transparent-light": "rgba(255, 255, 255, .15)",
        "transparent-dark": "rgba(70, 70, 70, .25)",
        content: "#464646",
        "content-darker": "rgba(255, 255, 255, .70)",
        "content-dark": "#000000",
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
            maxWidth: "1164px",
          },
          "@screen 2xl": {
            maxWidth: "1164px",
          },
        },
      });
    }),
  ],
};
