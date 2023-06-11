/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mdx-components.tsx',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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

              '&:hover': {
                color: theme('colors.zinc[800]'),
              },
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
