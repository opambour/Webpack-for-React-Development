const Webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'production',
    target: 'web',
    performance: {
        hints: 'warning',
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        },
    },
    devtool: 'cheap-module-source-map ', // Source maps are really expensive. Do you really need them?
    resolve: {
        // Add `.ts`, `.jsx`, '.js' and '.es6' as a resolvable extension.
        extensions: ['.js', '.jsx'],
    },
    entry: {
        index: './src/frontend/index.jsx',
    },
    output: {
        filename: '[name].build.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
    },
    stats: 'verbose',
    // normal is standard output
    // minimal will output when errors or new compilation happen
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                cache: true,
                parallel: true,
                include: /\/dist/,
                exclude: /\/node_modules/,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        splitChunks: {
            cacheGroups: {
                // Extracting Boilerplate
                /**
                 * webpack provides an optimization feature which does split out runtime code into a separate chunk(s) according to the options provided, simply use optimization.runtimeChunk set to single for creating one runtime bundle
                 */
                runtimeChunk: 'single',
                // css is extracted into one css file
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
                /**
                 * It's also good practice to extract third-party libraries, such as lodash or react, to a separate vendor chunk as they are less likely to change than our local source code. This step will allow clients to request even less from the server to stay up to date.
                 */
                vendor: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        // A webpack plugin to remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['dist'], {
            // options
            verbose: true,
            dry: false,
        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            cache: true,
            include: /\/dist/,
            exclude: /\/node_modules/,
        }),
        // HashedModuleIdsPlugin
        /**
         * This plugin will cause hashes to be based on the relative path of the module, generating a 4 character string (default characters) as the module id. Suggested for use in production.
         */
        new Webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 24,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash].css', // hash or contenthash
        }),
        /**
         * The plugin will generate an HTML5 file for you that includes
         * all your webpack bundles in the body using script tags.
         */
        new HtmlWebpackPlugin({
            title: 'Webpack For React App',
            filename: 'index.html', // write to dist and name it index.html
            template: './public/index.html',
            inject: true, // all javascript resources will be placed at the bottom of the body element
            hash: true,
        }),
        /**
         * Manefest Plugin: Generate manifest.json file in your root output directory with a mapping of all
         * source file names to their corresponding output file
         */
        new ManifestPlugin(),

    ],
    module: {
        rules: [
            // .js and .jsx rule
            {
                test: /\.(js|jsx)?$/,
                enforce: 'pre',
                use: [
                    'cache-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
                            plugins: ['@babel/plugin-transform-runtime'],
                        },
                    },
                    'eslint-loader',
                ],
                include: [
                    path.resolve(__dirname, 'src/frontend'),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
            },
            // css loader: This enables you to import './style.css' into the file that depends on that styling.
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // for production
                    'css-loader',
                ],
            },
            // scss/sass
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // for production
                    'css-loader', // translates CSS into CommonJS
                    // compiles Sass to CSS, using Node Sass by default
                    {
                        loader: 'sass-loader',
                        options: {
                            // You can also pass options directly to Node Sass
                            includePaths: ['./node_modules/node-sass'],
                            implementation: require('node-sass'),
                        },
                    },
                ],
            },
            // url-loader: A loader for webpack which transforms files into base64 URIs.
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    // The fallback loader will receive the same configuration options as url-loader.
                    fallback: 'file-loader',
                },
            },
            // file loader: you can import image in js/jsx file like import Icon from './img/icon.png'
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]',
            //             /**
            //              * If true, emits a file (writes a file to the filesystem). If false, the loader will return a public URI but will not emit the file. It is often useful to disable this option for server-side packages.
            //              */
            //             emitFile: false,
            //             outputPath: 'images/',
            //             publicPath: 'assets/',
            //         },
            //     }],
            // },
        ],
    },
};