var webpackBase = require('./webpack.base.config')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')

module.exports = merge(webpackBase,{
    devServer: {
        // contentBase: path.resolve(__dirname,'dist'),
        host: '192.168.0.208',
        port: 2000,
        inline:true,
        hot:false    //这里改成false就可以热更新了 我也感觉很奇怪
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
