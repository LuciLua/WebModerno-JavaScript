const func1 = () => ((Math.random() * 10).toFixed(0))
const func2 = () => ((Math.random() * 10).toFixed(0))


while (func1() != func2()){
    console.log('Ainda não...')
}

console.log('Successful Operation')

const media = (max,min) => {  var valor = Math.random() * (max - min) + min; return valor.toFixed(0)}


while (media(1,10) != 10){
    var aMedia = [media(1,10)]
    console.log(`AInda não: ${aMedia}`)
}

console.log('Successful Operation', aMedia.pop())



// apenas numeros acima de 10 ou 10
const bigNumbers = (value) => value >= 10;
var list = [12, 34, 666, 231, 1, 4, 11, 8, 10].filter(bigNumbers)
console.log(list)


// search
let list2 = ['megatubarao', 'bigsoneca', 'bigbola', 'megadente', 'supersaijim']
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(list2, 'mega')) 
console.log(filterItems(list2, 'big')) 