/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFD700',
          orange: '#FF8C00',
        },
        secondary: {
          blue: '#1E90FF',
        },
        neutral: {
          light: '#F8F9FA',
          dark: '#343A40',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}