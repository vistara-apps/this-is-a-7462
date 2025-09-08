/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1a0b3d',
          800: '#2d1b69',
          700: '#3c2a8a',
          600: '#4c3ca0',
          500: '#6366f1',
          400: '#818cf8',
          300: '#a5b4fc',
          200: '#c7d2fe',
          100: '#e0e7ff',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 25%, #7c3aed 50%, #8b5cf6 75%, #a78bfa 100%)',
      }
    },
  },
  plugins: [],
}