function somarNumeros(array){
    var result = 0
    for(let i = 0; i < array.length; i++){
        result += array[i]
    }
    console.log(result)
}

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60


// outras resolucoes

function somarNumerosD(array){
    let result = 0
    array.forEach(e => { result += e });
    console.log(result)
}

somarNumerosD([10, 10, 10]) // retornará 30
somarNumerosD([15, 15, 15, 15]) // retornará 60




function somarNumerosT(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    console.log(soma)
}
somarNumerosT([10, 10, 10]) // retornará 30
somarNumerosT([15, 15, 15, 15]) // retornará 60