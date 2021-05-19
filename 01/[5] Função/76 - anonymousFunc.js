/** funções normais = pode nomear
 * 
 * função anonima = função sem nome
 * 
 * Criar função anonima e passar ela para ser * * executada por outra função
 * 
 * pode armazenar uma função anonima dentro de * uma variavel.
 */

const soma = function (x,y){
    return x + y
}

const sub = function (x,y){
    return x - y
}

const printResult = function (a,b,operacao = soma){
    console.log(operacao(a,b))
}

var val1 = 6
var val2 = 4

console.log('Soma: ')
printResult(val1,val2)


console.log('Subtração: ')
printResult(val1,val2, sub)


console.log('Multiplicação: ')
printResult(val1,val2, function (x,y){  // passei uma função anônima diretamente para outra função
    return x * y
})

console.log('Divisão: ')
printResult(val1,val2, (x , y) => x / y) // utilizando arrow function

// criando função dentro de um objeto | mais um exemplo de função anonima

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()
