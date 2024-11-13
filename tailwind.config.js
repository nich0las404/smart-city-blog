/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'faculty-glyphic': ['Faculty Glyphic', 'sans-serif']
      },
      colors: {
        'primary': '#024CAA', // dark blue
        'slight-dark-blue': '#4A628A', 
        'light-blue': '#7AB2D3',
        'light-blue2': '#87A2FF',
        'light-blue3': '#4CC9FE',
        'faint-blue': '#77CDFF',
        'blue': '#0D92F4', 
        'blue2': '#6439FF',
        'contrast-blue': '#006BFF',
        'dark-blue': '#0B2F9F'
      },
      screens: {
        'mid': '850px',
        'super-sm': '600px',
        'phone-sm': '450px',
        'phone-super-sm': {'max': '400px'},
        'sm2': '380px'
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

