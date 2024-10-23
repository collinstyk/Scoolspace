/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-blue": "radial-gradient(circle, #000c3c, #00091f);",
        "dark-radial-blue": "radial-gradient(circle, #000B3B, #00091A)",
        "light-linear-blue": "linear-gradient(#29A5DC26, #FFFFFF26)",
        "light-linear-blue-grid":
          "linear-gradient(#29A5DC26, #FFFFFF26), url('src/assets/images/background-grid.svg')",
        "linear-blur-gradient":
          "linear-gradient(90deg, #ffffff1a, 80%, transparent)",
        grid: 'url("src/assets/images/background-grid.svg")',
      },
      backgroundColor: {
        "blue-one": "#00ADE6",
        "blue-one-hover": "#008bb8",
        "dark-blue": "#00223A",
        "dark-blue-hover": "#001829",
        "elegant-purple": "#662D91",
      },
      colors: {
        "pitch-black": "#00111C",
      },
      textColor: {
        "blue-one": "#00ADE6",
        "passion-red": "#FF3333",
        "purple-one": "#9747FF",
        "elegant-purple": "#662D91",
        "dark-blue": "#00223A",
        "pitch-black": "#00111C",
        "black-one": "#1E1E1E",
      },
      fontFamily: {
        "circular-std": ["Circular std", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
