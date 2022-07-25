module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "array-callback-return": "off",
    "no-nested-ternary": "off",
    "no-restricted-syntax": "off",
    "no-param-reassign": "off"
  },
};
