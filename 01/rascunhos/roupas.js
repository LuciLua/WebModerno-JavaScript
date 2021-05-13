const t = ('-----------------------------------')

console.log(t)
const roupas = ['camisa', 'calca', 'gravata', 'meia']
console.log('Peças de roupa: ', roupas)
console.log(t)

//objetos pecas
camisa = {}
calca = {}
gravata = {}
meia = {}

//precos para cada peca
camisa.preco = 23
calca.preco = 60
gravata.preco = 10
meia.preco = 5

//obejto cor + cores disponiveis 
cor = {}
cor.azul = 'blue'
cor.vermelha = 'red'
cor.preta = 'black'

//cor para cada peca
camisa.cor = [(cor.azul), (cor.vermelha), (cor.preta)]
calca.cor = [(cor.azul), null, (cor.preta)]
gravata.cor = [null, (cor.vermelha), (cor.preta)]
meia.cor = [(cor.azul), null, null]

//inserindo valores
console.log(roupas[0], ':', (camisa.preco), 'reais', '|', 'cores:', camisa.cor)
console.log(roupas[1], ':', (calca.preco), 'reais', '|', 'cores:', calca.cor)
console.log(roupas[2], ':', (gravata.preco), 'reais', '|', 'cores:', gravata.cor)
console.log(roupas[3], ':', (meia.preco), 'reais', '|', 'cores:', meia.cor)

console.log(t)

//0 para azul, 1 para vermelha, 2 para preta

//camisa
console.log('Tem camisa azul?', !!camisa.cor[0], '| Pois:', camisa.cor[0])
console.log('Tem camisa vermelha?', !!camisa.cor[1], '| Pois:', camisa.cor[1])
console.log('Tem camisa preta?', !!camisa.cor[2], '| Pois:', camisa.cor[2])

console.log(t)

//calca
console.log('Tem calca azul?', !!calca.cor[0], '| Pois:', calca.cor[0])
console.log('Tem calca vermelha?', !!calca.cor[1], '| Pois:', calca.cor[1])
console.log('Tem calca preta?', !!calca.cor[2], '| Pois:', calca.cor[2])

console.log(t)

//gravata
console.log('Tem gravata azul?', !!gravata.cor[0], '| Pois:', gravata.cor[0])
console.log('Tem gravata vermelha?', !!gravata.cor[1], '| Pois:', gravata.cor[1])
console.log('Tem gravata preta?', !!gravata.cor[2], '| Pois:', gravata.cor[2])

console.log(t)

//meia
console.log('Tem meia azul?', !!meia.cor[0], '| Pois:', meia.cor[0])
console.log('Tem meia vermelha?', !!meia.cor[1], '| Pois:', meia.cor[1])
console.log('Tem meia preta?', !!meia.cor[2], '| Pois:', meia.cor[2])

console.log(t)

console.log('Usando OU')

const trac = cor => cor.toUpperCase()

console.log(t)

//camisas
console.log(`camisas... Há alguma cor? ${!!(camisa.cor[0] || camisa.cor[1] || camisa.cor[2])} 
| Qual/quais? 
${trac(camisa.cor[0] || ' ___ ')}${trac(camisa.cor[1]|| ' ___ ')}${trac(camisa.cor[2]|| ' ___ ')}`)

console.log(t)

//calcas
console.log(`calcas... Há alguma cor? ${!!(calca.cor[0] || calca.cor[1] || calca.cor[2])} 
| Qual/quais? 
${trac(calca.cor[0] || ' ___ ')}${trac(calca.cor[1]|| ' ___ ')}${trac(calca.cor[2]|| ' ___ ')}`)

console.log(t)

//gravatas
console.log(`gravatas... Há alguma cor? ${!!(gravata.cor[0] || gravata.cor[1] || gravata.cor[2])} 
| Qual/quais?
${trac(gravata.cor[0] || ' ___ ')}${trac(gravata.cor[1] || ' ___ ')}${trac(gravata.cor[2] || ' ___ ')}`)

console.log(t)

//meais
console.log(`meias... Há alguma cor? ${!!(meia.cor[0] || meia.cor[1] || meia.cor[2])} 
| Qual/quais?
${trac(meia.cor[0]|| ' ___ ')}${trac(meia.cor[1] || ' ___ ')}${trac(meia.cor[2] || ' ___ ')}`)