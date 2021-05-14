/**
 * While também pode ser para quantidades determinadas
 * 
 */

var contador = 1

while(contador <=10){
    console.log(`contador = ${contador}`)
    contador++
}

/**  estrututa: 
 * 
 *  declaração de uma variavel: 
 * var contador = 1
 * 
 * expressão:
 * (contador <=10){
 * 
 * incremento:
 * contador++
 * 
 * */

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * for:
 * 
 * 1 parte: variavel
 * 
 * dividindo com ponto e virgula 
 * 
 * 2 parte: expressão 
 * 
 * dividino com ponte e virgula
 * 
 * 3 parte: incrmento
 * 
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

for(let i = 1; i<=10 ; i++ ){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
}