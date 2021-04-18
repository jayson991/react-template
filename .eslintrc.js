module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['babel', 'react', 'import', 'prettier', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': 2,
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'import/no-duplicates': 'error',
    // 'import/no-unresolved': 'error',
    'import/named': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'babel/no-invalid-this': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
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
