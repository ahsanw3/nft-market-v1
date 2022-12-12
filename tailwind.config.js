/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],

  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mb: '275px',
      },
      fontFamily: {
        roboto: ['roboto']
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
