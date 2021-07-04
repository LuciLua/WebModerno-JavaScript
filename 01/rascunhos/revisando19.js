function maiorEMenor(valor){
    let maior
    let menor
    for (let i = 0; i < valor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = valor[i]
            menor = valor[i]
        } else {
            if (valor[i] > maior){
                maior = valor[i]
            }
            if (valor[i] < menor){
                menor = valor[i]
            }
        }
    }
    console.log('o maior é o', maior,'e o menor é o', menor)
}
maiorEMenor([10,20,30,4,5,50,90,60])