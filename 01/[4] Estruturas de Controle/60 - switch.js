//switch para muitas seleções, seleções multiplas
// switch -> na expressao no switch , não retorna verdadeiro ou falso.

// efeito que acontece no switch padrão --> "Fall True" executa o primeiro e sai executando todos abaixo
// sem o break executa o primeiro e todos em baixo dele
// para nao acontecer isso, sair do switch --> palavraa reservada BREAK


// break --> sai do bloco associado ao switch

// default é como um else


const printResult = function(nota){
    switch (Math.floor(nota)){
        case 10:
            console.log('------')
            console.log('Tirou 10')
            console.log('Quadro de Honra')
            console.log('------')
            break
        case 9:
            console.log('------')
            console.log('Tirou 9')
            console.log('Quadro de Honra')
            console.log('------')
            break
        case 4:
            console.log('------')
            console.log('Tirou 4')
            console.log('Reprovado')
            console.log('------')
            break
        case 7:
            console.log('------')
            console.log('Tirou 7')
            console.log('Na média')
            console.log('------')
        case 22: case 33:
            console.log('------')
            console.log('22 ou 33 - LOL')
            console.log('------')
            break
        default:
            console.log('------')
            console.log('Nota inválida')
            console.log('------')
            // default é como um else
            break
    }
    console.log('!!! Successful Operation !!!')
}
printResult(4)
printResult(10)
printResult(99)
printResult(22)
printResult(33)