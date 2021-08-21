
function teste(array, buscar){
    console.log(array.filter(e => e == buscar))
}

const array = ['uva', 'maça', 'banana', 'pera', 'banana']
const buscar = 'banana'

teste(array, buscar)