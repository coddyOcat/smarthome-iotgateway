const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(path.dirname(__dirname), "src", "index.js"),
  output: {
    path:path.join(path.dirname(__dirname), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.dirname(__dirname), "public", "index.html"),
      favicon: path.join(path.dirname(__dirname), "public", "favicon.ico"),
    }),
  ],
}
