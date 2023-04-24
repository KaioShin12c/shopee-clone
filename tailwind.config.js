/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee4d2d",
        "primary-bg": "#fef6f5",
        "text-primary": "rgba(0,0,0,.87)",
        "text-secondary": "rgba(0,0,0,.65)",
        error: "#ff424f",
        "primary-black": "#222",
      },
    },
  },
  plugins: [],
};
