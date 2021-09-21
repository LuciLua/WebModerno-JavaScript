console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // a visivel fora do arquivo
exports.b = 2 // b visivel fora do arquivo
module.exports.c = 3 // c visivel fora do arquivo

exports = null
console.log(module.exports) // sera retornado

// exports é uma outra variavel que aponta pra um mesmo objeto

exports = {
    nome: 'teste'
} // nao sera retornado


console.log(module.exports)

module.exports = {publico: true}

// forma correta de exportar:  module.exports = {}
// e nao exports = {}

// this e exports são apenas duas referencias para um mesmo objeto que module.exportas aponta 