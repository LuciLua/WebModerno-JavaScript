//flatMap => map associado com um concat
// para ao invez de ter array dentro de array, ter um unico array com todas as notas de todos os alunos de todas as turmas.

const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {nome: 'Gustavo',
             nota: 8.1
            },
            {nome: 'Ana',
             nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {nome: 'Rebeca',
             nota: 8.9
            },
            {nome: 'Roberto',
             nota: 7.3
            }
        ]
    },
]

// ideia: extrair a nota de todos os alunos independente das turmas

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)