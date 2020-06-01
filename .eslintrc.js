module.exports = {
  extends: ['airbnb'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'template-curly-spacing': ['off'],
    'react/forbid-prop-types': 'off',
    'react/static-property-placement': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': ['error', { code: 250 }],
  },
  env: {
    browser: true,
    node: true,
  },
};
