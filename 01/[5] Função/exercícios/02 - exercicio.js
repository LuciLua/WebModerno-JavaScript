function triangulo(ladoA, ladoB, ladoC){
    if (ladoA === ladoB &&  ladoB === ladoC){
        return 'Equilátero'
    }
    else if((ladoA === ladoC && ladoA != ladoB) || (ladoB === ladoC && ladoC != ladoA) || (ladoA === ladoB && ladoB != ladoC) ){
        return 'Isósceles'
    }
    else{
        return 'Escaleno'
    }
}
// saidas teste
console.log(triangulo(1,1,1)) //equilatero
console.log(triangulo(10,10,10))//equilatero
console.log('---------')
console.log(triangulo(1,10,1)) //isosceles
console.log(triangulo(10,10,1)) //isoceles
console.log(triangulo(10,11,11))//isoceles
console.log('---------')
console.log(triangulo(60,41,11))//escaleno
console.log(triangulo(6,41,11))//escaleno
