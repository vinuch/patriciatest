// add your custom configurations
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '16p': '16.6%',
        '28p': '28%'
      },
      colors: {
        primary: '#006156',
        primaryLight: '#DEF5F2',
        secondary: '#FFCE00',
        error: '#CC4945',
        gray1: '#EFF2F7',
        gray2: '#979AA5',
        gray3: '#C0CCDA',
        gray4: '#F9FAFC',
        gray5: '#9DA8B6',
        grayDark: '#575A65',
        light: '#FFEEA7'
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
