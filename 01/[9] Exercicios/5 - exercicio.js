function maiorIgual(numA, numB){
if(typeof numA != typeof numB){
    return false
}

return numA >= numB

}

console.log(maiorIgual(0, 0)) // retornarĂ¡ true
console.log(maiorIgual(0, "0")) // retornarĂ¡ false
console.log(maiorIgual(5, 1)) // retornarĂ¡ true
console.log(maiorIgual('5', '10'))