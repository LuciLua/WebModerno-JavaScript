let notas = [2, 33, 35, 30, 67, 99 , 27, 45, 55, 58, 68, 38, 37]

let aprovados = []
let reprovados = []

function situacao (){
    for (let i in notas){
        if (notas[i] >= 38){
            if (notas[i] % 5 > 0){
                aprovados.push('[A] Nota: ' + (notas[i] + (5 - (notas[i] % 5))))
            } else{
                aprovados.push('[A] Nota: ' + notas[i])
            }
        } else{
            reprovados.push('[R] Nota: ' + notas[i])
        }
    }

var t = '--------------------------------'
console.log(`${t}\n[A] - Aprovados | [R] Reprovados\n${t}
${aprovados.join('\n')}\n${t}
${reprovados.join('\n')}\n${t}`)
}

 situacao()