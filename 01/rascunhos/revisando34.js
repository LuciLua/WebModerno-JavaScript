const frutas = ['uva', 'maçã', 'pera', 'banana']
console.log('array:', frutas)

console.log('-------SLICE-----------')

console.log('slice: ',frutas.slice(1,3)) // maça e pera (entre o indice 1 e 3, contando com o 1: ou seja: 1 e 2 )

console.log('--------INCLUDES----------')

console.log('includes: ', frutas.includes('maçã')) // encontrar elemento no array (retorna true ou false)

console.log('------Exemplo includes------')

function seTem(fruta){
    if (frutas.includes(fruta) == true){
        console.log(`Temos ${fruta}!`)
    } else{
        console.log(`Não temos ${fruta}...`)
    }
}

seTem('banana')
seTem('abacaxi')

console.log('--------MAP----------')

console.log('map: ', frutas.map(fruta => 'fruta:' + fruta)) // retorna todos , e adiciona/modifica algo...

console.log('---------FILTER---------')

console.log(frutas.filter(fruta => fruta.length == 4))//filtragem..apenas frutas com 4 letras.. nao retorna todas como no map

console.log('---------SHIFT E POP---------')

console.log(frutas.shift()) // exclui primeiro elemento (uva)
console.log(frutas)
console.log(frutas.pop()) // exclui o ultimo elemento (banana)
console.log(frutas) 

console.log('---------CONCAT---------')
frutas.concat('amora')
const frutas2  = frutas.concat('amora', 'abacaxi')

console.log('array oiginal: ', frutas)  // não acrescenta no Array original
console.log('array depois do concat: ', frutas2) // mas pode acrescentar em um novo array

console.log('---------SPLICE---------')

frutas.splice(2,1,'morango')// splice(x,y,z) => add no indice 'x' o elemento 'z' 'x' vezes
console.log('array oiginal: ', frutas)  
frutas.splice(0,1,'laranja') // se x estiver ocupado por outro elemento: substitui pelo novo
console.log('array oiginal: ', frutas)

console.log('---------FOREACH---------')

frutas.forEach(fruta => console.log('forEach:',fruta.replace('a', 'b'))) // passa por cada elemento e aplica alguma modificação; não modifica o array original.

frutas.forEach(fruta=>fruta.replace('a', 'n')) // não modifica array original
const outraVariavel = []
frutas.forEach(fruta=> outraVariavel.push(fruta.replace('a', 'n'))) //a não ser que armazene em outra variavel

console.log('Array original: ', frutas)
console.log('Outra variavel: ', outraVariavel)

console.log('---------FILL---------')

console.log(frutas.fill('abacate')) // substitui todos os elementos por '???alguma coisa???'
console.log(frutas) // MODIFICA O ARRAY ORIGINAL!

