const list = new Array(10)


list.push('ola')
list.fill('item')
list.push('ola2')

console.log(list)

const arrays = [['nome', 'idade', 'cep'], ['OLA', 'TCHU', 'HOU'], ['oasd', 'fklfk', 'kffff']]
const novo = [].concat(...arrays)
console.log(novo) // concatenando itens de array dentro de array com operador spread ...
