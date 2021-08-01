const list = {a: '1', b: '2', c: '3'}
Object.entries(list).forEach(([chave, valor]) => {
    console.log(chave,valor)
})

console.log(Object.keys(list)) //chave
console.log(Object.values(list))  //valor

console.log(Object.entries(list)) // chave + valor = entries


const listaArray = ['a', 'b', 'c']
listaArray.forEach(e => {
    console.log(e)
})