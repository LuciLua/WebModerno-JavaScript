function notasAluno(cod, notaA, notaB, notaC){
    
    const alunos = ['Luci','Pedro','Tais','Silvia']
    var codigos = [1, 2, 3, 4]

    switch(cod){ // define um nome de aluno para cada codigo
        case 1:
            alunos[0]
            break
        case 2:
            alunos[1]
            break
        case 3:
            alunos[2]
            break
        case 4:
            alunos[3]
            break        
    }
    
    const notas = [notaA, notaB, notaC]
    var mostrarNotas = ''

    var pesoMaiorNota = 4
    var pesoOutrasNotas = 3
    
    var maiorNota = 0
    
    let dividendo = 0
    let divisor = pesoMaiorNota + (2*pesoOutrasNotas)
    
    let mP = 0

    // se aluno estiver matriculado
    if (codigos.indexOf(cod) != -1){
        console.log(`[ ${cod} ] - ${alunos[cod]} - Aluno matriculado`)

        // gera nota das provas em um indice
        for (let i = 0; i < notas.length; i++){
            mostrarNotas += (`Prova ${i+1}: ${notas[i]}\n`)

            //verifica qual é a maior nota
            if (notas[i] > maiorNota){
                maiorNota = notas[i]
            }
        }

        notas.sort()
        dividendo = (maiorNota*pesoMaiorNota) + (notas[0]*pesoOutrasNotas) +  (notas[1]*pesoOutrasNotas) // Como capturar valores apenas que nao sao os maiores? Dessa forma o maior sempre teria que ficar na posição [0] e o restante nas proximas

        mP = dividendo/divisor 

        // aprovado ou não
        if (mP >= 5){
           var situacao = 'Aprovado'
        } else {
           var situacao = 'Reprovado'
        }

        console.log(`Situação: ${situacao}`)
        console.log(`Notas:\n${mostrarNotas}`)

        // console.log('dividendo: ',dividendo)
        console.log(`A média ponderada é: ${mP}`)

    } else{
        console.log(`[ ${cod} ] - Aluno não existe`)
    }
}

notasAluno(3, 4, 5, 7)