Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços

const paraObj = json => JSON.parse(json)
const apenasPreco = e => `R$${parseFloat(e.preco).toFixed(2).replace('.', ',')}`


let precos = carrinho.map2(paraObj).map2(apenasPreco)

console.log(precos)



Array.prototype.criative = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const luci = ['{"nome": "Luci", "idade": 20, "hobby": "Programar", "estuda": true}']

let create = luci.criative(paraObj)
console.log(create[0])

const nome = create[0].nome

console.log(nome)