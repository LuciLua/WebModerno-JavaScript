function precoPlano(idade){
    var custoFixo = 100
    var custoAdicional = 0

    if (idade < 10){
        custoAdicional = 80
    } else if (idade < 30){
        custoAdicional = 50
    } else if (idade < 60) {
        custoAdicional = 95
    } else if (idade > 60){
        custoAdicional = 130
    } else{
        console.log('Custo adicional inválido')
    }
    let custoTotal = (custoFixo + custoAdicional)
    console.log(`Custo total: R$${custoTotal},00`)
}
precoPlano(36)