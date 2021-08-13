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


// Desafio 1: retornar verdadeiro ou falso: todos os alunos sao bolsistas?
// Desafio 2: retornar verdadeiro ou falso: algum aluno é bolsista?

const allBol = (resultado, bolsista) => resultado && bolsista // se tiver 1 falso: sempre falso


// console.log(alunos.map(a=>a.bolsista))

// console.log(alunos
//     .map(a => a.bolsista) //pega cada valor de bolsitas dentro de alunos
//     .reduce( function (res,bol){
//         return res && bol
//     } ) // do array: [false, true, false, true] função que retorne acumulador e o atual (res e bol)
//     )

console.log(alunos
    .map(a => a.bolsista)
    .reduce(allBol)
)

const algumBol = (res, bol) => res || bol //ou=> um deles tem que ser bolsista|| algum é true?

console.log(alunos
    .map(a => a.bolsista)
    .reduce(algumBol))



var a = true
var b = false
console.log((a && b)) // se tiver 1 falso: é sempre falso, msm que tenha 1 verdadeiro.