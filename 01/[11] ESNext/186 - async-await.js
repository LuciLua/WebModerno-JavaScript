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

// recurso do ES8
// Objetivo de simplificar o uso de promises

// palavra AWAIT so vai funcionar em uma funcao que estiver marcada com a palavra ASYNC

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc) // concatenação dos 3 arrays para gerar 1 so
}

// Em funcao async, ela sempre retorna um objeto do tipo async function
// tem que chamar funcao .then() para executar

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))

// sempre que estiver lidando com funcao que retorna uma promise, posso colocar await
// e essa funcao so vai para o proximo passo se ela tiver resolvida, ou tiver com os dados, ou tiver rejeitada recebendo o erro

