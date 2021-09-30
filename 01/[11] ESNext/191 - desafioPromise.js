const fs = require('fs')
const path = require('path')

// colocar dentro de uma promise
// passar para a promise um path 
// resultado da promise: conteudo do arquivo

function lerArquivo(arquivo){
    return new Promise(resolve => {

        const caminho = path.join(__dirname, arquivo)
        console.log('Caminho: ', caminho)

        fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
            resolve(conteudo)
        })
    })
}

lerArquivo('./dados.txt')
.then(content => console.log(`Conteúdo:
${content}`))
.catch(erro => console.log('Ocorreu um erro!', erro))

