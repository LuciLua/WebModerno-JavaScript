let notas = [2, 33, 35, 30, 67, 99 , 27, 45, 55, 58, 68]

let multiplosJa = []
let multiploDepois = []
let reprovados = []

for (let i in notas){
    if (notas[i] >= 40){
        if (notas[i] % 5 > 0){
            multiploDepois.push('[A] Nota arredondada: ' + (notas[i] + (5 - (notas[i] % 5))))
        }
        else{
            multiplosJa.push('[A] Nota exata: ' + notas[i])
        }
    }
    else{
        (reprovados.push('[R] Nota:' + notas[i]))
    }
}
console.log(`
--------------------------------
[A] - Aprovados | [R] Reprovados
--------------------------------
${multiplosJa.join('\n')}
--------------------------------
${multiploDepois.join('\n')}
--------------------------------
${reprovados.join('\n')}
--------------------------------
`)
