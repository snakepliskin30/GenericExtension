const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  entry: {
    app: "./src/js/app.js",
  },
  output: {
    path: path.resolve(__dirname, "GenericExt"),
    filename: "[name].bundle.js",
  },
  plugins: [],
  module: {
    rules: [],
  },
});
