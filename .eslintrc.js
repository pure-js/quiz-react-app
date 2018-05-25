module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'airbnb'
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: [
    "flowtype",
  ],
  settings: {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
