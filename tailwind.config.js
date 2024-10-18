/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-blue": "radial-gradient(circle, #000c3c, #00091f);",
        "dark-radial-blue": "radial-gradient(circle, #000B3B, #00091A)",
        grid: 'url("src/assets/images/background-grid.svg")',
      },
      backgroundColor: {
        "blue-one": "#00ADE6",
        "blue-one-hover": "#008bb8",
        "dark-blue": "#00223A",
        "dark-blue-hover": "#001829",
      },
      colors: {
        "pitch-black": "#00111C",
      },
      textColor: {
        "blue-one": "#00ADE6",
        "passion-red": "#FF3333",
        "purple-one": "#9747FF",
        "dark-blue": "#00223A",
        "pitch-black": "#00111C",
      },
      fontFamily: {
        "circular-std": ["Circular std", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
