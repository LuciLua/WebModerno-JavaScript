function areaDoTriangulo(b, h){
    let area = ((b*h)/2).toFixed(2)
    console.log(area)
}

areaDoTriangulo(10, 15) // retornará "75,00"
areaDoTriangulo(7, 9) // retornará "31,50"
areaDoTriangulo(9.25, 13.1) // retornará "60.59"