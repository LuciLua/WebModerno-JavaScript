const persons = [ // array de objetos
    {
        name: 'Pedro',
        age: 35,
        from: 'Italy',
        cars:[
            'Volvo',
            'Ferrari',
            'Tesla'
        ],
        fala: 'Hello'   
    },
    {
        name: 'Julia',
        age: 10,
        from: 'Germany',
        cars:[
            'Barbie',
            'SuperMario',
            'Ratiouiuls'
        ],   
    }
]
const Animals = [ // array de objetos
    {
        name: 'Urso',
    },
    {
        name: 'Gorila',
    }
]


const getNome = person =>  person.name // name de cada person dentro de algum objeto
const getCars = person =>  person.cars // cars de cada person dentro de algum objeto

const nomes = persons.map(getNome).concat(Animals.map(getNome))
const carros = persons.map(getCars)


console.log(nomes)
console.log(carros)


const person = new Object
person.nome = 'Luci'
person.idade = 20
person.programadora = true

person.hidratada = false
delete person.hidratada

console.log(person)


console.log('-----------------')


function Produto(name, peso, preco){
    this.name =  name
    this.peso =  peso
    this.preco =  preco
}

const getPreco = produto => produto.preco

const produtoA = new Produto('caneca',33, 100.99)
const produtoB = new Produto('desodorante',10, 15.50)
const produtoC = new Produto('cadeira',200, 3000)

console.log(produtoA, produtoB, produtoC)
console.log(getNome(produtoA))
console.log(`Preço total: R$${(getPreco(produtoA)+getPreco(produtoB)+getPreco(produtoC)).toFixed(2).replace('.', ',')}`)

console.log('-----------------')


