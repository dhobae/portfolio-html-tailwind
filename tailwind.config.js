/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    // menimpa
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      // menambahkan
      colors: {
        primary: "#a855f7",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
