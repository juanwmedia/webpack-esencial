const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
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
    mode: argv.mode,
    devtool: isDevelopment ? "cheap-source-map" : "source-map",
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
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.css$/,
          use: [isDevelopment ? "vue-style-loader" : MiniCSSExtractPlugin.loader, "css-loader"]
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
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new MiniCSSExtractPlugin(),
      new HTMLWebpackPlugin({
        title: "Webpack desde cero",
        template: "./src/index.html",
      }),
    ],
  };
};
