/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.2)), url('https://images.unsplash.com/photo-1588706797058-f8a5325779ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
