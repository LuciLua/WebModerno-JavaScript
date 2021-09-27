// espalhar : spread
// juntar: rest

// operador: ...

// usar spread com objeto
const  funcionario = {nome: 'Mria', salario: 12348.99}
const clone = { ativo: true, ...funcionario } // pegando todos os atributos de funcionario e coloando no clone... espalhei todos os atributos de funcionario e coloquei em clone, usando o spread

console.log(funcionario)
console.log(clone)


// usar spread com array

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
// espalhando em um array todos os elementos de outro array
console.log(grupoA)
console.log(grupoFinal)

// ------

