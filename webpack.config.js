var webpack = require('webpack');
var sass = require("node-sass");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var jshintStylish = require('jshint-stylish');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var buildConfig = require('./BuildConfig')();

module.exports = {
    watchOptions: {
        ignored: buildConfig.ignored
    },
    entry: buildConfig.src.scripts.file,
    output: {
        path: buildConfig.dist.distBaseJsPath,
        filename: buildConfig.dist.scripts
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: [
                    buildConfig.src.basePath
                ],
                exclude: [
                    buildConfig.nodeModules
                ],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: sass,
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts/',
                        publicPath: 'fonts'
                    }
                }]
            },
            {
                test: /.(png|jpeg|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images/',
                        publicPath: 'images'
                    }
                }]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                extractComments: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true
                    }
                }
            }),
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            'fonts/**.*',
            'images/**.*',
            'style.css',
            'style.css.map',
            'js/all.min.json',
            'js/bundle.min.js',
            'js/bundle.min.js.LICENSE',
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: buildConfig.dist.styles
        }),
    ],
};