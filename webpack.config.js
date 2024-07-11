// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");
const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].bundle.[chunkhash:8].js",
    clean: true,
  },
  devtool: isProduction ? false : "source-map",
  plugins: [
    // new CopyPlugin({
    //   patterns: [],
    // }),
    new webpack.DefinePlugin({
      __IS_DEV__: `${!isProduction}`,
    }),
    new MiniCssExtractPlugin({ filename: "[name].bundle.[chunkhash:8].css" }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: path.resolve(__dirname, "_includes/app.html"),
      publicPath: "/assets/js",
      minify: true,
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  optimization: {
    splitChunks: {
      hidePathInfo: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 更高的优先级意味着更可能被选中
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
