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

function letras (nome,idade){
    for (let  i = 0; i <= idade; i++){
        console.log(nome,i)
        for (let o = 0; o < nome.length; o++){
            console.log(nome.length, 'letras nome: ', nome, 'na posição :', i)

            for (let p = 0; p < 2; p++){
                console.log('test', p)
            }
        }
        console.log('------')
    }
}

letras('lu',5)