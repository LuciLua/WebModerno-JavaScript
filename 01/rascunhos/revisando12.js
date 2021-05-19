arrayNomes = ['luci', 'fabi', 'joao', 'nicol', 'cat', 'cintia', 'jeovana', 'filipe']

function imprimeNomes(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

arrayNomes.forEach(imprimeNomes)