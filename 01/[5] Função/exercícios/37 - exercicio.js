/**
 * an: termo que queremos calcular
    a1: primeiro termo da P.A.
    n: posição do termo que queremos descobrir
    r: razão
 */

function funcPA(n, a1, r){
    var soma = 0
    const pa = [a1]
    for (let i = 0; i < n; i++){
        pa.push(pa[i]+r)
        soma += pa[i]
    }
    console.log(pa, '\n', pa[n-1], 'está na', n, 'ª casa')
    console.log('soma: ', soma)
}

funcPA(10, 10, 15)

console.log('---------')

function funcPg(n, a1, r){
    const pg = [a1]
    for (let i = 0; i < n; i++){
        // pg.push(a1*(r**i))
        console.log(a1*(r**i))
    }
    var soma = (a1 * ((r**n)-1))/(r-1)
    console.log('soma: ', soma)
}
funcPg(10, 5, 3)
