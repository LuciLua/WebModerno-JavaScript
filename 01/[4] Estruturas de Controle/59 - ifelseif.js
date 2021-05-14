// estrutura de if encadeada
// tem o swift tbm

Number.prototype.entre = function(start, end){
    return this >= start && this <= end
    // beetwen the start and the end
}

// encadeando condições atras da outra, entrando em apenas 1

const printResult = function (nota){
    if(nota.entre(9,10)) {
        return 'quadro de honra'
    }
    else if(nota.entre(7, 8.99)){
        return 'Aprovado'
    }
    else if (nota.entre(4, 6.99)){
        return 'Recuperação'
    }
    else if(nota.entre(0, 3.99)){
        return 'Reprovado'
    }
    else{
        return 'Nota Inválida'
    }
    console.log('Successful Operation')
}

    
    function mostrarNotasTurmaA(){
        
        const notas = [nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8] = [10, 7, 4, -1, 90, 6.99, 8.99, 9]

        console.log(`O aluno tirou ${nota1}, portando sua situação é: ${printResult(nota1)}`)
        console.log(`O aluno tirou ${nota2}, portando sua situação é: ${printResult(nota2)}`)
        console.log(`O aluno tirou ${nota3}, portando sua situação é: ${printResult(nota3)}`)
        console.log(`O aluno tirou ${nota4}, portando sua situação é: ${printResult(nota4)}`)
        console.log(`O aluno tirou ${nota5}, portando sua situação é: ${printResult(nota5)}`)
        console.log(`O aluno tirou ${nota6}, portando sua situação é: ${printResult(nota6)}`)
        console.log(`O aluno tirou ${nota7}, portando sua situação é: ${printResult(nota7)}`)
        console.log(`O aluno tirou ${nota8}, portando sua situação é: ${printResult(nota8)}`)
    }
    
    function mostrarNotasTurmaB(){
        
        const notas = [nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8] = [4, -7, 9, 10, 10, 7, 6.5, 1]

        console.log(`O aluno tirou ${nota1}, portando sua situação é: ${printResult(nota1)}`)
        console.log(`O aluno tirou ${nota2}, portando sua situação é: ${printResult(nota2)}`)
        console.log(`O aluno tirou ${nota3}, portando sua situação é: ${printResult(nota3)}`)
        console.log(`O aluno tirou ${nota4}, portando sua situação é: ${printResult(nota4)}`)
        console.log(`O aluno tirou ${nota5}, portando sua situação é: ${printResult(nota5)}`)
        console.log(`O aluno tirou ${nota6}, portando sua situação é: ${printResult(nota6)}`)
        console.log(`O aluno tirou ${nota7}, portando sua situação é: ${printResult(nota7)}`)
        console.log(`O aluno tirou ${nota8}, portando sua situação é: ${printResult(nota8)}`)
    }

console.log('\n-----------------Turma A-----------------\n')
mostrarNotasTurmaA()
console.log('\n-----------------Turma B-----------------\n') 
mostrarNotasTurmaB()







