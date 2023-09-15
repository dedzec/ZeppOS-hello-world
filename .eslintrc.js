module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    ethers: false,
    SharedArrayBuffer: 'readonly'
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
