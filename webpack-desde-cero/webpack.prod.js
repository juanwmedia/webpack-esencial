const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    filename: `[name].[contenthash].bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [MiniCSSExtractPlugin.loader, "css-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "${path.resolve(
                __dirname,
                "src/css/global.scss"
              )}";`,
            },
          },
        ],
      },
    ],
  },
});
