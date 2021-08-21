function objetoParaArray(obj){
    const array = []
     for (let i in obj){
         array.push([i, obj[i]])
     }
    console.log(array)
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]

//resolucao 2
function objetoParaArrayD(obj){
    const chaves = Object.keys(obj)
    array = chaves.map( chave => [chave, obj[chave]]) // retorna, dentro de u array, as chaves e o valor da chave que pertence a posição  chave no objeto (obj[chave])

    console.log(array)
}

objetoParaArrayD({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArrayD({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
   
//resolucao 3
function objetoParaArrayT(obj){
        console.log(Object.entries(obj))
}

objetoParaArrayT({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArrayT({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
