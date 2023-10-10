/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffffff",
          300: "#585e6c",
          800: "#0b0518",
        },
        secondary: {
          100: "#1d75f6",
          200: "#5a73fa",
          300: "#1d1430",
          400: "#9b70f8",
          600: "#331b5d",
          700: "#180c2e",
          800: "#0b0518",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.75rem",
        "4xl": "1.875rem",
        "5xl": "2.25rem",
        "6xl": "2.75rem",
        "7xl": "3.45rem",
      },
    },
  },
  plugins: [],
};
