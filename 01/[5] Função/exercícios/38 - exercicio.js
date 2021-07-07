function func(inicio, fim){
    const impares = []
    for (let i = inicio; i <= fim; i++){
        if (i%2 != 0){
            impares.push(i)
        }
    }
    return console.log(impares)
}

func(0,100)