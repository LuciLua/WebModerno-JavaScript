function mediaAritmedica(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length; i++){ soma += vetor[i] }
    var result = soma/vetor.length
    console.log(result)
}
mediaAritmedica([2,3,4,5,6,7])