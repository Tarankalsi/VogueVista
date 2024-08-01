/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalra: ["Karla", "sans-serif"]
      },
      colors: {
        "brown-1": "#d9b47f",
        "brown-2": "#d2a86d",
        "brown-3": "#A77A06",
        "brown-4": "#8A571F",
        "brown-5": "#786551",
        "brown-6": "#a67633",
        "primary": "#f9f3eb"
      },
      height:{
        "bigCardHeight": "500px"
      },
      text:{
        "2xs" : "0.5rem"
      }
    },
  },
  plugins: [],
}