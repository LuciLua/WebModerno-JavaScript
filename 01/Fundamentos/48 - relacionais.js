// também binarios
// operadores relacionais sempre o resultado ou é verdadeiro ou é falso

console.log('01)', '1' == 1) //comparando valor, sem se preocupoaar com o tipo
// = --> atribuição
// == --> operador relacional, tambem é operador binario, não se preocupa com tipo
// === --> operador relacional, tambem é operador binario, se preocupa com tipo


console.log('02)', '1' === 1) // se preocupa com tipo


console.log('03)', '3' != 3)

console.log('04)', '4' !== 4) //estritamente diferente


console.log('05)', '5' < 3)
console.log('06)', '6' > 2)

console.log('07)', '7' >= 7)
console.log('08)', '7' <= 4)

console.log('----------------')


const d1 = new Date(0)

const d2 = new Date(0)

console.log('09', d1 === d2)
console.log('10', d1 == d2)
//false pois compara referencia de memoria


// 0 significa data de referencia no js, que é: 1 de janeiro de 1970


console.log('-------------')

console.log('11)', d1.getTime() === d2.getTime())

console.log(d1.getTime(),'===' ,d2.getTime())

//gettime compara um number, number sao estritament iguais
console.log('-------------')


console.log('12)', undefined == null)
console.log('13)', undefined === null)


