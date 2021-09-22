console.log('Fora de uma funcao')
console.log('this === global: ', this === global) // false pois this aponta para module.exports
console.log('this === module: ', this === module) //false

console.log('this === module.exports: ', this === module.exports) //true
console.log('this === exports: ', this === exports) //true

function logThis() {
    console.log('Dentro de uma funcao')
    console.log('this === exports: ', this === exports) // false, dentro de uma funcao o this n aponta p exports
    console.log('this === module.exports: ', this === module.exports) //false

    console.log('this === global: ', this === global) //true

    this.perigo = '...' // estou colocando isso dentro do escopo global
    // transformando em algo publico, que sera visivel fora do modulo
}

this.perigo = ',,.,.,.,' // retornando para module.exports

logThis()
