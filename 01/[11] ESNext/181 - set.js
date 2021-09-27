// set é estrutura de conjunto
// nao indexada  (nao tem um indice associado)
// nao aceita repetição

// array é estrutura indexada
// objeto é estrutura indexada(com textos)


const times = new Set()
times.add('Vasco')
times.add('São Paulo')
// pode adiconar de forma encadeada
times.add('Palmeiras').add('Flamengo').add('Corinthians')

times.add('Vasco') // nao vai ser adicionado, pois nao aceita repeticao

console.log(times)
console.log('quantos elementos:', times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco')) // sensitive case

times.delete('Flamengo')
console.log(times.has('Flamengo'))


const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const setNomes = new Set(nomes)

console.log(setNomes)

