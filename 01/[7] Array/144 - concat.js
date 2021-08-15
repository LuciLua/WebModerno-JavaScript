//concatenar arrays, elementos...

const filhas  = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano') //posso concatenar arrays e elemntos num mesmo concat

console.log(todos)

console.log(['a', 'b'].concat([1,2], [3,4], 5, [[6,7]])) // array originais n são modificados