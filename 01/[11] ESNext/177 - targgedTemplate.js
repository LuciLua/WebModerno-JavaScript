// tagged de template: processar template string atravez de uma funcao

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag`${aluno} está ${situacao}.`)