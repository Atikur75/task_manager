/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif',],
        'open': ['Open Sans', 'sans-serif',],
      },
      colors: {
        'header-res': '#11175D',
        'header2-res': '#C3C5D7',
        'border-color-res': '#B8B9CE',
        'button': '#5F35F5',
        'already': '#03014C',
        'signin': '#EA6C00',
      },
    },
  },
  plugins: [],
}

