function multiplicar(intA, intB){
    if(intA >= 0 && intB >= 0){
        let result = 0
        for (let i = 0; i < intB; i++){
            result += intA
        }
        console.log(result)

    } else {
        console.log('Inteiro não negativo, por favor')
    }
}

multiplicar(2, 5) // retornará 25
multiplicar(6, 5) // retornará 30
multiplicar(0, 7) // retornará 0
multiplicar(-3, 7) // retornará não pode...

//outras resoluções

function multiplicarD(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicarD(numero, multiplicador-1)
}

console.log(multiplicarD(2, 5)) // retornará 25
console.log(multiplicarD(6, 5)) // retornará 30
console.log(multiplicarD(0, 7)) // retornará 0
console.log(multiplicarD(-3, 7)) // retornará não pode...

//outra

function multiplicarT(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0
    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)
    function multiplicarRecursivamente(numero, multiplicador) {
    return (
    multiplicador === 1 ?
    numero :
    numero + multiplicarRecursivamente(numero, multiplicador-1)
    )
    }
    // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero )
    }

console.log(multiplicarT(2, 5)) // retornará 25
console.log(multiplicarT(6, 5)) // retornará 30
console.log(multiplicarT(0, 7)) // retornará 0
// console.log(multiplicarT(-3, 7)) // retornará não pode...