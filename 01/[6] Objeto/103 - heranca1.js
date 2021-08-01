// herança é um principio do OO, que vfz com que voce receba do seu "pai" atributos e comportamentos, e voce reuse codigos.
// so tem 1 pessoa que pode servir de classe pai
//herança baseada em prototipos;
// percorrer toda a hierarquia de prototipos ate achar oque quer
// pai, avo, bisavo....
// se nao achar: undefinned
// se achar: devolte o valor

// atributo prototype só esta disponivel dentro de uma função

//[[prototype != prototype]]

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const tesla = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
// __proto__ => consigo acessar quem é o prototipo desse objeto
// quem seria o super objeto, o objeto pai
// se ele n achou, vai procurando no prototipo do prototipo do prototipo...
// vai procurando em toda a cadeia de prototipos

console.log(ferrari.__proto__ === Object.prototype)
console.log(tesla.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__) // prototipo mais alto que prototype?
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)