const pessoas = (JSON.parse('[{"nome": "Luci", "idade": 20, "vacinado": false}, {"nome": "Ana", "idade": 19, "vacinado": true}, {"nome": "Matheus", "idade": 22, "vacinado": false}]'))
const getNome = e => e.nome
const getIdade = e => e.idade
const getStatus = e => e.vacinado


let result =  pessoas.map(getStatus)
console.log('Pessoas:', (pessoas.map(getNome)).length, 'Vacinadas:', pessoas.map(getNome).concat(pessoas.map(getStatus)))

