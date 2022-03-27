const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(path.dirname(__dirname), "src", "client", "index.js"),
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
                    },
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(path.dirname(__dirname), "public", "index.html"),
        }),
    ],
    devServer: {
        open: true,
        port: 7000,
        historyApiFallback: true,
    }
}
