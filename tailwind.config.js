/** @type {import("tailwindcss").Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
        tourney: ['Tourney', 'sans-serif'],
      },
      colors: {
        primary: '#4D3E9E',
        secondary: '#48427D',
        'primary-L1': '#918EF5',
        'primary-L1-50': '#918EF580',
        'primary-13': '#4D3E9E21',
        'primary-13-solid': '#E2E6FE',
        'primary-L3': '#CDC9FD',
        'light-text': '#BCC8DE',
        gray10: '#E9EFF6',
        gray4: '#B0B9C8',
        'body-background': '#252528',
        algo: '#D9D9D9',
        black: '#272736',
        glass: '#00000059',
        green: '#8EF5AB',
        disabled: '#C0C0C0',
        gray3: '#939393',
        'so-dark-gray': '#3D3D3D',
        'so-dark-gray-2': '#4d4c4c',
        'modal-small': '#C5C6D4',
        'primary-dark': '#876FED',
        'dark-soft-primary': '#4D3E9E40',
        'soft-sky': '#BCC8DE',
        'primary-10-solid': '#ECEDFF',
        'tag-bg': '#D2E7FF66',
        'card-bg-70-purple': '#6C677BB3',
        'gray-bg-70': '#585462',
        'card-bg': '#6C677B',
        'card-bg-v2': '#3D3D3D',
        'card-bg-dark': '#F6F3FF99',
        'titan-white': '#ECEDFF',
        'card-hover': '#4D3E9E59',
        'modal-backdrop': '#00000066',
        'catskill-white': '#E9EFF666',
        'input-bg': '#5D6168',
        'plan-1': '#F58E8E',
        'plan-2': '#F3C95D',
        'plan-3': '#918EF5',
        'plan-4': '#84ca88',
        'xyz-2': '#E0E5EB',
        'xyz-75': '#E9EFF6BF',
        gray: '#6F7787',
        black1: '#000000',
        uptime: '#B7F03C',
        'gray-75': '#6F7787BF',
        'main-bg': '#F8FAFF',
        'primary-very-dark': '#353367',
        'pacific-blue-20': '#23B5D344',
        'success-green-20': '#8EF5AB44',
        'alert-red-20': '#F5956944',
        'primary-dark-500': '#C2C1F4',
        'primary-dark-50': '#918EF580',
        // ALICE Colors
        'alice-primary': '#5158F6',
        'alice-primary-13': '#5158F621',
        'alice-primary-extra-light': '#EEEFFF',
        'alice-secondary': '#F59569',
        'alice-secondary-light': '#F6C7B4',
        'alice-orange': '#F3A761',
        'alice-pacific-blue': '#23B5D3',
        'alice-body-background': '#F8FAFF',
        'alice-card-background': '#FFFFFF',
        'alice-xyz-75': '#E9EFF6BF',
        'alice-gray': '#6F7787',
      },
      boxShadow: {
        'r-lg':
          '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);',
      },
      backgroundImage: {
        'alice-primary-g':
          'linear-gradient(135deg, #5158F6 0%, #822DF5 33.12%, #F3A761 100%)',
        'alice-primary-g1':
          'linear-gradient(230.96deg, rgba(81, 88, 246, 0.4) -1.58%, rgba(114, 81, 246, 0.16) 107.2%)',
        'alice-primary-g2':
          'linear-gradient(66.43deg, #5158F6 6.65%, rgba(114, 81, 246, 0.75) 93.48%)',
        'alice-primary-g-light':
          'linear-gradient(135deg, rgba(81, 88, 246, 0.2) 0%, rgba(130, 45, 245, 0.2) 33.12%, rgba(243, 167, 97, 0.2) 100%)',
      },
    },
  },
  plugins: [],
};
