function removerPropriedade(obj, nomePropContidaNoObj){
    const copia = {...obj} // ... ?
    delete copia[nomePropContidaNoObj]
    console.log(copia)
}

removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

const obj = {nome: 'luci', idade: 20, vacinada: false, estuda: true}
removerPropriedade(obj,'idade')

console.log(Array(30).fill('_').join(''))
console.log('\nResolução 2:\n')

function removerPropriedadeD(obj, nomePropContidaNoObj) {
    const copia = Object.assign({}, obj) //asign?
    delete copia[nomePropContidaNoObj]
    console.log(copia)
}

removerPropriedadeD(obj,'idade')