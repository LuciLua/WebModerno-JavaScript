/*array: forma de agrupar multiplos valores de forma linear 
 * a partir de um único identificador
 *(um elemento atras do outro)
 * 
 * É uma estrutura indexada, vc acessa elementos de um array 
 * a partir de um numero
 * 
 * é heterogêneo 
 * dentro do espaço do array pode colocar qualquer coisa
 * 
 * cresce e diminui de maneira flexivel (nao tem tamanho fixo)
 * 
 */

const valores = [7, 8, 'ola', 'sdsdsd', 3434, 23.22, 'ultim']
console.log(valores[0], valores[3], valores[5], valores[7]) //indice 7 n existe
console.log('quantos elementos tem?', valores.length) //quantos elementos tem no array

valores[7] = 10
console.log(valores)
console.log(valores[7]) //agora existe :)

console.log('quantos elementos tem?', valores.length) //quantos elementos tem no array

valores.push({ id: 3 }, false, null, 'teste')
    /* paraa adicionar novos
elementos no array*/

/*id --> objeto
boolean --> false or true
null ---> valor nulo*/

console.log(valores)

console.log(valores.pop()) // pega ultimo valor do array e retorna// pega o ultimo valor do array
//e depois elimina ele
delete valores[0] //elimina valor no indice 0
console.log(valores)

console.log(typeof valores) //array é objeto em java script

valores[0] = 'HEllooo'

console.log(valores) //coloquei dnovo algo no indice 0

let tos = 20
let teste = 2
let arr = [] //array vazio

arr.push(teste * tos) //empurrando o valor de teste para dentro do array vazio mult. por 'tor'
console.log(arr) //imprime [ 4 ]
console.log(teste) //imprime 2