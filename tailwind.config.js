/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        'primary': '#4B5563',
        'secondary': '#6B7280',
        'tertiary': '#9CA3AF',
        'quaternary': '#E5E7EB',
        'quinary': '#F3F4F6',
        'senary': '#F9FAFB',
        'septenary': '#FDFDFE',
        'octonary': '#FFFFFF',
        'nonary': '#000000',
        'denary': '#000000',
        'undenary': '#000000',
      }

      
    },
  },
  plugins: [],
}