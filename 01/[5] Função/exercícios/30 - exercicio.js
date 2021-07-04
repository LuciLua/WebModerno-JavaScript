function percorreInteiros(vetor){
    let maiorValor // cria variavel vazia com valor undefinned
    let menorValor // cria variavel vazia com valor undefinned

    for (let i = 0; i < vetor.length; i++){

        if (maiorValor === undefined && menorValor === undefined){
            maiorValor = vetor[i] //atribui o primeiro elemento do array para cada (no caso 2, logo começará em 2)
            menorValor = vetor[i] //atribui o primeiro elemento do array para cada (no caso 2, logo começará em 2)
        } else {  
            if(vetor[i] > maiorValor){
                maiorValor = vetor[i]
            }
            
            if(vetor[i] < menorValor){
                menorValor = vetor[i]
            }
        }
    }
    console.log(maiorValor)
    console.log(menorValor)
}

percorreInteiros([2, 5, 6, 12, 13, 4, 56, 3])