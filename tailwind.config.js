/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
  ],
  darkMode: 'class',
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
        darkSecondary: '#22303E',
        whiteText: '#F7FAFC'
      },
    },
  },
  plugins: [],
}
