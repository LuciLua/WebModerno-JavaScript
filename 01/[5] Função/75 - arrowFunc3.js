// this global no node
// this window no console browser

let comparaComThis = function (param){
    console.log(this === param)
}

console.log('param global func normal')
comparaComThis(global) // return true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
// a aprtir de agora o this vai apontar para obj e nao mais para o escopo global

console.log('--------')

console.log('sem param')
comparaComThis() // return false

console.log('--------')


console.log('param obj')
comparaComThis(obj) // aponta para obj por causa do bind | retun true
console.log('--------')

let comparaComThisArrow = param => console.log(this === param) // foi definida dentro de um módulo do node
// cada arquivo do node representa um modulo

console.log('param global npop compara com this arrow function')
comparaComThisArrow(global)  // return false

// node -> um elemento HTML


console.log('---')
console.log('module exports')

comparaComThisArrow(module.exports) // return true

console.log('---')
console.log('-this-')

comparaComThisArrow(this) // return true

// comparaComThisArrow(this)  diferente de comparaComThis(global)
console.log('-----------')


comparaComThisArrow = comparaComThisArrow.bind(obj)

// bind ou arrow function?  arrow function mais poderosa.

comparaComThisArrow(obj) // return false

/** manten-se intacto o fato que o this  aponta para o obejto em que
a função foi escrita e não consegue-se mudar o this. 
*/

comparaComThisArrow(module.exports)  // return true

// O this em uma função Arrow é associado ao contexto em que uma função foi escrita. NÃO VARIA NEM COM BIND






