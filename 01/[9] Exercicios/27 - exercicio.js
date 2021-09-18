function inverter(obj){
    const newObj = {}
    Object.entries(obj).forEach(keyValue => {
        const key = 0,
        value = 1

        newObj[ keyValue[value] ] = keyValue[key] // ???
    })

    console.log(newObj)
}

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

// Solucao 2

function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )

    console.log( Object.fromEntries(paresDeChaveValorInvertidos)
    ) // fromEntries?
}

inverter2({ a: 5, b: 2, c: 9}) // retornará { 1: "a", 2: "b", 3: "c"}