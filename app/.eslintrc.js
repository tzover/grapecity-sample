module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': ['error', { code: 120 }],
        'vue/max-len': [
          'error',
          {
            code: 120,
            template: 9000,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
            ignoreStrings: true,
          },
        ],
      },
    },
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Add rules
    semi: 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'no-underscore-dangle': 0,
    'operator-linebreak': 0,
  },
}
