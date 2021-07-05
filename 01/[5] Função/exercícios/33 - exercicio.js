const vetorInteiro = [5, 13, 44 , 120]
const vetorString = ['luci', 'paulo', 'micaela', 'silva']
const vetorDouble = [0.47, 8.90, 19.01, 102.80]

var resultA = []
resultA = vetorInteiro.concat(vetorString.concat(vetorDouble))
console.log(resultA)

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorString, vetorDouble))