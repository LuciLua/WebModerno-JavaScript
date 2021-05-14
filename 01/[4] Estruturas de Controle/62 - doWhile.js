// inverte a logica do while
// pouco usada

function getInteiroRandomEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

// mesmo que opcao seja -1, ele vai executar a primeira repeticao
do {
    opcao = getInteiroRandomEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao !=  -1)

console.log('Até a próxima')