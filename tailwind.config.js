/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'nav': ['3rem', {
          lineHeight: '3.5rem',
          fontStyle: 'normal',
          fontWeight: '800',
        }],
        'header': ['3rem', {
          lineHeight: '5rem',
          fontStyle: 'normal',
          fontWeight: '500',
          letterSpacing: '0.24rem',
        }],
      }
    }
  },
  plugins: [],
}