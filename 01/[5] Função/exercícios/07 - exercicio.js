function bhask(ax2 = 3, bx = -5, c = 12){
    var delta = (bx**2) - 4*ax2*c // calculo delta
    if (delta > 0){
        var x1 = ((-(bx)+(Math.sqrt(delta)))/(2*ax2)).toFixed(2) // calculo x1
        var x2 = ((-(bx)-(Math.sqrt(delta)))/(2*ax2)).toFixed(2) // calculo x2
        console.log(`delta: ${delta}\nx1: ${x1}\nx2: ${x2}`)
    }
    else{
        console.log(`Delta é negativo | ${delta}`)
    }  
}
bhask()