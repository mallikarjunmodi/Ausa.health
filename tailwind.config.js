/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
        'ibm': [ 'IBM Plex Mono', 'monospace'],
        'azeret':['Azeret Mono', 'monospace'],
        'primary':['Manrope', 'sans-serif'],
        'montserrat':['Montserrat Alternates', 'sans-serif']
        },
  
        backgroundImage: {
          'bluebg': "url('assets/blueBg2.png')",
          'bluebg1': "url('assets/blueBg1.png')",
          'bluebg2': "url('assets/blueBg3.png')"
        },
  
        colors:{
          black: '#1D2121',
          gray1: '#494D4E',
        },
        letterSpacing: {
          widest: '.3em',
        }
      },
    },
    plugins: [],
  }
  