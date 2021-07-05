function inteiros(vetor){
    let negativos = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            negativos++
        }
    }
    console.log('quantidade de numeros negativos: ',negativos)
}

inteiros([55, -4,3,5,7,-8,10,13,-2,4, -1, 0, 1000, -12])