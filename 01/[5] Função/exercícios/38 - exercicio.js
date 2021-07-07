function func(inicio = 0, fim = 100){
    const impares = []
    if (inicio > fim){
        inicio = fim + inicio

        fim = inicio - fim // transforma fim em inicio retirando o fim antigo do novo inicio
        inicio = inicio - fim // coloca o valor verdadeiro para o inicio 

        console.log('transformado!')
    }
    for (let i = inicio; i <= fim; i++){
        if (i%2 == 1){
            impares.push(i)
        }
    }
    return console.log(impares)
}

func(100,0)