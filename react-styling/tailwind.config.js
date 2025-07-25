/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // extend the list of supported fonts tailwind has - double are needed to import google fonts
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}

