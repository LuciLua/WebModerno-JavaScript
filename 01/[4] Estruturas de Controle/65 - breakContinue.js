/** 
 * break ---> nao influencia num bloco do tipo IF
 * influencia num switch, num laço for, e num laço while
 * 
 * continue ---> funciona dentro d eum laço for e 
 * dentro de um laço while
 * 
 * 
 * evitar usar
 * 
 * 
 * continue so faz sentindo agindo em cima de estruturas de repetição. pois ele para a repetição atual
 * e vai para a proxima
 * 
 *  */

const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if(x == 5) {
        // quando o indice é == 5, ele encontra o break e sai do laço
        break
        // break nao age no IF, mas vai agir perto da mais proximo dele (ou do tipo while, switch ou for)
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('-------')

for (y in nums){
    if(y==5) continue
    // continue não age num laço IF, vai agir no llaço mais proximo dele, do tipo for ou tipo while
    // interrompendo execução atual e vai para o proximo. NÃO SAI DO LAÇO, APENAS INTERROMPE
    console.log (`${y} = ${nums[y]}`)
}

console.log('-------')

// NAO USAR, MELHOR NAO

externo: //rotulo
for (a in nums){ // a sendo indice de nums
    for (b in nums){ // b sendo indice de nums
        if (a == 2 && b == 3){ break  externo} // se Par = 2,3 --> break o rotulo externo, e nao o interno, se tivesse so o break, pois só o break quebraria so o for mais proximo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')
