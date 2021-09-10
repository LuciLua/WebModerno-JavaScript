function funcaoDaSorte(numero){
    var random = (Math.random()*10).toFixed()
    if (numero == random){
        console.log(`Parabéns! O número sorteado foi o ${random}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${random}`)
    }
}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)