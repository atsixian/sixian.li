module.exports = {
  root: true,
  extends: ['custom/next', 'plugin:mdx/recommended', 'custom/tailwind'],
  overrides: [
    {
      files: ['src/**/*.mdx'],
      rules: {
        '@typescript-eslint/indent': ['off'],
      },
    },
  ],
}
