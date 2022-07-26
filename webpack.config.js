const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // use: {
        //     loader: "file-loader",
        //     options: {
        //         esModule: false,
        //         name: "[name].[ext]",
        //         outputPath: "img",
        //     },
        // },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[name][ext][query]",
  },
  // optimization: {
  //     runtimeChunk: "single",
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Responsive Website",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
};
