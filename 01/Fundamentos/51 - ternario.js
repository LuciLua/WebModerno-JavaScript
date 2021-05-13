//retorno implicito 

/**
 * unario -> apenas 1 operando
 * binario -> 2 operandos
 * ternario -> 3 operandos
 * 
 */

// nota >= 7 ? 'Aprovado' : 'Reprovado'  // operador ternario
/**
 * 1 parte do operador ternario:
 * nota >= 7
 * expressão relacional
 * 
 * se for verdadeira essa expressão nota >= 7
 * ele vai retornar isso 'Aprovado'
 * 
 * 
 * se fro falsa essa expressão nota >= 7
 * ele vai retornar isso 'Reprovado'
 */




const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(8))
console.log(resultado(6))


