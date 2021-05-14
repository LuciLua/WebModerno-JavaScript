//conceito de nulo
// atribuição por valor e atribuição por referência


//---ATRIBUIÇÃO POR REFERENCIA --------
const a = { name: 'Luci' }
    // constante 'a' tem o endereço em que este objeto esta localizado, apontando
const b = a
    //endereço de 'b' é o mesmo que o 'a' ta apontando

b.name = 'Opa' //muda a partir da constante 'b'o atributo name de Luci para Opa

//a e b mesmo endereços
// a e b tem a referencia do objeto
//mudar de um ou de outro eles vao os dois sentir a diferença

//---ATRIBUIÇÃO POR REFERENCIA --------

//-----------------------------------------

//---ATRIBUIÇÃO POR VALOR --------

let c = 3
let d = c

d++ //incrementa 1 valor a unidade 'd'


console.log(c) // para valores tipo primitivos: faz copia por valor
    // copia do valor. mas valores sao idenpendentes. 
console.log(d)

//---ATRIBUIÇÃO POR VALOR --------