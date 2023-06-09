/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#5eb8f9",
          100: "#dff1fe",
          200: "#bfe3fd",
          300: "#9ed4fb",
          400: "#7ec6fa",
          500: "#5eb8f9",
          600: "#2792D0",
          700: "#006DA8",
          800: "#004B82",
          900: "##002B5E",
        },
      },
      dropShadow: {
        primary: "0px 0px 52px -8px rgba(0,0,0,0.33)",
      },
    },
  },
  plugins: [],
};
