// objeto: coleção dinamica de pares chave/valor

// forma de criar objeto a partir do operador new
// chamando uma função: Object é uma função
// quando usa função com o new => função construtora.
// a partir disso instancia um objeto

const produto = new Object
produto.nome = 'Cadeira' //notação ponto
produto['marca do produto'] = 'Generica' //notação com array: possibilita nome com espaços

produto.preco  = 220
console.log(produto)

delete produto.preco
console.log(produto)

delete produto['marca do produto']
console.log(produto)



const carro = {
    modelo: 'A4',
    valor: 84000,
    proprietario: {  // atributo objeto dentro de objeto
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{  //atributo array
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){ //pode ter função dentro de objeto
        //...
    } 
}

console.log(carro.proprietario.endereco.numero = 1000)
console.log(carro['proprietario']['endereco']['logradouro'] = 'Av Gigante') // acessar dados
// de um objeto a partir de um algoritmo; ler e acessar atributos 

console.log(carro)

// delete carro.condutores 
console.log(carro)


delete carro.proprietario.endereco
console.log(carro)


delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) 

// importante verificar se variavel esta definida ou nao para so ai 
// acessar atributos de um determinado objeto

// se objeto estiver nulo ou indefinido nao ér possivel acessar propriedade


