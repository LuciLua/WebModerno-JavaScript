//armazenando um funcao em uma variavel

function uma(x, y) {

}

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
console.log(imprimirSoma)

//armazenando uma funcao arrow em uma variavel
//mais reduzida
// => Arrow function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
//mais reduzida ainda
const subtracao = (a, b) => a - b
    // (a,b) parametros | a - b retorno da funcao
console.log(subtracao(10, 3))

let num = (q, w, e, r) => ((q + w) / (e - r))
console.log(num(4, 2, 4, 1))

const imprimir2 = a => console.log(a)
imprimir2('Legal!')