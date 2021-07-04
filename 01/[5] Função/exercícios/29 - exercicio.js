function entreDezEVinte(vetor){
    let qtDentro = 0
    let qtFora = 0
    for (let i = 0; i < vetor.length; i++ ){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtDentro++
        } else{
            qtFora++
        }
    }
    console.log('Total:', vetor.length, 'valores')
    console.log('Entre 10 e 20:', qtDentro, 'valores')
    console.log('Fora de 10 e 20:', qtFora, 'valores')
}

entreDezEVinte([4,5,6,7, 10, 11, 12, 12.5, 13, 14,19,20,22,23, 24, 25])