const nome = new Set()
nome.add('luci')
console.log(nome)

console.log('-------')

const idade = new Map()
idade.set(0, {nome: 'lucia'}).set( 1, {idade: 20})

console.log(idade)
console.log(idade.get(0), idade.get(1))