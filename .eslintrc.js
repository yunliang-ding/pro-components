module.exports = {
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/array-type': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: true,
      },
    ],
  },
};
