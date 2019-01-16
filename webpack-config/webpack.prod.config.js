var webpackBase = require('./webpack.base.config')
var path = require('path')
var extractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var merge = require('webpack-merge')  //webpack-merge 注意坑  合并时候 合并重复的项会有意想不到的错误
var webpack = require('webpack')

module.exports = merge(webpackBase,{
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'   
                })
            },
            {          
                test: /\.css$/,
                loader: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '../'   
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins: [
        new extractTextWebpackPlugin({
            filename: 'css/[name].css'
        }),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname,'../')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({           //提取出vue里的样式
            options: {
                vue: {
                    loaders: {
                      sass: extractTextWebpackPlugin.extract({      //sass或者css、less等需要分别设置
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                        publicPath: '../'           
                      }),
                      css: extractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                        publicPath: '../'                
                      }),
                    },
                },
            }
        })
    ]
})

