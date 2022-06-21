const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css单独分离文件加载
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single', //会将Webpack在浏览器端运行时需要的代码单独抽离到一个文件
        splitChunks: {
            cacheGroups: {
                commons: {
                    //产生一个Chunk
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                },
                vendor: {
                    //产生一个Chunk
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /.css$/, //匹配.css文件
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')],
                            },
                        },
                    },
                ], //使用css-loader,style-loader
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    {
                        //css单独分离文件加载
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
            //打包处理字体、图片文件的loader
            { test: /\.ttf|woff|woff2|eot|svg|png|jpg|gif$/, use: 'url-loader' },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            titel: 'react-template-webpack',
            filename: 'index.html',
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', //抽离css之后输出的文件名
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
        new friendlyErrorsWebpackPlugin(),
    ],
    resolve: {
        //省略后缀名
        extensions: ['*', '.js', '.jsx', '.json'],
        // 配置路径别名
        alias: {
            '@css': path.resolve('./src/css'),
            '@assets': path.resolve('./src/assets'),
            '@views': path.resolve('./src/views'),
            '@utils': path.resolve('./src/utils'),
            '@components': path.resolve('./src/components'),
        },
    },
};
