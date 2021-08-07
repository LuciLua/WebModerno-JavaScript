// Array é um objeto especial
// Não existe array nativo em js
// diferença que ele organiza os dados a aprtir de um indice (que começa no zero)

console.log(typeof Array, typeof new Array, typeof [])

// é uma estrutura dinamica (cresce e diminui....)
// array estrutura heterogenea (boolean, numero, string)

// BOAS PRATICAS: Usar só um tipo de dado dentro de um array


let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // adicionando novo elemento

aprovados.push('Abia') // mais apropriado para adiconar elemento noa rray

console.log(aprovados, aprovados.length, 'elementos')

aprovados[9] = 'Rafael' // cria o 9 e cria elementos undefinned antes
console.log(aprovados, aprovados.length, 'elementos')

console.log(aprovados[8] === undefined)

aprovados.sort() // causa alteração no array original!
console.log(aprovados)

delete aprovados[1] // não desordena, coloca o undefined no lugar
console.log(aprovados)
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,0, 'Elemento1', 'Elemento2') //remover/ adicionar elementos ao mesmo tempo
// começa no indice 'X' (X,Y,Z...)  e excluir a partir dele 'Y' elementos | adicionar só colocar Z's
console.log(aprovados)

// quando tem um array contante, nao significa que seus dados são constantes
// variavel aponta para um endereço de memória e aquele endereço nao pode ser modificado
 

