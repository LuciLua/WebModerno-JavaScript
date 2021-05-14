/* for tem 3 partes:
 * 1-> declaracao de variavel
 * 2-> condicao para que ele use esse bloco
 * 3-> incremento
 */

const tr = '--------------------------------------'
console.log(tr)
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log(tr)
for (var i = 10; i > 0; i--) {
    console.log(i)
}

function okei(a) {
    return (3)
}
console.log(tr)
    //var nao tem escopo de bloco, ou seja> i visivel dentro e fora do bloco
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i=', i)