// map
// associado ao map, existe dentro dele um laço que será executado
// map serve para fazer transformação no array
// mapear um array para um outro array do mesmo tamanho, so que com os dados transformados

// map => transformar um array em outro | mesmo tamanho


const nums = [1, 2, 3 ,4 , 5]

// map: For com proposito que faz transformação

//metodo que se apssa par ao map tem que ter retorno 
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

// map não transforma o array atual . ELE GERA UM NOVO ARRAY

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) //resultado transformado 3x



