/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        serif: [
          "Besley",
          "ui-serif",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
};
