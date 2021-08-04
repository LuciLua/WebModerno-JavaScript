function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve!', 456)

//quando tme uma funcao construtora, usa operador new, não so o fato
// de criar um objeto, mas o fato de que o prototipo desse objeto criado aponta para a função (no caso aula) .prototype

console.log(aula1, aula2)

// simulando new a partir de uma função

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) //chamar função que passei como parametro para o metodo novo
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)
