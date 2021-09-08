function calcularMedia(array){
    const somar = array.reduce((numA, numB) => numA + numB) // acumulador + atual
    console.log(somar / array.length)
}

calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3