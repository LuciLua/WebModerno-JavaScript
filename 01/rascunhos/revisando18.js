function tab(tabuada, operador){
    function conta(tabuada){
        for (i = 0; i <= 10; i++){
            if (operador == 'x' || '*'){
                console.log(tabuada, 'x', i, '=', (tabuada * i))
            }
            if (operador == '+'){   
                console.log(tabuada, '+', i, '=', (tabuada + i))
            }
            if (operador == '-'){   
                console.log(tabuada, '-', i, '=', (tabuada - i))
            }
            if (operador == '/'){
                console.log(tabuada, '/', i, '=', (tabuada / i).toFixed(2))
            }
        }
    }
    conta(tabuada, operador)
}

tab(14, '*')


console.log('-----------')

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1, nota2, nota3)

    notas.sort((a,b) => a < b ? 1 : -1) // ???????

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}.
    Notas: ${nota1}, ${nota2}, ${nota3}.
    ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}
    Media final: ${mediaFinal}`)
}

calcularNotaFinal(123, 7, 4, 5)
calcularNotaFinal(123, 4, 7, 5)


function crescente(n1, n2,n3,n4, n5, n6){
    const array = []
    array.push(n1,n2,n3,n4,n5,n6)

    array.sort()

    console.log(array)
}

crescente(1,5,7,2,9,3)