/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      bgDark: '#242424',
      bgNavDark: '#191919',
      bgLight: '#ffffff',
      bgNavLight: '#ffffff',
      textDark: '#ffffff',
      textLight: '#242424',
      secondary: '#ffcc00',
      accent: '#56afff',
      background: '#f5f5f5',
      text: '#333',
      blackTransDark: 'rgba(0, 0, 0, 0.9)',
      blackTrans: 'rgba(0, 0, 0, 0.6)',
      blackTransLight: 'rgba(0, 0, 0, 0.3)',
      blackTransMain: 'rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
  darkMode: 'class',
};
