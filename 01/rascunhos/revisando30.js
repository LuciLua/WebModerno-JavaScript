
function teste(array, buscar){
    console.log(array.filter(e => e == buscar))
}

const array = ['uva', 'maça', 'banana', 'pera', 'banana']
const buscar = 'banana'

teste(array, buscar)


function bool(numeros) {
    return numeros.filter((nome, indice) => {
        const nomeComL = nome === nome.toUpperCase() //boolean (todos maiusculos)
        const indice2 = indice%2 === 0  //boolean (APENAS COM INDICE PAR)
        const maiorque = nome.length > 5  //boolean (tem q ter mais de 5 caracteres)
        return maiorque && nomeComL && indice2 // so retorna se os 2 for true
    })
}

console.log(bool(['ola', 'nao', 'Lucia', 'asadasd', 'PARPARP']))
console.log(bool(['aaa', 'Lucia', 'AAA', 'nao', 'SIM', 'SEM INDICE PAR', 'COM INDICE PAR']))