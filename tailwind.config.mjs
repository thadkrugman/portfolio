/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#131313",
        primary: "#131313",
        accent: "#FA2099",
        "transparent-light": "rgba(255, 255, 255, .25)",
        "transparent-dark": "rgba(0, 0, 0, .25)",
        content: "#ffffff",
        "content-darker": "#999999",
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
