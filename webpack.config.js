var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');
var buildConfig = require('./BuildConfig')();

module.exports = {
    entry: buildConfig.src.scripts.file,
    output: {
        path: buildConfig.dist.distBaseJsPath,
        filename: buildConfig.dist.scripts,
    },
    module: {
        rules: [
            {
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
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                extractComments: true
            })
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
};
