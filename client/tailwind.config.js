const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      primaryColor: "#040404",
      secondaryColor: "#b3b3b3",
      wrapColor: "#121212",
      bgCardColor: "#282828",   
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
