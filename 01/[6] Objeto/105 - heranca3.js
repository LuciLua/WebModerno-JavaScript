const pai = {nome: 'pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) //criou um objeto novo tendo como prototipo o objeto pai

console.log(filha1.nome) //antes

filha1.nome = 'Ana'
console.log(filha1.nome) //depois



const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

console.log('-----')

for (let key in filha2){
    // console.log(key)
    filha2.hasOwnProperty(key) ? //maneira de descobrir se veio do proprio objeto ou veio por herança
    console.log(key, ':' ,filha2[key]) :
    console.log(`Por herança: ${key}: ${filha2[key]}`)
}

console.log('-----')

filha1.corCabelo = 'marrom'


for (let key in filha1){
    // console.log(key)
    filha1.hasOwnProperty(key) ? //maneira de descobrir se veio do proprio objeto ou veio por herança
    console.log(key, ':' ,filha1[key]) :
    console.log(`Por herança: ${key}: ${filha1[key]}`)
}