// sem promise:

const http = require('http')
const getTurma = (letra, callback) => { // letra da turma, callback pra ser chamado quando o arquivo estiver carregado
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {

        let resultado = ''

        res.on('data', dados => { // processamento de dados e colocando dentro de resultado
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado)) // dados de JSON para Objeto
        })

    })
}

let nomes = []

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

// com promise consegue-se fazer isso de uma forma muito mais elegante

