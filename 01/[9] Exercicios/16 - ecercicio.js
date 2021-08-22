function checarAnoBissexto(ano){
    const multiploQuatro = ano % 4 == 0
    const multiploCem = ano % 100 == 0
    const multiploQuatrocentos = ano % 400 == 0
    // if (multiploQuatro && !multiploCem) console.log(true)
    // else if (multiploQuatro && multiploQuatrocentos && multiploCem) console.log(true)
    // else {console.log(false)}
    console.log(multiploQuatro && !multiploCem || multiploQuatrocentos)
}


checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400


// resolucao 2:

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissextoD(ano) {
    console.log(new Date(ano, 1, 29).getDate() === 29)
}

checarAnoBissextoD(2020) // retornará true
checarAnoBissextoD(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400