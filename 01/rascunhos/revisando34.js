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

// 2 param opcional: so busca a partir do index colocado

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

console.log('fill', frutas.fill('abacate')) // substitui todos os elementos por '???alguma coisa???'
console.log('Array original: ', frutas) // MODIFICA O ARRAY ORIGINAL!

//---------SPLICE---------
frutas.splice(0,1, 'morango')
frutas.splice(1,1,'pera')
//---------SPLICE---------

console.log('---------REDUCE---------')

console.log('reduce: ', frutas.reduce((acumulador, atual) => acumulador + '-' + atual + 'batata')) // não modifica array original
console.log('array original: ', frutas)

console.log('---------ToSTRING---------')

let nums = 30
console.log('toString: ' , nums.toString(8)) // converte em string, de base (param)  entre 2 e 36
console.log('ToString: ', frutas.toString()) // em string | não modifica o array original

console.log('---------global and case-insensitive---------')

// /,/g ... / / funciona como "" mas suporta g e gi
//g => global
//gi => case-sensitive: suporta letra maiuscula e minuscula na 'selecao do elemento da string'

const novo = frutas.toString()
console.log('global: ', novo.replace(/A/g, ''))
console.log('case-sensitive: ', novo.replace(/A/gi, ''))

console.log('---------INDEXOF---------')

console.log('indexOf: (morango)', frutas.indexOf('morango')) // revela posição da palavra do param. se não tiver retorna -1
console.log('indexOf: (ovo)', frutas.indexOf('ovo'))

console.log('---------LASTINDEXOF---------')

console.log('lastIndexOf: (pera)', novo.lastIndexOf('pera')) // onde comaça (param) na string 'x'
// pesquisa para traz, do final para o incicio

console.log('---------SEARCH---------')

console.log('search (pera): ', novo.search('pera')) //posicao do elemtno na string

/*
* O search()método não pode aceitar um segundo argumento de posição inicial.
* O indexOf()método não pode aceitar valores de pesquisa poderosos (expressões regulares).
*/

console.log('---------MATCH---------')

console.log('original: ', novo)
console.log('match (ra):', novo.match(/ra/g)) //localiza o (param) na string e cria um novo array com todos os (param) encontrados


console.log('---------STARTSWITH---------')

//começa com 
console.log('startsWith (morango) :', novo.startsWith('morango')) // true or false | true
console.log('startsWith (pera) :', novo.startsWith('pera')) // true or false | false
console.log('startsWith (pera) [8]:', novo.startsWith('pera', 8)) // true: a partir da posicao 8

console.log('---------ENDSWITH---------')

console.log('endswith:[default]', novo.endsWith('abacate')) // termina com (param)? true or false
console.log('length:', novo.length) // se tem 20 de tamanho
console.log('endswith: [0]',novo.endsWith('abacate', 0)) // não é na posicao [0] o inicio
console.log('endswith: [20]',novo.endsWith('abacate', 20)) // mas na [20] por padrao nesse exemplo

