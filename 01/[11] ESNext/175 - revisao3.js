// ES8: (versao de 2017)> Object.values/Object.entries

const objeto = {name: 'luci', age: 20, like: 'music'}

console.log(Object.keys(objeto)) // pega chaves
console.log(Object.values(objeto)) // pega valores
console.log(Object.entries(objeto)) // pega chave valor (array com outros arrays)


// melhorias na notacao literal


const nome = 'Carla'
const pessoa = {
    nome, // nao precisa tribuir valor
    ola(){
        return 'Oi gente!'
    } // nao precisa colocar palavra function
}

console.log(pessoa.nome, pessoa.ola())


// Class

class Animal {}
// heranca por prototipo
class Cachorro extends Animal {
    falar(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())