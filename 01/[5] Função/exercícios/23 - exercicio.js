function notasAluno(cod, notaA, notaB, notaC){

    const alunos = ['Luci','Pedro','Tais','Silvia']
    var codigos = [a1,a2,a3,a4] = [1, 2, 3, 4]

    var pesoMaiorNota = 4
    var pesoOutrasNotas = 3
    
    
    let divisor = pesoMaiorNota + (2*pesoOutrasNotas)
    let dividendo = 0
    
    var maiorNota = 0
   
    let mP = 0

    const notas = [notaA, notaB, notaC]
    
    // se aluno estiver matriculado
    if (codigos.indexOf(cod) != -1){
        console.log('[',cod,'] Aluno matriculado')

        // gera nota das provas em um indice
        for (let i = 0; i < notas.length; i++){
            
            console.log(`Prova ${i+1}: ${notas[i]}`)

            //verifica qual é a maior nota
            if (notas[i] > maiorNota){
                maiorNota = notas[i]
            } 

            dividendo = (maiorNota*pesoMaiorNota) + (notas[0]*pesoOutrasNotas) +  (notas[2]*pesoOutrasNotas) // Como capturar valores apenas que nao sao os maiores?
        }
        
    
        mP = dividendo/divisor            
            
        console.log('dividendo: ',dividendo)
        console.log('A média ponderada é: ',mP)

    } else{
        console.log('[',cod,'] Aluno não existe')
    }

}


notasAluno(1, 4, 7, 5)
