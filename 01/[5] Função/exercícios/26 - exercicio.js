function pares(){
    const numerosPares = []
    for (let i = 1; i <= 100; i++){
        i%2 == 0 ? numerosPares.push(i) : null
    }
    return console.log('numeros pares entre 1 e 100: \n',numerosPares)
}
pares()