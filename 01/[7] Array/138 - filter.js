//formas de filtrar uam estrutura, um array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49,fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

// console.log(produtos.filter(function(p){
//     // algum tipo de logica que retornara ou verdadeiro ou falso
//     return p.preco > 2500
// }))

// console.log(produtos.filter(function(p){
//     return p.nome == 'Notebook'
// }))

const caros = c  => c.preco >= 500
const fragil = f => f.fragil //ja é verdadeiro ou falso

console.log(produtos.filter(caros).filter(fragil))


