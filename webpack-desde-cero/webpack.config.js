const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = (env, argv) => {
  return {
    entry: "./src/js/main.js",
    output: {
      filename: "[name].[hash].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    mode: 'development',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [{
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          }, "css-loader"]
          //use: [MiniCSSExtractPlugin.loader, "css-loader"]
          //use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ["file-loader"]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCSSExtractPlugin(),
      new HTMLWebpackPlugin({
        title: "Webpack desde cero",
        template: "./src/index.html",
      }),
    ],
  };
};
