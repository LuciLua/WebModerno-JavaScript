// arguments -> array interno de uma função, que tem todos os argumentos que foram passados
// dentro da função tem como recuperar parametros a partir de uma propriedade chamada ARGUMENTS
// toda função tem esse array disponivel
// quando nenhum parametro é passado esse array esta vazio

function soma() {
    let soma = 0
    for(i in arguments){
        // a partir desse indice, consigo fazer arguments {} acessando indice de cada um dos elemtnos que foram passados com argumento para essa função.
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 2.3, "concatena com o teste, e não soma"))
console.log(soma('a', 'b', 'c'))