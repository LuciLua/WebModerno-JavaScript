function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// quando cria um objeto a partir de uma função construtora usando new, o prototipo desse objeto aponta para a função
// que criei .prototype 


console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anon'
//qualquer objeto que for criado a ártir dessa funcao construtora, vai ter dentro dele (no pai dele) vai ter o atributo nome;


MeuObjeto.prototype.falar= function(){
    console.log(`bom dia meu nome é ${this.nome}!`)
}

MeuObjeto.prototype.falar()

obj1.falar()
obj2.falar()

console.log(obj2.nome) //anon
obj2.nome= 'Rafael'
console.log(obj2.nome) //rafael (sobescrito)

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


//resumindo....


console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)


console.log(MeuObjeto.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)
