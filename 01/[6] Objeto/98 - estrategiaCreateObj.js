//formas diferentes de se criar objeto

// usando notação literal
obj1 = {}
console.log(obj1)


// Object em JS
console.log(typeof Object, typeof new Object) //obj criado a partir de uma funçã construtora
const obj2 = new Object
console.log(obj2)


// Funções Construtoras
function Produto(nome,preco,desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto())

console.log(p1.nome) // visivel com this
console.log(p1.preco) // invisivel pois não tem o this

console.log(p2.getPrecoComDesconto())


// encapsulamento: diminuir o maximo o nivel de visibilidade de uma variavel 

//let e const visibilidade apenas no bloco
//no browser: window: escopo global | escopo da função | e escopo de bloco a partir de variaveis definidas com let e const



// Função Factory (factory => padrão de projeto. Ela cria alguma coisa)
// no caso> ela vai fabricar objeto

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario())
console.log(f2.getSalario())


// Objeto a partir do Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)


// Uma função famosa que retorna um objeto:
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON.info)
