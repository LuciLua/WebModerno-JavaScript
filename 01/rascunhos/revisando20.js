const listaFrutas = ['uva', 'maçã', 'pera']
const listaBiscoitos = ['maisena', 'creme-chaque', 'negresco']

function concatenar (...args) {
    listaDeCompras = []
    // for(let i = 0; i<arguments.length; i++){
    //     listaDeCompras = listaDeCompras.concat(arguments[i])
    // }



    return listaDeCompras;
}

console.log('Lista de compras: ', concatenar(listaFrutas, listaBiscoitos))






// arguments -> array interno de uma função, que tem todos os argumentos que foram passados
// dentro da função tem como recuperar parametros a partir de uma propriedade chamada ARGUMENTS
// toda função tem esse array disponivel
// quando nenhum parametro é passado esse array esta vazio

function soma() {
    let soma = 2
    for(i in arguments){ // dependendo de quantos paramentros tem, ele faz o loop dependendo dessa quantidade

        // a partir desse indice, consigo fazer arguments {} acessando indice de cada um dos elemtnos que foram passados com argumento para essa função.
        console.log('ola')
        soma += arguments[i]
    }
    return soma
}

// console.log(soma())
// console.log(soma('o'))
console.log(soma(1.1, 2.2, 2.3, "concatena com o teste, e não soma",' oalsd', 'kdkdqwk'))
// console.log(soma('a', 'b', 'c'))








console.log('-------------')

// !!!!!!!!!!Blocos de else e else if só executam se nenhuma das condições anteriores tiver sido atendida.!!!!!!!!!!!!!!!!

var numeroA = 100;
if(numeroA <= 100) {
    console.log("menor ou igual a 100");
} if(numeroA < 1000) {
    console.log("menor que 1000");
} if (numeroA < 1000){
    console.log("menor que 10000");
}

console.log('------\nElse if:\n')

var numero = 100;
if(numero <= 10) {
    console.log("menor ou igual a 100");
} else if(numero < 100) {
    console.log("menor que 1000");
} else if(numero < 10000){
    console.log("menor que 10000");
}

console.log('-------------')


function teste(){
    let num = 0
    
    for (i in arguments){
    num += arguments[i]
    }
    console.log(num)
}


teste('ola', 'tchau', 'by')// concatena
teste('', '')//0
teste('') //0

teste(2, 4) // soma =>  num + 2 + 4 = 6
