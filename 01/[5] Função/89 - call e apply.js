// função dentro de js é um tipo
// como tipo tem outra funções dentro dele

// formas diferentes de chamar uma função
//----------------------------------------------------
// a diferença entre o call e o apply é a forma que vc passa os parametros

function getPreco(imposto = 0, moeda = 'RS'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log('Preço do produto:',(produto.getPreco())) // chmanado func a partir de objeto usa produto como contexto

// --------------

const carro = {
    preco: 49990,
    desc: 0.20} // desconto de 20%
    
    console.log('Preço do carro:',(getPreco.call(carro)))
    
// --------------
    

//apply
    
console.log('Preço do carro:',(getPreco.apply(carro)))


// diferença: forma de apssar aprametros

// 1 contexto, depois os parametros
console.log(getPreco.call(carro, 0.17, '$'))


// contexto normal e paramentros em um array
console.log(getPreco.apply(carro, [0.17, '$']))