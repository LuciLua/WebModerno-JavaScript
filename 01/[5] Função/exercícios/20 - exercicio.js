function sacarDinheiro(valorSaque) {
    let quantidadeNotas100 = 0
    let quantidadeNotas50 = 0
    let quantidadeNotas10 = 0
    let quantidadeNotas5 = 0
    let quantidadeNotas1 = 0

    function calcularValorNota(valorSaque) {
        // passa por todas as notas dependendo do valor que inseriu, mas nunca saindo dos valores disponiveis na nota. pega sempre o mais algo valor.
        if (valorSaque >= 100) {
            return 100
        } else if (valorSaque >= 50) {
            return 50
        } else if (valorSaque >= 10) {
            return 10
        } else if (valorSaque >= 5) {
            return 5
        } else if (valorSaque >= 1) {
            return 1
        }
    }

    let valorNota = calcularValorNota(valorSaque)
    // armazena o retorno da função em um variavel

    while (valorSaque >= valorNota) {
        //quanto o valor do saque for maior ou igual ao valor da nota que foi retornada; ficar num loop até que o valor do saque seja menor do que o da nota. esse loop ira acontecer acrescentando notas e dminuindo do valor inserido no switch
        switch (valorNota) {
            // ex.: caso for retorno 100, | acrescentar 1 nota de 100 | e | diminuir '100' do valor inserido | 
            case 100:
                quantidadeNotas100++
                valorSaque -= 100
                break
            case 50:
                quantidadeNotas50++
                valorSaque -= 50
                break
            case 10:
                quantidadeNotas10++
                valorSaque -= 10
                break
            case 5:
                quantidadeNotas5++
                valorSaque -= 5
                break
            case 1:
                quantidadeNotas1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    
    return elaborarResultado(quantidadeNotas100, quantidadeNotas50, quantidadeNotas10, quantidadeNotas5, quantidadeNotas1)
}


function elaborarResultado(quantidadeNotas100, quantidadeNotas50, quantidadeNotas10, quantidadeNotas5, quantidadeNotas1) {
    let resultado = ''
    
    if (quantidadeNotas100 > 0) {
        resultado += `${quantidadeNotas100} nota(s) de R$ 100. `
    }

    if (quantidadeNotas50 > 0) {
        resultado += `${quantidadeNotas50} nota(s) de R$ 50. `
    }

    if (quantidadeNotas10 > 0) {
        resultado += `${quantidadeNotas10} nota(s) de R$ 10. `
    }

    if (quantidadeNotas5 > 0) {
        resultado += `${quantidadeNotas5} nota(s) de R$ 5. `
    }

    if (quantidadeNotas1 > 0) {
        resultado += `${quantidadeNotas1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(230));