/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#FFC139",
        light:"#FFFFFF",
        dark:"#333333",
      },
      fontFamily:{
        oswald:['Oswald','sans-serif']
      },
      backgroundImage:{
        "banner":"url('/dist/img/banner.webp')",
      }
    },
  },
  plugins: [],
}