const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "[name].js"
    },
    module: {
        rules: []
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            filename: '../index.html',
            template: 'html/index.html',
            inject: 'body',
            minify: {
                // removeComments: true
                // collapseWhitespace: true
                // minifyCSS: true
                // minifyJS: true
                // removeEmptyElements: true
                // caseSensitive: true
                // removeScriptTypeAttributes: true
                removeStyleLinkTypeAttributes: true
            }
        })
    ]
};
