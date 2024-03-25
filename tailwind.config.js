/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        blob: "url('/img/vector2.png')"
      }
    }
  },
  plugins: []
}
