console.log('--------------------ARRAY----------------------');

const valores = [3,6,8,45,23];
console.log('const valores tem',valores.length, 'elementos ');

valores.push('v1', 'v2', 'v3');
console.log('Depois do push, adiciona, então agora const valores tem ',valores.length, 'elementos');

console.log('o ultimo valor  é:',valores.pop());

console.log('o ultimo valor agora é:',valores.pop());

console.log('------------------------------------------');

console.log('const valores tem',valores.length, 'elementos ');

console.log('Valor inicial de [2]:',valores[2]);
valores[2] = "changed2";
console.log('novo valor para [2]:',valores[2]);

console.log('------------------------------------------');

console.log('Quantos elementos restaram:',valores.length, '\nsendo eles: |', valores.join(' | '), '|');

console.log('------------------------------------------');

let v1 = 20;
let v2 = 2;
let arr = [];

console.log('valores:',v1,'|',v2,'|',arr);
arr.push(v1 * v2);
console.log('novo valor de let arr:',arr);

console.log('-------------------FIM ARRAY-----------------------\n');

console.log('----------------------BOOLEANS--------------------');

let isAtivo = false;
console.log('valor de isAtivo:',isAtivo)

isAtivo = true;
console.log('novo valor de isAtivo:', isAtivo);

console.log('------------------------------------------');

isAtivo = 10;

console.log('(2) novo valor de isAtivo:', isAtivo);

console.log('Com 1 exclamação (o que ele não é):',!isAtivo)
console.log('Com 2 exclamações (o que ele é): ',!!isAtivo)

console.log('------------------------------------------');

var valor = 1;

console.log('Existe algum valor verdadeiro:', !!('' || null || valor), '---->', ('' || null || valor))

var a = 5
var b = 1

let soma = a + b

const fix = 15

console.log('\nsoma: ',soma, '\nfix: ',fix,'\n')

console.log("entre soma e fix, se há verdadeiro, retorna primerio valor: ", soma || fix)

console.log("entre fix e soma, se há verdadeiro, retorna primerio valor: ", fix || soma)

console.log('-------------------FIM BOOLEANS-----------------------\n');

console.log('----------------------COMENTÁRIOS--------------------');

console.log(' --- /* */ --- ')

//retorna o 1º valor se os dois forem verdadeiros . ex: soma é true, logo vai retornar soma. mas se o fix tivesse antes retornaria fix

//comentario 1
/*
Comentário 2
*/

/*
 * comantário 3
 * com
 * co
*/

console.log('-------------------FIM COMENTÁRIOS-----------------------\n');

console.log('----------------------FUNÇÃO 2 PROX--------------------');






