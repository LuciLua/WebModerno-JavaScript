function impPar(vetor){
    var pares = 0
    var impares = 0
    for(let i = 0; i < vetor.length;i++){
        if (vetor[i]%2 == 0){
            pares++
        } else {
            impares++
        }
    }
    console.log(`Pares: ${pares}\nImpares: ${impares}`)
}
impPar([1,2,3,4,5,6,7,8,9,10,20,30])