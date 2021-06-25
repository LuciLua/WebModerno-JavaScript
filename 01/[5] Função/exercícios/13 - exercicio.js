function DiaUtilFeriado(dia){
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

    if (calender.indexOf(dia) != -1){
        if (feriado != false){
            console.log(dia, feriado.join(' '))
        } else {
            console.log(dia, util.join(' '))
        }
    } else {
        console.log('Dia inválido')
    }
}

// feriados

DiaUtilFeriado(8)
DiaUtilFeriado(7)

// util

DiaUtilFeriado(2)
DiaUtilFeriado(9)
DiaUtilFeriado(10)
DiaUtilFeriado(13)
DiaUtilFeriado(16)
DiaUtilFeriado(23)

// Dias inválidos

DiaUtilFeriado(32)
DiaUtilFeriado(43)