/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          'manrope':['Manrope', 'sans-serif'],

        'ibm': [ 'IBM Plex Mono', 'monospace'],
        'azeret':['Azeret Mono', 'monospace'],
        'primary':['Manrope', 'sans-serif'],
        'montserrat':['Montserrat Alternates', 'sans-serif']
        },
  
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'main-pattern':"url('assets/back.jpg')",
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
  