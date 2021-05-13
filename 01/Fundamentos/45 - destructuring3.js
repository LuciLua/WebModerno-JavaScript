// pode usar destructing usndo no ambito de uma função, como parametro de uma função


function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min  //valor aleatorio entre o minimo e o maximo
    return Math.floor(valor)
}



const obj = {max: 50, min: 40}


console.log(rand(obj))

console.log(rand({min: 955})) //max ja definido em cima (1000). min foi reatribuido

console.log(rand({}))

// console.log(rand())   ----> não dá pois nao consegue desestruturar ou undefined ou nulo

