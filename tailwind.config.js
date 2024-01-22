/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'primary':'#00ADB5',
        'secondary':'#393E46',
        'grey':'#cbd5e1',
        'dark':'#222831'
      }
    },
  },
  plugins: [],
}

