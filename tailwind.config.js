/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
        tourney: ['Tourney', 'sans-serif'],
      },
      colors: {
        primary: '#5158F6',
        'primary-13': '#5158F621',
        'primary-13-solid': '#E2E6FE',
        gray: '#6F7787',
        gray10: '#E9EFF6',
        algo: '#D9D9D9',
        black: '#323245',
        black1: '#000000',
        glass: '#00000059',
        green: '#8EF5AB',
        disabled: '#C0C0C0',
        gray3: '#939393',
        uptime: '#6e9809',
        'gray-75': '#d0c8e0bf',
        'main-bg': '#F8FAFF',
        'primary-very-dark': '#353367',
        'pacific-blue-20': '#23B5D344',
        'success-green-20': '#8EF5AB44',
        'alert-red-20': '#F5956944',
        'primary-dark-500': '#C2C1F4',
        'modal-small': '#ECEDFFCC',
        'primary-dark': '#918EF5',
        'primary-dark-50': '#918EF580',
        'dark-soft-primary': '#5158F640',
        'xyz-75': '#E9EFF6BF',
        'soft-sky': '#BCC8DE',
        'primary-10-solid': '#ECEDFF',
        'card-bg-70-purple': '#6C677BB3',
        'card-bg': '#6C677B',
        'card-bg-dark': '#F6F3FF99',
        'titan-white': '#ECEDFF',
        'modal-backdrop': '#00000066',
        'catskill-white': '#E9EFF666',
        'plan-1': '#F58E8Eee',
        'plan-2': '#F3C95Dee',
        'plan-3': '#918EF5ee',
      },
    },
  },
  plugins: [],
};
