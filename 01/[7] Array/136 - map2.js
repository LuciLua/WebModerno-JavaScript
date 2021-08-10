const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços

const paraObj = json => JSON.parse(json)
const apenasPreco = e => `R$${parseFloat(e.preco).toFixed(2).replace('.', ',')}`


let precos = carrinho.map(paraObj).map(apenasPreco)

console.log(precos)