const pessoas = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//objeto é coleção de chave e valor

console.log(Object.keys(pessoas)) //pega chaves de um objeto
console.log(Object.values(pessoas)) // pega valores de um objeto
console.log(Object.entries(pessoas)) //dá arrays com a chave a o valor 

// for each é como se fosse uma mini string para cada elemento e seu valor
Object.entries(pessoas).forEach(e => {
    console.log(`Primeiro elemento (chave): ${e[0]}: (valor) ${e[1]}`)
})

console.log('--------')

Object.entries(pessoas).forEach(([chave,valor]) => { //destructuring
    console.log(`Primeiro elemento (chave): ${chave}: (valor) ${valor}`)
})

Object.defineProperty(pessoas, 'dataNascimento', {  //definir propriedade de um objeto  --- target: pessoas
    enumerable: true, // passivel de ser listada?
    writable: false, // funciona como um freeze, naoa ceita ser sobescrita
    value: '01/01/2019'
})

pessoas.dataNascimento = '01/01/2017'
console.log(pessoas.dataNascimento)

console.log(Object.keys(pessoas))

// Object.assign (ECMAScript 2015)

const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}// como o 'a'  ja existia, será sobescrito
const obj = Object.assign(destino, o1, o2) //contaceta com objeto q passou no 1

console.log(Object.entries(obj))
Object.entries(obj).forEach(([c,v])=>{console.log(c,'->',v)})

Object.freeze(obj)
obj.c = 1234 // esta freezado entao nao muda
console.log(obj) 


