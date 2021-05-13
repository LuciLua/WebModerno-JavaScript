const prod1 = {}
console.log(prod1,'--->',typeof(prod1), '----> é um objeto vazio')

const loja = {
    camisa: 'cami1',
    calca: 'cal1',
    meia: 'mei1',

    detalhes:{
        cores:['azul','branca', 'preta'],
        gola:['alta', 'baixa'],
        estampa: true
    }
}


console.log('\nQual a cor na casa 2 dentro de detalhes dentro de loja?: ',loja.detalhes.cores[2])

console.log('calca antiga--->',loja.calca)

loja.calca = 'calcaNovaContent'

console.log('calca nova--->',loja.calca)


loja['desconto: '] = console.log(loja)

json = '{"nome": "Camisa Polo", "preco": 79.90}'

console.log('lendo jsnon (que é tipo de arquivo de texto): ',json)

console.log('---------------')


console.log(typeof Object)//printou: function

console.log(typeof new Object)//printou: object
console.log(typeof new Array) //printou: object

const client = function(){}

console.log(typeof client) //era function //printou: function

console.log(typeof new client) //aqui "trasnformado"/"criado", na real: instanciado, em objeto pelo "new" //printou: object


class produto {}
console.log(typeof produto)//printou: function
console.log(typeof new produto()) //printou: object

console.log('criar instancias a partir da palavra reservada new')
console.log('---------------')

const saudacao = 'contexto léxico 1'
function exec(){
    const saudacao = 'contexto léxico 2'
    return saudacao
}

console.log('fora da funcao: ',saudacao,'\ndentro da funcao: ', exec())

console.log('---------------')

const cli = {
    nome: 'Pedro',
    idade: 19 +'anos',
    peso: 50 + 'kg',
    enderecos:{
        rua: 'ipanema',
        numero: 118,
    }
}

console.log('Olá', cli.nome, '!\nVocê tem ',cli.idade,'e pesa',cli.peso,'!!!\nSeu endereço é rua ',cli.enderecos.rua,', número ',cli.enderecos.numero)


console.log('-------------STRINGS-------------')


const escola = 'cod3r'
console.log('1ª letra: ',escola.charAt(0), '\nEssa 1ª letra na tabela ASCII: ', escola.charCodeAt(0))

const nome2 = 'jucia'
console.log(nome2, '----->', nome2.charAt(0), nome2.charAt(1), nome2.charAt(2), nome2.charAt(3), nome2.charAt(4))

console.log(nome2.replace('j', 'l'), '----->', nome2.replace('j','l').charAt(0), nome2.charAt(1), nome2.charAt(2), nome2.charAt(3), nome2.charAt(4))

console.log('--------------')

const frase=["casa","suja", "chão", "sujo", "oi", "não", "oloco", "oi", "seventy"]
console.log('a frase é: ',frase.join(' '), '\n')

const chao = frase[2]
console.log('em qual posição está a palavra ',chao, ':',frase.indexOf('chão'),'\nonde está a ultima palavra oi na frase??', frase.lastIndexOf('oi'))
console.log('oi aparece primeria vez em: ', frase.indexOf('oi'))

console.log('-------------------------')

console.log('Escola '.concat(escola).concat('!'))
console.log('ola'.concat(' mundo!'))

console.log('-------------------------')

const senha = 'senha'

console.log('G É A TAG GLOBAL\N----------------\n', senha.replace(/\w/g, '*'))

console.log('ana,maria,pedro'.split(',')) //split faz virar array dividido por alguma coisa, no ex por ,
console.log('luciaZotavioZhenriqueZ'.split('Z'))

console.log('-------------------------')

su = 'luci'
console.log(`esse é daora
aceita quebra de linha
maneiro demais!
não é mesmo ${su} ?`)
console.log('-------------------------')


console.log('olaaaa lucia'.toUpperCase())
console.log('olASIDJIcia'.toLowerCase())

const frase2 = "UPER CASE AQUI lower case aqui"

const up = texto => texto.toUpperCase()
const low = texto => texto.toLowerCase()
const sub = texto => texto.split(' ').concat( texto.toLowerCase().split(' '))

console.log(`${up(frase2)}, ${low(frase2)}

${sub(frase2)}

`)

// const up = texto => texto.toUpperCase()
// console.log(`Ei... How are you? ${up(frase)}`)



console.log('parei em tipagem fraca')

const meuComando = elemento => elemento.split(' ').join('__')

console.log(`Este é o meu comando! aplicando....`, `${meuComando(`Aplicado bem aqui nesta frase! (esse comando trasforma em array)`)}`)

console.log('-------------------------')

let qualquer  = 'Legal'
console.log(qualquer, '|', typeof qualquer)

console.log('--------------LET EM LOOP-----------')


for (let i = 20; i >= 10; i--){
    console.log(i)
}

console.log('----------VAR EM LOOP---------------')

// const funcs = []
// for (var i = 0; i < 10; i++){
//     funcs.push(function(){
//         console.log(i)
//     })
// }

// funcs[4]()

//var imprimir só o ultimo valor da var i pois var n tem escopo


//se fosse let ia imprimir o valor de vrdd pois o let lembra
console.log('--------------LET EM LOOP EM ARRAY NA FUNCAO-----------')

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()



