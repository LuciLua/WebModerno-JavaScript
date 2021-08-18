function estaEntre(numero, minimo, maximo, inclusivo=false){
    if(minimo > maximo){
        maximo = minimo + maximo
        minimo = maximo -  minimo
        maximo = maximo - minimo
    }

    console.log(`mínimo: ${minimo} | número: ${numero} | máximo: ${maximo} | Está entre? =>`, inclusivo ? (numero >= minimo && numero <= maximo) + ' | aceita igual ' : numero > minimo && numero < maximo)
}


estaEntre(10,0,100) //ok
estaEntre(10,100,0) //ok invertido

estaEntre(100,100,0) //ok invertido com igual: recusa
estaEntre(100,100,0,true) //ok invertido com igual: aceito

estaEntre(10,10,100) //igual: recusa
estaEntre(10,10,100, true) //igual: aceito