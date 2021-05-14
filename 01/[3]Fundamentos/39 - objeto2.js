console.log(typeof Object)
console.log(typeof new Object) //objeto criado a partir de uma funcao
    //instaciada pelo new
console.log('--------------')

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log('--------------')

class Produto {} //funcao exerce papel de uma classe,   //ES 2015 (ES6)
//que define o moldee da estrutura

console.log(typeof Produto)
console.log(typeof new Produto())

//posso criar instancias 
//a apartir da palavra reservada new
//posso criar instancias de funcoes que eu defini
//ou criar instancia a partir de uma classe

//funcoes podem ter atributos ou comportamentos e podem ser instanciadas