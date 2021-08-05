// Object.preventExtesions 
const produto = Object.preventExtensions({ //não consigo add mais nehuma tributo neste objeto mas consigo excluir
    nome: 'qualquer', 
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //nao da pois preventExtensions

delete produto.tag
console.log(produto)

// Object.seal
//selar

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa) // não consegue add novoas atributos, nao consegue excluir atributos do objeto, mas consegue modificar os valores dos atributos do objeto

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 33

console.log(pessoa)


// Object.freeze = selado + valores constantes

// nao consegue, modificar, excluir nem adicionar

const prod2 = Object.freeze({
    nome: 'Teclado',
    preco: 699,
    marca: 'Keychron'
})

prod2.nome = 'Mouse'
prod2.cor = 'branco'
delete prod2.marca

console.log('Freeze:', Object.isFrozen(prod2))

console.log(prod2)