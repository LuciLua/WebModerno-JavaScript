const fs = require('fs')
const { type } = require('os')
const path = require('path')

// colocar dentro de uma promise
// passar para a promise um path 
// resultado da promise: conteudo do arquivo


function lerArquivo(arquivo){
    
    const caminho = path.join(__dirname, arquivo)
    console.log('Caminho: ', caminho)

    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (erro, conteudo) => { // caminho, 'formatacao', (erro , conteudo)
            resolve(conteudo.toString())
        })
    })
}

lerArquivo('./dados.txt')
.then(content => content.split('\n'))
.then(linhas => linhas.join(','))
.then(imprime => `Valor final é:\n${imprime}`)
.then(console.log)

.catch(erro => console.log('Ocorreu um erro!\n', erro))

