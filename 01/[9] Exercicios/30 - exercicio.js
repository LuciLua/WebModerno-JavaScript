const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

// function recerberMelhorEstudante(obj){

//     const notas = Object.values(obj)
//     const alunos = Object.keys(obj)

//     const mediaAlunos = []

//     for(let i = 0; i < alunos.length; i++){
//         console.log(alunos[i], ':', media(notas[i]))
//         mediaAlunos.push(media(notas[i]))
//     }
//     mediaAlunos.sort((a,b) => b - a )
//     const melhor = mediaAlunos[0]

//     console.log('melhor media:', melhor, 'pertence à aluna:')
    
// }



function recerberMelhorEstudante(estudantes) {

    const estudantesComMedias = Object.entries(estudantes).map( estudante => {

        const chave = 0
        const valor = 1 // ??

        return { nome: estudante[chave], media: media(estudante[valor]) }
    })

    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media ) // ordenando

    const melhorEstudante = estudantesOrdenados[0]

    console.log(melhorEstudante)
}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) // retornará { nome: "Mariana", media: 7.875 }