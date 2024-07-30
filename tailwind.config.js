/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      foreground: '#004953',
      middleground: '#0F282F',
      background: '#070D0d',
      primary: '#F5F1EA',
      secondary: '#F9A3AA',
      tertiary: '#F5576C',
    },
    extend: {},
  },
  plugins: [],
};
