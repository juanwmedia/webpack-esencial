const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  return {
    entry: "./src/js/main.js",
    output: {
      filename: `[name].[${isDevelopment ? "hash" : "contenthash"}].bundle.js`,
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
    optimization: {
      usedExports: true,
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    mode: argv.mode,
    devtool: isDevelopment ? "cheap-source-map" : "source-map",
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
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.scss$/,
          sideEffects: true,
          use: [
            isDevelopment ? "vue-style-loader" : MiniCSSExtractPlugin.loader,
            "css-loader",
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
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new MiniCSSExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new HTMLWebpackPlugin({
        title: "Webpack desde cero",
        template: "./src/index.html",
      }),
    ],
  };
};
