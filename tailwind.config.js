/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          600: 'var(--gray-600)',
        },
        accent: 'var(--accent)',
        surface: 'var(--surface)',
        'surface-alt': 'var(--surface-alt)',
        selection: 'var(--selection)',
      },
    },
  },
  plugins: [],
}
