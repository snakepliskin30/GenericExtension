const path = require("path");
const common = require("./webpack.common.prod");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: "./src/js/app.js",
  },
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "GenericExt"),
    filename: "[name].[contenthash].bundle.js",
  },
  optimization: {},
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [],
  },
});
