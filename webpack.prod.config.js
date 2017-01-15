'use strict';
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const webpack = require('webpack');
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: path.resolve(__dirname, 'app/polyfills.ts'),
        vendor: path.resolve(__dirname, 'app/vendor.ts'),
        main: path.resolve(__dirname, 'app/main.aot.ts')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.min.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
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
        new AotPlugin({
            tsConfigPath: path.resolve(__dirname, 'tsconfig.prod.json'),
            entryModule: path.resolve(__dirname, 'app/app.module#AppModule')
        }),
        new CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/public/index.html'),
            chunkSortMode: 'dependency'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    ],

    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.ts', '.js', '.html', 'css', 'json']
    },

    devtool: false
};
