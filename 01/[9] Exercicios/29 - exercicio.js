function segundoMaior(array){
    const newArray = array.sort((a, b) => a - b);// em ordem crescente
    console.log(newArray.reverse()[1]) // o 2 item da ordem decrescente 
    //sort sozinho não esta certo por causa da tabela unicode
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6


// outras solucoes

console.log('----')

function segundoMaior2(array){
    var maior = array[0]
    //encontrando o maior no array
    array.forEach(atual => atual > maior ? maior = atual : maior = maior) //assim ou
    // maior = Math.max(...array) // assim

    var indiceDoMaior = array.indexOf(maior) // onde maior esta no array

    array.splice(indiceDoMaior, 1) // tira o maior
    console.log(Math.max(...array)) // encontra e imprime o novo maior
}

segundoMaior2([12, 16, 1, 5]) // retornará 12
segundoMaior2([8, 4, 5, 6]) // retornará 6
