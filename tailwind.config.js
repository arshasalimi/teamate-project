/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'shadowcustom1':"0 0 10px 0 #00000033"
      }
    },
  },
  plugins: [],
}
