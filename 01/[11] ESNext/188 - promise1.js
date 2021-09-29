// promise: promessa


let a = 1
console.log(a)

// algo que vai ser executado no futuro
// algo que vai ser devolvido  no futuro

console.log('typeOf Promise: ', typeof Promise) // function

// let p = new Promise() // cria um objeto

let p = new Promise(function(resolve){
    resolve([
        'IsadoraX', 'CarlosX', 'DanielX', 'AnaX'
    ]) // promessa pode passar apenas 1 unico valor (ignora o 9)
})

console.log(typeof p) //  object
console.log(p)



p.then(function(valor){
    console.log(valor)
}) // funcao é chamada quando a promessa for cumprida

// posso colocar funcao de fora

const replaceX = array => array.replace(/X/g, 'Y')

const concatNoFinal = array => array.concat(' concatNoFINAL')


// forma reduzida:
p
.then(alfabetic => alfabetic.sort())
.then(junta => junta.join(', '))
.then(maiuscula => maiuscula.toUpperCase())
.then(replaceX)
.then(concatNoFinal)
.then(console.log) // <= posso fazer so isso

