// vai ser interpretado pelo node

const { Module } = require('webpack')
const webpack = require('webpack')

module.exports = {

    // estou em modo de desenvolvimento ou producao?
    mode: 'development',
    entry: './src/principal.js'

}