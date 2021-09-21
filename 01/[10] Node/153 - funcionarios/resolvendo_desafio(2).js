const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}
const paraReais = dinheiro => `RS${dinheiro.toFixed(2).replace('.', ',')}`

module.exports = axios.get(url).then(response => {      
        const funcionarios = response.data
        const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

        return console.log(`${func.nome} ${func.sobrenome} [${func.id}] de ${func.cidade}, ${func.pais}, trabalha na empresa ${func.empresa} e recebe um salário de ${paraReais(func.salario)}`)
})