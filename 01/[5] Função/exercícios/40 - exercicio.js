function func(vetorNotas){
    let quantidadeA = 0
    let quantidadeB = 0
    let quantidadeC = 0
    let quantidadeD = 0
    for (let i = 0; i < vetorNotas.length; i++){
        var conceito = null
        if (vetorNotas[i] >= 0 && vetorNotas[i] <= 4.9){
            conceito = 'D'
            quantidadeD++
        } 
        else if (vetorNotas[i] >= 5 && vetorNotas[i] <= 6.9){
            conceito = 'C'
            quantidadeC++
        } 
        else if (vetorNotas[i] >= 7 && vetorNotas[i] <= 8.9){
            conceito = 'B'
            quantidadeB++
        } 
        else if (vetorNotas[i] >= 9 && vetorNotas[i] <= 10){
            conceito = 'A'
            quantidadeA++
        } else {
            conceito = 'nota inválida'
        }
        console.log('nota: ', vetorNotas[i], '| conceito: ', conceito)
    }

    // if (quantidadeD + quantidadeC > quantidadeB + quantidadeA){
    //     situacao = 'reprovado'
    // } else {
    //     situacao  ='aprovado'
    // }

    //forma mais simplificada: 
    quantidadeD + quantidadeC > quantidadeB + quantidadeA ? situacao = 'reprovado' : situacao = 'aprovado'

    console.log('Total:\nA:', quantidadeA, '\nB:', quantidadeB, '\nC:', quantidadeC, '\nD:', quantidadeD, '\nSituação:', situacao)
}

func([4.9, 5, 6.9,7, 8.9, 9, 10, 11])