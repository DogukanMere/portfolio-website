/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      bgDark: '#242424',
      bgLight: '#ffffff',
      textDark: '#ffffff',
      textLight: '#242424',
      secondary: '#ffcc00',
      accent: '#ff69b4',
      background: '#f5f5f5',
      text: '#333',
    },
  },
  plugins: [],
  darkMode: 'class',
};
