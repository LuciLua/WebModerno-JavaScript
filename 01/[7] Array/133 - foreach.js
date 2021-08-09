// algumas formas de percorrer um array:
// for, foreach, map, filter, reduce....


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)

})// 'function' é uma callback; que sera chamada para cada nova interação no array. ou seja apra cada elemento que for percorrido.


//com array function
aprovados.forEach((nome, indice, array) => {
    console.log(`nome: ${nome}\nindice: ${indice}\narray: ${array}`)
})

console.log(`----`)

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

console.log(`----`)

const numeros = ['uma', 'duas', 'tres', 'quatro']
const exibe = (numero, indi) => console.log(numero, `- indice?`, indi);
numeros.forEach

(exibe)


// a função callback que passa para um foreach recebe 3 parametros:
// nome, indice, array



