const line = Array(40).fill('_').join('')

console.log('Resolução 1')
function simboloMais(num){
    const simbolos = []
    for (let i = 0; i < num; i++){
        simbolos.push('+')
    }
    console.log(simbolos.join(''))
}

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
console.log(line)


console.log('Resolução 2')

function simboloMaisD(num){
    console.log("+".repeat(num))
}

simboloMaisD(2) // retornará "++"
simboloMaisD(4) // retornará "++++"

console.log(line)

console.log('Resolução 3')

function simboloMaisT(num){
    console.log(Array(num).fill('+').join(''))
}

simboloMaisT(2) // retornará "++"
simboloMaisT(4) // retornará "++++"
console.log(line)