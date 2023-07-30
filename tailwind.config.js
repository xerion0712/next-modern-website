/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEFEE2', 
        secondary: '#150602', 
        accent: '#fac702',
      },
      backgroundColor: {
        primary: 'var(--color-primary)', 
        secondary: 'var(--color-secondary)', 
        paccent: 'var(--color-paccent)',
        saccent: 'var(--color-saccent)',
      },
    },
  },
  plugins: [],
}
