/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ["744464","e1d2d8","b3576f","c47a8e","4c3c54","b4acb4","90657c","a49cac","89808e"]
  theme: {
    extend: {
      colors: {
        primary: '#744464',
        secondary: '#e1d2d8',
        tertiary: '#b3576f',
        quaternary: '#c47a8e',
        quinary: '#4c3c54',
        senary: '#b4acb4',
        septenary: '#90657c',
        octonary: '#a49cac',
        nonary: '#89808e',

        'secondary-text': '#7a8292',
      },
      container: {
        padding: '2rem',
      },
      backgroundImage: {
        'hero-pattern': "url('../public/images/consulting-bg.svg')",
      },
    },
  },
  plugins: [],
};
