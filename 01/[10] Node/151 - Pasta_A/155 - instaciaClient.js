const contadorA = require('../155 - instanciaUnica')
const contadorB = require('../155 - instanciaUnica')

const contadorC = require('./155 - novaInstancia')() // invocando a funcao factory
const contadorD = require('./155 - novaInstancia')()


// Objeto exportado do node, e feito cache dele

contadorA.increment()
contadorA.increment()
console.log('A:', contadorA.valor)
console.log('B:', contadorB.valor)

console.log('---------------')

// novas isntancias criadas a partir de uma factory

contadorC.increment()
contadorC.increment()
console.log('C:', contadorC.valor)
console.log('D:', contadorD.valor) // D nao foi alterado pois mechi no C
