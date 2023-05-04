/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3636",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

