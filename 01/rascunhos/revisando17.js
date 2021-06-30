function enquanto(valor){
    
    let quantidade = 0 

    let valorJogo = jogo(valor)

    function jogo(valor){

        if (valor >= 100){
            return 100
        } else if (valor >= 50){
            return 50
        } else if (valor >= 0){
            return 0
        }
    }

    while (valor >= valorJogo){
        switch (valorJogo){
            case 100:
                valor -= 50
                quantidade += 2
                break
            case 50:
                valor -= 5
                quantidade++
                break
            case 0:
                valor -= 0
                break
        }
    }

    return ('quantidade é '+ quantidade + ' e o valor que sobra é: ' + valor)
    // 300 sendo diminuido ate que seja menor que 100

    }

console.log(enquanto(300))