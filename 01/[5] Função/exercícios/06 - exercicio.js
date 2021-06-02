/* J = C * i * t

 * j- juros
 * C - capital
 * i - taxa de juros
 * t - tempo de aplicação (mes , bimestre, ano..)
 */

/*
 * M = C + j

 * M - Montante final
 * C - capital
 * J - juros
 */ 

//--------------------------------------------------------------

// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e

function simples(capitalInicial, taxaJuros, tempoAplicacao){
    let montante = (capitalInicial * taxaJuros * tempoAplicacao) + capitalInicial
    return montante
}

console.log('(simples) montante: R$',(simples(1200, 0.02, 10).toFixed(2).replace('.',',')))


// retornará o valor da aplicação sob o regime de juros compostos.


/*
 * M = C * (1 + i) "elevado a t"

 * M - Montante
 * C - capital
 * i - taxa de juros
 * t - tempo
 */ 


function composto(capitalInicial, taxaJuros, tempoAplicacao){
    let montante = capitalInicial * (1 + taxaJuros)**tempoAplicacao
    return montante
}

console.log('(composto) montante: R$',(composto(1200, 0.03, 10).toFixed(2).replace('.',',')))