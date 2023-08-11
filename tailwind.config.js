/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero.webp')",
        'yellow': "url('/img/bgyellow.webp')",
        'blue': "url('/img/bgblue.webp')",
      },
      colors: {
        primary: '#ffffff', 
        accent: '#ebf000',
        hover: '#6FD8F5'
      },
      backgroundColor: {
        primary: 'var(--primary)', 
        secondary: 'var(--secondary)', 
     
      },
    },
  },
  plugins: [],
}
