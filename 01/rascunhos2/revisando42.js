const objetoFull = {
    nome: 'joana',
    sobrenome: 'Silva',
    mae: 'silvia',
    pai: 'Douglas'
}

const arrayFull = [
     'joana',
     'Silva',
     'silvia',
     'Douglas'
]

const StringFull = 'Ola, meu nome é Marta'


const { pai } = objetoFull

const [ nome ] = [arrayFull[0]]

const [ ...marta ] = [StringFull]



console.log(pai) // destructuring obj
console.log(nome) // destructuring array
console.log(marta) // destructuring string