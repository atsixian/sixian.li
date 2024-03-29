const sharedConfig = require('tailwind-config/tailwind.config.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)'],
      },
      colors: {
        'bg-color': 'rgb(var(--bg-color) / <alpha-value>)',
        'fg-color': 'var(--fg-color)',
        'fg-hover-color': 'var(--fg-hover-color)',
        'fg-secondary-color': 'var(--fg-secondary-color)',
        'fg-secondary-hover-color': 'var(--fg-secondary-hover-color)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textDecorationThickness: 'from-font',
              textUnderlinePosition: 'from-font',
              transition: 'all 250ms ease',

              '&:hover': {
                color: theme('colors.zinc[500]'),
              },
            },
            code: {
              fontWeight: 'normal',
            },
            em: {
              fontFamily: 'var(--font-sentient)',
              fontWeight: 350,
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: 'var(--fg-color)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-gradient-mask-image'),
  ],
}
