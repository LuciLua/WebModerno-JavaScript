function valorPagar(mes, valorAnuidade){
    
    let valorFixo = 100
    let AnuidadeFixaComMulta = valorAnuidade 
    let valorFinal = AnuidadeFixaComMulta + valorFixo

    const meses = [mes[1],mes[2],mes[3],mes[4],mes[5],mes[6],mes[7],mes[8],mes[9],mes[10],mes[11],mes[12]] = [null,'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    console.log('Mes: ', meses[mes])
    
    if (mes > 1){
        for (i = 0; i <= meses.indexOf(meses[mes-2]); i++){
            AnuidadeFixaComMulta  += (5/100)*valorAnuidade // anuidade = + 5% do valor da anuidade por mes depois de janeiro (pois é considerado atraso)
        }
    } else{
        console.log('janeiro não paga multa, portanto, apenas pagará o valor fixo da anuidade que é', valorAnuidade)
    }
    valorFinal = AnuidadeFixaComMulta + valorFixo
    console.log(`Valor: R$${valorFinal}`)
}

console.log('---------')

valorPagar(1,50)

console.log('---------')

valorPagar(4,50)

console.log('---------')

valorPagar(4,5) // mes 4 com multa de 5 por cento de 5 por 3 meses mais o 5 de anuidade 