function calculadora(valorA, operador, valorB){
    switch(operador){
        case '-':
            result = valorA - valorB
            console.log(valorA, operador, valorB, '=', result)
            break
        case '+':
            result = valorA + valorB
            console.log(valorA, operador, valorB, '=', result)
            break
        case '*':
            result = valorA * valorB
            console.log(valorA, operador, valorB, '=', result)
            break
        case '/':
            result = valorA/valorB
            console.log(valorA, operador, valorB, '=', result)
            break
        default:
            console.log(operador, '=> Valores inválidos')
    }    
}

calculadora(65,'-',5) //60
calculadora(10,'+',2) //12
calculadora(5,'*',2) // 10
calculadora(10,'/',5) // 2
calculadora(5,'*+',2) // inválida