module.exports = {
  root: true,
  env: {
    amd: true,
    es6: true,
    node: true,
    jest: true,
    browser: true,
    commonjs: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['jsx-control-statements', 'react', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 2,
    semi: [2, 'never'],
    'react/prop-types': 0,
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ]
  }
}
