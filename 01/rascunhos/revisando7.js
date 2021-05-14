var contador = 100

function somar(contador){
    const valor = contador - 1
    return valor
}

while(contador !=10){
    console.log('contador: ', somar(contador))
    contador = somar(contador)
}

console.log('fim')


for(let i = 0; i <= 10; i++){
    console.log(`i = ${i}`)
}

const nomes = [n1,n2,n3,n4,n5,n6] = ['luci', 'pablo', 'leandro', 'marcella', 'ester', 'silvio']
const notas = [n1,n2,n3,n4,n5,n6] = [10, 4, 7, 9, 10, 2]

Number.prototype.entre = function(start, end){
    return this >= start && this <= end
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
}


for(let i = 0; i < nomes.length && notas.length; i++){
    console.log(`--------\nnome: ${nomes[i].charAt(0).toUpperCase() + nomes[i].slice(1)} \nnota: ${notas[i]} \nsituação: ${printResult(notas[i])}`)
}