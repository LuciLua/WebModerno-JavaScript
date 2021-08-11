Array.prototype.filter2 = function(callback){
    novoArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){ //teste resultado da callback
            novoArray.push(this[i])
        }
    }
    return novoArray
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49,fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const caros = c  => c.preco >= 500
const fragil = f => f.fragil //ja é verdadeiro ou falso

console.log(produtos.filter2(caros).filter2(fragil))