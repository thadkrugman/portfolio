/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "#131313",
        "base-content": "#ffffff",
        "base-content-dark": "#949494",
        primary: "#FF6F61",
        "accent-dark": "rgba(0, 0, 0, .15)",
        content: "#000000",
      },
      maxWidth: {
        custom: "1100px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          lg: "32",
        },
        screens: {
          DEFAULT: "740px",
          lg: "1164px",
        },
      },
    },
  },
  plugins: [],
};
