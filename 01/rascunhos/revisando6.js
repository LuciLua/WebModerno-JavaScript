const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5] = [{nome: 'luci', nota: 10}, {nome: 'pedro', nota: 7}, { nome: 'julia', nota: 6}, {nome: 'marcos', nota: 2}, { nome: 'sofia', nota: 9}]


Number.prototype.entre = function(start, end){
    return this >= start && this <= end
    // beetwen the start and the end
}

const printResult = function (nota){
    if(nota.entre(9,10)) {
        return('quadro de honra')
    }
    else if(nota.entre(7, 8.99)){
        return('Aprovado')
    }
    else if (nota.entre(4, 6.99)){
        return('Recuperação')
    }
    else if(nota.entre(0, 3.99)){
        return('Reprovado')
    }
    else{
        return('Nota Inválida')
    }

    console.log('Successful Operation')
}

console.log('----------------------------------')
console.log(
`Aluno: ${aluno1.nome.charAt(0).toUpperCase() + aluno1.nome.slice(1)}
Nota: ${aluno1.nota}
Situação: ${printResult(aluno1.nota)}`
)
console.log('----------------------------------')
console.log(
`Aluno: ${aluno2.nome.charAt(0).toUpperCase() + aluno2.nome.slice(1)}
Nota: ${aluno2.nota}
Situação: ${printResult(aluno2.nota)}`
)
console.log('----------------------------------')
console.log(
`Aluno: ${aluno3.nome.charAt(0).toUpperCase() + aluno3.nome.slice(1)}
Nota: ${aluno3.nota}
Situação: ${printResult(aluno3.nota)}`
)
console.log('----------------------------------')
console.log(
`Aluno: ${aluno4.nome.charAt(0).toUpperCase() + aluno4.nome.slice(1)}
Nota: ${aluno4.nota}
Situação: ${printResult(aluno4.nota)}`
)
console.log('----------------------------------')
console.log(
`Aluno: ${aluno5.nome.charAt(0).toUpperCase() + aluno5.nome.slice(1)}
Nota: ${aluno5.nota}
Situação: ${printResult(aluno5.nota)}`
)
console.log('----------------------------------')