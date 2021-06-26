function planos(plano, salario){
    switch (plano){
        case 'A':
            newSalario = salario + ((10/100)*salario)
            console.log(`[Plano ${plano}] Novo salário do funcionário: R$${newSalario},00`)
            break
            case 'B':
            newSalario = salario + ((15/100)*salario)
            console.log(`[Plano ${plano}] Novo salário do funcionário: R$${newSalario},00`)
            break
            case 'C':
            newSalario = salario + ((20/100)*salario)
            console.log(`[Plano ${plano}] Novo salário do funcionário: R$${newSalario},00`)
            break
        default:
            console.log(`[Plano ${plano}] Este plano não existe`)
    }
}

planos('A', 1000)
planos('B', 1000)
planos('C', 1000)

planos('D', 1000)