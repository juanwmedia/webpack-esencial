const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    filename: `[name].[hash].bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    clientLogLevel: "info",
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        use: "eslint-loader",
        enforce: "pre",
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: ["vue-style-loader", "css-loader",
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
