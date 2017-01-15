'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './app/polyfills.ts',
        vendor: './app/vendor.ts',
        main: './app/main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                }),
                include: path.resolve(__dirname, 'app/public/styles')
            },
            {
                test: /\.css$/,
                loader: 'raw-loader',
                exclude: path.resolve(__dirname, 'app/public/styles')
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.ts', '.js', '.html', '.css', '.json']
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, 'app')
        ),
        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: false,
                    failOnHint: false
                }
            }
        }),
        new CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: 'app/public/index.html',
            chunkSortMode: 'dependency'
        })
    ],

    devServer: {
        historyApiFallback: true
    },

    devtool: 'eval-source-map'
};
