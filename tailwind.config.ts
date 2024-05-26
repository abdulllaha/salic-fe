/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        main: '#297C60',
        secondary: '#339AD5',
        'main-shade-1': '#A5D5AD',
        'secondary-shade-1': '#339AD5',
        'gray-shade-1': '#414042',
        'gray-shade-2': '#4B4F53',
        'gray-shade-3': '#F8F8F8',
        'gray-shade-4': '#F2F2F2',
        'gray-shade-5': '#D9D9D9',
        'disable-shade-1': '#C1C1C1',
        'disable-shade-2': '#d3d3d37d',
        'disable-shade-3': '#C4C4C4',
        'disable-shade-4': '#BCBEC0',
        'disable-shade-5': '#6D6E71',
        'disable-shade-6': '#4B4F54',
        'disable-shade-7': '#E6E7E8',
        'disable-shade-8': '#939598',
        error: '#A93029',
        'error-shade-1': '#F7E8E7',
        'error-shade-2': '#E9ACAB',
        'error-shade-3': '#7D2521',
        'error-shade-4': '#C63737',
        success: '#4D9A5F',
        'success-shade-1': '#E8FBED',
        'success-shade-2': '#B7EBC4',
        'success-shade-3': '#28503B',
        'success-shade-4': '#3F8850',
      },
      boxShadow: {
        1: '0px 3px 20px #65656529',
        2: '0px 2px 15px #C7C7C729',
        3: '0px 10px 50px #4B4B4B29',
        4: '0px 3px 20px #00000029',
        5: '0px 10px 20px #EAEAEA4D',
        6: '0px 0px 0px 5px #DFD3DC',
      },
      animation: {
        fadeIn: 'fadeIn 150ms ease-out',
        shake: 'shake 0.5s normal',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake: {
          '25%': {
            transform: 'translateX(3px)',
          },
          '50%': {
            transform: 'translateX(-3px)',
          },
          '75%': {
            transform: 'translateX(3px)',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: { themes: ['light'] },
};
