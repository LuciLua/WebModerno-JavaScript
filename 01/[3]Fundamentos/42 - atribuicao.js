const a  = 7 // 'a' não é igual a '7' mas '7' é atribuido em 'a' pelo sinal '='
let b = 3

b += a // atribuição aditiva | ou seja: junto com a atribuicao, estou fazendo uma adição

console.log(a,'+','b = ', b) // adição


b -= 4 

console.log('b - 4 = ', b) // subtração 

b *= 2

console.log('b * 2 = ', b) // multiplição

b /= 2

console.log('b / 2 = ', b) // divisão

b %= 2 // resto da divisao de b com modulo 2 | se for valor par o resultado é 0 | se for impár o resultado é 1

console.log('b = b % 2 | ', b)  // atribuição modular
 
