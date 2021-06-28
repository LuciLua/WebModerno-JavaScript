function enquanto(valor){
    
    let vitorias = 0
    let derrotas = 0

    let jogoEnquanto = jogo(valor)

    function jogo(valor){
        if (valor >= 60){
            vitorias++
        }
        else if (valor >= 40){
            vitorias += 0.5
        }
        else if (valor >= 0){
            derrotas++
            // vitorias--
        }
        
        return (vitorias)
    }
    
    while (jogoEnquanto < 1){
        console.log(jogoEnquanto)
        jogoEnquanto += 0.5
    }

    return (jogo(valor) + ' pontos antes \n' + jogoEnquanto + 'Pontos agora')
}

console.log(enquanto(10))