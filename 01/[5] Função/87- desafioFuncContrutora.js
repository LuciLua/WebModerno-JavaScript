// class Pessoa {
//     constructor(nome){
//         this.nome = nome
//     }

//     falar(){
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }


// const luci = new Pessoa('lucia')
// luci.falar()


// nao é uma contrutora

// const pessoa = (nome) => {
//     const falar = () =>  'Olá mundo'
//     return(`${nome} disse: ${falar()}`)
// }
// console.log(pessoa('lúcia'))
// console.log(pessoa('pedro'))

// função construtora

function Pessoa(name, jeito){
    this.name = name
    this.jeito = jeito
    this.falar = function(){
        console.log(`Meu nome é ${this.name}`)
    }
    this.falarMalouBem = () => console.log(`${this.name} é uma pessoa muito ${this.jeito}`)
}

const p1 = new Pessoa('Lúcia', 'legal')
const p2 = new Pessoa('João', 'chata')
const p3 = new Pessoa('Pedro', 'chata')
p1.falarMalouBem()
p2.falar()
p3.falarMalouBem()

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// poso criar objeto a partir de uma função construtora
// posso criar objetos a partir de uma classe
// posso criar objetos a partir de uma função factory
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!