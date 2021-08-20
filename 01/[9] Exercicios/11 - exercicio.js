console.log(Array(30).fill('_').join(''))
console.log('\nResolução 1:\n')

function receberPrimeiroEUltimoElemento(array){
    const dois = [array.shift(), array.pop()] //shift para primeiro e pop para ultimo
    console.log([dois[0], dois[1]])
}

receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]


console.log(Array(30).fill('_').join(''))
console.log('\nResolução 2:\n')

function receberPrimeiroEUltimoElementoD([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    console.log([primeiroElemento, ultimoElemento])
}


receberPrimeiroEUltimoElementoD([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElementoD([-100, "aplicativo", 16]) // retornará [-100, 16]
console.log(Array(30).fill('_').join(''))