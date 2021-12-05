// vai ser interpretado pelo node

const { Module } = require('webpack')
const webpack = require('webpack')

module.exports = {

    // estou em modo de desenvolvimento ou producao?
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', 
        path: __dirname + '/public' 
    },
    module: {
        rules: [{
            // vão ter varios loaders aqui
            test: /\.css$/,
            use: [
                // plugins
                'style-loader', // adiciona CSS dentro da DOM injetando a tag <style>
                'css-loader' // interpretar @import, url()...
            ]
        }]
    }

}