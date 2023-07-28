/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        navy_blue: '#461D50',
        dark_blue: '#2B1F65',
        blue_picton: '#32B4E1',
      }
    },
  },
  plugins: [],
}

