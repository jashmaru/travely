/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope :['Manrope','sans-serif'],
        poppins :['Poppins','sans-serif'],
        playwrite :['Playwrite HU','cursive'],
        pacifico :['Pacifico','cursive']
      }
    },
  },
  plugins: [],
}

