// revisao 2

// Arrow functions 
// sintaxe mais reduzida
// prioriza funcoes de uma unica linha
// funcoes arrows sao anonimas

// funcao anonima significa que sempre vai ter que atribuir ela para uma variavel ou para uma constante

// 1 so parametro, n precisa colocar parenteses
// se colocar corpo na funcao, n precisa do return

const soma = (a,b) => a + b

// const soma = (a,b) => {
//     c = b*2
//     return a + c
// }

console.log(soma(2,3))


// Arrow function (this)

// this associado ao local no qual a funcao foi escrita.
// this aponta para module.exports
// ou exports
const lexico1 = () => console.log(this === exports)
lexico1()


const lexico2 = () => lexico1.bind({})
lexico1()

// em uma funcao tradicional, this aponta para global

// quando tem uma funcao tradicional, o this pode variar de acordo com a chamda da funcao
// ou mudar se vc mudar o contexto a partir do bind
// ou a partir de um call ou apply


// em uma funcao arrow nao é possivel alterar o contexto


// parametros default

function log(texto = 'Node'){
    console.log(texto)
}

log()
log(undefined)
log(null)
log('sou o mais forte')


// operador rest

// 2 nomes: spread e rest

// rest de agrupar
// parametros agrupados em um array dentro da funcao

// spread de espalhar
// quando trabalha com obj ou array: chamase spread

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))



