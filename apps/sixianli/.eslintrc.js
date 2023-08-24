module.exports = {
  root: true,
  extends: ['custom/next', 'plugin:mdx/recommended', 'custom/tailwind'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.mdx'],
      rules: {
        '@typescript-eslint/indent': ['off'],
      },
    },
  ],
}
