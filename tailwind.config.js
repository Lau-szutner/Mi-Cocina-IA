/** @type {import('tailwindcss').Config} */
module.exports = {
  // AGREGA "./app/**/*.{js,jsx,ts,tsx}" AQUÍ
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
