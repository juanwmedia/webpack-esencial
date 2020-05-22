module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
  ],
  rules: {
      'no-unused-vars': 0
  }
};
