// mudando ID para o proximo
const sequence = {
    _id: 1,
    get id() {return this._id++} // vai retornar sempre o prox valor de id
}

// armazenar produtos dentro de um objeto
const produtos = {}

// salvar produto
function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id // se id do prod não estiver setado, defina um id para o produto
    produtos[produto.id] = produto // se produto ja estiver setado, substitui pela versao mais nova
    // valor é o proprio produto
    // caso nao, ele adiciona um novo etributo dentro de produtos
    return produto // esse produto retornado ja tem o id
}

// produtos por id
function getProduto(id){
    return produtos[id] || {}
}

// todos os produtos
function getProdutos(){
    return Object.values(produtos) // retorna todos os valores do objeto produtos
}

// deletar produto
function deleteProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// exportando
module.exports = { salvarProduto, getProduto, getProdutos, deleteProduto }

// sempre que criar uma função, preciso exporta-la para poder usa-la