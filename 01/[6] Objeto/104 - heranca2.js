// Cadeia de Prototipos (prototype chain)

Object.prototype.attr0 = 'Z' // NÃO FAZER ISSO. evitar

const avo = { attr1: 'A'}

const pai = { __proto__: avo, attr2: 'B', attr3: 'O'}

const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3) // sombreamento: sobescreveu
console.log(filho.attrA)

console.log('------------')

const carro ={
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.modelo}: ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing (vai sobescrever o velMax do 'carro')
}

const tesla = {
    modelo: 'T40',
    status(){
        return `${super.status()}` // super para referenciar o prototipo. sombreando função status a partir do objeto tesla
    }
}

Object.setPrototypeOf(ferrari, carro) //estabelecer relação de prototipo 
// ferrari vai ter como prototipo: carro
console.log(ferrari)

Object.setPrototypeOf(tesla, carro) //estabelecer relação de prototipo 
tesla.acelerarMais(120)
console.log(tesla.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())

