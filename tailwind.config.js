/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        goyang: {
          "0%": { transform: "rotate(7deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(2deg)" },
          "100%": { transform: "rotate(7deg)" },
        },
        goyangMobile: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        goyang: "goyang 1.5s linear infinite",
        goyangMobile: "goyangMobile 1.5s linear infinite",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
