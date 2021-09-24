const sequence = {
    _id: 1,
    get id() {return this._id++} // vai retornar sempre o prox valor de id
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id // se id do prod não estiver setado, defina um id para o produto
    produtos[produto.id] = produto // se produto ja estiver setado, substitui pela versao mais nova
    // valor é o proprio produto
    // caso nao, ele adiciona um novo etributo dentro de produtos
    return produto // esse produto retornado ja tem o id
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos) // retorna todos os valores do objeto produtos
}

module.exports = { salvarProduto, getProduto, getProdutos }