/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'croco-gray-900': '#2A3139',
        'croco-gray-950': '#1A1E23',
        'croco-gray-700': '#6A7787',
        'croco-white':"#fff",
        'croco-gray-100': '#D9E3EF'
      }
    },
  },
  plugins: [],
}

