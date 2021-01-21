module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      height: {
        480: '480px',
      },
      maxHeight: {
        modal: 'calc(100vh - 4rem)',
      },
      width: {
        300: '300px',
      },
      colors: {
        grayish: '#F3F6FA',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  variants: {},
  plugins: [],
};
