const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! | ou seja, remove ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // tira da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //coloca no inicio
console.log(pilotos)


//splice pode adicionar e remover elementos dentro do array

pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1) //remove 1 elemento do indice 3
console.log(pilotos) // massa quebrou novamente kk

const algunsPilotos1 = pilotos.slice(2) //novo array gerado a partir desse motodo (a partir do indice 2)
console.log(algunsPilotos1)


const algunsPilotos2 = pilotos.slice(1, 4) // do 1 ate o 4 (sem contar com o 4)
console.log(algunsPilotos2)