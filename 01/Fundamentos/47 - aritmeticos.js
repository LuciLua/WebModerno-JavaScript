// operadores --->
// aritmeticos, de atribuicao, nao relacionais, logicos

// operadores aritmeticos são operadores binarios, ou seja operam em cima de 2 operandos 

const [a,b,c,d] = [3,5,1,15]


const soma = a + b + c + d //é binario mesmo tendo varios


// d++ //operador post fix

// ++d //pre fix (prefixado)

// op1 + op2 // in fix (por isso é binario)

// -a // unario


const subtracao = d - b
const multiplicacao  = a * b
const divisao = d / a
const modulo = a  % 2 //pega o valor, divide por (2). o resto da divisao vai ser o resultado armazenado em (modulo)
// ou seja: se (a) é par: o resultado é 0 | se (a) é impar: o resultado é 1

console.log('-----------\n| valores |\n|  a: ',a,' |\n|  b: ',b,' |\n|  c: ',c,' |\n|  d: ',d,'|\n-----------')
console.log('soma: a + b + c + d\nsubtração: d - b\nmultiplicação: a * b\ndivisão: d / a\nmódulo: a % 2\n------------')
console.log('| soma: ',soma,'\n| subtração: ', subtracao,'\n| multiplicação: ' , multiplicacao,'\n| divisão: ' , divisao,'\n| modulo: ' , modulo)

console.log('--------aplicando--------')

console.log('Convertendo valor de divisao para negativo: ',-divisao) // aplicando operador unario
