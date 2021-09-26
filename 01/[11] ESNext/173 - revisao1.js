// revisao

// novos recurosos 15, 16, 17

// ecmascript => nome oficial da linguagem javascript
// javascript nome que atende a essa especificação

// especificação ECMA


// let e const 
// surgiu na ES6, palavras reservadas para definir variaveis


// antes: var
// escopo de funcao ou escopo global

//let: - escopo de bloco
// bloco(laço for, bloco if...)
// - escopo global (herdado do var)
// - escopo de funcao (herdado do var)


// var a nao tem escopo de bloco:
// let b tem escopo de bloco entao nao da pra pegar fora
{
    var a = 2
    let b = 3
    console.log(b) // so funciona dentro do bloco
}

console.log(a)
// console.log(b)


// template string
// comporta quebra de linha

const produto = 'Ipad'
console.log(`meu produto é o:
>_ ${produto}
é caro!`)

// Destructuring

// tirar de uma estrutura, algo

// desestructuring string
const [o, l, aa, espaco, ...tras] = 'ola mundooooo'
console.log(tras)

// desestructuring array
const [x, ,y] = [9,8,7]
console.log(x,y)

// desestructuring objeto
const pessoas = [{nome: 'ana', idade: 23}, {nome: 'pedro', idade: 33}, {nome: 'roberta', idade: 22}]

const { nome: n, idade: i } = pessoas[1] // posso renomear colocando antigo: novo
console.log(`nome: ${n}
idade: ${i} anos`)
