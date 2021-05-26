// Meu desafio

var pessoa = {
    tipo: 'humano',
    nomeclatura: '',
    nome: 'NomeDefault',
    sobrenome: 'SobrenomeDefault'
}

var createPeople = () => [pessoa.tipo, pessoa.nomeclatura = 'H', pessoa.nome, pessoa.sobrenome]

console.log('Pessoas:')

console.log('pessoa: ',(createPeople([pessoa.tipo, pessoa.nomeclatura, pessoa.nome, pessoa.sobrenome])))

console.log('pessoa: ',(createPeople([pessoa.tipo, pessoa.nomeclatura, pessoa.nome = 'Luci', pessoa.sobrenome = 'Lua'])))

console.log('pessoa: ',(createPeople([pessoa.tipo, pessoa.nomeclatura, pessoa.nome = 'Pato', pessoa.sobrenome = 'Donald'])))

// Fim do meu desafio


function createProduct(nome, preco){
    return{
        nome, 
        preco,
        desconto: 0.1
    }
}
console.log('Produtos')
console.log(createProduct('Notebook', 2199.49))
console.log(createProduct('Ipad', 100.00))