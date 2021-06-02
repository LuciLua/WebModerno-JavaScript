function divi(dividendo, divisor){
    let result = dividendo/divisor
    let resto = dividendo%divisor
    return console.log(result.toFixed(2),'|' ,resto.toFixed(2))
}
divi(9,5)

// outra forma: com arrowfunction, reduzida, limpa

const div = (dividendo, divisor) => console.log((dividendo/divisor).toFixed(2), '|', (dividendo%divisor).toFixed(2))
div(9,5)