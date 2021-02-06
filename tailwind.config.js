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
        350: '350px',
        370: '370px',
        '1/2': '50%',
        3.5: '3.5rem',
      },
      maxHeight: {
        modal: 'calc(100vh - 4rem)',
      },
      padding: {
        300: '300px',
        3.5: '3.5rem',
        9: '9rem',
        '16rem': '16rem',
      },
      margin: {
        9: '9rem',
      },
      width: {
        300: '300px',
        400: '400px',
        350: '350px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
        '9rem': '9rem',
      },
      backgroundImage: (theme) => ({
        uniswap: "url('/uniswap.png')",
      }),
      colors: {
        grayish: '#808080',
        yellowish: 'rgb(237, 214, 0)',
        light: '#f8f9fa',
        bluish: 'rgb(5, 98, 231)',
        green2: 'rgb(0, 173, 136)',
        green3: 'rgb(189, 239, 189)',
        greenish: 'rgb(75, 192, 192)',
        littlebluetxt: 'rgb(103, 169, 255)',
        menuBg: '#252525',
        borderCol: 'rgb(60, 63, 67)',
        headBorderCol: 'rgb(108, 108, 108)',
        brownBg: 'rgb(37, 37, 37)',
        blue: 'rgb(0, 123, 255)',
        balNameCol: 'rgb(103, 169, 255)',
        balNameColBg: 'rgb(37, 44, 51)',
        grayish: '#808080',
        lightgray: '#3C3F43',
        blackish: 'rgb(20, 22, 24)',
        tealgreen: '#4CBFC0',
        'transparent-bg': 'rgba(0,0,0,0.7)',
      },
      zIndex: {
        1: '1',
        2: '2',
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
