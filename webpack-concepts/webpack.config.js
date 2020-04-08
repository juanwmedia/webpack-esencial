const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  console.log(argv);
  return {
    devtool: argv.mode === "development" ? "inline-source-map" : "source-map",
    entry: "./js/index.js",
    output: {
      filename: "[hash].bundle.js",
      path: path.resolve(__dirname, "bundle"),
    },
    module: {
      rules: [
        {
          test: /\.jpg$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 1000,
            },
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
