/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern1":
          "radial-gradient(circle, #000E474D, #00091F4D), url('images/landing-hero-bg-image-1.png')",
        "radial-blue": "radial-gradient(circle, #000E47, #00091F)",
        "radial-blue-grid":
          "url('images/background-grid.svg'), radial-gradient(circle, #000c3c, #00091f)",
        "dark-radial-blue": "radial-gradient(circle, #000B3B, #00091A)",
        "light-linear-blue": "linear-gradient(#29A5DC26, #FFFFFF26)",
        "light-linear-blue-grid":
          "linear-gradient(#29A5DC26, #FFFFFF26), url('images/background-grid.svg')",
        "linear-blur-gradient":
          "linear-gradient(90deg, #ffffff1a, 80%, transparent)",
        platforms: "url('public/images/platforms.png')",
        grid1: 'url("images/background-grid-design.png")',
        grid2: 'url("images/background-grid-design2.png")',
        grid3: 'url("images/background-grid-design3.png")',
        management1:
          "linear-gradient(#662D914D, #D9D9D900), url('images/management-1.png')",
        teacher1:
          "radial-gradient(circle, #D9D9D900, #662D914D), url('images/teacher-1.png')",
        student1:
          "radial-gradient(circle, #D9D9D900, #9DE7FF99), url('images/student-1.png')",
        student1:
          "radial-gradient(circle, #D9D9D900, #9DE7FF99), url('images/student-2.png')",
      },
      backgroundColor: {
        "blue-one": "#00ADE6",
        "blue-one-hover": "#008bb8",
        "dark-blue": "#00223A",
        "dark-blue-hover": "#001829",
        "elegant-purple": "#662D91",
      },
      backgroundSize: {
        50: "120% 160%",
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
      boxShadow: {
        "sm-light-blue": "0 5px 10px 0 #02ADE626",
        "sm-dark-blue": "0 5px 10px 0 #00223A1A",
        "md-light-blue": "0 18px 18px 0 #02ADE626",
        "md-dark-blue": "0 19px 19px 0 #00223A1A",
      },
      borderColor: {
        "dark-blue": "#00223A",
      },
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans",
      },
      screens: {
        desktop: "1440px",
        laptop: "1040px",
        tablet: "768px",
      },
    },
  },
  plugins: [],
};
