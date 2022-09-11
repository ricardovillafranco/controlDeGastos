/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      height: {
          '80' : "20rem",
          '100' : "25rem",
          '120' : "30rem",
          '140': "35rem"
      }
    },
  },
  plugins: [],
}