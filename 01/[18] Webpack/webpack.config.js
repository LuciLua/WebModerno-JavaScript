// vai ser interpretado pelo node

// se tiver no modo dev, a variavel é diferente de production ...
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {

    // estou em modo de desenvolvimento ou producao?
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', 
        path: __dirname + '/public' 
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // funcao construtora
            filename: "estilo.css"
        }),
        new OptimizeCSSAssetsPlugin({})
    ],
    module: {
        rules: [{
            // vão ter varios loaders aqui
            test: /\.s?[ac]ss$/, // https://regex101.com/
            use: [
                MiniCssExtractPlugin.loader, // esse conflita com o style-loader
                // plugins
                // 'style-loader', // adiciona CSS dentro da DOM injetando a tag <style>
                'css-loader', // interpretar @import, url()...
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }

}