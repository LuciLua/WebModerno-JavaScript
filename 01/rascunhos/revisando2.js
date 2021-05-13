const imprimirSoma = function(a,b){
    return a+b
}

console.log("a + b = ", imprimirSoma(10,5))
console.log(imprimirSoma,'---->' , !!imprimirSoma)

console.log('--------------')


/*
Armazenando funcao em uma const mais reduzida
*/

const soma = (a,b) =>{
    return a+b
}

console.log('a + b = ',soma(20,1))

/*
Mais reduzido ainda:
*/

console.log('--------------')


const subtracao = (a,b) => a-b
console.log("a - b = ", subtracao(10,3))

console.log('--------------')


let num = (q,w,e,r) => ((q + w)/(e + r))

console.log('(q + w / e + r) = ',num(4,2,5,1))

console.log('--------------')


let numD = (x,z,y) => ((x+z)+(x+y))/y
console.log(numD(10,3,6))

console.log('--------------')

const print = (a) => console.log(a)

print('Olá Mundo')


console.log('--------------')


class Prod{}

console.log(typeof Object, typeof Prod)

console.log('-------hoiting---içamento----')

console.log('a = ',a)
 
var a = 34 //com let nao dá

console.log('a = ',a)

console.log('--------loooooop------')


for (let x = 0; x < 10; x++){
    console.log(x)
}


console.log('--------loooooop------')


const funcs = []
for (let i = 9; i < 20; i++){
    funcs.push(function(){console.log(i)})
}

console.log(funcs.join('\n--------------------------\n [X] - '))


funcs[0]()
funcs[1]()
funcs[2]()
// ...
funcs[10]()


console.log('--------mathhhhh------')


var t = 4
var q = Math.pow(t,2)
console.log('t ao quadrado = ',q)


console.log('9 elevado a 2 = ', Math.pow(9,2))

console.log('Valor de PI = ',Math.PI)


// area de uma circunferência: A = PI * r²


const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log('area da circunferência: ',area.toFixed(2))

console.log('Valor de PI = ',(Math.PI).toFixed(2))

// .toFixed ---> para limitar as casas

console.log('--------nulo e talz-----')

const produto = {}
produto.nome="jaqueta"
produto.preco=(Math.PI).toFixed(2)
produto.cor="preta"
console.log('Informação sobre o produto: ',produto)

delete produto.preco //deletando valor (passa a ser undefined o preco)

console.log('Informação sobre o produto: ',produto)

produto.preco=null // mais apropriado

console.log('Informação sobre o produto: ',produto)

console.log(produto.preco,'--->', !!produto.preco)


console.log('--------------')

const k = {name:'luci'}
console.log(k)

const l = k

console.log(k,l)

// se eu mudar um ou outro, vai mduar os 2 ATRIBUICAO POR REFERENCIA

l.name = 'Jonas'

console.log(k,l)


/**
 * k.name 
 * k = {name:'ddedde}
 */

 console.log('-------')


let po = 3
let pa = po

console.log('pa: ',pa)
console.log('po: ',po)


pa++

console.log('-------')

console.log('pa: ',pa)
console.log('po: ',po)

// se eu mudar um ou outro,não muda pros 2 pois é copia, são independentes. ATRIBUICAO POR VALOR

console.log('-------')



const peso1 = Number('1.0');
const peso2 = Number('2.0');
console.log('Peso: 1', typeof peso1, '---> ', peso1, 'Inteiro---> ', Number.isInteger(peso1))
console.log('Peso: 2', typeof peso2, '---> ', peso2, 'Inteiro---> ', Number.isInteger(peso2))

const nota1 = 9.871
const nota2 = 6.871

const media = ((peso1 * nota1)+(peso2 * nota2))/(peso1+peso2)
console.log('----------------------------- \nnota 1: ',nota1, ' | nota 2: ', nota2, '\npeso1: ', peso1, ' | peso2: ', peso2,'\n-----------------------------\nmedia: ',media.toFixed(2), '\n---------------------')

const numeroQ = 6

console.log(numeroQ,' em binario: ', numeroQ.toString(2))

console.log(typeof media)
console.log(Number)

console.log('----- NUMERO CUIDADOS-------')

console.log('tipo infinito --->', (7/0))

console.log("exemplo de tipagem fraca---> ('10'/2) =  ", '10'/2)

console.log((parseFloat(2.82) + parseFloat(4.79)).toFixed(2)) /**parseFloat é adequado para valores quabrados */
console.log((parseInt(1.9) + parseInt(1.9)).toFixed(2)) /**parseInt arredonda p valor inteiro ignorando o float (_.float) */




