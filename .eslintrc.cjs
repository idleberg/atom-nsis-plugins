/* eslint-disable */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:coffee/eslint-recommended',
    'plugin:json/recommended'
  ],
  globals: {
    atom: 'readonly'
  },
  parser: 'eslint-plugin-coffee',
  plugins: ['coffee']
};
