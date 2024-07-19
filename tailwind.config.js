/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'juice': ['Juice-Regular', 'sans-serif'],
      'lancelot': ['Lancelot-Regular', 'sans-serif'],
    },
    extend: {
      colors: {
        'custom-gray': '#595959',
        'custom-gray-100': '#D9D9D9',
      },
    },
  },
  plugins: [],
}

