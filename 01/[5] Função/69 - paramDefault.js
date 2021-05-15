// estrategia 1 para gerar valor padrão

// usar o operador OU ||

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))
// 0 0 0 retorna falso, entao nao da  BUG

//-----

// estrategia 2 para gerar valor padrão

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    // com o arguments, se fosse na 3 posição (c) teria que ser o indice dois 
    b = 1 in arguments ? b : 1
    // dentro de arguments existe o indice 1?
    // ja que o primeiro argumento é de indice zero

    // 3 estrategia
    c = isNaN(c) ? 1 : c
    // se sim, o c for um não number, retorna 1. se for um number, retorna c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2 , 3), soma2(0,0,0));

function somaA(a,b,c){
    a = 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1
    return a + b + c
}

console.log(somaA())


// valor padrão do es2015
// mais adequada

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))



