/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '500': '500px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible: true}),
  ],
}

