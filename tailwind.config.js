/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
}
