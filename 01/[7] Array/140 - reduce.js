// funcao que serve para trasnformar um array em 1 unico elemento
// ou em uma string, ou em um  numero...
// parametro que vai sendo acumulado...
// primeiro parametro: vai ser o acumulador

// primeiro elemento: acumulador
// segundo elemento:  atual


// array.reduce(callback [ ,valor inicial] )

// valorAnterior atual indice array

const alunos = [
    {nome: 'Joao',
    nota: 7.3,
    bolsista: false},
    {nome: 'Maria',
    nota: 9.2,
    bolsista: true},
    {nome: 'Pedro',
    nota: 9.8,
    bolsista: false},
    {nome: 'Ana',
    nota: 8.7,
    bolsista: true},
]

const resultado = alunos
.map( a => a.nota)
.reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)// posso tambem passar um valor incial: ex:  }, 40)

console.log(resultado)