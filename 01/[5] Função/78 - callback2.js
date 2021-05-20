const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// extrair as notas menosres q 7

//sem usar callback

let notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)



// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota <= 7
} ) //filtrar elementos de um array em cima de um determinado criterio, que vai ser uma função callback que vai retornar true ou false

console.log(notasBaixas2)

//filter nao altera array original
// so o array gerado a partir da resposta que vai ter um conjunto de notas que seria um subarray de um array original


// se retornar true: elemento deve ser adicionado no array que esta sendo gerado
// se retornar false: elemento não deve ser adicionado no array que esta sendo gerado


// filter com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


// filter com arrow function, extraindo 
const notaMenorQueSete = (nota => nota < 7) // agora tenho função que posso reutilizar em outras partes do sistema
const notasBaixas4= notas.filter(notaMenorQueSete)
console.log(notasBaixas4)
