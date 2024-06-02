/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#282a36",
        "base-content": "#94a3b8",
        "base-content-darker": "#94a3b8",
        primary: "#94a3b8",
        accent: "#50fa7b",
        secondary: "#ec75c4",
        content: "#282a36",
        "transparent-light": "rgba(255, 255, 255, .15)",
        "transparent-dark": "rgba(45, 53, 59, .25)",
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
