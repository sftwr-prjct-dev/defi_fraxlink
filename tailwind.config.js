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
        borderCol: 'rgb(60, 63, 67)',
        headBorderCol: 'rgb(108, 108, 108)',
        brownBg: 'rgb(37, 37, 37)',
        blue: 'rgb(0, 123, 255)',
        balNameCol: 'rgb(103, 169, 255)',
        balNameColBg: 'rgb(37, 44, 51)',
        grayish: '#808080',
        "transparent-bg": "rgba(0,0,0,0.7)"
      },
      zIndex: {
        1: '1',
        2: '2',
        "-1": '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
