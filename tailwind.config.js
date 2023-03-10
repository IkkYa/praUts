/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("./img/hero.jpg")',
        'play': 'url("./img/play-cirlce.png")'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
