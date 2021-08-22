function receberSomenteOsParesDeIndicesPares(array){
    const arrayIndicePar = []
    const arrayPares = []
    for (let i in array){
        if (i%2 == 0) arrayIndicePar.push(array[i])
    }
    for (let i = 0; i < arrayIndicePar.length; i++){
        if(arrayIndicePar[i]%2 == 0) arrayPares.push(arrayIndicePar[i])        
    }
    console.log(arrayPares)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43, 44]) // retornará [10, 22]


// resolução 2

function receberSomenteOsParesDeIndicesParesD(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2){ // i de 2 em 2 => so pega os valores de 2 em 2 (pares)
        const numeroPar = numeros[i] % 2 === 0 // retorna boolen para cada vez que passar aqui no for
        if(numeroPar) // se for true (implicito)
            resultado.push(numeros[i])
    }
    console.log(resultado)
}

receberSomenteOsParesDeIndicesParesD([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesParesD([10, 70, 22, 43, 44]) // retornará [10, 22]

// resulocao 3

function receberSomenteOsParesDeIndicesParesT(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0 //boolean
        const indicePar = indice % 2 === 0 //boolean
        return numeroPar && indicePar // so retorna se os 2 for true
    })
}

console.log(receberSomenteOsParesDeIndicesParesT([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesParesT([10, 70, 22, 43, 44])) // retornará [10, 22]