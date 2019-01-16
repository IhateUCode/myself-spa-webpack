const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/[name].js'
    },
    resolve:{
        extensions: ['*','.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                include: /src/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                    limit: 1024
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ]
}


