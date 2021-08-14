// abordagens diferentes
// imperativo vs declarativo

const alunos = [
    {
        nome: 'João',
        nota: 7.9
    },
    {
        nome: 'Maria',
        nota: 9.2
    }
]

// Abordagem mais Imperativa
// COMO é mais importante do que O QUE tem que ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log('Média:', (total1 / alunos.length))



// Abordagem mais Declarativa
// O QUE tem que ser feito. internmente as coisas vão sendo feitas. importa menos com o COMO. Dá apenas aquilo que interessa
//mais reuso aqui, mais interessante

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log('Média:', (total2/alunos.length))

//reduce=> reduzir,a gregar, os valores em 1 só