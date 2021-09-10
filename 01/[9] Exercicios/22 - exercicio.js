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


// outra resolucao

/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function funcaoDaSorte2(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return (numeroEscolhido === numeroAleatorio ?
    `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
    `Que pena, o número sorteado foi o ${numeroAleatorio}`
    )
}

console.log(funcaoDaSorte2(10))
console.log(funcaoDaSorte2(5))
console.log(funcaoDaSorte2(5))