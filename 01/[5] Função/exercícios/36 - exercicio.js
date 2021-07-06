const paramA = [12,34,55,73,90]   
var paramB = 8

function funcA(paramA, paramB){

    const result = []

    for (let i = 0; i < paramA.length; i++){
        result.push(paramA[i]*paramB)
    }
    return console.log(result)
}

funcA(paramA, paramB)

var paramB = 4

function funcB(paramA, paramB){

    const result = []

    if (paramB >= 5){
        for (let i = 0; i < paramA.length; i++){
            result.push(paramA[i]*paramB)
        }
        return console.log(result)
    } else {
        console.log('valor menor que 5 não suporta')
    }
}

funcB(paramA, paramB)


// ---


// let vetor = [1, 2, 3, 4, 5]

// function multiplicaVetor(vetor, multiplicador){
//     let vetorResultado = []
//     vetor.forEach(elemento => { vetorResultado.push(elemento * multiplicador) });

//     return vetorResultado
// }

// console.log(multiplicaVetor(vetor, 3))

console.log('-------')

function foreachTest(vetorTeste){
    let testResultado = []
    vetorTeste.forEach(function (qualquerCoisa) {  testResultado.push(qualquerCoisa + ' edited') }); // função anonima ou pode ser tambem ....
   // vetorTeste.forEach(qualquerCoisa => {  testResultado.push(qualquerCoisa + ' edited') }); // uma array function
    return testResultado
}

console.log(foreachTest([1,2,34,56,87]))