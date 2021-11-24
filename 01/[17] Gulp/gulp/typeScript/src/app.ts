import { Carro, Vendavel } from './produto'

function exibir(v: Vendavel) { // parametro v, que é do tipo vendavel
    console.log(`${v.nome} custa ${v.preco}!`)
}

const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
exibir(c)