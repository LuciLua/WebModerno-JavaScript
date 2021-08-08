const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false // pra funcao nao aparecer
})


console.log(quaseArray[0])
console.log(quaseArray.toString())

const arrayDeVerdade = ['Rafael', 'Ana', 'Bia']

console.log(arrayDeVerdade[0])
console.log(arrayDeVerdade)