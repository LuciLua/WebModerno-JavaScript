const moduleA = require('../modules/moduleA')
// aramzenando o que exportei do module dentro de uma constante
const moduleB = require('../modules/moduleB')


console.log(moduleA.ola)
console.log(moduleA.bemVindo)
console.log(moduleA.ateLogo)
console.log(moduleA) // reparar que transforma tudo que expotei do moduleA em objeto, mesmo não tendo feito tudo em objeto la


console.log(moduleB.bomDia)
console.log(moduleB.boaNoite())

