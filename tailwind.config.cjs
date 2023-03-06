/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Righteous', "sans-serif"],
        secondary: ['Rajdhani', "sans-serif"],
        tertiary: ['Kanit', "sans-serif"]
      }
    },
    backgroundSize:{
      btn: '200% auto'
    },
    backgroundPosition:{
      btnhover: 'right center'
    }
  },
  plugins: [],
}
