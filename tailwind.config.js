/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './tailwind-theme.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
