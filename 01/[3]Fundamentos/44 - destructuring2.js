// ----------------------destructing ------------------
//agora com array

const [n1, ,n3, ,n5, n6 = 84] = [1,3,4] // pulou n2 que seria o 3 e pulou o n4, n5 ja esta fora do array entao é undefined
// e o n6 existe pois foi atribuido antes

console.log(n1,n3,n5,n6) 


// array pode ter outros elementos do tipo array


// --------------------------------------


// array ignora o 1 elemento e dentro do segundo elemento ignoro o 1 elemento
const [, [, nota]] = [[9,10],[11,22,33,44, 55]]   //codigo de dificil leitura, geralmente n vou usar
console.log('sua nota é: ',nota)





