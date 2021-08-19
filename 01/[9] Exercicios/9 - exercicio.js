function repetir(Element, numeroVezes){
    const result = []
    for(let i = 0; i < numeroVezes; i++){
        result.push(Element)
    }
    console.log(result)
}

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]




//resolution 2

function repetirD(item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetirD("código", 2)) // retornará ["código", "código"]
console.log(repetirD(7, 3)) // retornará [7, 7, 7]



// teste fill
const ola = ['oalsda']
let teste =  Array(3).fill(ola)
console.log(teste)