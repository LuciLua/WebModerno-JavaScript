// for in percorre os atributos de uma determinada estrutura
/**
 * pode-se fazer por in em um objeto
 * pode-se fazer por in em um array
 * 
 * 
 * for in não te da o valor em si, mas o indice de cada um dos elementos,
 * como se fosse os atributos de um array
 * 
 * 
 */


const notas = [n1,n2,n3,n4,n5] = [6.7, 7.4, 9.8, 8.1, 7.7]

// para cada um dos elementos 'notas' ele devolve o indice 'i'

for (let i in notas){
    console.log(i,'-', notas[i])
    // recebe o indice e n a nota em si
}


const pessoas = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// atributos sao seus indices--> nome, sobrenome...

// mais interessante para obejtos, e n para arrays

// let importante para só fazer parte do escopo do for

for(let atributo in pessoas){
    console.log(`${atributo} = ${pessoas[atributo]}`)
}
