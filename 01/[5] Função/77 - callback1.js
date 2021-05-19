// CALLBACK -> CHAMAR DE VOLTA

/**
 * Padrão de projeto mais utilizado na web: Observer
 * 
 * Pois: JavaScript domina a web
 * e padrão observer é muito utilizado em JavaScript
 * 
 * Utilizado quando você passa uma função, acontece algum tipo de evento
 * e essa função é chamada de volta para fazer alguma coisa
 * 
 */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome} `) // pode ser passada para uma função for each
}

/** callback, passar uma função para outra função
 * e quando determinado evento acontecer 
 * essa função que eu passei vai se disparada, chamada de volta
 * 
 * Essa função callback pode ser chamada varias vezes ou só uma
 * 
 */

fabricantes.forEach(imprimir) // for each é uma função de fabricantes e fabricantes é um array
// para cada elementos que ele encontrar dentro do array, ele vai chamar de volta a função imprimir
 
fabricantes.forEach(function(fabricante){
    console.log('fabricante: ',fabricante)
})

console.log('--------\nCom Arrow Function:\n')

fabricantes.forEach(fabricante => console.log('fabricante: ',fabricante))

//callback é passar uma função e essa função ser chamada quando um evento acontecer.

// evento que aconteceu nesse cenario: o loop: quando encontra um novo elemento ele dispara um evento
// elementos percorridos no array. | na ordem: elemento e indice |

/**
 * Uso de callback muito comum
 */