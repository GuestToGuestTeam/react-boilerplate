const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'eventsource-polyfill',
        'babel-polyfill',
        './src/app.js',
        './src/css/styles.css'
    ],
    output: {
        filename: 'bundle.js',
        path: './dist',
        publicPath: '/',
        pathinfo: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['react-hmre']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.png$/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.jpg$/,
                loader: 'file'
            },
            {
                test: /\.gif$/,
                loader: 'file'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            templateContent: fs.readFileSync(
                path.resolve(process.cwd(), 'src/index.html')
            ).toString(),
            favicon: 'src/favicon.ico'
        }),
        new ExtractTextPlugin('[name].css')
    ]
};
