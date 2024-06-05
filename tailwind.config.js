/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'card': '78% auto'
      },
      gridTemplateColumns: {
        'card': 'repeat(2, min(300px, 1fr))'
      },
    },
  },
  plugins: [],
}

