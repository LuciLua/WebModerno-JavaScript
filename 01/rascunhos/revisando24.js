// inverter valores se um for maior ou outro

function inverte (min, max){
    if (min > max){
        min = min + max
        max = min - max
        min = min - max
        console.log('transformado min:',min,'max:', max)
    } else{
        console.log( 'min:',min, 'max:',max,)
    }
    
}

inverte(0, 100)
inverte(50, 10)