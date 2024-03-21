/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'croco-dark-primary': '#1A1E23',
        'croco-dark-primary-700': '#1D242C',
        'croco-dark-primary-500': '#272D36',
        'croco-gray-900': '#2A3139',
        'croco-gray-900-darker': '#252B33',
        'croco-gray-700': '#6A7787',
        'croco-white':"#fff",
        'croco-gray-100': '#D9E3EF',
        'croco-active': '#15AF44',
      }
    },
  },
  plugins: [],
}

