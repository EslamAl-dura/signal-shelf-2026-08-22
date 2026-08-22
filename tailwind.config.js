/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Noto Sans Arabic', 'ui-sans-serif', 'system-ui'] },
      colors: {
        ink: '#102a43',
        mist: '#f4f7fb',
        teal: { 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488' },
      },
      boxShadow: { soft: '0 18px 50px -28px rgba(16, 42, 67, .35)' },
    },
  },
  plugins: [],
}
