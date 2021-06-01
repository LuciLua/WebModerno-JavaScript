function calc(valorA, valorB){
    const som = () => (valorA + valorB)
    const sub = () => (valorA - valorB)
    const mul = () => (valorA * valorB)

    return(console.log(`Soma: ${som()}\nSubtração: ${sub()}\nMultiplicação: ${mul()}`))
}

calc(10,2)