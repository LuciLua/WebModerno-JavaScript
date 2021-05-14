//tabela verdade:
// se isso, ou se aquilo. ou isso ou aquilo

/**
 * operadores binarios
 * v e v -> v
 * v e f -> f
 * f e ? -> f
 * 
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 * 
 * 
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 *  
 * operadores unarios
 * !v -> f
 * !f -> v
 * 
 * && -> e
 * || -> ou
 * 
 */



// JavaScript suporta apenas 1 unico retorno

function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2  
    const comprarTv50 = trab1 && trab2
    // const comprarTv30 = !!(trab1 ^ trab2) //bitwise xor
    const comprarTv32 = trab1 != trab2 //diferença simulando OU exclusivo
    const saudavel = !comprarSorvete //operador unario

    return{comprarSorvete, comprarTv50, comprarTv32, saudavel} // conceito de objeto permaneca o mesmo, existe o chave valor so n esta aparecendo
}

console.log('se não conseguir nenhum trabalho:',(compras(false, false)))
console.log('se conseguir apenas 1 trabalho: ',(compras(false, true)))
console.log('se conseguir os 2 trabalhos',(compras(true, true)))
console.log('se conseguir apenas 1 trabalho: ',(compras(true, false)))


