// param para modulo
// se um modulo retorna uma funcao, posso invocar funcao passando os parametros

// ...nomes => arqumento variavel

module.exports = function(...nomes){ // parametros dessa funcao vai se os parmetros do meu modulo
    return nomes.map(nome => `Boa semana ${nome}`)
}


// tudo que eu quiser fazer dentro do modulo, faco dentro da funcao
