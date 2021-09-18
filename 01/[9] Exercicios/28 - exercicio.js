function filtrarPorQuantidadeDeDigitos(array, quantidadeDigitos){
    let newArray =  []
    array.forEach(e => {
        if(String(e).length == quantidadeDigitos) newArray.push(e)
    })    
    console.log(newArray)
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]


function filtrarPorQuantidadeDeDigitos2(array, quantidadeDigitos){
    console.log(array.filter(e => String(e).length === quantidadeDigitos))
}

filtrarPorQuantidadeDeDigitos2([12,4,5,654,234,23,65,76,87], 2)