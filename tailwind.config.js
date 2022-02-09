module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        display: 'Anton, sans-serif',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
