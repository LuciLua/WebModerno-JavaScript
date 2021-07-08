const vetorA = [1,2,3,4,10]
const vetorB = [5,6,7,8,99]

function func(vetorA, vetorB){

    if (vetorA.length == vetorB.length){
        for (let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        console.log(vetorA, vetorB)
    } else {
        console.log('vetores com diferentes quantidades')
    }
}

func(vetorA, vetorB)