/**
 * webpack.config.js created on 2016. 12. 01.
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */

const path = require("path");
const pkg = require("./package.json");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.argv.indexOf("-p") > -1;

const FILENAME = pkg.name + (isProduction ? ".min" : "");

const outputPath = path.join(__dirname, "dist");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        library: "ImageEditor",
        libraryTarget: "commonjs",
        libraryExport: "default",
        path: outputPath,
        publicPath: outputPath,
        filename: `${FILENAME}.js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(
                    "css-loader?sourceMap!stylus-loader?paths=src/css/"
                )
            }
        ]
    },
    plugins: [new ExtractTextPlugin(`${FILENAME}.css`)],
    devServer: {
        historyApiFallback: false,
        progress: true,
        inline: true,
        host: "0.0.0.0",
        disableHostCheck: true
    }
};
