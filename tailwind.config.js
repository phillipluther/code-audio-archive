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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 'inherit',
            },
            h2: {
              fontWeight: 'inherit',
            },
            h3: {
              fontWeight: 'inherit',
            },
            h4: {
              fontWeight: 'inherit',
            },
            h5: {
              fontWeight: 'inherit',
              fontFamily: 'Anton, sans-serif',
            },
            h6: {
              fontWeight: 'inherit',
              fontFamily: 'Anton, sans-serif',
            },
            a: {
              color: theme('colors.emerald.600'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.emerald.800'),
                textDecoration: 'none',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
