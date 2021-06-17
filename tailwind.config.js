const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        background: {
          primary: '#2E3139',
          secondary:'#22252D',
        },
        button: {
          primary: '#7AC4CF',
        },
        text: {
          primary: '#1E2D39',
          secondary: '#ABCED9',
          tertiary: '#F9FEFD',
        },
        success: '#C8FAD5',
        error: '#BB2020'
      }
    }
  },
  variants: {},
  plugins: []
};
