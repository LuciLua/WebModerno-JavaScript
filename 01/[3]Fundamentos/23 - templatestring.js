const nome = 'Rebeca'
const concatecacao = 'Olá' + nome + '!'
const template = `Aceita ate quebra de linhas!
Olá ${nome}!
`
console.log(template)
console.log(concatecacao)

//expressoes...

console.log(`1 + 1 = ${1 + 1}`)

const frase = 'Im FiNe, AnD YoU?'
console.log(frase)

const up = texto => texto.toUpperCase()
console.log(`Ei... How are you? ${up(frase)}`)

const low = texto => texto.toLowerCase()
console.log(`Ei... How are you? ${low(frase)}`)

teste = (`${up(frase.replace('FiNe', 'bad'))}`)

console.log(`${(teste)}`)