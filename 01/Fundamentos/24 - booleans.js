let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

const tr = '--------'

console.log(tr)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)


console.log(tr)


console.log(!!false) //retornou ao valor original
console.log(!false) //Negou o false

//negação é exclamação
// com 1 negação>  verdadeiro vira falso
// com 2 negações>  voltar a ser o original (mata o efeito da primeira negacao)

console.log(tr)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) //array
console.log(!!{}) //objeto literal
console.log(!!Infinity) //tipo infinito
console.log(!!(isAtivo = true))

console.log(tr)
console.log('os falsos...')
console.log(tr)

console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null) //nulo
console.log(!!NaN) //(not a number) sem numero
console.log(!!undefined)
console.log(!!(isAtivo == false))

console.log(tr)
console.log('Finalizando...')
console.log(tr)

console.log(!!('' || null || 0 || ' ')) // || --> ou / Pelo menos 1 desses é verdadeiro

console.log(!!('' || null || 0 || '')) // || --> ou / Nnehum desses é verdadeiro

console.log(('' || null || 0 || 'Hello, World!')) // retorna o unico valor verdadeiro... O Primeiro na vrdd

// || ---> OU ---> serve para valor padrao

console.log(tr)

let nome = ''
console.log(nome || 'Desconhecido') // se tem nome: mostra, se n tem: desconhecido (pois '' é false)

var a = 5
var b = 5
let soma = a + b
const fix = 15
console.log(soma || fix)
console.log(fix || soma)
console.log(!!soma)

//retorna primeio valor, se os dois forem verdadeiros (true)