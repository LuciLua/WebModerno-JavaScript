// vai ser interpretado pelo node

const { Module } = require('webpack')
const webpack = require('webpack')

const MiniCssExtractorPlugin = require('mini-css-extract-plugin')

module.exports = {

    // estou em modo de desenvolvimento ou producao?
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', 
        path: __dirname + '/public' 
    },
    plugins: [
        new MiniCssExtractorPlugin({ // funcao construtora
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            // vão ter varios loaders aqui
            test: /\.css$/,
            use: [
                MiniCssExtractorPlugin.loader, // esse conflita com o style-loader
                // plugins
                // 'style-loader', // adiciona CSS dentro da DOM injetando a tag <style>
                'css-loader' // interpretar @import, url()...
            ]
        }]
    }

}