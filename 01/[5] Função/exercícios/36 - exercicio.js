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