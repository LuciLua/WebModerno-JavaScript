function maiorIgual(numA, numB){
if(typeof numA != typeof numB){
    return false
}

return numA >= numB

}

console.log(maiorIgual(0, 0)) // retornará true
console.log(maiorIgual(0, "0")) // retornará false
console.log(maiorIgual(5, 1)) // retornará true
console.log(maiorIgual('5', '10'))