const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        port: 5150,
        hot: true,
        liveReload: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
    ],
};
