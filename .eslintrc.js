module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
