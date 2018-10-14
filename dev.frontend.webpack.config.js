const Webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    target: 'web',
    performance: {
        hints: 'warning',
        maxAssetSize: 4000000, // int (in bytes),
        maxEntrypointSize: 4000000, // int (in bytes)
        assetFilter(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        },
    },
    devtool: 'cheap-eval-source-map', // source-map | eval-source-map | cheap-eval-source-map
    resolve: {
        // Add `.ts`, `.jsx`, '.js' and '.es6' as a resolvable extension.
        extensions: ['.js', '.jsx'],
    },
    entry: {
        index: './src/frontend/index.jsx',
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        compress: true,
        port: 4200,
        watchOptions: {
            poll: true,
        },
        historyApiFallback: true,
        index: 'index.html',
        stats: 'errors-only',
    },
    // stats normal is standard output
    // stats minimal will output when errors or new compilation happen
    // verbose Output everything
    // "errors-only" Only output when errors happen
    stats: 'errors-only',
    plugins: [
        /**
         * MiniCssExtractPlugin extracts CSS into separate files. It creates a CSS file per JS
         * file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
         */
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        /**
         * The plugin will generate an HTML5 file for you that includes
         * all your webpack bundles in the body using script tags.
         */
        new HtmlWebpackPlugin({
            title: 'Webpack For React App',
            filename: 'index.html',
            template: './public/index.html',
            inject: true, // all javascript resources will be placed at the bottom of the body element
            hash: true,
        }),
        /** HMR allows all kinds of modules to be updated at runtime without the need for a full
         * refresh.
         ** HMR is not intended for use in production.
         */
        new Webpack.HotModuleReplacementPlugin({
            // Options...
            title: 'Dev: Hot Module Replacement...',
        }),
        // Visualize size of webpack output files with an interactive zoomable treemap.
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            // .js and .jsx rule
            {
                test: /\.(js|jsx)?$/,
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
                enforce: 'pre',
            },
            // css loader: This enables you to import './style.css' into the file that depends on that styling.
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // scss/sass
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
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
            // url loader: A loader for webpack which transforms files into base64 URIs.
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    fallback: 'file-loader',
                },
            },
            // file loader: you can import image in js/jsx file like import Icon from './img/icon.png'
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]',
            //             /**
            //              * If true, emits a file (writes a file to the filesystem). If false, the loader will return a public URI but will not emit the file. It is often useful to disable this option for server-side packages.
            //              */
            //             emitFile: true,
            //             outputPath: 'images/',
            //             publicPath: '/',
            //         },
            //     }],
            // },
        ],
    },
};