// Parametros e retornos no JS são opcionais
/**
 * 
 * 
 */

// na pratica, não é um função interessante
function area(width, height){
    const area = width * height
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))

//sem sentido mas funciona
console.log(area(2))
console.log(area())
console.log(area(1,2,3,4,5))
console.log(area(5,5))