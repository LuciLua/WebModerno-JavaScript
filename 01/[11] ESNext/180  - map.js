// no caso objeto
// chave valor
//obj:  a chave é apenas um literal, uma string

// no caso do map
// chave pode ser uma funcao
// um numero
// sendo um objeto
// maior flexibiliade


const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // metodo cedo de chamar 


console.log(tecnologias.get('react').framework) // objeto sendo retornado a partir do get

const chavesVariadas = new Map([
    [function(){  }, 'Função'], 
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})


console.log(chavesVariadas.has(123)) //has: funcao que diz se um elemnento esta ou nao contido dentro desse map


chavesVariadas.delete(123)

console.log(chavesVariadas.has(123))

// size: quantos elementos estao presentes dentro do map

console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(223, 'b')

console.log(chavesVariadas) // retonou valor 'b' pois nao se pode ter chaves duplicadas
// pode ter valores duplicados, mas chaves nao
