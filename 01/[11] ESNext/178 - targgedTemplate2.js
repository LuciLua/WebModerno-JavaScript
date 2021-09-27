// controlar parser de uma template string a partir de uma funcao

function real(partes, ...valores){ // sempre começa a partir da parte
    // alterna entre parte e valor
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.', ',')}` // se nao for um numero retorne o proprio valor
        resultado.push(partes[indice], valor) // puxa intercalando
    })
    return resultado.join('')
}

const preco = 29.99
const parcela = 11
console.log(real`1x de ${preco} ou 3x de ${parcela}.`) 

