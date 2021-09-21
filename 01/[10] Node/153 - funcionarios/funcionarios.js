// const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// const axios = require('axios')

// // axios é um client http
// // ele faz requisições para obter informação de algo que esta remoto

// axios.get(url).then(response => { //requisição dessa url e obter conteudo desse arquivo no meu codigo
//     const funcionarios = response.data
//     const mulheresChinesas = funcionarios.filter(f =>
//     f.pais == 'China' && f.genero == 'F')

//     const listaSalarios = []
//     mulheresChinesas.map(s => listaSalarios.push(s.salario)) // salario de cada mulher chinesa

//     // achando o menor pelo sort()
//     const menorSalarioSort =  listaSalarios.sort((a,b) => a - b)[0]

//     // achando o menor por reduce
//     const menorSalarioReduce = listaSalarios.reduce(function(acumulador, atual){
//         return atual < acumulador ? atual : acumulador
//     })
//     // encontrando a quem pertence tal salario
//     var chinesaMenorSalario = mulheresChinesas.filter(f => f.salario == menorSalarioSort)[0]

//     function convertReais(dinheiro){
//         return dinheiro.toFixed(2).replace('.', ',')
//     }

//     console.log(`A mulher chinesa com o menor salário é ${chinesaMenorSalario.nome} ${chinesaMenorSalario.sobrenome} (${chinesaMenorSalario.id}). Ela trabalha na empresa ${chinesaMenorSalario.empresa} em ${chinesaMenorSalario.cidade}, ${chinesaMenorSalario.pais}. Recebendo um salário de R$${convertReais((chinesaMenorSalario.salario))}.`)
// })


// Forma reduzida

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data // requisição dados 
    const mulheresChinesas = funcionarios.filter(f =>
    f.pais == 'China' && f.genero == 'F') // filtra mulheres chinesas
    const listaSalarios = [] // lista de salario chinesas
    mulheresChinesas.map(s => listaSalarios.push(s.salario)) // salario chinesas
    const menorSalarioSort =  listaSalarios.sort((a,b) => a - b)[0] // menor salario chinesas
    console.log(mulheresChinesas.filter(f => f.salario == menorSalarioSort)) // qual chinesa tem o menor salario
})