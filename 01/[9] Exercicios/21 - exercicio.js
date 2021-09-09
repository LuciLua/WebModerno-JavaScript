function menorNumero(array){
    return array.reduce((anterior, atual) => anterior < atual ? anterior : atual) // so tem 1 return, logo vai retornar apenas o atual, sendo o atual sempre o menor, pois sempre vai pasar por ele.  
}

    

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15


const arrayEl = ['a', 'b', 'c', 'd', 'e']
console.log(arrayEl.reduce((ant, atu) => ant + 1 + atu)) 


// outras resolucaoes

function menorNumero2(numeros) {
    let menor = numeros[0]
    for (let i in numeros)
        if (numeros[i] < menor) // se o elementos 'X' for menor que o "menor" (primeiro elementos) defina "menor" para 'X'. ao contrario, se nao houver menor, o menor sera o primeiro
            menor = numeros[i]
    return menor
}

console.log(menorNumero2([10, 5, 35, 65])) // retornará 5
console.log(menorNumero2([5, -15, 50, 3])) // retornará -15



function menorNumero3(numeros) {
    return Math.min(...numeros);
}

console.log(menorNumero3([10, 5, 35, 65])) // retornará 5
console.log(menorNumero3([5, -15, 50, 3])) // retornará -15


const arrayNum = [20, 33, 24, 12, 98, 70]
console.log(Math.min(...arrayNum))
console.log(Math.max(...arrayNum))