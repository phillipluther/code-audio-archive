module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Anton, sans-serif',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
