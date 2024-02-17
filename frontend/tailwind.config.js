/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        changeBorderColor: {
          '0%': { borderTopColor: 'aqua', borderBottomColor: 'aqua', borderLeftColor:'red', borderRightColor: 'red'},
          '50%': {  borderTopColor: 'red', borderBottomColor: 'red', borderLeftColor:'aqua', borderRightColor: 'aqua' },
          '100%': {  borderTopColor: 'aqua', borderBottomColor: 'aqua', borderLeftColor:'red', borderRightColor: 'red' },
        },
      },
      shadow: {
        'inout' : 'inset 0 10px 0px #dcffa6, 0px 0px 10px #000'
      },
      animation: {
        changeBorderColor: 'changeBorderColor 2s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}