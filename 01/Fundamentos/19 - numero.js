const peso1 = 1.0
const peso2 = Number('2.0')

console.log('Peso 1:', peso1, '(', typeof peso1, ')', '|', 'Peso 2:', peso2, '(', typeof peso2, ')')

console.log('Peso 1 é inteiro? ---> ', Number.isInteger(peso1))
console.log('Peso 2 é inteiro? ---> ', Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

/* Soma das notas multiplicadas pelos pesos de cada
 * e dividir o total pela soma de todos os pesos
 */
const media = total / (peso1 + peso2)
    //toFixed para no máximo 2 casa depois do ponto
console.log('\nNota 1:', avaliacao1.toFixed(2), '\nNota 2:', avaliacao2.toFixed(2), '\nmedia: ', media.toFixed(2))
console.log('-------')
    //converter numero em string:
console.log(media, 'em binário:', media.toString(2))
console.log(media.toFixed(2), ':', typeof media)
console.log('-------')
console.log(Number) //Com N maiusculo é função
console.log(typeof media) //com N minusculo é o tipo do dado quando tem o valor numerico