const pessoas = [
    {nome: 'Luci',
    idade: 20,
    brasileira: true,
    hobby: 'programar',
    ocupacao: 'Estudante'},
    {nome: 'Ana',
    idade: 31,
    brasileira: true,
    hobby: 'estudar',
    ocupacao: 'guitarrista'},
    {nome: 'Joe',
    idade: 12,
    brasileira: false,
    hobby: 'jogar bola',
    ocupacao: 'Estudante'},
    {nome: 'Vitoria',
    idade: 22,
    brasileira: true,
    hobby: 'Desenhar',
    ocupacao: 'Designer'},
    {nome: 'Pedro',
    idade: 21,
    brasileira: true,
    hobby: 'coletar sangue',
    ocupacao: 'enfermeiro'}
]

console.log(JSON.stringify(pessoas)) // para JSON

console.log(JSON.parse('{"nome": "Iago", "idade": 33, "nacionalidade": "russo", "hobby": "dançar", "ocupação": "carteiro"}')) // para OBJETO



pessoas.push(JSON.parse('{"nome": "Iago", "idade": 33, "brasileira": true, "hobby": "dançar", "ocupacao": "carteiro"}'))

console.log(JSON.stringify(pessoas))