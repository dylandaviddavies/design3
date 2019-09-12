const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: {
        "../public/dist/bundle.min.js": "./src/scripts/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "[name]"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            url:false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules'],
                            url:false
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            includePaths: ['./node_modules'],
                            url:false,
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                              return [
                                require('autoprefixer')
                              ];
                            }
                        },
                    },
                ],
            },
            {                 
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname, "src/"),
                            outputPath: ''
                        }
                    }
                ] 
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-classes']
                    },
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader?url=false',
                        options: {
                            includePaths: ['./node_modules'],
                            url:false
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../public/dist/bundle.min.css",
            chunkFilename: "../public/dist/bundle.min.css"
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}