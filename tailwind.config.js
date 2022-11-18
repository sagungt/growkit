/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '0',
        xl: '0',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#1B2631',
        whiteText: '#F7FAFC'
      },
    },
  },
  plugins: [],
}
