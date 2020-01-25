module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'semi': ['error', 'always'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': {
        'var': 2,
        'let': 2,
        'const': 3
      }
    }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'no-multi-spaces': ['error', {
      'exceptions': {
        'VariableDeclarator': true,
      },
    }],
    'space-before-function-paren': ['error', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
