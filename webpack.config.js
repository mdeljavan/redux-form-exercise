const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "awesome-typescript-loader",
        exclude: "/node_modules"
      },
      {
        test: /\.js/,
        enforce: "pre",
        use: "source-map-loader"
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
