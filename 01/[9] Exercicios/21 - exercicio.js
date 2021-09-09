function menorNumero(array){
    return array.reduce((anterior, atual) => anterior < atual ? anterior : atual) // so tem 1 return, logo vai retornar apenas o atual, sendo o atual sempre o menor, pois sempre vai pasar por ele.  
}

    

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15





const arrayEl = ['a', 'b', 'c', 'd', 'e']
console.log(arrayEl.reduce((ant, atu) => ant + 1 + atu)) 