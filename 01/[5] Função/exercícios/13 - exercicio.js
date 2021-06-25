function diaUtilFeriado(dia){
    const calender = []

    const util = []
    const feriado = []

    for (let i = 1; i <= 31; i++){       
        calender.push(i)        
    }
    
    switch(dia){
        case 1: case 8: case 15: case 22: case 29:
            feriado.push('é feriado')
            break
        case 7: case 14: case 21: case 28:
            feriado.push('é feriado')
            break    
        default:
            util.push('é dia útil')
    }

    if (feriado != false){
        console.log(dia, feriado.join(' '))
    } else {
        console.log(dia, util.join(' '))
    }
}

// feriados

diaUtilFeriado(8)
diaUtilFeriado(7)

// util

diaUtilFeriado(2)
diaUtilFeriado(9)
diaUtilFeriado(10)
diaUtilFeriado(13)
diaUtilFeriado(16)
diaUtilFeriado(23)

