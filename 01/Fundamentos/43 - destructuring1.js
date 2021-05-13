//operador de desestruturação ----> tira da estrutura alguma coisa
// exemplo: estrutura (objeto) ---> extrair dessa estrutura atributos
// exemplo: estrutura (array)

/* 2 formas de escrita:

 - no ambito de objeto: usa-se em sua sintaxe as chaves {} (pois para criar um objeto literal se usa chaves)

 - no ambito de array: usa-se em sua sintaxe os conchetes [] (pois para definior um array se usa um colchete)
 
*/


// NOVO RECURSO DO ES2015

const pessoa = {
    nome: 'Isa',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log('---------------')

// essas chaves representam o operador destructing
const {nome, idade} = pessoa

console.log(nome, idade) //já desestruturado


console.log('---------------')

//renomeando
const {nome: n, idade: i} = pessoa

console.log(n, i)

console.log('---------------')

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

console.log('______________________________________________________')

const {endereco: {logradouro, numero, cep = 369298717}} = pessoa

const pessoa2 = {
    nome2: 'Luci',
    idade: 19,
    endereco:{
        logradouro2: 'Rua Ipanema',
        numero2: 118,
    }
}

const {nome2, endereco: {logradouro2, numero2, cep2 = 929929292}} = pessoa2


console.log(`
nome    |  logradouro  |    numero    |    cep
--------|--------------|--------------|---------------
${nome}     | ${logradouro}      |    ${numero}      |   ${cep}
${nome2}    | ${logradouro2}  |    ${numero2}       |   ${cep2}
`)

console.log('______________________________________________________')


