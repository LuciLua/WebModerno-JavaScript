// quantidade indeterminada de repetições

// procurar a estrutura de controle mais adequada para cada situações

function getInteiroRandomEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    // fica entre o minimo e  maximo
}

let opcao = 0

// tambem precisa de um verdadeiro ou falso
while (opcao !=  -1){
    opcao = getInteiroRandomEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

// loop entre -1 e 10 até que a condição opcao = -1 seja satisfeita e se encerre o loop

console.log('Até a próxima')