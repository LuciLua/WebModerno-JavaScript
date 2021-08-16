function calcularSalario (qtHorasMes, qtRecebeHora){
    var salarioBruto = qtHorasMes*qtRecebeHora
    var salarioLiquido = (salarioBruto - salarioBruto*30/100).toFixed(2).replace('.',',')
    console.log(`Salário igual a R$${salarioLiquido}`)
}
calcularSalario(180, 60)