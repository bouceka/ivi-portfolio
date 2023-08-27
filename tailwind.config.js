/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        nav: [
          '3rem',
          {
            lineHeight: '3.5rem',
            fontStyle: 'normal',
            fontWeight: '800',
          },
        ],
        header: [
          '3rem',
          {
            lineHeight: '5rem',
            fontStyle: 'normal',
            fontWeight: '500',
            letterSpacing: '0.24rem',
          },
        ],
        mdHeader: [
          '2.4rem',
          {
            lineHeight: '3.2rem',
            fontStyle: 'normal',
            fontWeight: '500',
            letterSpacing: '0.24rem',
          },
        ],
        smHeader: [
          '1.6rem',
          {
            lineHeight: '2.4rem',
            fontStyle: 'normal',
            fontWeight: '500',
            letterSpacing: '0.24rem',
          },
        ],
      },
      screens: {
        sm: '560px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
      },
      colors: {
        'bg-second': '#DBD6D4', // Replace with the desired color value
        'bg-primary': '#E8E4E2', // Replace with the desired color value
      },
      boxShadow: {
        navbar: '0 1px 9px #0000001C',
      },

      animation: {
        'move-up': 'move-up 500ms ease-in-out',
        'move-up-mobile': 'move-up-mobile 500ms ease-in-out',
        'move-down': 'move-down 500ms ease-in-out',
        'move-down-mobile': 'move-down-mobile 500ms ease-in-out',
        'move-left': 'move-left 500ms ease-in-out',
        'move-left-mobile': 'move-left-mobile 500ms ease-in-out',
        'move-right': 'move-right 500ms ease-in-out',
        'move-right-mobile': 'move-right-mobile 500ms ease-in-out',
      },
      keyframes: {
        'move-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        'move-up-mobile': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        'move-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        'move-down-mobile': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        'move-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
        },
        'move-left-mobile': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
        },
        'move-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
        },
        'move-right-mobile': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
