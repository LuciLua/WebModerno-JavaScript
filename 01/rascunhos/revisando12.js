arrayNomes = ['luci', 'fabi', 'joao', 'nicol', 'cat', 'cintia', 'jeovana', 'filipe']

function imprimeNomes(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

arrayNomes.forEach(imprimeNomes)

// filter com arrow function, extraindo 
const nomeLetraMenorQueCinco = ( nome => nome.length < 5) 
const nomeLetraMaiorQueCinco = ( nome => nome.length > 5) 
// agora tenho função que posso reutilizar em outras partes do sistema
// const nomesCurtos = arrayNomes.filter(nomeLetraMenorQueCinco)

const nomesCurtos = arrayNomes.filter(nomeLetraMenorQueCinco).join('\n')
const nomesLongos = arrayNomes.filter(nomeLetraMaiorQueCinco).join('\n')
console.log(`\n----------\nNomes curtos:\n${nomesCurtos} \n--------`)
console.log(`\n----------\nNomes Longos:\n${nomesLongos} \n--------`)

