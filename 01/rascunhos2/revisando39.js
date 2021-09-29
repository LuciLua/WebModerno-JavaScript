const listaLow = require('./fol.json')
const listaWing = require('./fol2.json')

const nomes = []
listaLow.map(e => {nomes.push(e.login)})

const nomesB = []
listaWing.map(e => nomesB.push(e.login))

console.log('seguidores:', nomes.length) // quemk me segue
console.log('Seguindo:', nomesB.length) // quem eu sigop

console.log('Quem eu nao estou seguindo', nomes.filter(e => nomesB.includes(e)  == false ))
// dentro de quem eu sigo, está incluso algum nome de seguidor?
// se for falso, retorne o que torna isso falso