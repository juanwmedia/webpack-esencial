const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = (env, argv) => {
  return {
    entry: "./src/js/main.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: "Webpack desde cero",
        template: "./src/index.html",
      }),
    ],
  };
};
