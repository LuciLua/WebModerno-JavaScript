function rand([min = 0, max = 1000]){
    if (min>max) [min,max] = [max,min] //se o min for maior q o max inverta as variaveiss
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([50])) // um ja esta definido
console.log(rand([,50])) //entre 0 e 50
console.log(rand([])) //mantendo os valores iniciais definidos no inicio da function

// console.log(rand())  não da pois n le undefined 
