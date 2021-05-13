/*hoisting - içamento, jogada pra cima
ex: o caso do var, sofre hoisting
interpretador da linguagem pega a variavel e joga para cima
*/

console.log('a = ', a)
var a = 2
console.log('a =', a)


//console.log('b =', b)
let b = 2
console.log('b =', b)
    //hoisting nao acontece em let