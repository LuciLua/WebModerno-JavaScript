// mais um tipo de laço for:
// For of

// for in => intera em cimade indice

// for of => intera em cima de valores

// pode ser usadao par aoperar em cima de set, array, map, string, obj...



//DIFERENÇA PRO IN: OF PERCORRE DIRETAMENTE OS VALORES

// INTERANDO EM CIMA DE UMA STRING
for(let letra of "Cod3r"){
    console.log(letra)
}

// INTERANDO EM CIMA DE UM ARRAY
const assuntosEcma = ['Map', 'Set', 'Promise']
for(let assunto of assuntosEcma){
    console.log(assunto)
}

// INTERANDO EM CIMA DE UM MAP

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

// Percorrendo so as chaves
for(let chave of assuntosMap.keys()){
    console.log('chave:', chave)
}

// Percorrendo so os valores
for (let valor of assuntosMap.values()){
    console.log('valor:', valor)
}

// Percorrendo as entradas
for(let [ch, vl] of assuntosMap.entries()){ // posso fazer desestructuring em chave valor
    console.log('Entries: ', ch,vl)
}

// PERCORRENDO UM SET 
const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    console.log('letra:', letra)
}





