/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d1d1d', // Set your primary color
        secondary: '#f6f6f6', // Set your secondary color
        conone: '#8F3A00',
        contwo: '#f0f0ec',
      },
      backgroundColor: {
        primary: 'var(--color-primary)', // Use primary color as background
        secondary: 'var(--color-secondary)', // Use secondary color as background
      },
    },
  },
  plugins: [],
}
