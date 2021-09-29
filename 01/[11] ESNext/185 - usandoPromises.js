// promises faz composição de uma forma muito mais interesante que callback

// com promise

const http = require('http')
const getTurma = letra => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados // compões os dados até que fiquem completos
            })

            res.on('end', () => { // quandos dados estiverem completos chama o end
                try {  // se der certo
                    resolve(JSON.parse(resultado))
                } catch(e) { // caso de erro
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])// com essa funcao, posso passar varias promises para ela e quando todas forem resolvidas, vai começar a chamar os metodos .then()
.then(turmas => [].concat(...turmas)) // todos os elemtos em um unico array
.then(alunos => alunos.map(aluno => aluno.nome)) // nome dos alunos de todos as turmas
.then(nomes => console.log(nomes)) // imprime nomes
.catch(erro => console.log(erro.message)) // improtante sempre tratar erro
