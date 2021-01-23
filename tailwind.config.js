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
        "3.5": '3.5rem',
      },
      maxHeight: {
        modal: 'calc(100vh - 4rem)',
      },
      width: {
        300: '300px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
      },
      colors: {
        grayish: '#808080',
        "transparent-bg": "rgba(0,0,0,0.7)"
      },
      zIndex: {
        1: '1',
        "-1": '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
