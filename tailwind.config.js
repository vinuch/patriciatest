// add your custom configurations
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#006156',
        secondary: '#FFEEA7',
        error: '#CC4945',
        gray1: '#EFF2F7',
        gray2: '#979AA5',
        gray3: '#C0CCDA'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
