/*
 * Função executa um processo baseada numa sentença de codigo
 * Função define um bloco associado
 * (bloco: delimitado por chaves)
 * corpo da função: bloco, no qual tem toda a sentença de codigo
 * que sera executadas quando invocar a função
 * 
 * basicamente: função é um trecho de codigo que vc dá um nome
 * e pode reusar esse trecho de codigo onde quiser
 * 
 * função, recebe dados, parametros de entrada + passo-a-passo + retorna resultado
 * 
 * FUNÇÃO agrupa varias, uma sentença de codigo ou nenhuma; 
 * bloco de codigo nomeado
 * 
 */

const tr = '-------------------------'
    //funcao sem retorno
console.log(tr)
console.log('Funcao sem retorno')
console.log(tr)

function imprimirSoma(a, b) { //reparar: nao usei let, nem var, nem const
    console.log(a + b)
}

imprimirSoma(2, 3)

//nao funciona: imprimirSoma(2)
//funciona: imprimirSoma(2,3, 4,5 ,6

imprimirSoma(2, 3, 4, 5, 6)
imprimirSoma() //NaN

//funcao com retorno
console.log(tr)
console.log('Funcao com retorno')
console.log(tr)

function soma(a, b = 3) {
    return a + b
}

console.log(soma(4, 6))
console.log(soma(4))
console.log(soma()) //NaN pois primerio n foi tratado