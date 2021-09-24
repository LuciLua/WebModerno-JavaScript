const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// persistir no disco

fs.writeFile(__dirname + '/arquivoEscrito.json', JSON.stringify(produto), err => {
    // se caso de erro
    console.log(err || 'Arquivo salvo!')
})